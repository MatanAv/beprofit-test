<script>
import Search from './Search.vue';
import Row from './Row.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'Table',
  data: function () {
    return {
      searchTerm: '',
      currentPage: 0
    };
  },
  props: {
    headerRow: {
      type: Object,
      required: true
    },
    bodyRows: {
      type: Array,
      required: true
    },
    isSearchable: {
      type: Boolean,
      default: true,
      required: false
    },
    isSortable: {
      type: Boolean,
      default: true,
      required: false
    },
    isEditable: {
      type: Boolean,
      default: true,
      required: false
    },
    isDeletable: {
      type: Boolean,
      default: true,
      required: false
    },
    isAddable: {
      type: Boolean,
      default: true,
      required: false
    }
  },
  computed: {
    totalPages() {
      return Math.ceil(this.bodyRows.length / 10);
    }
  },
  methods: {
    search: function (searchTerm) {
      this.searchTerm = searchTerm;
    },
    addRow: function (row) {
      this.rows.push(row);
    },
    editRow: function (row) {
      const index = this.rows.findIndex((r) => {
        return r.id === row.id;
      });
      this.rows.splice(index, 1, row);
    },
    deleteRow: function (row) {
      const index = this.rows.findIndex((r) => {
        return r.id === row.id;
      });
      this.rows.splice(index, 1);
    },
    sort: function (column) {
      this.rows.sort((a, b) => {
        if (a[column] < b[column]) {
          return -1;
        }
        if (a[column] > b[column]) {
          return 1;
        }
        return 0;
      });
    }
  },
  components: {
    Search,
    Row,
    Pagination
  }
};
</script>

<template>
  <div class="table">
    <Search :searchTerm="searchTerm" @search="search" />
    <table>
      <Row :row="headerRow" :columns="headerRow.columns" type="header" />
      <Row v-for="row in bodyRows" :row="row" :columns="row.columns" type="body" />
    </table>
    <button @click="addRow(row)">Add Row</button>
    <Pagination :currentPage="currentPage" :totalPages="totalPages" @previousPage="previousPage" @nextPage="nextPage" />
  </div>
</template>

<style scoped></style>
