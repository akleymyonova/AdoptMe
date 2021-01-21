<template>
  <div>
    <v-file-input
      :id="FILE_INPUT_ID"
      :label="$t('LoadImageText')"
      filled
      show-size
      prepend-icon="mdi-camera"
      @change="onImageChange"
    ></v-file-input>
  </div>
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
        this.$emit('imageSearcherEvent', {});
        return;
      }
      const reader = new FileReader();
      reader.onloadend = () => {
        const img = reader.result;
        this.$_getMostSimilarPhoto(img);
      }
      reader.readAsDataURL(photo);
    },
    $_getMostSimilarPhoto(img) {
      const data = JSON.stringify({ img });
      this.$http.post('http://localhost:3000/animalByPhoto/', data, {
        headers: {
          'Content-Type': 'application/json',
        }
      })
      .then(res => {
        const mostSimilar = res.data.map(({ product }) => product);
        this.$emit('imageSearcherEvent', {
          mostSimilar
        })
      })
    }
  }
}
</script>

<style>

</style>


