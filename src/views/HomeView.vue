<template>
  <div class="main_page_wrapper">
    <header class="header_wrapper">
      <div class="header_title">
        <visual-elements-component />
        <h1 class="header_app_name">
          RADIO RED
        </h1>
        <visual-elements-component :isLeft="true" />
      </div>
      <navigation-component
        :fnActionClick="openNavigationMenu"/>
      <navigation-list v-if="isNavigationMenuOpen"/>
    </header>
    <main-component/>
    <footer-component/>
  </div>
</template>

<script>
import VisualElementsComponent from '@/components/Other/VisualElementsComponent/VisualElementsComponent.vue';
import NavigationComponent from '@/components/NavigationComponent/NavigationComponent.vue';
import NavigationList from '@/components/NavigationComponent/NavigatrionList/NavigationList.vue';
import MainComponent from '@/components/MainComponent/MainComponent.vue';
import FooterComponent from '@/components/FooterComponent/FooterComponent.vue';

export default {
  name: 'HomeView',
  components: {
    VisualElementsComponent,
    NavigationComponent,
    NavigationList,
    MainComponent,
    FooterComponent
  },
  data() {
    return {
      isNavigationMenuOpen: false
    };
  },
  methods: {
    openNavigationMenu() {
      this.isNavigationMenuOpen = !this.isNavigationMenuOpen;
      return this.isNavigationMenuOpen;
    }
  }
};
</script>

<style scoped lang="scss">
.main_page_wrapper {
  height: 100%;
  .header_wrapper {
    position: relative;
    z-index: 3;
    margin-top: 20px;
    height: 86px;
    display: flex;
    flex-direction: column;
    align-items: center;
    .header_title {
      width: 100%;
      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      padding: 0 20px;
    }
    .header_app_name {
      font-size: 26px;
      color: $color-red;
      font-family: 'paladins';
      padding-top: 10px;
    }
  }
}
</style>
