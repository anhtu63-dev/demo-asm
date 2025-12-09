import { createRouter, createWebHistory } from "vue-router";

// Client Layout and Pages
import Home from "../pages/client/Home.vue";
import Product from "../pages/client/Product.vue";
import Category from "../pages/client/Category.vue";
import AboutUs from "../pages/client/AboutUs.vue";
import Contact from "../pages/client/Contact.vue";
import Cart from "../pages/client/Cart.vue";
import Login from "../pages/client/Login.vue";

// Admin Layout and Pages
import DefaultLayout from "../pages/client/DefaultLayout.vue";
import AdminLayout from "../pages/admin/AdminLayout.vue";
import Dashboard from "../pages/admin/Dashboard.vue";
import AdminProduct from "../pages/admin/AdminProduct.vue";
import AdminCategory from "../pages/admin/AdminCategory.vue";
import AdminCustomer from "../pages/admin/AdminCustomer.vue";
import AdminOrder from "../pages/admin/AdminOrder.vue";
const routes = [
  {
    path: "/",
    component: DefaultLayout,
    children: [
      { path: "/", component: Home },
      { path: "/product", component: Product },
      { path: "/category", component: Category },
      { path: "/aboutus", component: AboutUs },
      { path: "/contact", component: Contact },
      { path: "/cart", component: Cart },
      { path: "/login", component: Login },
    ]
  },

  {
    path: "/admin",
    component: AdminLayout,
    children: [
      { path: "", component: Dashboard},
      { path: "/adminproduct", component: AdminProduct},
      { path: "/admincategory", component: AdminCategory},
      { path: "/admincustomer", component: AdminCustomer},
      { path: "/adminorder", component: AdminOrder},
    ]
  }
];

export const router = createRouter({
  history: createWebHistory(),
  routes,
});
