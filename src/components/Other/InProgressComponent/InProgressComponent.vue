<template>
  <div class="element_inprogress">
    В РАЗРАБОТКЕ
  </div>
</template>

<script>
export default {
  name: 'InProgressComponent',
  props: {
  }
};
</script>

<style scoped lang="scss">
.element_inprogress {
  position: absolute;
  top: -4px;
  left: -4px;
  width: 135px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(-45deg, transparent 7px, $color-light-blue 0);
  color: $color-dark-blue;
  font-size: 16px;
  font-weight: 500;
}
</style>