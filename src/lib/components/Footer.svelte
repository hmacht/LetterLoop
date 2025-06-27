<style>
  .footer-container {
    background-image: linear-gradient(to bottom, #FF4F87, #FC2F4F);
  }

  .footer-link,
  .social-icon {
    color: white;
    transition: opacity 0.2s ease-in-out;
  }

  .footer-link:hover,
  .social-icon:hover {
    opacity: 0.75;
  }

  .social-icon {
    font-size: 1.2rem;
  }
</style>

<footer class="footer-container text-white py-6 w-full">
  <div class="w-full px-4 sm:px-6">
    <div class="max-w-7xl mx-auto flex flex-col gap-4 sm:flex-row justify-between items-center">
      <!-- Left: Copyright + Links -->
      <div class="flex flex-col items-center sm:items-start gap-2 text-sm text-center sm:text-left">
        <div>&copy; {new Date().getFullYear()} theLetterLoop. All rights reserved.</div>
        <nav class="flex gap-4">
          <a href="/how-to-play" class="footer-link">How to Play</a>
          <a href="/about" class="footer-link">About Us</a>
          <a href="/blog" class="footer-link">Blog</a>
        </nav>
      </div>

      <!-- Right: Social Icons -->
      <div class="flex gap-5">
        <a href="https://www.threads.com/@henrymacht" class="social-icon" target="_blank" rel="noopener" aria-label="Twitter">
          <i class="fa-brands fa-threads"></i>
        </a>
        <a href="https://www.instagram.com/theletterloop" class="social-icon" target="_blank" rel="noopener" aria-label="Instagram">
          <i class="fab fa-instagram"></i>
        </a>
        <a href="https://www.tiktok.com/@theletterloop" class="social-icon" target="_blank" rel="noopener" aria-label="Facebook">
          <i class="fa-brands fa-tiktok"></i>
        </a>
        <a href="mailto:theletterloop@gmail.com" class="social-icon" aria-label="Email">
          <i class="fas fa-envelope"></i>
        </a>
      </div>
    </div>
  </div>
</footer>
