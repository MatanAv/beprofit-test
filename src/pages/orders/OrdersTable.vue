<template>
  <section id="orders-page">
    <CustomizedTable
      id="orders-table"
      title="Orders"
      itemValue="order_ID"
      :headers="headers"
      :items="orders"
      :defaultForm="defaultForm"
      :showExpand="true"
      :isSearchable="true"
      :isLoading="isLoading"
      :hasError="!!error"
    />
    <AlertError v-if="error" :error="error" />
  </section>
</template>

<script>
import CustomizedTable from '@/components/tables/CustomizedTable.vue';
import AlertError from '@/components/errors/AlertError.vue';
import { getAllOrders } from '@/services/api/orders.js';
import { getHeadersByObject, getItemDefaultForm } from '@/utils/tables';
import { getConstantHeaders, getConstantDefaultForm } from '@/utils/builders/orders';

export default {
  name: 'OrdersTable',
  data: function () {
    return {
      headers: [],
      orders: [],
      defaultForm: {},
      isLoading: true,
      error: null
    };
  },
  async created() {
    // In a real application, both should have been in sync with the DB and not rely on the API response
    // this.headers = getHeadersByObject('tableName');
    // this.defaultForm = getItemDefaultForm('tableName');

    try {
      this.orders = await getAllOrders();

      // In a generic way (which is still not a good practice but better than hardcoded values)
      if (this.orders.length) {
        this.headers = getHeadersByObject(this.orders[0]);
        this.defaultForm = getItemDefaultForm(this.orders[0]);
      }
      // Using hardcoded values
      else {
        this.headers = getConstantHeaders();
        this.defaultForm = getConstantDefaultForm();
      }

      this.isLoading = false;
    } catch (error) {
      console.error(error);
      this.error = error;
    } finally {
      this.isLoading = false;
    }
  },
  components: {
    CustomizedTable,
    AlertError
  }
};
</script>

<style scoped>
#orders-table {
  width: 90%;
  margin: 20px auto;
  border-radius: 10px;
}
</style>
