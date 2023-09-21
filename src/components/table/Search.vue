<script>
export default {
  name: 'Search',
  props: {
    searchTerm: {
      type: String,
      required: true
    }
  },
  watch: {
    searchTerm: function () {
      this.$emit('search', this.searchTerm);
    }
  },
  mounted: function () {
    this.$emit('search', this.searchTerm);
  },
  methods: {
    search: function () {
      this.$emit('search', this.searchTerm);
    }
  },
  data: function () {
    return {
      searchTerm: ''
    };
  },
  created: function () {
    this.$emit('search', this.searchTerm);
  },
  updated: function () {
    this.$emit('search', this.searchTerm);
  }
  // destroyed: function () {
  //   this.$emit('search', this.searchTerm);
  // },
  // beforeDestroy: function () {
  //   this.$emit('search', this.searchTerm);
  // },
  // beforeUpdate: function () {
  //   this.$emit('search', this.searchTerm);
  // },
  // beforeCreate: function () {
  //   this.$emit('search', this.searchTerm);
  // }
};
</script>

<template>
  <div class="search">
    <input type="text" v-model="searchTerm" />
  </div>
</template>

<style scoped>
.search {
  margin-bottom: 1rem;
}
</style>
