<script>

import DvaCount2 from 'dva-datav2/dva-count2'

export default {
  name: 'DvaProgressList',
  props: {
    dataList: {
      type: Array,
      desc: '数据对象',
      default: () => [
        { icon: '', name: '硕士', value: 320, unit: '人' },
        { icon: '', name: '本科', value: 632, unit: '人' },
        { icon: '', name: '专科', value: 2422, unit: '人' },
        { icon: '', name: '其他', value: 3600, unit: '人' }
      ]
    },
    color: {
      type: [String],
      desc: '进度条颜色',
      default: () => 'linear-gradient(-90deg, #5071FF, #21CDFF)' || 'rgb(32, 160, 255)'
    },
    height: {
      type: [Number],
      desc: '进度条高度',
      default: () => 8
    },
    isTop: {
      type: [Boolean],
      desc: '是否是排行榜显示,如果是则最大的数据项会作为100%显示',
      default: () => false
    },
    isSort: {
      type: [Boolean],
      desc: '是否排序',
      default: () => true
    }
  },
  components: {
    DvaCount2
  },
  computed: {
    renderList () {
      const list = this.isSort ? (this.dataList.slice(0).sort(({ value: a }, { value: b }) => (b - a))) : this.dataList
      const value = list.map(({ value }) => (value || 0))
      const min = Math.min(...value) || 0
      const minAbs = Math.abs(min)
      const max = Math.max(...value) || 0
      const maxAbs = Math.abs(max)
      const total = this.isTop ? (maxAbs + minAbs) : list.reduce((acc, cur) => acc + (cur.value || 0), 0)
      return this.isTop ? (list.map((row, i) => ({ ...row, index: i + 1, percent: (((row.value + minAbs) / total * 100)).toFixed(2) })) || []) : (list.map((row, i) => ({ ...row, index: i + 1, percent: (((row.value) / total * 100)).toFixed(2) })) || [])
    }
  },
  render (h) {
    return h('div', { class: 'datav-progress-list' }, [
      h('ul', {
        class: 'progress-bar'
      }, [
        this.renderList.map(kk => {
          return h('li', {}, [
            this.$scopedSlots.default
              ? this.$scopedSlots.default({ row: kk })
              : h('div', { class: 'flex-box' }, [
                h('div', { class: 'flex-box-item text' }, [
                  h('i', { class: ['icon', kk.icon] }),
                  h('span', {}, kk.name)
                ]),
                h('div', { class: 'flex-box-item value' }, [
                  h('DvaCount2', { props: { end: kk.value } }),
                  h('span', { class: 'unit' }, kk.unit)
                ])
              ]),
            h('div', { class: 'percent-bar', style: { height: `${this.height}px` } }, [
              h('p', { style: { width: `${kk.percent}%`, background: this.color } })
            ])
          ])
        })
      ])
    ])
  }
}
</script>

<style lang="scss" scoped>
.datav-progress-list {
  padding: 10px 10px;
  .progress-bar {
    margin: 0;
    padding: 0;
    list-style: none;
    .flex-box {
      display: flex;
      align-items: center;
      justify-content: space-between;
    }
    .text {
      font-size: 14px;
      font-family: Alibaba PuHuiTi 2;
      font-weight: normal;
      color: #e2efff;
    }
    .value {
      font-size: 18px;
      font-family: Blender;
      font-weight: 500;
      color: #63e1ff;
      display: flex;
      align-items: baseline;
    }
    .unit {
      font-size: 12px;
      margin-left: 2px;
      display: inline-block;
    }

    li {
      width: 100%;
      list-style: none;
      position: relative;
      margin-bottom: 8px;
      .icon {
        position: relative;
        margin-right: 4px;
        display: inline-block;
      }
      .percent-bar {
        height: 8px;
        margin-top: 2px;
        background: rgba(200, 235, 255, 0.2);
        p {
          height: 100%;
          background: #3aa5ff;
          transition: all 0.6s ease;
          position: relative;
          &:before {
            height: 100%;
            content: "";
            opacity: 0;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: #fff;
            position: absolute;
            animation: dva-progress-active 2s ease-in-out infinite;
          }
        }
      }
    }
  }
}
</style>
