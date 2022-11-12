<script>

import {
  BoxGeometry,
  Mesh,
  MeshBasicMaterial,
  PerspectiveCamera,
  Scene,
  GridHelper,
  CubeTextureLoader,
  MeshPhongMaterial,
  PlaneGeometry,
  PointLight,
  HemisphereLight,
  AmbientLight,
  WebGLRenderer
} from 'three'

import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'

export default {
  name: 'ThreeApp',
  mounted () {
    this.$nextTick().then(() => {
      this.initScene()
    })
  },
  methods: {
    async initScene () {
      const scene = new Scene()
      const camera = new PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000)

      const canvas = this.$el
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
      const renderer = new WebGLRenderer({ canvas })

      // scene.background = new Color(0xe0e0e0)
      // scene.fog = new Fog(0xe0e0e0, 20, 100)

      const loader = new CubeTextureLoader()
      const imgs = ['right.jpg', 'left.jpg', 'top.jpg', 'bottom.jpg', 'front.jpg', 'back.jpg'].map(item => ('images/skybox/cloudy/' + item))
      const texture = loader.load(imgs)
      scene.background = texture

      const geometry = new BoxGeometry(1, 1, 1)
      const material = new MeshBasicMaterial({ color: 0x00ff00 })
      const cube = new Mesh(geometry, material)

      const ambient = new AmbientLight(0x444444)
      scene.add(ambient)// 环境光对象添加到scene场景中

      // lights

      const hemiLight = new HemisphereLight(0xffffff, 0x444444)
      hemiLight.position.set(0, 20, 0)
      scene.add(hemiLight)

      // 点光源
      const point = new PointLight(0xffffff)
      // 设置点光源位置，改变光源的位置
      point.position.set(400, 200, 300)
      scene.add(point)

      // ground
      const mesh = new Mesh(new PlaneGeometry(2000, 2000), new MeshPhongMaterial({ color: 0x999999, depthWrite: false }))
      mesh.rotation.x = -Math.PI / 2
      scene.add(mesh)

      const grid = new GridHelper(200, 40, 0x000000, 0x000000)
      grid.material.opacity = 0.2
      grid.material.transparent = true
      scene.add(grid)

      const controls = new OrbitControls(camera, renderer.domElement)

      // scene.add(cube)
      // camera.position.z = 2
      // camera.position.x = 2
      // camera.position.y = 4

      camera.position.set(1, 2, 2)
      // camera.lookAt(0, 20, 10)

      const gltfLoader = new GLTFLoader()
      const gltf = await gltfLoader.loadAsync('model/mclaren/scene.gltf')
      gltf.scene.traverse(n => {
        console.log(n, '=x=')
      })
      scene.add(gltf.scene)

      function animate () {
        requestAnimationFrame(animate)

        cube.rotation.x += 0.01
        cube.rotation.y += 0.01

        controls.update()

        renderer.render(scene, camera)
      };

      animate()
    }
  },
  render (h) {
    return h('canvas', { class: 'page' })
  }
}
</script>

<style lang="scss" scoped>

</style>
