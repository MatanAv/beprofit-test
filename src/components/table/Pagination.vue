<script>
export default {
  name: 'Pagination',
  props: {
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    },
    previousPage: {
      type: Function,
      required: true
    },
    nextPage: {
      type: Function,
      required: true
    }
  }
  // methods: {
  //   previousPage: function () {
  //     this.$emit('previousPage');
  //   },
  //   nextPage: function () {
  //     this.$emit('nextPage');
  //   }
  // }
};
</script>

<template>
  <div class="pagination">
    <button @click="previousPage">Previous</button>
    <span>Page {{ currentPage + 1 }} of {{ totalPages + 1 }}</span>
    <button @click="nextPage">Next</button>
  </div>
</template>

<style scoped></style>
