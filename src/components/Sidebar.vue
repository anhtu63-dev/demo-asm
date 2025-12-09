<template>
  <div class="sidebar bg-dark text-white">
    <h3 class="p-3 mb-3 border-bottom">AudioWolrd Admin Panel</h3>

    <ul class="nav flex-column">
      <li class="nav-item">
        <RouterLink to="/admin" class="nav-link text-white">Home</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/adminproduct" class="nav-link text-white">Product</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admincategory" class="nav-link text-white">Category</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/admincustomer" class="nav-link text-white">Customer</RouterLink>
      </li>
      <li class="nav-item">
        <RouterLink to="/adminorder" class="nav-link text-white">Order</RouterLink>
      </li>
    </ul>
  </div>
</template>

<style>
.sidebar {
  width: 240px;
  height: 100vh;
  position: fixed;
  left: 0;
  top: 0;
  padding-top: 20px;
}

.nav-link {
  padding: 12px 20px;
  font-size: 16px;
}

.nav-link:hover {
  background: rgba(255, 255, 255, 0.2);
}
</style>
