<script>

import threeOpt from '@/utils/threeOpt'
import { HemisphereLight, DirectionalLight, AnimationMixer } from 'three'
const { ThreeApp } = threeOpt

export default {
  name: 'AddGltf',
  mounted () {
    this.$nextTick().then(() => {
      const App = new ThreeApp({ canvas: this.$el })
      App.initGLTFLoader('models/gltf/Soldier.glb').then(({ gltf }) => {
        const model = gltf.scene
        // model.position.y = 0
        model.traverse((object) => {
          if (object.isMesh) object.castShadow = true
        })
        App.scene.add(model)

        const hemiLight = new HemisphereLight(0xffffff, 0x444444)
        hemiLight.position.set(0, 20, 0)
        App.scene.add(hemiLight)

        const dirLight = new DirectionalLight(0xffffff)
        dirLight.position.set(-3, 10, -10)
        dirLight.castShadow = true
        dirLight.shadow.camera.top = 2
        dirLight.shadow.camera.bottom = -2
        dirLight.shadow.camera.left = -2
        dirLight.shadow.camera.right = 2
        dirLight.shadow.camera.near = 0.1
        dirLight.shadow.camera.far = 40
        App.scene.add(dirLight)

        //  动画
        const animations = gltf.animations
        const mixer = new AnimationMixer(model)
        mixer.clipAction(animations[3]).play()
        // idleAction = mixer.clipAction(animations[0])
        // walkAction = mixer.clipAction(animations[3])
        // runAction = mixer.clipAction(animations[1])

        // actions = [idleAction, walkAction, runAction]

        // activateAllActions()
      })
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
