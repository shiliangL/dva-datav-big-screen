import Vue from 'vue'

//  位置实例
const instance = {
  left: null,
  right: null
}
// 位置区块
const position = Object.keys(instance)

// 样式
const sidebar = {
  zIndex: 200,
  top: '10%',
  bottom: '10%',
  width: '320px',
  position: 'fixed'
  // border: '1px solid #5efce8'
}
const commonStyle = {
  left: sidebar,
  right: sidebar,
  close: {
    top: '10px',
    right: '10px',
    cursor: 'pointer',
    position: 'absolute'
  }
}

const DatavWindow = function ({ store, router, opt = {} }) {
  return function ({ type = 'left', content, styles, modalProps, props }) {
    if (Vue.prototype.$isServer || !position.includes(type)) return
    const _thisVm = instance[type]
    if (_thisVm) _thisVm.closed()
    const dom = document.createElement('div')
    document.body.appendChild(dom)
    instance[type] = new Vue({
      el: dom,
      store,
      router,
      data () {
        return {
          show: true
        }
      },
      components: {
        contentMain: content,
        chart: window.httpVueLoader('vue/shiliangl.vue')
        //  'url:http://258754.cn/2020/ehs/component/chart.vue'
      },
      beforeDestroy () {
        // console.log('beforeDestroy')
      },
      methods: {
        closed () {
          this.show = false
          document.body.removeChild(this.$el)
          this.$destroy()
          instance[type] = null
          console.log(this.$el, '=this.$el=')
        }
      },
      render (h) {
        return h(
          'div',
          {
            class: [
              'datav-window',
              'fadeOut-aside',
              'ground_glass',
              { [type]: this.show }
            ],
            style: {
              [type]: '10px',
              ...commonStyle[type],
              ...styles
            },
            props: {},
            on: {}
          },
          [
            h(
              'div',
              {
                class: 'close',
                on: {
                  click: this.closed
                },
                style: commonStyle.close
              },
              ['关闭', this.show]
            ),
            this.show ? h('contentMain') : null,
            h('chart', {
              attrs: {
                id: 'foo'
              },
              props: {
                ad: '北京市市辖区房山区南窖乡'
              },
              style: {
                height: '220px'
              }
            })
          ]
        )
      }
    })
    return instance[type]
  }
}

export default DatavWindow
