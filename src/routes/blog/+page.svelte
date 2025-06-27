<script lang="ts">
  const articles = [
    {
      title: "Brain Boost",
      subtitle: "Word Games Are the Brain Boost You Didn’t Know You Needed",
      href: "/blog/word-games-brain-boost"
    },
    {
      title: "New Morning Routine",
      subtitle: "Why Word Games Like LetterLoop Are the New Morning Routine",
      href: "/blog/letterloop-morning-routine"
    },
    {
      title: "World of Word Games",
      subtitle: "Exploring todays most popular word games",
      href: "/blog/world-of-word-games"
    },
    {
      title: "Why play word games?",
      subtitle: "Word games go beyond just fun",
      href: "/blog/why-play"
    },
  ];
</script>

<style>
  .blog-link {
    color: black;
  }

  .blog-title {
    font-size: 23px;
  }

  .blog-subtitle {
    font-size: 18px;
    color: rgb(86, 86, 86)
  }
</style>

<main class="centered-container full-height-container">
  <div class="text-left">
    <br><br>
    <p class="title-lg">Our Little Loop Blog 🏄‍♀️</p>
    <br>
    

    <ul class="space-y-5">
      {#each articles as { title, subtitle, href }}
        <li>
          <a href={href} class="blog-link">
            <div>
              <p class="blog-title">{title}</p>
              <p class="blog-subtitle">{subtitle}</p>
            </div>
          </a>
          <br>
          <hr>
        </li>
      {/each}
    </ul>
  </div>
  
</main>
