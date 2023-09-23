<template>
  <CustomizedTable id="orders-table" v-if="orders" :headers="headers" :items="orders" />
</template>

<script>
import CustomizedTable from '@/components/table/CustomizedTable.vue';
import { getAllOrders } from '@/services/api/orders.js';
import { ordersTableHeader, lineItemsTableHeader, transactionInfo } from '@/constants/tables/orders.js';

export default {
  name: 'OrdersTable',
  data: function () {
    return {
      orders: null,
      itemsPerPage: 10,
      error: null
    };
  },
  computed: {
    headers() {
      return ordersTableHeader;
    }
    // lineItemsTableHeader() {
    //   return lineItemsTableHeader;
    // },
    // transactionInfo() {
    //   return transactionInfo;
    // }
  },
  async created() {
    try {
      this.orders = await getAllOrders();
    } catch (error) {
      console.error(error);
      this.error = error;
      // redirect to error page or show error message
    }
  },
  components: {
    CustomizedTable
  }
};
</script>

<style scoped>
#orders-table {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
  /* border-radius: 5px; */
}
</style>
