<script>
import {
  BoxGeometry,
  Mesh,
  MeshNormalMaterial,
  PerspectiveCamera,
  Scene,
  WebGLRenderer
} from 'three'

export default {
  name: 'ThreeApp',
  mounted () {
    this.$nextTick().then(() => {
      this.initScene()
    })
  },
  methods: {
    initScene () {
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)
      const canvas = this.$el
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const renderer = new WebGLRenderer({ canvas })

      const geometry = new BoxGeometry()
      const material = new MeshNormalMaterial()
      const cube = new Mesh(geometry, material)
      scene.add(cube)

      function animate () {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        renderer.render(scene, camera)
      };

      animate()
    }
  },
  render (h) {
    return <canvas class="page">xxx</canvas>
  }
}
</script>

<style lang="scss" scoped></style>
