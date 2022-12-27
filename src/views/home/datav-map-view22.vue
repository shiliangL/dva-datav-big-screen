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
      const { mapboxgl, MapboxLanguage } = window
      if (!mapboxgl) return
      mapboxgl.accessToken = 'pk.eyJ1Ijoic2hpbGlhbmdsIiwiYSI6ImNrdG5wbjdjODA1NGkzMW8zZ2w5b2xzNTgifQ.zO_1f362AFeSWsrmE6I-Ww'
      this._map = new mapboxgl.Map({
        container: this.$el,
        style: 'mapbox://styles/mapbox/dark-v10',
        center: [114.185125079355, 22.6322002129776],
        zoom: 12,
        maxzoom: 10,
        minzoom: 12,
        pitch: 45
      })
      this._map.on('load', () => {
        this.init3dLayer()
        mapboxgl.setRTLTextPlugin('https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-rtl-text/v0.2.3/mapbox-gl-rtl-text.js')
        this._map.addControl(new MapboxLanguage({
          defaultLanguage: 'zh-Hans'
        }))
      })
    },
    init3dLayer () {
      if (!this._map) return
      const { layers } = this._map.getStyle()
      for (const layer of layers) {
        if (layer.type === 'symbol' && layer.layout['text-field']) this._map.removeLayer(layer.id)
      }
      this._map.addLayer({
        id: '3d-buildings',
        source: 'composite',
        'source-layer': 'building',
        filter: ['==', 'extrude', 'true'],
        type: 'fill-extrusion',
        minzoom: 12,
        paint: {
          'fill-extrusion-color': '#aaa',
          // use an 'interpolate' expression to add a smooth transition effect to the
          // buildings as the user zooms in
          'fill-extrusion-height': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'height']
          ],
          'fill-extrusion-base': [
            'interpolate',
            ['linear'],
            ['zoom'],
            15,
            0,
            15.05,
            ['get', 'min_height']
          ],
          'fill-extrusion-opacity': 0.6
        }
      })
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
