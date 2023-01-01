<script>
import DvaCount2 from 'dva-datav2/dva-count2'
import DvaGridPanel from 'dva-datav2/dva-grid-panel'

export default {
  name: 'DvaGridSection',
  props: {
    dataList: {
      type: Array,
      default: () => ([
        {
          text: '基地运营',
          num: 350,
          unit: '人',
          icon: 'icon-yingyong'
        },
        {
          text: '基地运营',
          num: 350,
          unit: '人',
          icon: 'icon-yingyong'
        },
        {
          text: '基地运营',
          num: 350,
          unit: '人',
          icon: 'icon-yingyong'
        },
        {
          text: '研发中心',
          num: 350,
          unit: '人',
          icon: 'icon-yingyong'
        }
      ])
    },
    column: {
      type: [Number],
      desc: '列数',
      default: () => 2
    },
    clickEffect: {
      type: [Boolean],
      desc: '点击效果',
      default: () => true
    },
    animationEffect: {
      type: [Boolean],
      desc: 'ICON动画',
      default: () => false
    },
    numberColor: {
      type: [String],
      desc: '数字动画颜色',
      default: () => '#63e1ff'
    },
    gap: {
      type: [Number],
      desc: '间隔',
      default: () => 6
    },
    gridStyle: {
      type: Object,
      desc: '组件属性对象',
      default: () => ({})
    },
    showCircle: {
      type: Boolean,
      desc: '是否展示为图表',
      default: false
    }
  },
  components: {
    DvaCount2,
    DvaGridPanel
  },
  methods: {
    clickRow (kk) {
      this.$emit('click', kk)
    },
    validationImage (string) {
      // eslint-disable-next-line prefer-regex-literals
      const reg = new RegExp(/.(png|jpg|jpeg|gif)$/g)
      return reg.test(string)
    }
  },
  render (h) {
    return h('dva-grid-panel', {
      props: {
        gap: this.gap,
        column: this.column,
        gridStyle: this.gridStyle
      },
      class: 'datav-grid-information'
    }, [
      this.dataList.map((kk, index) => {
        return h('div', {
          on: {
            click: () => this.clickRow(kk)
          },
          class: ['grid-group-item', { click: this.clickEffect }]
        }, [
          kk.icon
            ? (this.validationImage(kk.icon)
                ? h('img', {
                  attrs: { src: kk.icon },
                  class: ['grid-group-item-left', 'dva-img-icon', { animationEffect: this.animationEffect }]
                })
                : kk.icon
                  ? h('div', {
                    class: ['grid-group-item-left', 'dva-img-icon']
                  }, [
                    h('div', { class: ['dva-icon', 'iconfont', kk.icon, { animationEffect: this.animationEffect }] })
                  ])
                  : null)
            : null,
          h('div', { class: 'grid-group-item-right' }, [
            h('div', { class: 'grid-title' }, [kk.text]),
            h('div', { class: 'dva-number-unit' }, [
              h('div', { class: 'grid-content' }, [kk.content] || kk.num),
              h('dva-count2', { class: 'grid-num', props: { end: kk.num } }),
              h('span', { class: 'unit' }, [kk.unit])
            ])
          ])
        ])
      })
    ])
  }
}
</script>

<style lang="scss" scoped>
.datav-grid-information {
  margin: 6px 0;
  .grid-group-item {
    display: flex;
    align-items: center;
    .dva-img-icon {
      width: 52px;
      height: 42px;
      overflow: hidden;
      display: flex;
      align-items: center;
      justify-content: center;
      .iconfont {
        font-size: 36px;
      }
    }
    .grid-group-item-circle {
      width: 82px;
      height: 72px;
    }
    .animationEffect {
      transition: all 0.25s;
      animation: float 3s ease-in-out infinite;
    }
    .dva-number-unit {
      display: flex;
      align-items: baseline;
      .grid-content {
        color: #63e1ff;
        font-size: 16px;
      }
      .grid-num {
        color: #63e1ff;
        font-size: 22px;
      }
      .dva-count2-number {
        font-size: 22px;
      }
      .unit {
        font-size: 12px;
        margin-left: 2px;
        color: #63e1ff;
        display: inline-block;
      }
    }
    .grid-group-item-right {
      flex: 1;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }
}

@keyframes float {
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-2px);
  }
  100% {
    transform: translateY(0px);
  }
}
</style>
