<script setup>
// Sample category data
const categories = [
  { id: 1, name: "Over-ear Headphones", description: "Premium over-ear headphones from top brands." },
  { id: 2, name: "True Wireless Earbuds", description: "Compact, modern, and convenient for on-the-go." },
  { id: 3, name: "Gaming Headsets", description: "Immersive sound and clear mic for gaming." },
  { id: 4, name: "Audio Accessories", description: "Cables, cases, adapters to enhance audio experience." },
];
</script>

<template>
  <div class="container-fluid py-3">

    <!-- Title + Button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Category Management</h3>
      <button class="btn btn-primary">+ Add Category</button>
    </div>

    <!-- Search & Filter -->
    <div class="card p-3 mb-3 shadow-sm border-0">
      <div class="row g-3">
        <div class="col-md-4">
          <input type="text" class="form-control" placeholder="Search by category name..." />
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected disabled>Sort by</option>
            <option>Name (A → Z)</option>
            <option>Name (Z → A)</option>
          </select>
        </div>
        <div class="col-md-2">
          <button class="btn btn-dark w-100">Search</button>
        </div>
      </div>
    </div>

    <!-- Category Table -->
    <div class="card shadow-sm border-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Category Name</th>
              <th>Description</th>
              <th style="width: 150px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in categories" :key="c.id">
              <td>{{ c.id }}</td>
              <td>{{ c.name }}</td>
              <td>{{ c.description }}</td>
              <td>
                <button class="btn btn-sm btn-outline-secondary me-1">
                  <i class="bi bi-eye me-1"></i>
                </button>
                <button class="btn btn-sm btn-outline-primary me-1">
                  <i class="bi bi-pencil-square me-1"></i>
                </button>
                <button class="btn btn-sm btn-outline-danger">
                  <i class="bi bi-trash me-1"></i>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<style scoped>
table th,
table td {
  vertical-align: middle;
}

.card {
  border-radius: 10px;
}
</style>
