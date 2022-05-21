<template>
  <div
    class="card"
    :style="
    {
        'height': `${height}px`, 'width': `${width}px`, 'max-height': `${maxHeight}px`, 'max-width': `${maxWidth}px`
    }">
    <header class="card-header">
      <slot name="header"></slot>
    </header>
    <main class="card-body">
      <slot></slot>
    </main>
    <footer class="card-footer">
      <slot name="footer"></slot>
    </footer>
  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  props: {
    buttonType: {
      type: String,
      default: "Button",
    },
    maxWidth: {
      type: String,
    //   default: "500px",
    },
    maxHeight: {
      type: String,
    //   default: "500px",
    },
    width: {
      type: String,
    },
    height: {
      type: String,
    },
  },
};
</script>

<style scoped lang="scss">
@import "@/styles/mixins.scss";

.card {
  max-width: 100%;
  width: 100%;
  margin: 10px auto;
  max-height: 800px;
  height: 100%;
  border: 1px solid $border-color;
  border-radius: 5px;

  &-header {
    text-align: left;
    padding: 10px 15px;
    border-bottom: 1px solid $border-color;
    margin-bottom: 20px;
  }

  &-body {
    padding: 10px 15px;
  }

  &-footer {
    display: flex;
    margin-top: 20px;
    padding: 10px 15px;
    border-top: 1px solid $border-color;
  }
}
</style>
