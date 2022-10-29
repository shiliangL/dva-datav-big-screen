<template>
  <div class="title-bar ground_glass">
    <span class="title-text"> {{ logoTitle }} </span>
  </div>
</template>

<script>

const { logoTitle } = window._datavConfig || {}
export default {
  data () {
    return {
      logoTitle
    }
  }
}
</script>

<style lang="scss" scoped>
.title-bar {
  top: 0;
  left: 0;
  z-index: 20;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 54px;
  width: 100%;
  // mask-image: linear-gradient(
  //   160deg,
  //   rgba(0, 0, 0, 0.66) 100%,
  //   transparent 100%
  // );
  // 增加遮罩蒙版
  mix-blend-mode: overlay; // 增加颜色混合模式

  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  // box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
  //   rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  // background-image: linear-gradient(350deg, #5efce8 10%, #736efe);
  clip-path: polygon(
    0 0,
    100% 0,
    100% calc(100% - 20px),
    75% calc(100% - 20px),
    72.5% 100%,
    27.5% 100%,
    25% calc(100% - 20px),
    0 calc(100% - 20px),
    0 0
  );
  .title-text {
    color: #fff;
    font-weight: 600;
    font-size: 1.2rem;
  }

  &::after {
    content: " ";
    display: block;
    position: absolute;
    top: 0;
    width: 126px;
    height: 95%;
    display: block;
    position: absolute;
    background-image: linear-gradient(
      126deg,
      transparent 30%,
      #dbf3fb 48%,
      #e4f9ff 50%,
      #f9f9f9 52%,
      transparent 70%
    ); // 反光元素
    animation: scanning 3.5s infinite linear;
    opacity: 0.7;
  }
}

@keyframes scanning {
  0% {
    left: -20px;
    opacity: 0;
  }
  10% {
    opacity: 0.7;
  }
  70% {
    opacity: 0.7;
  }
  80% {
    left: 90%;
    opacity: 0;
  }
  100% {
    right: 0px;
    opacity: 0;
  }
}
</style>
