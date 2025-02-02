<template>
  <div class="navigation_background"></div>
  <ul class="navigation_menu">
    <div class="navigation_menu_border"></div>
    <li
      v-for="(item, index) in listValue"
      :key="index"
      class="menu_item">
      {{ item?.name }}
    </li>
    <div class="navigation_end_line">
      <div class="left_line"/>
      <div class="right_line"/>
    </div>
  </ul>
</template>

<script>

export default {
  name: 'NavigationList',
  components: {
  },
  data() {
    return {
      listValue: [
        {
          name: 'ОРУЖИЕ'
        }, {
          name: 'ИМПЛАНТЫ'
        }, {
          name: 'НЕТАНИНГ'
        }, {
          name: 'РАСХОДНИКИ'
        }, {
          name: 'ТРАНСПОРТ'
        }, {
          name: 'РОЛИ'
        }, {
          name: 'NPC'
        }, {
          name: 'ИМПЛАНТЫ'
        }, {
          name: 'ОРУЖИЕ'
        }, {
          name: 'NPC'
        }, {
          name: 'РАСХОДНИКИ'
        }, {}
      ]
    };
  }
};
</script>

<style scoped lang="scss">
.navigation_background {
  position: fixed;
  z-index: 1;
  top: 112px;
  left: 0;
  bottom: 0;
  right: 0;
  background-color: #00010E70;
}
.navigation_menu {
  position: absolute;
  z-index: 1;
  top: 87px;
  display: grid;
  grid-template-columns: repeat(4, 360px);
  grid-template-rows: repeat(3, 120px);
  justify-content: center;
  gap: 1px;
  width: 100%;
  background-color: $color-dark-blue;
  padding-top: 24px;
  padding-bottom: 32px;
  //height: 440px;
  .navigation_menu_border {
    position: absolute;
    top: 23px;
    z-index: -1;
    justify-self: center;
    width: 100%;
    max-width: calc(4 * 360px);
    height: calc(3 * 120px + 4px);
    background-color: $color-light-blue-30;
  }
  .menu_item {
    position: relative;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    background-color: $color-dark-blue;
    color: $color-blue;
    font-size: 24px;
    font-weight: 400;
    transition: 0.5s;
    border-bottom: 1px solid transparent;
    cursor: pointer;
  }
  .menu_item:nth-child(4)::after,
  .menu_item:nth-child(8)::after,
  .menu_item:nth-child(12)::after,
  .menu_item:nth-child(odd)::before {
    content: '';
    position: absolute;
    left: -0.5px;
    bottom: -1px;
    width: 0;
    height: 0;
    border-bottom: 8px solid $color-blue; 
    border-right: 8px solid transparent;
  }
  .menu_item:nth-child(3)::after,
  .menu_item:nth-child(7)::after,
  .menu_item:nth-child(11)::after,
  .menu_item:nth-child(even)::before {
    content: '';
    position: absolute;
    right: -0.5px;
    bottom: -1px;
    width: 0;
    height: 0;
    border-bottom: 8px solid $color-blue; 
    border-left: 8px solid transparent;
  }
  .menu_item:hover {
    border-bottom: 1px solid $color-blue;
  }
  &::after {
    content: url("@/assets/svg/navigation_menu_line-3.svg");
    position: absolute;
    justify-self: center;
    bottom: -21px;
  }
}
.navigation_end_line {
  .left_line,
  .right_line {
    position: absolute;
    bottom: 0px;
    width: calc(100%/2 - 480px);
    border-top: 1px solid $color-blue;
  }
  .left_line {
    left: 0px;
  }
  .right_line {
    right: 0px;
  }
}
</style>
