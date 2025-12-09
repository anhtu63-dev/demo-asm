<script setup>
// Company / Brand info for Audio Products
const aboutInfo = {
  title: "About Us",
  subtitle: "Passionate About Sound",
  description: `
    Welcome to AudioWorld — your destination for high-quality headphones and audio accessories. 
    We are dedicated to bringing the best listening experience to music lovers, gamers, and tech enthusiasts alike.
  `,
  mission: `
    Our mission is to provide premium audio products that combine comfort, style, and superior sound quality. 
    Every product is carefully selected to ensure it meets the needs of our customers.
  `,
  vision: `
    We aim to be a trusted brand for all audio enthusiasts, 
    where innovation and exceptional sound come together to enhance your everyday listening experience.
  `,
  image:
    "https://images.ctfassets.net/javen7msabdh/7LnAJNBIO50M152qrVG0Te/0ff3d986c7ea09c678e7dca58598f01f/marshall-monitor-iii-anc-and-billie-joe-armstrong.png?w=2400&fm=avif&q=100",
};
</script>

<template>
  <div class="container py-5">
    <div class="row align-items-center">
      <!-- Text Section -->
      <div class="col-md-6">
        <h2 class="fw-bold mb-3">{{ aboutInfo.title }}</h2>
        <h5 class="text-muted mb-3">{{ aboutInfo.subtitle }}</h5>
        <p class="mb-3">{{ aboutInfo.description }}</p>

        <h5 class="fw-semibold mt-4">Our Mission</h5>
        <p>{{ aboutInfo.mission }}</p>

        <h5 class="fw-semibold mt-4">Our Vision</h5>
        <p>{{ aboutInfo.vision }}</p>

        <a href="/contact" class="btn btn-secondary mt-3">Contact Us</a>
      </div>

      <!-- Image Section -->
      <div class="col-md-6">
        <img :src="aboutInfo.image" alt="About Us" class="img-fluid rounded shadow" />
      </div>
    </div>
  </div>

  <!-- Why Choose Us Section -->
  <div class="container my-3">
    <div class="text-center mb-4">
      <h4 class="fw-bold">Why Choose AudioWorld?</h4>
      <p class="text-muted">We focus on premium sound, comfort, and customer satisfaction.</p>
    </div>
    <div class="row text-center">
      <div class="col-md-4 mb-3">
        <div class="p-3 border rounded shadow-sm h-100">
          <h5>High-Quality Sound</h5>
          <p>Experience crystal-clear audio with our top-notch headphones and earbuds.</p>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 border rounded shadow-sm h-100">
          <h5>Comfort & Design</h5>
          <p>Stylish, ergonomic designs for long-lasting comfort during every listen.</p>
        </div>
      </div>
      <div class="col-md-4 mb-3">
        <div class="p-3 border rounded shadow-sm h-100">
          <h5>Trusted Support</h5>
          <p>Our team is ready to help with any questions or assistance regarding our audio products.</p>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
img {
  max-height: 400px;
  object-fit: cover;
}

p {
  font-size: 0.95rem;
  color: #555;
}

h2, h4, h5 {
  color: #222;
}

.btn-success {
  background-color: #28a745;
  border: none;
  transition: 0.3s;
}

.btn-success:hover {
  background-color: #218838;
}

@media (max-width: 768px) {
  img {
    margin-top: 20px;
    max-height: 250px;
  }
}
</style>
