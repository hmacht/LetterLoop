# 🔴 Welcome Looper Devs 🔴

[LetterLoop](https://theletterloop.com) is a morning word game. Find two 5-letter
words that make the loop — the words share their first and last letters.

Built with SvelteKit and Firebase.

## Architecture

The browser holds an identity and renders. It does not hold data.

```
src/lib/models/          Domain types shared by both sides
src/lib/utils/           Pure helpers (day keys, durations, loop shape)

src/lib/server/          Server-only — SvelteKit refuses to bundle this for the client
  firebase.admin.ts        Admin SDK singletons
  auth.ts                  Verifies the caller's Firebase ID token
  repositories/            Data access only (Firestore / Realtime Database)
  services/                Business logic — the rules of the game

src/routes/api/          Controllers: thin HTTP handlers over the services

src/lib/services/        Client services — the browser's only route to the API
src/lib/stores/          Client state
src/lib/components/      Views
```

The rule of thumb: **controllers parse, services decide, repositories store.**
A route handler should read like a sentence and contain no logic worth testing.

### Why the clock lives on the server

A completion time is always `serverNow - run.startedAt`, computed in
`gameService`. The browser's timer is display only. Three things make that
meaningful, and all three are required:

1. **`/api/game/start` is the only way to get the puzzle.** It stamps a start
   time in `runs/{dayKey}_{uid}` and hands back the scrambled letters. Starting
   is idempotent — refreshing the page resumes the same run instead of resetting
   the clock.
2. **The answer never reaches the browser.** `/api/puzzle/today` returns the
   letter bank but not the ordering. Guesses are checked by
   `/api/game/guess`, server-side, against the day's solutions and the
   dictionary. (The letters themselves are unavoidably public — they *are* the
   puzzle. The ordering is the part being asked for.)
3. **Clients cannot write.** `firestore.rules` and `database.rules.json` deny
   the browser everything. The Admin SDK bypasses rules; nothing else gets in.
   Without this, a cheater ignores the timer and writes their own score.

What this deliberately does not solve: someone can still load the puzzle, solve
it on paper, and only then press start. That is unfixable in principle — the
server can only measure the gap between handing out letters and receiving an
answer. Runs faster than `MIN_PLAUSIBLE_SECONDS` are flagged, and each player
gets one run per day.

### Day boundaries

Every day key is `MM-DD-YYYY` resolved in **one fixed timezone**
(`GAME_TIMEZONE` in `src/lib/utils/gameDate.ts`), never the visitor's local
timezone. This matters: local-timezone keys mean players in different regions
get different puzzles, and anyone can change their system clock for a second
attempt.

## Getting set up

### 1. Install

```bash
npm install
cp env-outline .env
```

Fill in the four `PUBLIC_FIREBASE_*` values from
Firebase console → Project settings → Your apps → SDK setup and config.

Those four are public by design — the browser has to send them to reach your
project, so they are visible in devtools regardless. Security comes from the
security rules and from the server verifying ID tokens. The **server** also
needs a service-account key, which *is* secret; see step 2.

> Node 20 LTS is the safe choice. Newer versions generally work, but Vite 5 and
> SvelteKit 2 predate them.

### 2. Pick how you want to run it

**Option A — emulators (recommended).** No credentials, no risk of writing to
production. Requires a Java runtime and the Firebase CLI:

```bash
brew install --cask temurin        # Java, needed by the emulators
npm install -D firebase-tools

npm run emulators                  # terminal 1
npm run seed                       # terminal 2 — a week of playable puzzles
npm run dev:local                  # terminal 3 — http://localhost:5173
```

`npm run dev:local` points both the browser and the server at the emulator
suite. The emulator UI is at http://localhost:4000.

**Option B — against the real project.** The server needs Admin credentials:

```bash
gcloud auth application-default login
npm run dev
```

> ⚠️ This reads and **writes production data**: playing a game increments the
> live daily stats and your real profile. Use the emulators for anything
> involving game results.

Also make sure **Anonymous** sign-in is enabled in the Firebase console. Every
visitor needs an identity, because runs are keyed by uid.

### 3. Checks

```bash
npm run check      # svelte-check — should report 0 errors
npm run build
```

## API

| Method | Route | Auth | Purpose |
| --- | --- | --- | --- |
| `GET` | `/api/puzzle/today` | none | The day's letters, without the answer |
| `POST` | `/api/game/start` | signed in | Start/resume the timed run |
| `GET` | `/api/game/state` | signed in | Current run, or null |
| `POST` | `/api/game/guess` | signed in | Check an answer; ends the run if correct |
| `POST` | `/api/game/give-up` | signed in | End the run without solving |
| `GET` | `/api/stats/today` | none | Daily aggregate stats |
| `GET` | `/api/profile` | signed in | The caller's own profile |
| `POST` / `PATCH` | `/api/profile` | account | Create / rename |
| `GET` | `/api/leaderboard/all-time` | none | Top loopers by games played |
| `GET` / `POST` | `/api/admin/loops` | admin | The puzzle schedule |
| `GET` | `/api/admin/words` | admin | Word suggestions for the generator |

All routes take the caller's Firebase ID token as `Authorization: Bearer <token>`;
`src/lib/services/apiClient.ts` attaches it automatically. "account" means a
registered user — anonymous visitors are rejected.

## Deploying

Server routes need a real adapter and Admin credentials.

- **Firebase App Hosting** (`firebase.json` already has `frameworksBackend`):
  credentials come from Application Default Credentials automatically.
- **Vercel / Netlify:** set `FIREBASE_SERVICE_ACCOUNT_JSON` to the full
  service-account JSON, and swap `adapter-auto` for the platform's adapter.

Deploy the security rules alongside the app — they are what the anti-cheat
design rests on:

```bash
firebase deploy --only firestore:rules,database
```

## Contributing

- We have a bunch of issues open! Or open your own if you found a bug or have ideas.
- If you have any questions please ask in discussions.
- Follow user feedback on our subreddit: https://www.reddit.com/r/letterloop/
