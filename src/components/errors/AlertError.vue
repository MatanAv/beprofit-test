<template>
  <div class="error">
    <v-alert
      class="alert-error"
      closable
      rounded
      type="error"
      location="top"
      max-width="500px"
      variant="tonal"
      :title="errorWithCode"
      :text="messageAndRefreshHint"
    />
  </div>
</template>

<script>
export default {
  name: 'AlertError',
  props: {
    error: {
      type: Object,
      required: true
    }
  },
  computed: {
    errorWithCode() {
      return `Error: ${this.error.code}`;
    },
    messageAndRefreshHint() {
      return `${this.error.message}. Please refresh the page and try again.`;
    }
  }
};
</script>

<style scoped>
.error {
  width: 90%;
  margin: 0 auto;
  padding: 20px;
}
</style>
