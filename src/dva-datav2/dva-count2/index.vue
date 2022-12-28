<!--
 * @Author: shiliangL
 * @Date: 2021-12-07 10:39:34
 * @LastEditTime: 2022-08-01 18:29:36
 * @LastEditors: Do not edit
 * @Description: 数据数字效果
 * @Description: 不建议设置小数位。回导致数据的不准确
-->

<script>

import countTo from 'vue-count-to'

export default {
  name: 'DvaCount2',
  props: {
    start: {
      desc: '开始数值',
      type: [Number, String],
      default: 0
    },
    end: {
      desc: '结束数值',
      type: [Number, String],
      default: 0
    },
    duration: {
      desc: '动画持续时间',
      type: [Number, String],
      default: 3000
    },
    autoplay: {
      desc: '自动播放效果',
      type: [Boolean],
      default: true
    },
    decimals: {
      desc: '允许小数位数',
      type: [Number],
      default: 0
    },
    separator: {
      desc: '千位分隔符',
      type: [String],
      default: ''
    },
    prefix: {
      desc: '前缀',
      type: [String],
      default: ''
    },
    suffix: {
      desc: '后缀',
      type: [String],
      default: ''
    }
  },
  components: {
    countTo
  },
  methods: {
    mountedCallback () {
      this.$nextTick().then(() => {
        if (this.$refs.count) {
          this.autoplay && this.$refs.count.star && this.$refs.count.start()
        }
      })
    }
  },
  render (h) {
    const { end, start, duration, decimals, separator, autoplay, prefix, suffix } = this
    return h('span', { class: ['dva_count2_wrap'] }, [
      this.$slots.prefix ? this.$slots.prefix : null,
      h('count-to', {
        ref: 'count',
        class: 'dva_count2',
        props: {
          prefix,
          suffix,
          duration,
          decimals,
          separator,
          autoplay,
          'end-val': end,
          'start-val': start
        },
        on: {
          mountedCallback: this.mountedCallback
        }
      }),
      this.$slots.suffix ? this.$slots.suffix : null
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva_count2_wrap{
  display: flex;
  align-items: baseline;
  .dva_number_unit{
    overflow: hidden;
  }
}
</style>
