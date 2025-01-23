<template>
  <div class="navigation_wrapper">
    <nav class="navigation_container">
      <div class="left_line"/>
      <ul class="navigation_list">
        <div class="navigation_background"/>
        <navigation-element
          v-for="(element, index) in navigationValue"
          :key="index"
          :title="element.name"
        />
      </ul>
      <div class="right_line"/>
    </nav>
  </div>
</template>

<script>
import NavigationElement from './NavigationElement/NavigationElement.vue';

export default {
  name: 'NavigationComponent',
  components: {
    NavigationElement
  },
  data() {
    return {
      navigationValue: [
        {
          name: 'Справочники'
        }, {
          name: 'Статьи'
        }, {
          name: 'Генераторы'
        }
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.navigation_wrapper {
  width: 100%;
  height: 100%;
  margin-top: 6px;
  .navigation_container {
    position: relative;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    align-self: flex-end;
    box-sizing: border-box;
    .left_line,
    .right_line {
      position: absolute;
      top: 0px;
      width: calc(100%/2 - 398.5px);
      border-top: 1px solid $color-red;
    }
    .left_line {
      left: 0px;
    }
    .right_line {
      right: 0px;
    }
    .navigation_list {
      align-self: flex-end;
      position: relative;
      max-width: 766px;
      width: 100%;
      height: 28px;
      list-style: none;
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 56px;
      text-transform: uppercase;
      font-size: 18px;
      font-weight: 500;
      color: #000228;
      border-top: 1px solid $color-red;
      &::after,
      &::before {
        content: '';
        position: absolute;
        top: -17px;
        height: 16.5px;
        width: 1.5px;
        background: $color-red;
        -webkit-transform: skew(135deg);
        -moz-transform: skew(135deg);
        -o-transform: skew(135deg);
      }
      &::after {
        left: -8.5px;
        -webkit-transform: skew(45deg);
        -moz-transform: skew(45deg);
        -o-transform: skew(45deg);
      }
      &::before {
        right: -8.5px;
        -webkit-transform: skew(135deg);
        -moz-transform: skew(135deg);
        -o-transform: skew(135deg);
      }
      .navigation_background {
        position: absolute;
        top: -0.5px;
        z-index: -1;
        border-top: 28px solid $color-red;
        border-left: 28px solid transparent;
        border-right: 28px solid transparent;
        height: 0;
        max-width: 690px;
        width: 100%;
        box-sizing: border-box;
        &::before,
        &::after {
          content: '';
          position: absolute;
          height: 28px;
          max-width: 14px;
          width: 100%;
          background: $color-red;
        }
        &::before {
          bottom: 0px;
          left: -31px;
          -webkit-transform: skew(45deg);
          -moz-transform: skew(45deg);
          -o-transform: skew(45deg);
        }
        &::after {
          -webkit-transform: skew(135deg);
          -moz-transform: skew(135deg);
          -o-transform: skew(135deg);
          bottom: 0px;
          right: -31px;
        }
      }
    }
  }
}
</style>
