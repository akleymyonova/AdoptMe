<template>
  <v-col :cols="3">
    <v-file-input
      :id="FILE_INPUT_ID"
      label="Load image to search..."
      filled
      show-size
      prepend-icon="mdi-camera"
      @change="onImageChange"
    ></v-file-input>
  </v-col>
</template>

<script>
const FILE_INPUT_ID = 'fileInput';

export default {
  name: 'ImageSearcher',
  data() {
    return {
      FILE_INPUT_ID
    }
  },
  methods: {
    onImageChange(photo) {
      if (!photo) {
        return;
      }
      const formData = new FormData();
      formData.append('img', photo);
      this.$http.post('http://localhost:3000/animalByPhoto/', formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      }).then(response => {
        console.log(response)
      })
      .catch(err => {
        console.log(err);
      })
    }
  }
}
</script>

<style>

</style>


