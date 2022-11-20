<script>

import threeOpt from '@/utils/threeOpt'
const { ThreeApp, ThreeCube } = threeOpt

export default {
  name: 'threeCube',
  mounted () {
    this.$nextTick().then(() => {
      const App = new ThreeApp({ canvas: this.$el })
      const Cube = new ThreeCube({ canvas: this.$el })
      App.addModel(Cube)
      console.log(App, '===App==')
    })
  },
  render (h) {
    return h('canvas', {
      attrs: {
        width: window.innerWidth,
        height: window.innerHeight
      }
    })
  }
}
</script>
