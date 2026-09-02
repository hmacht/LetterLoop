# 🔴 Welcome Looper Devs 🔴

[LetterLoop](https://theletterloop.com) is a morning word game. Find two 5-letter
words that make the loop — the words share their first and last letters.

Built with SvelteKit and Firebase.

## Getting set up

### 1. Install

```bash
npm install
cp env-outline .env
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

## Contributing

- We have a bunch of issues open! Or open your own if you found a bug or have ideas.
- If you have any questions please ask in discussions.
- Follow user feedback on our subreddit: https://www.reddit.com/r/letterloop/
