<template>
  <div class="table__btn">
    <VButton @click="addRow"> Добавить row </VButton>
    <VButton @click="addCol"> Добавить col </VButton>
    <VButton @click="removeRow" :disabled="!rowsCount"> Удалить row </VButton>
    <VButton @click="removeCol" :disabled="!colsCount"> Удалить col </VButton>
  </div>
  <div class="table__content">
    <table class="table">
      <tbody id="tbody"></tbody>
    </table>
  </div>
</template>

<script>
import { ref } from "vue";
import VButton from "./VButton.vue";

export default {
  components: { VButton },

  setup() {
    const colsCount = ref(0);
    const rowsCount = ref(0);
    const domElTable = ref(null);
    return {
      colsCount,
      rowsCount,
      domElTable,
    };
  },

  watch: {
    colsCount() {
      return this.createTable();
    },
    rowsCount() {
      return this.createTable();
    },
  },

  methods: {
    createTable() {
      const rows = [];
      let colsContent = 'hello'

      const cols = new Array(this.colsCount)
        .fill("")
        .map(() => this.toColumn(colsContent))
        .join("");


      for (let i = 0; i < this.rowsCount; i++) {
        rows.push(this.createRow(cols));
      }

      const domElTable = document.querySelector("#tbody");

      domElTable.innerHTML = rows.join("");
    },
    createRow(content) {
      return `
            <tr class="row">
              ${content}
            </tr>`;
    },
    toColumn(content) {
      return `
            <td class="column">${content}</td>
        `;
    },
    addCol() {
      if (this.colsCount === 0) {
        this.colsCount = 1;
        this.rowsCount = 1;
      } else {
        this.colsCount += 1;
      }
    },
    addRow() {
      if (this.rowsCount === 0) {
        this.rowsCount = 1;
        this.colsCount = 1;
      } else {
        this.rowsCount += 1;
      }
    },
    removeCol() {
      this.colsCount -= 1;
      if (!this.colsCount) {
       this.rowsCount = 0;
      }
    },
    removeRow() {
      this.rowsCount -= 1;
      if (!this.rowsCount) {
       this.colsCount = 0;
      }
    }
  },
};
</script>

<style lang="scss">
.table__btn {
  display: flex;
  justify-content: flex-start;
  padding: 20px;
  button {
    max-width: 120px;
    margin-right: 20px;
    cursor: pointer;
  }
}
.table__content {
  height: calc(100% - 124px);
  padding: 20px;
  padding-top: 0;
}
.table {
  width: 100%;
  height: 100%;
  .row {
    width: 100%;
    height: auto;
    border: 1px solid #D2D2D2;
    background: #f6f6f6;
  }
  .column {
    height: auto;
  }
}
</style>
