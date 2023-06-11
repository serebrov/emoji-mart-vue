<template>
  <div class="example">
    <h2>QDialog Example</h2>
    <div class="row">Show Picker in the popup QDialog from Quasar.</div>
    <div class="row">
      <q-btn label="Open QDialog" @click="emojiPickerDialog = true" />
    </div>

    <q-dialog v-model="emojiPickerDialog">
      <template v-slot:body style="height: 450px">
        <picker :data="index" :emojiSize="24" :native="true"></picker>
      </template>
    </q-dialog>
  </div>
</template>

<script>
import { Picker } from '../src'
import { QBtn, QDialog } from 'quasar-framework/dist/quasar.mat.esm'

export default {
  props: {
    index: {
      type: Object,
    },
  },
  data() {
    return {
      emojiPickerDialog: false,
    }
  },
  components: {
    Picker,
    QBtn,
    QDialog,
  },
}
</script>

<style scoped>
.modal {
  color: red;
}

/**
 * See https://vue-loader.vuejs.org/guide/scoped-css.html#deep-selectors
 * the `>>>` allows to apply scoped css to child element that is generated
 * dynamically
**/
.modal >>> .modal-scroll {
  color: red;
  max-height: none;
}
.modal .modal-body {
  max-height: none;
}
</style>
