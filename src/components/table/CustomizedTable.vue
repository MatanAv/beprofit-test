<template>
  <v-data-table
    v-model:expanded="expanded"
    :item-value="itemValue"
    :headers="customizedHeader"
    :items="items"
    :show-expand="showExpand"
    :density="density"
    :search="search"
    :loading="isLoading"
    no-data-text="Table is empty."
    class="elevation-1"
  >
    <template v-slot:top>
      <v-toolbar flat>
        <v-toolbar-title>{{ title }}</v-toolbar-title>
        <v-divider class="mx-4" inset vertical></v-divider>
        <v-spacer></v-spacer>
        <v-dialog v-model="dialog" max-width="500px">
          <template v-slot:activator="{ props }">
            <v-btn color="primary" dark class="mb-2" v-bind="props"> New Item </v-btn>
          </template>
          <v-card>
            <v-card-title>
              <span class="text-h5">{{ formTitle }}</span>
            </v-card-title>

            <v-card-text>
              <v-container>
                <v-row>
                  <v-col cols="12" sm="8" md="6" v-for="key in Object.keys(defaultForm)">
                    <v-text-field v-model="editedItem[key]" :label="toLabelCase(key)"></v-text-field>
                  </v-col>
                </v-row>
              </v-container>
            </v-card-text>

            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="close"> Cancel </v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="save"> Save </v-btn>
            </v-card-actions>
          </v-card>
        </v-dialog>
        <v-dialog v-model="dialogDelete" max-width="500px">
          <v-card>
            <v-card-title class="text-h5">Are you sure you want to delete this item?</v-card-title>
            <v-card-actions>
              <v-spacer></v-spacer>
              <v-btn color="blue-darken-1" variant="text" @click="closeDelete">Cancel</v-btn>
              <v-btn color="blue-darken-1" variant="text" @click="deleteItemConfirm">OK</v-btn>
              <v-spacer></v-spacer>
            </v-card-actions>
          </v-card>
        </v-dialog>
      </v-toolbar>
      <v-text-field
        v-if="isSearchable"
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
        density="compact"
      ></v-text-field>
    </template>

    <template v-slot:item.actions="{ item }">
      <v-icon size="small" class="me-2" @click="editItem(item.raw)"> mdi-pencil </v-icon>
      <v-icon size="small" @click="deleteItem(item.raw)"> mdi-delete </v-icon>
    </template>

    <template v-slot:expanded-row="{ index }">
      <div class="expanded">
        <expanded-row v-for="key of expandedFields" :item-name="toLabelCase(key)" :items="items[index][key]" />
      </div>
    </template>
  </v-data-table>
</template>

<script>
import _ from 'lodash';
import { getExpandedFieldsByObject } from '@/utils/tables';
import { VDataTable } from '@vuetify/labs/VDataTable/VDataTable';
import ExpandedRow from './ExpandedRow.vue';

export default {
  name: 'CustomizedTable',
  props: {
    itemValue: {
      type: String,
      default: ''
    },
    title: {
      type: String,
      default: ''
    },
    headers: {
      type: Array,
      required: true
    },
    items: {
      type: Array,
      required: true
    },
    itemsPerPage: {
      type: Number,
      default: 10
    },
    defaultForm: {
      type: Object,
      required: true
    },
    showExpand: {
      type: Boolean,
      default: false
    },
    density: {
      type: String,
      default: 'default'
    },
    isSearchable: {
      type: Boolean,
      default: false
    },
    isLoading: {
      type: Boolean,
      default: false
    },
    expandedFields: {
      type: Array,
      default: () => []
    }
  },
  data: () => ({
    dialog: false,
    dialogDelete: false,
    editedIndex: -1,
    editedItem: {},
    expanded: [],
    search: ''
  }),
  computed: {
    formTitle() {
      return this.editedIndex === -1 ? 'New Item' : 'Edit Item';
    },
    customizedHeader() {
      if (!this.items.length) return [];

      const custom = [{ title: 'actions', key: 'actions', sortable: false }];

      return [...this.headers, ...custom];
    },
    expandedFields() {
      return getExpandedFieldsByObject(this.items[0]);
    }
  },
  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
    defaultForm: {
      handler(newVal) {
        this.editedItem = newVal;
      },
      immediate: true
    }
  },
  methods: {
    toLabelCase(str) {
      return _.startCase(str);
    },
    editItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },
    deleteItem(item) {
      this.editedIndex = this.items.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },
    deleteItemConfirm() {
      this.items.splice(this.editedIndex, 1);
      this.closeDelete();
    },
    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultForm);
        this.editedIndex = -1;
      });
    },
    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultForm);
        this.editedIndex = -1;
      });
    },
    save() {
      if (this.editedIndex > -1) {
        Object.assign(this.items[this.editedIndex], this.editedItem);
      } else {
        this.items.push(this.editedItem);
      }
      this.close();
    }
  },
  components: {
    VDataTable,
    ExpandedRow
  }
};
</script>

<style scoped></style>
