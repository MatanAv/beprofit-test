<script>
export default {
  name: 'Row',
  props: {
    row: {
      type: Object,
      required: true
    },
    columns: {
      type: Array,
      required: true
    },
    type: {
      type: String,
      required: true
    }
  },
  methods: {
    edit: function () {
      this.$emit('edit', this.row);
    },
    delete: function () {
      this.$emit('delete', this.row);
    }
  }
};
</script>

<template>
  <thead v-if="type === 'header'">
    <tr>
      <th v-for="column in columns">{{ column }}</th>
      <th>Actions</th>
    </tr>
  </thead>
  <tbody v-else>
    <tr>
      <td v-for="column in columns">{{ row[column] }}</td>
      <td>
        <button @click="edit">Edit</button>
        <button @click="delete">Delete</button>
      </td>
    </tr>
  </tbody>
</template>

<style scoped></style>
