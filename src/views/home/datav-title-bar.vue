<template>
  <div class="title-bar">
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
  animation-fill-mode: both;
  -webkit-animation-fill-mode: both;
  box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px,
    rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
  background-image: linear-gradient(350deg, #5efce8 10%, #736efe);
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
    // -webkit-background-clip: text;
    // -webkit-text-fill-color: transparent;
    // background-image: linear-gradient(135deg, #5efce8 10%, #736efe);
  }
}
</style>
