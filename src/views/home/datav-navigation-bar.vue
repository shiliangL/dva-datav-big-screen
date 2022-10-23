<template>
   <div
      class="navigation"
      :style="navigationStyle"
    >
      <div
        class="navigation-item"
        v-for="(item,index) in navigation"
        :key="index"
        @click="click2Play(item)"
      >
        <div
          v-if="item.icon"
          :class="['dva-icon','iconfont',item.icon ]"
        ></div>
        <div
          class="title"
          v-if="showNavigationTitle"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
</template>

<script>

const { navigation = [], logoTitle, showNavigationTitle = true } = window._datavConfig || {}
export default {
  name: 'NavigationBar',
  data () {
    return {
      logoTitle,
      navigation,
      showNavigationTitle
    }
  },
  computed: {
    navigationStyle () {
      return this.showNavigationTitle ? { gap: '12px' } : { gap: '0px' }
    }
  }
}
</script>

<style lang="scss" scoped>
$themeColor: #007aff;

  .navigation {
    // font-size: 1rem;
    position: fixed;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    gap: 12px;
    align-items: center;

    .navigation-item {
      cursor: pointer;
      width: 66px;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .iconfont {
        font-size: 32px;
      }
      .title {
        font-size: 14px;
      }

      &:active {
        opacity: 0.78;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(135deg, #5efce8 10%, #736efe);
      }
    }
  }
</style>
