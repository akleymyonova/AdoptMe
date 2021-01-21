<template>
  <v-menu
    v-model="menu"
    :min-width="248"
    :activator="activatorSelector"
    :close-on-content-click="false"
    :nudge-width="200">
    <v-card>
      <v-card-subtitle>
        {{ $t('Languages') }}
      </v-card-subtitle>
      <v-card-text class="languages-wrapper">
        <v-img
          v-for="lang of availableLanguages"
          :key="lang.id"
          :src="lang.photo"
          :max-width="35"
          :max-height="20"
          @click="changeLanguage(lang.id)"/>
      </v-card-text>
      <v-card-text>
        <form method="POST" class="action-button" accept-charset="utf-8" action="https://www.liqpay.ua/api/3/checkout">
          <input type="hidden" name="data" value="eyJ2ZXJzaW9uIjozLCJhY3Rpb24iOiJwYXlkb25hdGUiLCJwdWJsaWNfa2V5IjoiaTQ0MTAzNTE4MjUwIiwiYW1vdW50IjoiNSIsImN1cnJlbmN5IjoiVUFIIiwiZGVzY3JpcHRpb24iOiLQn9C+0LbQtdGA0YLQstC+0LLQsNC90LjQtSIsInR5cGUiOiJkb25hdGUiLCJsYW5ndWFnZSI6ImVuIn0=" />
          <input type="hidden" name="signature" value="IsMsZvCOMGaoWr2R9HOfsu55/tA=" />
          <button class="donate-button subtitle-1 deep-purple accent-2">
            <span style="vertical-align:middle; !important">{{ $t('Donate.shortText') }}</span>
          </button>
        </form>
      </v-card-text>
    </v-card>
  </v-menu>
</template>

<script>
  import i18n from '@/i18n';

  export default {
    name: 'AppMenu',
    props: {
      activatorSelector: {
        type: String,
        required: true
      }
    },
    methods: {
      changeLanguage(locale) {
        i18n.changeLocale(locale);
      }
    },
    data() {
      return {
        menu: false,
        availableLanguages: [
          {
            id: 'ua',
            photo: 'https://fotw.info/images/u/ua.gif'
          },
          {
            id: 'en',
            photo: 'https://www.letterboxhamper.com/pub/static/version1584441171/frontend/creativesteam/letterboxhampers/en_GB/images/uk_flag.png'
          },
          {
            id: 'ru',
            photo: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAARMAAAC3CAMAAAAGjUrGAAAAElBMVEX////VKx4AOaYAGJ4AOq3fKgABXnTtAAAA9UlEQVR4nO3QsQGAQAwAoejr/ivb50pbGIEZAAAAAAAAAAAAAAAAAAAAAH47bHOzOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJzUP27xsc7E5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aSclJNyUk7KSTkpJ+WknJSTclJOykk5KSflpJyUk3JSTspJOSkn5aQ+2jLMGymKnQ8AAAAASUVORK5CYII='
          }
        ]
      }
    }
  }
</script>

<style lang="scss" scoped>
.languages-wrapper {
  display: flex;
  justify-content: space-around;
}

.action-button {
  text-align: center;

  .donate-button {
    border: none;
    width: 170px;
    border-radius: 12px;
    color: white;
    display:inline-block;
    text-align: center;
    padding: 7px 20px;
    cursor: pointer;
    background: rgb(70, 27, 59);
  }
}
</style>