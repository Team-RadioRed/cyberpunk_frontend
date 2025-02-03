<template>
  <div class="guide_container">
    <div class="guide_wrapper">
      <div class="title_wrapper">
        <div class="title_icon">
          <img
            src="@/assets/svg/icon_title.svg"
            alt="icon">
        </div>
        <h2 class="guide_title">
          Популярные справочники
        </h2>
      </div>
      <ul class="guide_elements">
        <li class="guide_element">
          <in-progress-component/>
          <h3 class="guide_element_title">
            &#91; ОРУЖИЕ &#93;
          </h3>
        </li>
        <li class="guide_element">
          <in-progress-component/>
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; Импланты &#93;
          </h3>
        </li>
        <li class="guide_element">
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; Нетранинг &#93;
          </h3>
        </li>
        <li class="guide_element">
          <in-progress-component/>
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; Расходники &#93;
          </h3>
        </li>
        <li class="guide_element">
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; Роли &#93;
          </h3>
        </li>
        <li class="guide_element">
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; Транспорт &#93;
          </h3>
        </li>
        <li class="guide_element">
          <div class="guide_element_back"/>
          <h3 class="guide_element_title">
            &#91; NPC &#93;
          </h3>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import InProgressComponent from '@/components/Other/InProgressComponent/InProgressComponent.vue';

export default {
  name: 'GuideComponent',
  components: {
    InProgressComponent
  }
};
</script>

<style scoped lang="scss">
.guide_container {
  width: 100%;
  display: flex;
  justify-content: flex-end;
  gap: 25px;
  align-self: flex-end;
  .guide_wrapper {
    width: 100%;
    max-width: 646px;
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
      .guide_title {
        text-align: start;
      }
    }
    .guide_elements {
      list-style: none;
      display: grid;
      grid-template-columns: repeat(2, 311px);
      grid-template-rows: repeat(4, 145px);
      gap: 21px;
      box-sizing: border-box;
      .guide_element {
        position: relative;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        transition: 0.8s;
        background-repeat: no-repeat;
        cursor: pointer;
        .guide_element_title {
          margin-bottom: 20px;
          margin-left: 20px;
          color: $color-red;
          font-size: 24px;
          font-weight: 400;
          transition: 0.5s;
          text-transform: uppercase;
        }
        &:hover {
          transition: 0.8s;
          .guide_element_title {
            margin-left: 40px;
          }
        }
      }
      li:nth-child(1) {
        background: url('@/assets/svg/back_weapon.svg');
        grid-row: span 2;
        &::after {
          content: '';
          @include triangle-element($color-red, 0, 0, -28px);
        }
      }
      li:nth-child(2) {
        background: url('@/assets/svg/back_implants.svg');
        div:first-child {
          left: 20px;
        }
      }
      li:nth-child(3) {
        background: url('@/assets/svg/back_netraning.svg');
      }
      li:nth-child(4) {
        background: url('@/assets/svg/back_material.svg');
      }
      li:nth-child(5) {
        background: url('@/assets/svg/back_role.svg');
      }
      li:nth-child(6) {
        background: url('@/assets/svg/back_transport.svg');
        &::after {
          content: '';
          @include triangle-element($color-red, 90deg, -18px, -8px);
        }
      }
      li:nth-child(7) {
        background: url('@/assets/svg/back_npc.svg');
      }
    }
  }
}
</style>
