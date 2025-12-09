<script setup>
const products = [
  {
    id: 1,
    title: "Sony WH-1000XM6",
    category: "Headphone",
    price: "$499",
    stock: 25,
  },
  {
    id: 2,
    title: "Bose QuietComfort",
    category: "Headphone",
    price: "$329",
    stock: 12,
  },
  {
    id: 3,
    title: "Apple AirPods 4",
    category: "Earbuds",
    price: "$199",
    stock: 40,
  },
  {
    id: 4,
    title: "JBL Tour Pro 3",
    category: "Earbuds",
    price: "$149",
    stock: 18,
  },
];
</script>

<template>
  <div class="container-fluid py-3">
    <!-- Title + Button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Product Management</h3>
      <button class="btn btn-primary">+ Add Product</button>
    </div>

    <!-- Search & Filter -->
    <div class="card p-3 mb-3 shadow-sm border-0">
      <div class="row g-3">
        <div class="col-md-4">
          <input
            type="text"
            class="form-control"
            placeholder="Search by product name..."
          />
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected disabled>Filter by Category</option>
            <option>Headphone</option>
            <option>Earbuds</option>
            <option>Gaming</option>
          </select>
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected disabled>Sort by</option>
            <option>Name (A → Z)</option>
            <option>Name (Z → A)</option>
            <option>Price (Low → High)</option>
            <option>Price (High → Low)</option>
          </select>
        </div>
        <div class="col-md-2">
          <button class="btn btn-dark w-100">Search</button>
        </div>
      </div>
    </div>

    <!-- Product Table -->
    <div class="card shadow-sm border-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Product</th>
              <th>Category</th>
              <th>Price</th>
              <th>Stock</th>
              <th style="width: 150px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="p in products" :key="p.id">
              <td>{{ p.id }}</td>
              <td>{{ p.title }}</td>
              <td>{{ p.category }}</td>
              <td>{{ p.price }}</td>
              <td>
                <span
                  :class="[
                    'badge',
                    p.stock > 20
                      ? 'bg-success'
                      : p.stock > 10
                      ? 'bg-warning'
                      : 'bg-danger',
                  ]"
                >
                  {{ p.stock }}
                </span>
              </td>
              <td>
                <!-- View button -->
                <button class="btn btn-sm btn-outline-secondary me-1">
                  <i class="bi bi-eye me-1"></i>
                </button>

                <!-- Edit button -->
                <button class="btn btn-sm btn-outline-primary me-1">
                  <i class="bi bi-pencil-square me-1"></i>
                </button>

                <!-- Delete button -->
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
