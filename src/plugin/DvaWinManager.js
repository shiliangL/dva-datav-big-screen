// eslint-disable-next-line no-unused-vars
import Vue from 'vue'

// 位置实例
const instance = {
  left: null,
  right: null,
  top: null
}

// 样式
const sidebar = {
  zIndex: 200,
  top: '6%',
  bottom: '6%',
  width: '22%',
  position: 'fixed'
}
// eslint-disable-next-line no-unused-vars
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

class DvaWinManager {
  constructor ({ store, router, opt = {} }) {
    this._store = store
    this._router = router
  }

  static _initVm ({ type, content, styles, props }) {
    const { _store, _router } = this
    const dom = document.createElement('div')
    document.body.appendChild(dom)

    return new Vue({
      el: dom,
      store: _store,
      router: _router,
      data () {
        return {
          show: true
        }
      },
      components: {
        contentMain: content || null
      },
      beforeDestroy () {
        console.log('beforeDestroy')
      },
      methods: {
        close () {
          if (!instance[type]) return
          return new Promise((resolve, reject) => {
            try {
              instance[type].show = false
              instance[type].$destroy()
              instance[type] = null
              document.body.removeChild(this.$el)
              resolve()
            } catch (error) {
              reject(error)
            }
          })
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
            on: {},
            style: {
              [type]: '10px',
              ...commonStyle[type],
              ...styles
            },
            props: {}
          },
          [
            // h(
            //   'div',
            //   {
            //     class: 'close',
            //     on: {
            //       click: this.close
            //     },
            //     style: {
            //       ...commonStyle.close
            //     }
            //   },
            //   ['关闭', this.show]
            // ),
            this.show ? h('contentMain') : null
          ]
        )
      }
    })
  }

  getWin ({ type = null } = {}) {
    if (!type) return null
    return instance[type]
  }

  openWin ({ type = 'left', content = '', styles, props }) {
    const instanceKey = Object.keys(instance)
    if (Vue.prototype.$isServer || !instanceKey.includes(type)) return
    if (instance[type]) {
      instance[type].close().then(() => {
        instance[type] = DvaWinManager._initVm({ type, content, styles, props })
      })
    } else {
      instance[type] = DvaWinManager._initVm({ type, content, styles, props })
    }
  }

  closeWin ({ type = null } = {}) {
    if (!type) return
    instance[type] && instance[type].close()
  }
}

export default DvaWinManager
