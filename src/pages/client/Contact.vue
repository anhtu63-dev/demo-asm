<script setup>
import { ref } from "vue";

const form = ref({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const handleSubmit = () => {
  // Hiện tại chỉ log ra console, bạn có thể gửi lên API sau này
  console.log("Form submitted:", form.value);
  alert("Thank you! Your message has been sent.");
  // Reset form
  form.value = { name: "", email: "", subject: "", message: "" };
};
</script>

<template>
  <div class="container py-5">
    <div class="text-center mb-5">
      <h2 class="fw-bold">Contact Us</h2>
      <p class="text-muted">Have questions or need support? We are here to help!</p>
    </div>

    <div class="row">
      <!-- Contact Form -->
      <div class="col-md-6 mb-4">
        <form @submit.prevent="handleSubmit" class="p-4 border rounded shadow-sm">
          <div class="mb-3">
            <label for="name" class="form-label">Full Name</label>
            <input v-model="form.name" type="text" id="name" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="email" class="form-label">Email</label>
            <input v-model="form.email" type="email" id="email" class="form-control" required />
          </div>
          <div class="mb-3">
            <label for="subject" class="form-label">Subject</label>
            <input v-model="form.subject" type="text" id="subject" class="form-control" />
          </div>
          <div class="mb-3">
            <label for="message" class="form-label">Message</label>
            <textarea v-model="form.message" id="message" rows="5" class="form-control" required></textarea>
          </div>
          <button type="submit" class="btn btn-secondary w-100">Send Message</button>
        </form>
      </div>

      <!-- Contact Info & Map -->
      <div class="col-md-6">
        <div class="p-4 border rounded shadow-sm mb-4">
          <h5 class="fw-bold">Our Contact Info</h5>
          <p>Email: support@audioworld.com</p>
          <p>Phone: +1 234 567 890</p>
          <p>Address: 123 Audio Street, Music City, USA</p>
        </div>

        <div class="rounded shadow-sm overflow-hidden" style="height: 300px;">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.0196377117743!2d-122.41941548468208!3d37.77492927975854!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80858064c1b0f0d1%3A0x1d2f1c5c80e9db3d!2sMusic%20Street!5e0!3m2!1sen!2sus!4v1699431234567!5m2!1sen!2sus"
            width="100%"
            height="100%"
            style="border:0;"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
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
h2, h5 {
  color: #222;
}

p {
  font-size: 0.95rem;
  color: #555;
}

.btn-success {
  background-color: #28a745;
  border: none;
  transition: 0.3s;
}

.btn-success:hover {
  background-color: #218838;
}

form input, form textarea {
  border-radius: 5px;
}

@media (max-width: 768px) {
  iframe {
    height: 250px !important;
  }
}
</style>
