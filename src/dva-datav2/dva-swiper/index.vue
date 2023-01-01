<!--
 * @Author: shiliangL
 * @Date: 2022-07-20 15:26:36
 * @LastEditTime: 2022-08-19 22:15:24
 * @LastEditors: Do not edit
 * @Description:
-->
<script>

import { debounce } from 'throttle-debounce'
import { addListener, removeListener } from 'resize-detector'

export default {
  name: 'DvaSwiper',
  props: {
    data: {
      type: Array,
      desc: '数据配置项',
      default: () => []
    },
    height: {
      type: Number,
      desc: '滚动高度',
      default: () => 420
    },
    config: {
      type: Object,
      desc: 'Swiper配置项',
      default: () => ({})
    },
    carouselStyle: {
      type: Object,
      desc: '走马灯样式',
      default: () => ({})
    },
    autoResize: {
      type: Boolean,
      desc: '是否自适应。貌似...没什么用',
      default: () => false
    },
    carouselClassName: {
      type: String,
      desc: 'swiper-slide 一项的类名设置',
      default: () => ''
    }
  },
  data () {
    return {
      // observer: true, //修改swiper自己或子元素时，自动初始化swiper
      // observeParents: true, //修改swiper的父元素时，自动初始化swiper
      defaultConfig: {
        loop: true,
        observer: true,
        observeParents: true,
        direction: 'vertical',
        autoplay: {
          delay: 5000,
          disableOnInteraction: false
        },
        spaceBetween: 4, // 间隔
        slidesPerView: 5, // 显示个数
        slidesPerGroup: 1, // 滚动多少
        pagination: false
      },
      mergedConfig: {}
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.initSwiper()
    })
    this.$once('hook:beforeDestroy', () => {
      if (this.autoResize) removeListener(this.$el, this._resizeHandler)
      this._swiper && this._swiper.destroy(false)
    })
  },
  methods: {
    initSwiper () {
      const { Swiper } = window
      if (!Swiper) return console.error('请引入使用Swiper')
      const { defaultConfig, config } = this
      this._swiper = new Swiper(this.$el.querySelector('.swiper'), {
        ...defaultConfig,
        ...config
      })

      // 是否自动适配
      if (this.autoResize) {
        this._resizeHandler = debounce(20, (dom) => this.resizeDvaSwiper(dom), { atBegin: true })
        addListener(this.$el, this._resizeHandler)
      }
      this.$emit('ready', this._swiper)
      if (this._swiper) {
        this._swiper.el.onmouseover = () => {
          this._swiper.autoplay && this._swiper.autoplay && this._swiper.autoplay.stop()
        }
        this._swiper.el.onmouseout = () => {
          this._swiper.autoplay && this._swiper.autoplay.start && this._swiper.autoplay.start()
        }
      }
    },
    resizeDvaSwiper (dom) {
      this._swiper && this._swiper.update()
    }
  },
  render (h) {
    const setHeightStyle = this.height ? { height: `${this.height}px` } : { flex: 1 }

    return h('div', { class: 'dva-swiper-wrapper' }, [
      h('div', { class: 'swiper-header' }, [
        this.$slots.header ? this.$slots.header : null
      ]),
      h('div', {
        class: 'swiper',
        style: {
          ...setHeightStyle
        }
      }, [
        h('div', { class: 'swiper-wrapper' }, [
          this.data.map((item, index) => {
            return h('div', { class: ['swiper-slide', { [this.carouselClassName]: true }], style: { ...this.carouselStyle } }, [
              this.$scopedSlots.default ? this.$scopedSlots.default({ item, index }) : '默认插槽自定义内容'
            ])
          })
        ]),
        h('div', { class: 'pagination' })
      ])
    ])
  }
}
</script>

<style lang="scss" scoped>
.dva-swiper-wrapper {
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  .swiper {
    width: 100%;
    overflow: hidden;
    .swiper-slide {
      width: 100%;
    }
  }
}
</style>
