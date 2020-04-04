<template>
  <v-dialog v-model="dialog" width="500">
    <v-card>
      <v-text-field
        v-model="name"
        label="Name and surname"
        name="login"
        prepend-icon="person"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        id="phone"
        label="Phone number"
        name="phone"
        prepend-icon="phone"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        id="mail"
        label="Email"
        name="mail"
        prepend-icon="email"
        type="text"
      ></v-text-field>

      <div class="button-wrapper">
        <v-btn @click="confirmAdoption">Confirm adoption</v-btn>
      </div>
    </v-card>
  </v-dialog>
</template>

<script>
  export default {
    name: 'UserForm',
    data() {
      return {
        dialog: false,
        email: '',
        phone: '',
        name: ''
      }
    },
    mounted() {
      this.dialog = true;
    },
    methods: {
      confirmAdoption() {
        this.$emit('confirmAdoption');
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrapper {
    text-align: center;
  }
</style>