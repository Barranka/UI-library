<template>
  <button
    :type="buttonType"
    :style="buttonStyles"
    :class="buttonClass"
    :disabled="buttonDisabled"
    @click="onSubmit"
    class="v-button">
    <slot></slot>
  </button>
</template>

<script>
  import { ref, reactive } from 'vue';

  export default {
    props: {
      buttonType: {
        type: String,
        default: 'Button',
      },
      buttonStyles: String,
      buttonClass: String,
      buttonDisabled: {
        type: Boolean,
        default: false,
      },
    },

    methods: {
      onSubmit() {
        console.log('onSubmit')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixins.scss";

  .v-button {
    @include button();
  }
</style>
