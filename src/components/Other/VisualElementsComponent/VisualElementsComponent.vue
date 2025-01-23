<template>
  <div :class="`visual_elements ${isLeft ? 'left-side' : ''}`">
    <span class="element" />
    <span class="element" />
    <span class="element" />
    <span class="element" />
    <span class="element" />
    <span class="element" />
    <span class="element" />
  </div>
</template>

<script>
export default {
  name: 'VisualElementsComponent',
  props: {
    isLeft: {
      type: Boolean,
      required: false
    }
  }
};
</script>

<style scoped lang="scss">
.visual_elements {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  .element {
    position: relative;
    height: 16px;
    &:nth-child(1) {
      padding-right: 14px;
    }
    &:nth-child(2) {
      padding-right: 4px;
    }
    &:nth-child(3) {
      padding-right: 71px;
    }
    &:nth-child(4) {
      padding-right: 21px;
    }
    &:nth-child(5) {
      padding-right: 8px;
    }
    &:nth-child(6) {
      padding-right: 42px;
    }
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      background-color: $color-red;
      height: 16px;
      width: 5px;
    }
    &:nth-child(3)::after {
      width: 12px;
    }
    &:nth-child(5)::after {
      width: 8px;
    }
  }
}
.visual_elements.left-side {
  transform: scale(-1);
}
</style>
