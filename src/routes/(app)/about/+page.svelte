<script lang="ts">
  import TextBlock from "$lib/components/TextBlock.svelte";

  let title = "Our Story"
  let content = `
  *Where I started.* Like every developer in their twenties, I've spent years racking my brain for the big app idea. I've built everything from social media platforms to financial tools, but nothing ever seemed to stick. On top of that, working full-time as a programmer while trying to bring these side projects to life is exhausting. I felt like a chef coming home after a long shift and still having to cook himself dinner. But still, I kept going.
  <br><br>
  *The spark.* My grandmother completes Wordle without fail every day. Sometimes it's 11:50 pm, and she'll run downstairs to her computer, saying in her sweet Irish accent, “I can't miss today's!” Sure enough, by 11:53 pm, she's done. And this is what I love about good ideas, they just come from around you and your life. This idea was right there — create a word game that my grandmother can play every day.
  <br><br>
  *LetterLoop is born.* The game is simple: two five-letter words that share the same first and last letter, forming a loop. I tested it on friends and coworkers using a piece of paper, and it was an instant hit. I quickly built a website, and within a few days, I had a link ready to send to my grandmother. She loved it. She told all her friends, brought it up at book club, bridge club — any event at all, she made sure people knew about my game. It wasn't long before it piqued the interest of my parents, and before I knew it, the entire town was playing.
  <br><br>
  *What's next?* Well, the game just kept growing, and now with over 50,000 total players and 3,000 weekly players, I've got a real product on my hands. It's strange to think that something I built for my grandmother is now making some random person's commute a little easier. Or maybe it will inspire another developer like me who gets stuck searching for an idea. Who knows what will come from this little game that keeps growing. But I do know this: I wouldn't have had any success if it weren't for my grandmother's unwavering love for Wordle — and me.
  `
</script>

<main>
  <TextBlock title={title} content={content} />
</main>