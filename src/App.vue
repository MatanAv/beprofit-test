<script>
import { getAllOrders } from '@/services/api/orders';

export default {
  name: 'App',
  data() {
    return {
      data: null
    };
  },
  async created() {
    try {
      this.data = await getAllOrders();
    } catch (error) {
      console.error(error);
    }
  }
};
</script>

<template>
  <div></div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
