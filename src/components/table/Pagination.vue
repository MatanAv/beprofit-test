<template>
  <div class="pagination">
    <button @click="previousPage">Previous</button>
    <span>Page {{ currentPage }} of {{ totalPages }}</span>
    <button @click="nextPage">Next</button>
  </div>
</template>

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
    }
  },
  methods: {
    previousPage: function () {
      this.$emit('previousPage');
    },
    nextPage: function () {
      this.$emit('nextPage');
    }
  }
};
</script>
