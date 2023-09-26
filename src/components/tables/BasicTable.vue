<template>
  <v-table>
    <thead>
      <tr>
        <th class="text-left" v-for="header of headers" :key="header.key">{{ header.title }}</th>
      </tr>
    </thead>
    <tbody>
      <tr v-if="items.length" v-for="item of items" :key="item.name">
        <td v-for="header in headers" class="col-data">{{ item[header.key] }}</td>
      </tr>
    </tbody>
  </v-table>
</template>

<script>
export default {
  name: 'BasicTable',
  props: {
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  }
};
</script>

<style scoped>
.col-data {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}
</style>
