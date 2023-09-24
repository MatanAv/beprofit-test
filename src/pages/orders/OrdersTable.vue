<template>
  <CustomizedTable
    v-if="headers"
    id="orders-table"
    title="Orders"
    itemValue="order_ID"
    :headers="headers"
    :items="orders"
    :defaultForm="defaultForm"
    :showExpand="true"
    :isSearchable="true"
    :isLoading="isLoading"
  />
</template>

<script>
import CustomizedTable from '@/components/table/CustomizedTable.vue';
import { getAllOrders } from '@/services/api/orders.js';
import { getHeadersByObject, getItemDefaultForm } from '@/utils/tables';

export default {
  name: 'OrdersTable',
  data: function () {
    return {
      headers: [],
      expanded: [],
      orders: [],
      defaultForm: {},
      isLoading: true,
      error: null
    };
  },
  async created() {
    try {
      this.orders = await getAllOrders();

      const headersData = getHeadersByObject(this.orders[0]);

      this.headers = headersData.headers;
      this.expanded = headersData.expanded;
      this.defaultForm = getItemDefaultForm(this.orders[0]);

      this.isLoading = false;
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
