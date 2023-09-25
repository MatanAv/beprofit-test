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
  <header>
    <h1>BeProfit Assignment</h1>
  </header>
  <nav></nav>
  <main>
    <OrdersTable />
  </main>
  <footer></footer>
</template>

<style scoped>
header {
  text-align: center;
  margin: 20px 0;
}
</style>
