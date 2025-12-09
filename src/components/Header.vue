<script setup lang="ts">
import { RouterLink } from "vue-router";
</script>

<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary">
    <div class="container-fluid">
      <RouterLink to="/" class="navbar-brand">AudioWorld</RouterLink>
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarSupportedContent"
        aria-controls="navbarSupportedContent"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link active" aria-current="page" to="/"
              >Home</RouterLink
            >
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/product">Product</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/category">Category</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/aboutus">About Us</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="nav-link" to="/contact">Contact</RouterLink>
          </li>
        </ul>
        <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <RouterLink class="nav-link" to="/cart">Cart</RouterLink>
          </li>
          <li class="nav-item">
            <RouterLink class="btn btn-outline-secondary ms-2" to="/login"
              >Log In</RouterLink
            >
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>
