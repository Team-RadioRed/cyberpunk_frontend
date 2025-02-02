<template>
    <footer class="footer_wrapper">
      <div class="footer_divide_line">
        <div class="left_line"/>
        <div class="center_line"/>
        <div class="right_line"/>
      </div>
      <h2 class="footer_title">НОВОСТИ</h2>
      <div>
        <ul class="footer_list">
          <li
            v-for="(itemData, index) in dataFooter"
            :key="index"
            class="footer_item">
            <h3 class="footer_item_title">
              {{ itemData.title }}
            </h3>
            <div class="footer_item_body">
              {{ itemData.body_text }}
            </div>
            <div class="footer_item_bottom">
              <div class="item_bottom_date">
                {{ itemData.date }}
              </div>
              <button class="item_bottom_btn">
                Читать далее
              </button>
            </div>
          </li>
        </ul>
      </div>
    </footer>
</template>

<script>
export default {
  name: 'FooterComponent',
  components: {
  },
  data() {
    return {
      dataFooter: [
        {
          title: "Обновление 1.5 для Cyberpunk RED: Новые возможности и миссии!",
          body_text: "Компания R. Talsorian Games с радостью объявляет о выходе долгожданного обновления 1.5 для настольно-ролевой игры Cyberpunk RED. Это обновление приносит множество новых возможностей, миссий и улучшений. В статье будет рассказано о новых локациях, персонажах и сюжетных линиях, которые добавят глубину и разнообразие в игровой мир.",
          date: "24.09.2024 14:30"
        },
        {
          title: 'Анонс нового дополнения для Cyberpunk RED: "Тени Найт-Сити"',
          body_text: 'R. Talsorian Games объявила о предстоящем выпуске нового дополнения для Cyberpunk RED под названием "Тени Найт-Сити". В статье будет рассказано о новых локациях, персонажах и сюжетных линиях, которые добавят глубину и разнообразие в игровой мир. Ожидайте новых вызовов и захватывающих приключений в темных уголках Найт-Сити.',
          date: '20.08.2024 15:27'
        },
        {
          title: 'Обновление 1.5 для Cyberpunk RED: Новые возможности и миссии!',
          body_text: 'Компания R. Talsorian Games с радостью объявляет о выходе долгожданного обновления 1.5 для настольно-ролевой игры Cyberpunk RED. Это обновление приносит множество новых возможностей, миссий и улучшений. В статье будет рассказано о новых локациях, персонажах и сюжетных линиях, которые добавят глубину и разнообразие в игровой мир.',
          date: '24.09.2024 14:30'
        },
        {
          title: 'Анонс нового дополнения для Cyberpunk RED: "Тени Найт-Сити"',
          body_text: 'R. Talsorian Games объявила о предстоящем выпуске нового дополнения для Cyberpunk RED под названием "Тени Найт-Сити". В статье будет рассказано о новых локациях, персонажах и сюжетных линиях, которые добавят глубину и разнообразие в игровой мир. Ожидайте новых вызовов и захватывающих приключений в темных уголках Найт-Сити.',
          date: '20.08.2024 15:27'
        }
      ]
    }
  },
  methods: {
  }
};
</script>

<style scoped lang="scss">
.footer_wrapper {
  position: relative;
  padding: 0 46px 70px 46px;
  margin-top: 76px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  .footer_divide_line {
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    .center_line {
      position: relative;
      max-width: 766px;
      width: 100%;
      top: -17px;
      border-top: 1px solid $color-blue;
      &::after,
      &::before {
        content: '';
        position: absolute;
        top: 0px;
        height: 16.5px;
        width: 1.5px;
        background: $color-blue;
      }
      &::after {
        left: -9px;
        -webkit-transform: skew(135deg);
        -moz-transform: skew(135deg);
        -o-transform: skew(135deg);
      }
      &::before {
        right: -8px;
        -webkit-transform: skew(45deg);
        -moz-transform: skew(45deg);
        -o-transform: skew(45deg);
      }
    }
    .left_line,
    .right_line {
      position: absolute;
      top: 0px;
      width: calc(100%/2 - 398.5px);
      border-top: 1px solid $color-blue;
    }
    .left_line {
      left: 0px;
    }
    .right_line {
      right: 0px;
    }
  }
  .footer_title {
    text-align: start;
    margin-top: 10px;
    margin-bottom: 24px;
  }
  .footer_list {
    max-width: 840px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    font-family: "Golos Text";
    .footer_item {
      position: relative;
      display: flex;
      //background: no-repeat url('@/assets/svg/footer_item_bg-odd.svg');
      background-size: cover;
      flex-direction: column;
      align-items: flex-start;
      justify-content: center;
      gap: 14px;
      padding: 31px 40px;
      color: $color-light-blue;
      &::before {
        content: url('@/assets/svg/footer_item_bg-odd.svg');
        position: absolute;
        top: -10px;
        left: -32px;
        z-index: -1;
      }
      .footer_item_title {
        font-size: 18px;
      }
      .footer_item_body {
        width: 100%;
        max-height: 80px;
        display: box;
        display: -webkit-box;
        -webkit-box-orient: vertical;
        box-orient: vertical;
        line-clamp: 3;
        -ms-line-clamp: 3;
        -webkit-line-clamp: 3;
        overflow: hidden;
        text-overflow: ellipsis;
        font-size: 18px;
        color: $color-light-blue-60;
      }
      .footer_item_bottom {
        width: 100%;
        display: flex;
        justify-content: space-between;
        color: $color-light-blue-30;
        font-size: 18px;
        .item_bottom_btn {
          display: inline-block;
          text-transform: uppercase;
          color: $color-blue;
          font-size: 18px;
          color: $color-blue;
          &:hover {
            color: $color-blue;
          }
        }
      }
    }
    .footer_item:nth-child(even) {
      .footer_item_bottom {
        .item_bottom_btn {
          color: $color-red;
          &:hover {
            color: $color-red;
          }
        }
      }
      &::before {
        content: url('@/assets/svg/footer_item_bg-even.svg');
      }
    }
  }
}
</style>