<template>
  <div class="main-page">
   <div class="s">
     <div class="text-wrapper display-4 font-weight-bold" @click="goToAnimalsList">
       AdoptMe
     </div>
     <div class="additional-text-wrapper display-1">
       {{ $t('MainPage.text') }}
     </div>
   </div>
   <div class="carousel-wrapper">
    <div class="carousel-text display-2">
      {{ $t('Carousel.text') }}
    </div>
    <v-card
      max-width="600"
      class="img-carousel mx-auto"
    >
      <v-carousel
        :continuous="true"
        :cycle="true"
        :show-arrows="true"
        hide-delimiter-background
        delimiter-icon="mdi-minus"
        height="400"
      >
        <v-carousel-item
          v-for="(item, i) in items"
          :key="i"
          :src="item.src"
        >
        </v-carousel-item>
      </v-carousel>
    </v-card>
    <form method="POST" class="action-button" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
      <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJwdWJsaWNfa2V5IjoiaTQ0MTAzNTE4MjUwIiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQn9C+0LbQtdGA0YLQstC+0LLQsNC90LjQtSIsInR5cGUiOiJkb25hdGUiLCJsYW5ndWFnZSI6ImVuIn0=" />
      <input type="hidden" name="signature" value="IsMsZvCOMGaoWr2R9HOfsu55/tA=" />
      <button class="donate-button display-1">
        <span style="vertical-align:middle; !important">{{ $t('Donate.text') }}</span>
      </button>
    </form>
    <div class="go-to-animals display-3 font-weight-bold" @click="goToAnimalsList">
      {{ $t('MainPage.goToAnimals') }}
      <v-icon dark x-large>{{ 'mdi-arrow-right' }}</v-icon>
    </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'MainPage',
    data() {
      return {
        items: [
          {
            src: 'data:image/jpeg;base64,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'
          },
          {
            src: 'https://img.webmd.com/dtmcms/live/webmd/consumer_assets/site_images/article_thumbnails/other/cat_relaxing_on_patio_other/1800x1200_cat_relaxing_on_patio_other.jpg?resize=750px:*'
          },
          {
            src: 'https://cdnuploads.aa.com.tr/uploads/Contents/2020/05/14/thumbs_b_c_88bedbc66bb57f0e884555e8250ae5f9.jpg?v=140708'
          },
          {
            src: 'https://media4.s-nbcnews.com/j/newscms/2019_40/3038466/191004-leo-sally-al-1429_865eb4a22762b2c53f6c9a2fb8725dd2.fit-760w.jpg'
          }
        ]
      }
    },
    methods: {
      goToAnimalsList() {
        this.$router.push({path: '/animals'});
      }
    }
  }
</script>

<style lang="scss" scoped>
body, html {
  height: 100%;
}

.main-page {
  background-image: url('https://inspirationfeed.com/wp-content/uploads/2015/04/blurred-background.jpg');
  height: 65%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;

  color: white;
  position: relative;

  .text-wrapper {
    position: absolute;
    text-shadow: 5px 3px 2px rgba(150, 150, 150, 1);
    top: 20%;
    left: 35%;
  }

  .additional-text-wrapper {
    position: absolute;
    top: 65%;
    text-align: center;
    text-shadow: 9px 9px 25px rgba(150, 150, 150, 1);
  }

  .carousel-wrapper {
    width: 100%;
    background-color: #563830;
    position: absolute;
    top: 100%;
    height: 190%;

    .carousel-text {
      padding: 50px 0;
      text-align: center;
      text-shadow: 9px 9px 25px rgba(150, 150, 150, 1);
    }

    .action-button {
      padding: 50px 0;
      text-align: center;

      .donate-button {
        border: none;
        display:inline-block;
        text-align: center;
        padding: 7px 20px;
        cursor: pointer;
        border-radius: 2px;
        background: rgb(70, 27, 59);
      }
    }

    .go-to-animals {
      padding: 50px 0;
      text-align: center;
    }
  }
  
}
</style>