<template>
  <v-card>
    <v-img
      :src="src"
      class="white--text align-end"
      gradient="to bottom, rgba(0,0,0,.1), rgba(0,0,0,.5)"
      height="300px"
      @click="onAnimalClick"
    >
      <v-card-title class="animal-info">{{ `${animal.name}, ${animal.age}` }}</v-card-title>
      <v-card-text>{{ `${animal.animalType}, ${animal.gender}` }}</v-card-text>
    </v-img>

    <v-card-actions>
      <v-card-text>{{ getInShelterLabel(animal.alreadyInShelter) }}</v-card-text>

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
        src: 'https://cdn.vuetifyjs.com/images/cards/road.jpg',
      }
    },
    methods: {
      getInShelterLabel(inShelter) {
        return `${inShelter.charAt(0).toUpperCase() + inShelter.slice(1)} in a shelter`
      },
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