<script>
import axios from 'axios';
import Table from '@/components/table/Table.vue';
import { getAllOrders } from '@/services/api/orders.js';

export default {
  name: 'OrdersTable',
  components: {
    Table
  },
  data: function () {
    return {
      header: {},
      rows: []
    };
  },
  methods: {
    buildHeader(data) {
      const header = {};

      for (const key in data) {
        header[key] = key;
      }

      return header;
    }
  },
  // create async created hook
  async created() {
    const orders = await getAllOrders();

    this.header = buildHeader(orders.header);
    this.rows = orders.body;
  }
};
</script>

<template>
  <div class="orders-table">
    <Table :headerRow="ordersList.header" :bodyRows="ordersList.body" />
  </div>
</template>

<style scoped></style>
