<template>
  <v-expansion-panels variant="accordion">
    <v-expansion-panel :key="itemName" :title="itemName">
      <v-expansion-panel-text>
        <basic-table v-if="items.length" :headers="headers" :items="items" />
        <div v-else>No data</div>
      </v-expansion-panel-text>
    </v-expansion-panel>
  </v-expansion-panels>
</template>

<script>
import { getHeadersByObject } from '@/utils/tables';
import BasicTable from './BasicTable.vue';

export default {
  name: 'ExpandedRow',
  props: {
    itemName: {
      type: String,
      required: true
    },
    items: {
      type: Array,
      required: true
    }
  },
  methods: {},
  computed: {
    headers() {
      return getHeadersByObject(this.items[0]);
    }
  },
  components: {
    BasicTable
  }
};
</script>

<style scoped></style>
