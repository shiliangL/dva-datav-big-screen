<template>
  <div
    class="navigation"
    :style="navigationStyle"
  >
    <div
      :class="['navigation-item',{'active': currentActive === index}]"
      v-for="(item,index) in navigation"
      :key="index"
      @click="click2show(item,index)"
    >
      <div class="navigation-item-inner ground_glass">
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
      showNavigationTitle,
      currentActive: null
    }
  },
  computed: {
    navigationStyle () {
      return this.showNavigationTitle ? { gap: '12px' } : { gap: '0px' }
    }
  },
  methods: {
    click2show (item, index) {
      this.currentActive = index
      // if (this) return
      this.$DvaWinManager.openWin({
        type: 'left',
        styles: {
        },
        content: () => import('@/views/aside/smartCityLeftLv2.vue')
      })
      this.$DvaWinManager.openWin({
        type: 'right',
        styles: {
        },
        content: () => import('@/views/aside/smartCityLeftLv2.vue')
      })
      // setTimeout(() => {
      //   win && win.closed && win.closed()
      //   console.log(win)
      // }, 2000)
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
  gap: 12px;
  bottom: 20px;
  z-index: 100;
  display: flex;
  align-items: center;
  transform: translateX(-50%);

  .navigation-item {
    width: 66px;
    height: 60px;
    padding: 6px;
    overflow: hidden;
    position: relative;
    border-radius: 4px;
    user-select: none;
    .iconfont {
      font-size: 32px;
    }
    .title {
      font-size: 14px;
    }

    &.active {
      transform: all 0.35s;
      &::after {
        z-index: 1;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;
        transform: all 0.35s;
        transform-origin: bottom right;
        background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        animation: animate 8s linear infinite;
        animation-delay: -4s; // 动画序列的第 4s 秒位置处立即开始
      }

      &::before {
        z-index: 1;
        position: absolute;
        content: "";
        width: 100%;
        height: 100%;
        top: -50%;
        left: -50%;
        transform: all 0.35s;
        transform-origin: bottom right;
        background: linear-gradient(0deg, transparent, #45f3ff, #45f3ff);
        animation: animate 8s linear infinite;
      }
    }

    .navigation-item-inner {
      inset: 1px;
      z-index: 10;
      border-radius: 4px;
      position: absolute;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      // background:#000;
    }
  }
}

@keyframes animate {
  0% {
    transform: rotate(0deg);
  }

  100% {
    transform: rotate(360deg);
  }
}
</style>
