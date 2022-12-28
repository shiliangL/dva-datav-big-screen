<template>
  <div class="datav-card-001">
    <DvaCount2 :end="1024"></DvaCount2>
    is a subgenre of science fiction in a dystopian futuristic setting that
    tends to focus on a "combination of lowlife and high tech",
    featuring futuristic technological and scientific achievements,
    such as artificial intelligence and cybernetics, juxtaposed with societal collapse or decay.
  </div>
</template>

<script>
export default {
  name: 'SmartCityLeftLv1',
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
.datav-card-001 {
  margin-top: 10px;
  color: #fff;
  padding: 34px 10px 22px 10px;
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
</style>
