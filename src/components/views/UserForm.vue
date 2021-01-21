<template>
  <v-dialog v-model="dialog" width="500">
    <v-card class="user-form-dialog">
      <v-text-field
        v-model="name"
        :label="$t('NameAndSurname')"
        name="login"
        prepend-icon="person"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="phone"
        id="phone"
        :label="$t('PhoneNumber')"
        name="phone"
        prepend-icon="phone"
        type="text"
      ></v-text-field>

      <v-text-field
        v-model="email"
        id="mail"
        :label="$t('Email')"
        name="mail"
        prepend-icon="email"
        type="text"
      ></v-text-field>

      <div class="button-wrapper">
        <v-btn @click="confirmAdoption">{{ $t('ConfirmAdoption') }}</v-btn>
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
        const info = {
          name: this.name,
          phone: this.phone,
          email: this.email
        }
        this.$emit('confirmAdoption', { info });
      }
    }
  }
</script>

<style lang="scss" scoped>
  .button-wrapper {
    text-align: center;
  }

  .user-form-dialog {
    padding: 20px;
  }
</style>