<template>
  <!-- eslint-disable-next-line vuejs-accessibility/click-events-have-key-events -->
  <li
    :class="!isOpen ? 'navigation_element' : 'navigation_element open'"
    @click="openNavigationMenu">
    <div class="element_title">
      {{ title }}
    </div>
    <div class="element_arrow">
      <img
        src="@/assets/svg/icon_arrow.svg"
        alt="arrow" >
    </div>
  </li>
</template>

<script>

export default {
  name: 'NavigationElement',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    };
  },
  methods: {
    openNavigationMenu() {
      this.isOpen = !this.isOpen;
    }
  }
};
</script>

<style scoped lang="scss">
.navigation_element {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  transition: 0.2s;
  cursor: pointer;
  .element_arrow {
    display: flex;
  }
  &:hover {
    color: $color-dark-blue;
    img {
      transition: 0.3s;
      filter: $color-dark-blue-force;
    }
  }
}
.open {
  color: $color-dark-blue;
  .element_arrow {
    transform: rotate(180deg);
    img {
      transition: 0.3s;
      filter: $color-dark-blue-force;
    }
  }
}
</style>
