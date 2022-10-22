<template>
  <div class="smartDatav">
    <div class="title-bar">
      <span class="title-text"> {{ logoTitle }} </span>
    </div>

    <div id="mapboxgl" />

    <div class="datav-card-001">
      is a subgenre of science fiction in a dystopian futuristic setting that
      tends to focus on a "combination of lowlife and high tech",
      featuring futuristic technological and scientific achievements,
      such as artificial intelligence and cybernetics, juxtaposed with societal collapse or decay.
    </div>
    <div
      class="navigation"
      :style="navigationStyle"
    >
      <div
        class="navigation-item"
        v-for="(item,index) in navigation"
        :key="index"
        @click="click2Play(item)"
      >
        <div
          v-if="item.icon"
          :class="['dva-icon','iconfont',item.icon ]"
        ></div>
        <div
          class="title"
          v-if="showNavigationTitle"
        >
          {{ item.title }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
const { navigation = [], logoTitle, showNavigationTitle = true } = window._datavConfig || {}
export default {
  name: 'SmartDatav',
  data () {
    return {
      logoTitle,
      navigation,
      showNavigationTitle
    }
  },
  computed: {
    navigationStyle () {
      return this.showNavigationTitle ? { gap: '12px' } : { gap: '0px' }
    }
  },
  mounted () {
    this.$nextTick().then(() => {
      this.initMap()
    })
  },
  methods: {
    initMap () {
      const { mapboxgl, MapboxLanguage } = window
      if (!mapboxgl) return
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbGlhbmdsIiwiYSI6ImNrdG5wbjdjODA1NGkzMW8zZ2w5b2xzNTgifQ.zO_1f362AFeSWsrmE6I-Ww'
      this.map = new mapboxgl.Map({
        container: this.$el.querySelector('#mapboxgl'),
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [114.185125079355, 22.6322002129776],
        zoom: 10,
        maxzoom: 10,
        minzoom: 12,
        pitch: 45
      })
      const { map } = this
      map.on('load', () => {
        // this.fetchLine(map)
        // this.initLayout(this.map)
      })
      this.$nextTick().then(() => {
        mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js')
        map.addControl(new MapboxLanguage({
          defaultLanguage: 'zh-Hans'
        }))
      })
    },
    click2Play (item) {
      const { presentationIndex = 0 } = item
      this.$AC_Presentation_play({ index: presentationIndex })
    }
  }
}
</script>

<style lang="scss" scoped>
$themeColor: #007aff;
.smartDatav {
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: #fff;
  position: relative;

  #mapboxgl {
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    z-index: 1;
    overflow: hidden;
    position: absolute;
    background: #060b14;
  }

  .title-bar {
    top: 0;
    left: 0;
    z-index: 10;
    position: fixed;
    display: flex;
    align-items: center;
    justify-content: center;
    height: 54px;
    width: 100%;
    animation-fill-mode: both;
    -webkit-animation-fill-mode: both;
    box-shadow: rgba(50, 50, 93, 0.25) 0px 13px 27px -5px, rgba(0, 0, 0, 0.3) 0px 8px 16px -8px;
    background-image: linear-gradient(350deg, #5efce8 10%, #736efe);
    clip-path: polygon(0 0,100% 0,100% calc(100% - 20px),75% calc(100% - 20px),72.5% 100%,27.5% 100%,25% calc(100% - 20px),0 calc(100% - 20px),0 0);
    .title-text {
      color: #fff;
      font-weight: 600;
      font-size: 1.2rem;
      // -webkit-background-clip: text;
      // -webkit-text-fill-color: transparent;
      // background-image: linear-gradient(135deg, #5efce8 10%, #736efe);
    }
  }
  .navigation {
    // font-size: 1rem;
    position: fixed;
    left: 50%;
    bottom: 10px;
    transform: translateX(-50%);
    z-index: 100;
    display: flex;
    gap: 12px;
    align-items: center;

    .navigation-item {
      cursor: pointer;
      width: 66px;
      display: flex;
      align-items: center;
      flex-direction: column;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      .iconfont {
        font-size: 32px;
      }
      .title {
        font-size: 14px;
      }

      &:active {
        opacity: 0.78;
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        background-image: linear-gradient(135deg, #5efce8 10%, #736efe);
      }
    }
  }
  #AcMapFrame {
    width: 100%;
    height: 100%;
    border: none;
    outline: none;
  }

  .datav-card-001{
    margin-top: 50px;
    color: #fff;
    width: 320px;
    padding: 14px;
    border-right: 1px solid #8ae66e;
    background-image: linear-gradient(350deg, #2af598 0%, #009efd 100%);
    clip-path: polygon(0 25px,26px 0,calc(60% - 25px) 0,60% 25px,100% 25px,100% calc(100% - 10px),calc(100% - 15px) calc(100% - 10px),calc(80% - 10px) calc(100% - 10px),calc(80% - 15px) 100%,80px 100%,65px calc(100% - 15px),0 calc(100% - 15px));
  }
}
</style>
