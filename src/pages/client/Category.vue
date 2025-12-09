<script setup>
// Product category list
const categories = [
  {
    id: 1,
    name: "Over-ear Headphones",
    description: "Premium over-ear headphones from Sony, Bose, Sennheiser, and more.",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-wh-1000xm6.jpg",
  },
  {
    id: 2,
    name: "True Wireless Earbuds",
    description: "Compact, convenient, and modern — perfect for any on-the-go lifestyle.",
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/a/i/airpods-4-2.png",
  },
  {
    id: 3,
    name: "Gaming Headsets",
    description: "Immersive sound and clear microphone for the ultimate gaming experience.",
    image:
      "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/a/tai-nghe-bluetooth-chup-tai-bowers-wilkins-px8_9__1.png",
  },
  {
    id: 4,
    name: "Audio Accessories",
    description: "Charging cables, cases, adapters — enhance your audio experience.",
    image:
      "https://cdn2.cellphones.com.vn/358x/media/catalog/product/h/u/hub-chuyen-doi-ugreen-usb-c-to-usb-a-2-0-usb-a-3-0-hdmi-pd-ho-tro-4k-15495-2_1.png",
  },
];
</script>

<template>
  <div class="d-flex justify-content-between align-items-center mt-3 mb-2">
    <h4>All Categories</h4>
  </div>

  <div class="container py-2">
    <div class="row">
      <!-- Loop through categories -->
      <div v-for="category in categories" :key="category.id" class="col-md-3 mb-4">
        <div class="card h-100">
          <img :src="category.image" class="card-img-top" :alt="category.name" />
          <div class="card-body d-flex flex-column">
            <h5 class="card-title">{{ category.name }}</h5>
            <p class="card-text flex-grow-1">
              {{ category.description }}
            </p>
            <a href="#" class="btn btn-outline-secondary w-100">View Products</a>
          </div>
        </div>
      </div>
    </div>
  </div>

  <!-- Card tĩnh -->
  <div class="container my-2">
    <div class="row">
      <!-- Card 1 -->
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <img
            src="https://images.unsplash.com/photo-1574920162043-b872873f19c8?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1336"
            class="card-img-top"
            alt="Image 1"
          />
        </div>
      </div>

      <!-- Card 2 -->
      <div class="col-md-6 mb-4">
        <div class="card h-100">
          <img
            src="https://plus.unsplash.com/premium_photo-1721133308123-aaf555df36ba?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1170"
            class="card-img-top"
            alt="Image 2"
          />
        </div>
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
.card {
  transition: transform 0.2s ease-in-out;
  border: none;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.card:hover {
  transform: translateY(-5px);
}

.card-img-top {
  height: 200px;
  object-fit: cover;
  object-position: center;
  background-color: #f8f9fa;
}

.card-body {
  padding: 1.25rem;
}

.card-title {
  font-size: 1.1rem;
  margin-bottom: 0.75rem;
}

.card-text {
  font-size: 0.9rem;
  margin-bottom: 0.5rem;
}

.btn-outline-success {
  transition: all 0.2s ease-in-out;
  margin-top: auto;
}

.btn-outline-success:hover {
  transform: scale(1.03);
}

/* Responsive */
@media (max-width: 768px) {
  .col-md-3 {
    padding-left: 8px;
    padding-right: 8px;
  }

  .card-img-top {
    height: 160px;
  }
}
</style>
