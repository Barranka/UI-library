<template>
  <div class="v-input-wrapper">
    <label :for="id">{{label}}</label>
    <input
      v-model="inputValue"
      :id="id"
      :type="type"
      :style="styles"
      :placeholder="placeholder"
      :class="inputClass"
      @change="changeInputValue"
      class="v-input" />
  </div>
</template>

<script>
  import { ref } from 'vue';

  export default {
    props: {
      id: {
        type: String,
      },
      type: {
        type: String,
        default: 'text',
      },
      styles: {
        type: String,
      },
      inputClass: {
        type: String,
      },
      label: {
        type: String,
      },
      placeholder: {
        type: String,
      }
    },

    setup() {
      const inputValue = ref('');
      return {
        inputValue,
      }
    },

    methods: {
      changeInputValue() {
        this.$emit('')
      }
    }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixins.scss";

  .v-input {
    &-wrapper {
      display: flex;
      flex-direction: column;
      align-items: flex-start;

      label {
        padding: 0 10px;
        margin-bottom: 5px;
        @include font(12px, 16px);
      }
    }
    @include input();
  }
</style>
