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

<!-- <template>
  <div class="table">
    <Search :searchTerm="searchTerm" @search="search" />
    <table>
      <thead>
        <tr>
          <th v-for="column in columns" @click="sort(column)">{{ column }}</th>
          <th>Actions</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="row in sortedRows">
          <td v-for="column in columns">{{ row[column] }}</td>
          <td>
            <button @click="editRow(row)">Edit</button>
            <button @click="deleteRow(row)">Delete</button>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template> -->

<script>
import Search from './Search.vue';
import Row from './Row.vue';
import Pagination from './Pagination.vue';

export default {
  name: 'Table',
  props: {
    columns: {
      type: Array,
      required: true
    },
    headerRow: {
      type: Object,
      required: true
    },
    bodyRows: {
      type: Array,
      required: true
    },
    searchTerm: {
      type: String,
      required: true
    },
    currentPage: {
      type: Number,
      required: true
    },
    totalPages: {
      type: Number,
      required: true
    }
  },
  components: {
    Search,
    Row,
    Pagination
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
  data: function () {
    return {
      searchTerm: ''
    };
  },
  computed: {
    filteredRows: function () {
      return this.rows.filter((row) => {
        return Object.values(row).some((value) => {
          return String(value).toLowerCase().includes(this.searchTerm.toLowerCase());
        });
      });
    },
    sortedRows: function () {
      return this.filteredRows.sort((a, b) => {
        if (a[this.sortColumn] < b[this.sortColumn]) {
          return -1;
        }
        if (a[this.sortColumn] > b[this.sortColumn]) {
          return 1;
        }
        return 0;
      });
    },
    sortColumn: function () {
      return this.columns.find((column) => {
        return column === this.sortBy;
      });
    },
    addRow: function () {
      return this.rows.push((row) => {
        return row;
      });
    },
    editRow: function () {
      return this.rows.splice((row) => {
        return row;
      });
    },
    deleteRow: function () {
      return this.rows.splice((row) => {
        return row;
      });
    }
  },
  watch: {
    searchTerm: function () {
      this.$emit('search', this.searchTerm);
    },
    rows: function () {
      this.$emit('rows', this.rows);
    },
    columns: function () {
      this.$emit('columns', this.columns);
    }
  },
  mounted: function () {
    this.$emit('search', this.searchTerm);

    // this.$emit('rows', this.rows);

    // this.$emit('columns', this.columns);
  },
  updated: function () {
    this.$emit('search', this.searchTerm);
  },
  created: function () {
    this.$emit('search', this.searchTerm);
  }
};
</script>

<style scoped></style>
