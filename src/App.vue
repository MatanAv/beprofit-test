<script>
import OrdersTable from '@/pages/orders/OrdersTable.vue';

export default {
  name: 'App',
  components: {
    OrdersTable
  }
};
</script>

<template>
  <header></header>
  <nav></nav>
  <main>
    <OrdersTable />
    <!-- <router-view></router-view> -->
  </main>
  <footer></footer>
</template>

<style scoped></style>
