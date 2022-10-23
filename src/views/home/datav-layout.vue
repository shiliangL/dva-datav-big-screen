<template>
  <div class="smartDatav">
    <datav-title-bar></datav-title-bar>
    <datav-map-view></datav-map-view>
    <datav-navigation-bar></datav-navigation-bar>
    <div class="datav-card-001">
      is a subgenre of science fiction in a dystopian futuristic setting that
      tends to focus on a "combination of lowlife and high tech",
      featuring futuristic technological and scientific achievements,
      such as artificial intelligence and cybernetics, juxtaposed with societal collapse or decay.
    </div>
  </div>
</template>

<script>

export default {
  name: 'SmartDatav',
  components: {
    datavMapView: () => import('./datav-map-view.vue'),
    datavTitleBar: () => import('./datav-title-bar.vue'),
    datavNavigationBar: () => import('./datav-navigation-bar.vue')
  },
  data () {
    return {

    }
  },
  mounted () {

  },
  methods: {

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
  .datav-card-001 {
    margin-top: 50px;
    color: #fff;
    width: 320px;
    padding: 14px;
    border-right: 1px solid #8ae66e;
    background-image: linear-gradient(350deg, #2af598 0%, #009efd 100%);
    clip-path: polygon(
      0 25px,
      26px 0,
      calc(60% - 25px) 0,
      60% 25px,
      100% 25px,
      100% calc(100% - 10px),
      calc(100% - 15px) calc(100% - 10px),
      calc(80% - 10px) calc(100% - 10px),
      calc(80% - 15px) 100%,
      80px 100%,
      65px calc(100% - 15px),
      0 calc(100% - 15px)
    );
  }
}
</style>
