<template>
  <div id="mapboxgl" />
</template>

<script>
export default {
  mounted () {
    this.$nextTick().then(() => {
      this.initMap()
    })
  },
  methods: {
    initMap () {
      const { AMap } = window
      if (!AMap) return
      window._VM_AMap = this._map = new AMap.Map('mapboxgl', {
        zooms: [4, 8],
        zoom: 4.5,
        showLabel: false,
        viewMode: '3D',
        center: [105.425968, 35.882505],
        mapStyle: 'amap://styles/45311ae996a8bea0da10ad5151f72979'
      })
      this._map.setMapStyle('amap://styles/dark')
      this.$nextTick().then(() => {
        this.initLocaView()
      })
    },
    initLocaView () {
      const { Loca } = window
      if (!Loca) return
      const loca = window._VM_Loca = new Loca.Container({
        map: this._map,
        opacity: 1
      })
      const geo = new Loca.GeoJSONSource({
        url: 'https://a.amap.com/Loca/static/loca-v2/demos/mock_data/cuisine.json'
      })
      const pl = window.pl = new Loca.PointLayer({
        zIndex: 10,
        blend: 'lighter'
      })
      const style = {
        radius: 3.5,
        unit: 'px',
        color: '#3C1FA8',
        borderWidth: 0,
        blurWidth: 3.5
      }
      pl.setSource(geo)
      pl.setStyle(style)
      loca.add(pl)

      pl.addAnimate({
        key: 'radius',
        value: [0, 1],
        duration: 500,
        easing: 'Linear',
        transform: 2000,
        random: true,
        delay: 8000,
        yoyo: true,
        repeat: 100000
      })
      const dat = new Loca.Dat()
      dat.addLayer(pl)

      setTimeout(() => {
        loca.clear()
      }, 12000)
    }
  }
}
</script>

<style lang="scss" scoped>
#mapboxgl {
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  z-index: 1;
  overflow: hidden;
  position: fixed;
  background: #060b14;
}
</style>
