<template>
  <div class="article_container">
    <div class="article_background_gradient"/>
    <div class="article_wrapper">
      <div class="title_icon">
        <img
          src="@/assets/svg/icon_title.svg"
          alt="icon">
      </div>
      <h2 class="article_title">
        ВАЖНЫЕ СТАТЬИ
      </h2>
    </div>
    <ul class="article_elements">
      <li class="article_element">
        <h3 class="article_element_title">
          &#91; ИМПЛАНТЫ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
      <li class="article_element">
        <in-progress-component/>
        <h3 class="article_element_title">
          &#91; НЕТРАНИНГ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
      <li class="article_element">
        <in-progress-component/>
        <h3 class="article_element_title">
          &#91; БОЙ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
      <li class="article_element">
        <h3 class="article_element_title">
          &#91; ОРУЖИЕ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
      <li class="article_element">
        <h3 class="article_element_title">
          &#91; МАТЕРИАЛЫ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
      <li class="article_element">
        <h3 class="article_element_title">
          &#91; ОРУЖИЕ &#93;
        </h3>
        <div class="article_element_img">
          <img
            src="@/assets/svg/icon_arrow-s.svg"
            alt="arrow">
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
import InProgressComponent from '@/components/Other/InProgressComponent/InProgressComponent.vue';

export default {
  name: 'ArticleComponent',
  components: {
    InProgressComponent
  }
};
</script>

<style scoped lang="scss">
.article_container {
  position: relative;
  width: 100%;
  max-width: 323px;
  max-width: 646px;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 25px;
  .article_background_gradient {
    position: absolute;
    z-index: -1;
    width: 984px;
    height: 984px;
    bottom: -492px;
    right: -492px;
    background: radial-gradient(47.35% 40.58%, #05DAE835 0%, rgba(62, 132, 140, 0) 100%);
  }
  .article_wrapper {
    display: flex;
    gap: 10px;
    .title_icon {
      display: flex;
      align-items: center;
      img {
        height: 16px;
        display: inline-block;
      }
    }
  }
  .article_elements {
    list-style: none;
    display: flex;
    flex-direction: column;
    box-sizing: border-box;
    .article_element {
      position: relative;
      width: 100%;
      height: 68px;
      display: flex;
      justify-content: space-between;
      align-items: center;
      border-bottom: 1px solid $color-blue;
      transition: 0.6s;
      background: transparent;
      transition: background 0.5s ease;
      cursor: pointer;
      div:first-child {
        left: 200px;
        top: 30%;
      }
      .article_element_title {
        margin-left: 6px;
        color: $color-blue;
        font-size: 24px;
        font-weight: 400;
        transition: 0.5s;
        text-transform: uppercase;
      }
      .article_element_img {
        transition: 0.6s;
        height: 20px;
      }
      &:hover {
        transition: 0.6s;
        background: linear-gradient(0deg, $color-light-blue 100%, rgba(255, 0, 0, 0) 100%);
        .article_element_title {
          margin-left: 30px;
        }
        .article_element_img {
          margin-right: 30px;
        }
      }
    }
  }
  &::before {
    content: url('@/assets/svg/icon_star_article.svg');
    position: absolute;
    bottom: 0;
    right: 0;
    width: 40px;
    height: 40px;
  }&::after {
    content: url('@/assets/svg/icon_barcode_article.svg');
    position: absolute;
    bottom: 0;
    left: 0;
    height: 32px;
  }
}
</style>
