<!--
 * @Author: shiliangL
 * @Date: 2022-04-23 13:17:56
 * @LastEditTime: 2022-08-02 10:19:04
 * @LastEditors: Do not edit
 * @Description:
-->

<script>
export default {
  name: 'DvaGridPanel',
  props: {
    column: {
      type: [Number],
      desc: '列数',
      default: () => 1
    },
    gap: {
      type: [Number],
      desc: '间隔',
      default: () => 0
    },
    gridStyle: {
      type: Object,
      desc: '组件属性对象',
      default: () => ({})
    }
  },
  data () {
    return {
      currenActive: 0,
      initConfig: {
      }
    }
  },
  render (h) {
    return h('div', {
      class: 'dva-grid-panel',
      style: {
        '--dva_column_num': this.column,
        '--dva_grid_gap': `${this.gap}px`,
        ...this.gridStyle
      }
    }, [
      this.$slots.default ? this.$slots.default : null
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva-grid-panel {
  width: 100%;
  height: 100%;
  display: grid;
  align-items: center;
  box-sizing: border-box;
  grid-gap: var(--dva_grid_gap);
  grid-template-columns: repeat(var(--dva_column_num), 1fr);
  // grid-template-rows: repeat(var(--dva_column_num), 1fr);
}
</style>
