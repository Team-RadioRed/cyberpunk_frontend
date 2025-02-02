<template>
  <main class="main_container">
    <guide-component/>
    <article-component/>
    <generator-component/>
  </main>
</template>

<script>
import GuideComponent from './GuideComponent/GuideComponent.vue';
import ArticleComponent from './ArticleComponent/ArticleComponent.vue';
import GeneratorComponent from './GeneratorComponent/GeneratorComponent.vue';

export default {
  name: 'MainComponent',
  components: {
    GuideComponent,
    ArticleComponent,
    GeneratorComponent
  }
};
</script>

<style scoped lang="scss">
.main_container {
  margin-top: 60px;
  padding: 0 46px;
  width: 100%;
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-content: center;
  gap: 66px;
}
</style>
