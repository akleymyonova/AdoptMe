<template>
  <v-card>
    <v-img
      :src="animal.photo"
      :position="'center top'"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="400px"
      @click="onAnimalClick"
    >
      <v-card-title class="animal-info">{{ `${$t(animal.name)}, ${animal.age}` }}</v-card-title>
      <v-card-text>{{ `${$t(animal.animalType)}, ${$t(animal.gender)}` }}</v-card-text>
    </v-img>

    <v-card-actions>
      <v-card-text>{{ animal.alreadyInShelter | capitalize  }}</v-card-text>

      <v-spacer></v-spacer>

      <v-btn
        icon
        @click.native="animal.isShown = !animal.isShown"
      >
        <v-icon>{{ animal.isShown ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
      </v-btn>
    </v-card-actions>
    <v-expand-transition>
      <div v-show="animal.isShown">
        <v-divider></v-divider>

        <v-card-text>
          {{ animal.shortInfo }}
        </v-card-text>
      </div>
    </v-expand-transition>
  </v-card>
</template>

<script>
  export default {
    props: {
      animal: {
        type: Object,
        required: true
      }
    },
    name: 'MainPage',
    data() {
      return {
       src: 'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUTExMWFhUXGR4XFxgXFxgYFxcWGxcZFxYbFhcYHSggGx0lGxg=',
        
      }
    },
    filters: {
      capitalize: function (value) {
        if (!value) return ''
        value = value.toString()
        return value.charAt(0).toUpperCase() + value.slice(1)
      }
    },
    methods: {
      onAnimalClick() {
        this.$emit('onPhotoClick', { id: this.animal.id })
      }
    }
  }
</script>

<style lang="scss" scoped>
  .animal-info {
    margin-bottom: -24px;
  }
</style>