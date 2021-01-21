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
    async $_getMostSimilarPhoto(img) {
      const data = JSON.stringify({ img });
      try {
        const res = await this.$http.post(`${this.$store.state.AppContext.serverUrl}/animalByPhoto/`, data, {
          headers: {
            'Content-Type': 'application/json',
          }
        })
        const mostSimilar = res.data.map(({ product }) => product);
        this.$emit('imageSearcherEvent', {
          mostSimilar
        })
      } catch (err) {
        console.log('Error while getting similar photo');
      }
    }
  }
}
</script>

<style>

</style>


