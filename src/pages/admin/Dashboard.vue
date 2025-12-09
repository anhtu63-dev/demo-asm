<script setup>
// Sample counts
const dashboardStats = [
  { id: 1, title: "Products", count: 24, icon: "bi-headphones" },
  { id: 2, title: "Categories", count: 6, icon: "bi-tags" },
  { id: 3, title: "Customers", count: 12, icon: "bi-people" },
  { id: 4, title: "Orders", count: 18, icon: "bi-bag" },
];

// Recent orders sample data
const recentOrders = [
  { id: 101, customer: "John Doe", date: "2025-11-15", total: "$199", status: "Pending" },
  { id: 102, customer: "Jane Smith", date: "2025-11-14", total: "$329", status: "Completed" },
  { id: 103, customer: "Mike Johnson", date: "2025-11-13", total: "$149", status: "Shipped" },
  { id: 104, customer: "Anna Brown", date: "2025-11-12", total: "$499", status: "Cancelled" },
];
</script>

<template>
  <div class="container-fluid py-3">
    <h3 class="fw-bold mb-4">Admin Dashboard</h3>

    <!-- Stats Cards -->
    <div class="row g-3 mb-4">
      <div v-for="stat in dashboardStats" :key="stat.id" class="col-md-3">
        <div class="card text-white bg-secondary h-100 shadow-sm">
          <div class="card-body d-flex align-items-center">
            <div class="me-3 display-6">
              <i :class="['bi', stat.icon]"></i>
            </div>
            <div>
              <h5 class="card-title mb-1">{{ stat.title }}</h5>
              <h3 class="fw-bold">{{ stat.count }}</h3>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- Recent Orders -->
    <div class="card shadow-sm border-0">
      <div class="card-header bg-primary text-white">
        <h5 class="mb-0">Recent Orders</h5>
      </div>
      <div class="table-responsive">
        <table class="table table-hover align-middle mb-0">
          <thead class="table-light">
            <tr>
              <th>Order ID</th>
              <th>Customer</th>
              <th>Date</th>
              <th>Total</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="order in recentOrders" :key="order.id">
              <td>{{ order.id }}</td>
              <td>{{ order.customer }}</td>
              <td>{{ order.date }}</td>
              <td>{{ order.total }}</td>
              <td>
                <span
                  :class="[
                    'badge',
                    order.status === 'Pending' ? 'bg-warning' :
                    order.status === 'Completed' ? 'bg-success' :
                    order.status === 'Shipped' ? 'bg-info' :
                    'bg-danger'
                  ]"
                >
                  {{ order.status }}
                </span>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

  </div>
</template>

<style scoped>
.card {
  border-radius: 10px;
  transition: transform 0.2s ease-in-out;
}

.card:hover {
  transform: translateY(-5px);
}

.bi {
  font-size: 2.5rem;
}
</style>
