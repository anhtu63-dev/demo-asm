<template>
  <footer class="bg-dark text-light py-5">
    <div class="container">
      <div class="row">
        <!-- Column 1: About -->
        <div class="col-md-3 mb-4">
          <h5 class="mb-3">About Us</h5>
          <p>We are committed to providing the best gaming experience with high-quality products and excellent customer service.</p>
          <div class="social-links">
            <a href="#" class="text-light me-3"><i class="bi bi-facebook"></i></a>
            <a href="#" class="text-light me-3"><i class="bi bi-twitter"></i></a>
            <a href="#" class="text-light me-3"><i class="bi bi-instagram"></i></a>
          </div>
        </div>

        <!-- Column 2: Quick Links -->
        <div class="col-md-3 mb-4">
          <h5 class="mb-3">Quick Links</h5>
          <ul class="list-unstyled">
            <li><a href="#" class="text-light text-decoration-none">Home</a></li>
            <li><a href="#" class="text-light text-decoration-none">Products</a></li>
            <li><a href="#" class="text-light text-decoration-none">About Us</a></li>
            <li><a href="#" class="text-light text-decoration-none">Contact</a></li>
          </ul>
        </div>

        <!-- Column 3: Contact Info -->
        <div class="col-md-3 mb-4">
          <h5 class="mb-3">Contact Us</h5>
          <ul class="list-unstyled">
            <li><i class="bi bi-geo-alt me-2"></i> 123 Gaming Street, City</li>
            <li><i class="bi bi-telephone me-2"></i> (123) 456-7890</li>
            <li><i class="bi bi-envelope me-2"></i> info@gamingstore.com</li>
          </ul>
        </div>

        <!-- Column 4: Newsletter -->
        <div class="col-md-3 mb-4">
          <h5 class="mb-3">Newsletter</h5>
          <p>Subscribe to get special offers and updates</p>
          <div class="input-group mb-3">
            <input type="email" class="form-control" placeholder="Enter your email">
            <button class="btn btn-primary" type="button">Subscribe</button>
          </div>
        </div>
      </div>

      <!-- Copyright -->
      <div class="row mt-4">
        <div class="col-12 text-center">
          <hr class="bg-light">
          <p class="mb-0">© 2025 Gaming Store. All rights reserved.</p>
        </div>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.social-links a:hover {
  opacity: 0.8;
}

li {
  margin-bottom: 0.5rem;
}

hr {
  opacity: 0.2;
}
</style>