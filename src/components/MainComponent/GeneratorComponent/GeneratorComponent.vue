<template>
  <div class="generator_container">
    <div class="generator_wrapper">
      <div class="title_wrapper">
        <div class="title_icon">
          <img
            src="@/assets/svg/icon_title.svg"
            alt="icon">
        </div>
        <h2 class="generator_title">
          ГЛАВНЫЕ ГЕНЕРАТОРЫ
        </h2>
      </div>
      <ul class="generator_elements">
        <li class="generator_element">
          <h3 class="generator_element_title">
            &#91; НОЧНОЙ РЫНОК &#93;
          </h3>
        </li>
        <li class="generator_element">
          <div class="generator_element_back"/>
          <h3 class="generator_element_title">
            &#91; НОЧНОЙ РЫНОК &#93;
          </h3>
        </li>
        <li class="generator_element">
          <div class="generator_element_back"/>
          <h3 class="generator_element_title">
            &#91; НОЧНОЙ РЫНОК &#93;
          </h3>
        </li>
        <li class="generator_element">
          <div class="generator_element_back"/>
          <h3 class="generator_element_title">
            &#91; БОЕВОЕ СТОЛКНОВЕНИЕ &#93;
          </h3>
        </li>
        <li class="generator_element">
          <div class="generator_element_back"/>
          <h3 class="generator_element_title">
            &#91; НОЧНОЙ РЫНОК &#93;
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>

export default {
  name: 'GeneratorComponent',
  components: {
  }
};
</script>

<style scoped lang="scss">
.generator_container {
  grid-column: span 2;
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 25px;
  .generator_wrapper {
    width: 100%;
    max-width: 1344px;
    display: flex;
    flex-direction: column;
    gap: 25px;
    .title_wrapper {
      display: flex;
      align-items: center;
      gap: 10px;
      .title_icon {
        display: flex;
        align-items: center;
        img {
          height: 16px;
          display: inline-block;
        }
      }
      .generator_title {
        text-align: start;
      }
    }
    .generator_elements {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, minmax(198px, 496px)) 311px;
      grid-template-rows: repeat(2, 146px);
      gap: 19px;
      box-sizing: border-box;
      .generator_element {
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        transition: 0.8s;
        background-repeat: no-repeat;
        cursor: pointer;
        .generator_element_title {
          margin-bottom: 20px;
          margin-left: 20px;
          color: $color-blue;
          font-size: 24px;
          font-weight: 400;
          transition: 0.5s;
          text-transform: uppercase;
        }
        &:hover {
          transition: 0.8s;
          .generator_element_title {
            margin-left: 40px;
          }
        }
      }
      li:nth-child(1) {
        background: url('@/assets/svg/generator_first.svg');
      }
      li:nth-child(2) {
        background: url('@/assets/svg/generator_third.svg');
      }
      li:nth-child(3) {
        background: url('@/assets/svg/generator_five.svg');
        grid-row: span 2;
      }
      li:nth-child(4) {
        background: url('@/assets/svg/generator_second.svg');
      }
      li:last-child {
        background: url('@/assets/svg/generator_four.svg');
      }
    }
  }
}
</style>
