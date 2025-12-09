<script setup>
// Sample customer data
const customers = [
  { id: 1, name: "John Doe", email: "john@example.com", phone: "+1 234 567 890", status: "Active" },
  { id: 2, name: "Jane Smith", email: "jane@example.com", phone: "+1 987 654 321", status: "Inactive" },
  { id: 3, name: "Alice Johnson", email: "alice@example.com", phone: "+44 20 7946 0958", status: "Active" },
  { id: 4, name: "Bob Williams", email: "bob@example.com", phone: "+61 2 9876 5432", status: "Active" },
];
</script>

<template>
  <div class="container-fluid py-3">

    <!-- Title + Button -->
    <div class="d-flex justify-content-between align-items-center mb-3">
      <h3 class="fw-bold">Customer Management</h3>
      <button class="btn btn-primary">+ Add Customer</button>
    </div>

    <!-- Search & Filter -->
    <div class="card p-3 mb-3 shadow-sm border-0">
      <div class="row g-3">
        <div class="col-md-4">
          <input type="text" class="form-control" placeholder="Search by customer name..." />
        </div>
        <div class="col-md-3">
          <select class="form-select">
            <option selected disabled>Filter by Status</option>
            <option>Active</option>
            <option>Inactive</option>
          </select>
        </div>
        <div class="col-md-2">
          <button class="btn btn-dark w-100">Search</button>
        </div>
      </div>
    </div>

    <!-- Customer Table -->
    <div class="card shadow-sm border-0">
      <div class="table-responsive">
        <table class="table table-hover align-middle">
          <thead class="table-dark">
            <tr>
              <th>ID</th>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Status</th>
              <th style="width: 150px">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="c in customers" :key="c.id">
              <td>{{ c.id }}</td>
              <td>{{ c.name }}</td>
              <td>{{ c.email }}</td>
              <td>{{ c.phone }}</td>
              <td>
                <span :class="['badge', c.status === 'Active' ? 'bg-success' : 'bg-secondary']">
                  {{ c.status }}
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
