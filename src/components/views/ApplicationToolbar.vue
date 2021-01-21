<template>
  <v-card>
    <v-app-bar
      color="deep-purple accent-2"
      hide-on-scroll
      dark
    >
      <span v-for="item in toolbarItems" :key="item.id" @click="item.handler()" :class="item.customClass">
        <v-toolbar-title v-if="item.label">{{ item.label }}</v-toolbar-title>
        <v-img
          v-if="item.imgPath"
          :src="item.imgPath"
          width="120"
          height="64"
          contain/>
        <v-spacer v-if="item.spaced"></v-spacer>
        <v-btn icon v-if="item.isShown && item.iconName">
          <v-icon>{{ item.iconName }}</v-icon>
        </v-btn>
      </span>
      <v-spacer></v-spacer>
      <v-btn icon>
        <v-icon>{{ 'mdi-magnify' }}</v-icon>
      </v-btn>
    </v-app-bar>
  </v-card>
</template>

<script>
import Routes from '@/enums/Routes';

const TOOLBAR_ITEMS_IDS = {
  MENU: 'menu',
  APP_NAME: 'appName',
  BACK: 'back',
  SEARCH: 'search'
}

class ToolbarItem {
  constructor(builderInfo) {
    this.id = builderInfo.id;
    this.name = builderInfo.name;
    this.label = builderInfo.label || '';
    this.spaced = builderInfo.spaced || false;
    this.customClass = builderInfo.customClass;
    this.isShown = builderInfo.isShown;
    this.iconName = builderInfo.iconName || '';
    this.imgPath = builderInfo.imgPath || '';
    this.handler = builderInfo.handler || function () {};
  }
}

class ToolbarItemBuilder {
  setId(id) {
    this.id = id;
    return this;
  }

  setName(name) {
    this.name = name;
    return this;
  }

  setLabel(label) {
    this.label = label;
    return this;
  }

  setSpaced(spaced) {
    this.spaced = spaced;
    return this;
  }

  setCustomClass(customClass) {
    this.customClass = customClass;
    return this;
  }

  setIsShown(isShown) {
    this.isShown = isShown;
    return this;
  }

  setIconName(iconName) {
    this.iconName = iconName;
    return this;
  }

  setImgPath(path) {
    this.imgPath = path;
    return this;
  }

  setHandler(handler) {
    this.handler = handler;
    return this;
  }

  build() {
    return new ToolbarItem(this);
  }
}
export default {
  name: 'ApplicationToolbar',
  data() {
    return {
      appName: 'AdoptMe'
    }
  },
  created() {
    console.log(this.toolbarItems)
  },
  computed: {
    isShownBackIcon() {
      return true;
    },
    toolbarItems() {
      let items = [];
      const itemsBuilder = new ToolbarItemBuilder();
      items.push(
        ...[
          itemsBuilder
            .setId(TOOLBAR_ITEMS_IDS.MENU)
            .setName(TOOLBAR_ITEMS_IDS.MENU)
            .setIsShown(true)
            .setLabel(null)
            .setCustomClass('app-menu')
            .setIconName('mdi-menu')
            .setImgPath(null)
            .build(),
          itemsBuilder
            .setId(TOOLBAR_ITEMS_IDS.APP_NAME)
            .setName(TOOLBAR_ITEMS_IDS.APP_NAME)
            .setIsShown(true)
            .setCustomClass('app-logo')
            .setImgPath(require('../../assets/AdobtMeLogo.png'))
            .setIconName(null)
            .build(),
          itemsBuilder
            .setId(TOOLBAR_ITEMS_IDS.BACK)
            .setCustomClass('back-button')
            .setName(TOOLBAR_ITEMS_IDS.BACK)
            .setIsShown(this.$route.name === Routes.ANIMAL_INFO)
            .setLabel(null)
            .setIconName('mdi-arrow-left')
            .setHandler(this.backHandler)
            .setImgPath(null)
            .build()
        ]
      );
      return items;
    }
  },
  methods: {
    backHandler() {
      this.$router.push({path: '/animals'});
    }
  }
}
</script>

<style scoped>

</style>
