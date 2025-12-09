<script setup>
import Sidebar from "../../components/Sidebar.vue";
</script>

<template>
  <div class="d-flex">
    <Sidebar />

    <div class="content flex-grow-1" style="margin-left: 240px; padding: 20px">
      <router-view />
    </div>
  </div>
</template>
