<script>
export default {
  name: 'DvaTitleBar',
  props: {
    icon: {
      type: String,
      // default: () => 'iconfont dva-icon icon-chart-bar'
      default: () => ''
    },
    title: {
      type: String,
      default: () => '智慧城市标题'
    }
  },
  render (h) {
    return h('div', {
      class: 'dva-title-bar'
    }, [
      h('div', { class: 'dva-title-left' }, [
        this.icon ? h('div', { class: ['title-icon', this.icon] }) : null,
        h('div', { class: 'title-text' }, this.title)
      ]),
      h('div', { class: 'dva-title-right' })
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva-title-bar {
  @include hHeight(50);
  @include FontSize(28);
  @include Padding(0, 0, 0, 54);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-image: url("@/dva-datav2/assets/images/title-bar/tiltle2_bg@2x.png");
  background-repeat: no-repeat;
  .dva-title-left {
    position: relative;
    .title-icon {
      left: -34px;
      bottom: -1px;
      position: absolute;
      font-size: 22px;
    }
    .title-text{
      top: -2px;
      position: relative;
    }
  }
}
</style>
