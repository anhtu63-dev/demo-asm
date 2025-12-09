<script setup>
</script>

<template>
  <div class="d-flex justify-content-center align-items-center vh-100 bg-light">
    <div class="card shadow p-4" style="width: 420px; border-radius: 12px;">
      <h3 class="text-center mb-3">AudioWolrd</h3>

      <div class="mb-3">
        <label class="form-label">Email</label>
        <input type="email" class="form-control" placeholder="Enter your email">
      </div>

      <div class="mb-3">
        <label class="form-label">Password</label>
        <input type="password" class="form-control" placeholder="Enter your password">
      </div>

      <button class="btn btn-primary w-100 mt-2">Log In</button>

      <div class="d-flex justify-content-between mt-3">
        <RouterLink to="/forgot-password" class="small">Forgot password?</RouterLink>
        <RouterLink to="/register" class="small">Create an account</RouterLink>
      </div>
    </div>
  </div>
</template>
