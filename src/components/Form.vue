<template>
  <form class="form" @submit.prevent="onSubmit">
    <VCard max-width="374" max-height="374">
      <template v-slot:header>
        <h2>Здесь мог быть заголовок страницы</h2>
      </template>
      <VInput
        id="input-form"
        label="Введите ваш комментарий"
        placeholder="Введите ваш комментарий">
      </VInput>

      <template v-slot:footer>
        <VButton>
          Отменить
        </VButton>
        <VButton>
          Сохранить
        </VButton>
      </template>
    </VCard>
  </form>
</template>

<script>
  import VButton from './UIComponents/VButton.vue';
  import VInput from './UIComponents/VInput.vue';
  import VCard from './UIComponents/VCard.vue';

  export default {
    components: { VButton, VInput, VCard }
  }
</script>

<style scoped lang="scss">
  @import "@/styles/mixins.scss";

  .form {
  }
</style>
