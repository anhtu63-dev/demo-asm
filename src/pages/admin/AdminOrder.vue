<script setup>
// Sample order data
const orders = [
  { id: 101, customer: "John Doe", date: "2025-11-15", total: "$499", status: "Pending" },
  { id: 102, customer: "Jane Smith", date: "2025-11-14", total: "$329", status: "Completed" },
  { id: 103, customer: "Alice Johnson", date: "2025-11-13", total: "$199", status: "Cancelled" },
  { id: 104, customer: "Bob Williams", date: "2025-11-12", total: "$149", status: "Processing" },
];
</script>

<template>
  <div class="container-fluid py-3">

    <!-- Title + Button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Order Management</h3>
      <button class="btn btn-primary">+ Add Order</button>
    </div>

    <!-- Search & Filter -->
    <div class="card p-3 mb-3 shadow-sm border-0">
      <div class="row g-3">
        <div class="col-md-4">
          <input type="text" class="form-control" placeholder="Search by customer name or order ID..." />
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected disabled>Filter by Status</option>
            <option>Pending</option>
            <option>Processing</option>
            <option>Completed</option>
            <option>Cancelled</option>
          </select>
        </div>
        <div class="col-md-2">
          <button class="btn btn-dark w-100">Search</button>
        </div>
      </div>
    </div>

    <!-- Order Table -->
    <div class="card shadow-sm border-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
              <th style="width: 180px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in orders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.total }}</td>
              <td>
                <span :class="['badge', 
                  order.status === 'Pending' ? 'bg-warning' :
                  order.status === 'Processing' ? 'bg-info' :
                  order.status === 'Completed' ? 'bg-success' : 'bg-danger']">
                  {{ order.status }}
                </span>
              </td>
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
