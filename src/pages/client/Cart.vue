<script setup>
import { ref, computed } from "vue";

// Dữ liệu mẫu
const products = [
  {
    id: 1,
    title: "Sony WH-1000XM6",
    description: "Tai nghe Bluetooth chụp tai Sony WH-1000XM6",
    price: 8990000,
    image:
      "https://cdn2.cellphones.com.vn/insecure/rs:fill:0:358/q:90/plain/https://cellphones.com.vn/media/catalog/product/s/o/sony-wh-1000xm6.jpg",
  },
  {
    id: 2,
    title: "Bose QuietComfort",
    description: "Tai nghe Bluetooth chụp tai Bose QuietComfort",
    price: 7990000,
    image:
      "https://cdn2.cellphones.com.vn/358x/media/catalog/product/t/a/tai-nghe-chup-tai-bose-quietcomfort-_10__1.png",
  },
];

// Giỏ hàng reactive, thêm checked
const cart = ref(
  products.map((p) => ({
    ...p,
    quantity: 1,
    checked: true, // mặc định chọn
  }))
);

// Checkbox chọn tất cả
const selectAll = ref(true);

// Watch selectAll để update từng item
const toggleSelectAll = () => {
  cart.value.forEach((item) => (item.checked = selectAll.value));
};

// Khi thay đổi một checkbox, cập nhật selectAll
const updateSelectAll = () => {
  selectAll.value = cart.value.every((item) => item.checked);
};

// Tăng/Giảm số lượng
const increaseQty = (item) => {
  item.quantity++;
};
const decreaseQty = (item) => {
  if (item.quantity > 1) item.quantity--;
};

// Xóa sản phẩm
const removeFromCart = (id) => {
  cart.value = cart.value.filter((item) => item.id !== id);
};

// Tổng tiền chỉ tính cho các sản phẩm được chọn
const cartTotal = computed(() =>
  cart.value
    .filter((item) => item.checked)
    .reduce((sum, item) => sum + item.price * item.quantity, 0)
);
</script>

<template>
  <div class="container my-4">
    <h3 class="mb-4">Your Cart</h3>

    <div v-if="cart.length === 0" class="text-center py-5">
      <h5 class="text-muted">Your cart is empty.</h5>
    </div>

    <div v-else>
      <!-- Select All -->
      <div class="form-check mb-3">
        <input
          class="form-check-input"
          type="checkbox"
          id="selectAll"
          v-model="selectAll"
          @change="toggleSelectAll"
        />
        <label class="form-check-label fw-bold" for="selectAll">
          Select All
        </label>
      </div>

      <div
        v-for="item in cart"
        :key="item.id"
        class="card cart-item mb-3 p-3 shadow-sm"
      >
        <div class="row align-items-center">
          <!-- Checkbox -->
          <div class="col-md-1 text-center">
            <input
              type="checkbox"
              class="form-check-input"
              v-model="item.checked"
              @change="updateSelectAll"
            />
          </div>

          <!-- Ảnh -->
          <div class="col-md-2">
            <img :src="item.image" :alt="item.title" class="img-fluid rounded" />
          </div>

          <!-- Thông tin -->
          <div class="col-md-4">
            <h5>{{ item.title }}</h5>
            <p class="text-muted small mb-1">{{ item.description }}</p>
            <p class="fw-bold">{{ item.price.toLocaleString() }}₫</p>
          </div>

          <!-- Số lượng -->
          <div class="col-md-3">
            <div class="d-flex align-items-center">
              <button class="btn btn-outline-secondary" @click="decreaseQty(item)">-</button>
              <span class="mx-3">{{ item.quantity }}</span>
              <button class="btn btn-outline-secondary" @click="increaseQty(item)">+</button>
            </div>
          </div>

          <!-- Xóa -->
          <div class="col-md-2 text-end">
            <button class="btn btn-danger" @click="removeFromCart(item.id)">
              Remove
            </button>
          </div>
        </div>
      </div>

      <!-- Tổng tiền -->
      <div class="text-end mt-4">
        <h4 class="fw-bold">
          Total: <span class="text-success">{{ cartTotal.toLocaleString() }}₫</span>
        </h4>
        <button class="btn btn-dark btn-lg mt-2">Proceed to Checkout</button>
      </div>
    </div>
  </div>
</template>

<style scoped>
.cart-item img {
  height: 100px;
  object-fit: cover;
}

.cart-item button {
  height: 35px;
  padding: 0 0.75rem;
}

.cart-item h5 {
  margin-bottom: 0.5rem;
}

.cart-item p {
  margin-bottom: 0.25rem;
}
</style>
