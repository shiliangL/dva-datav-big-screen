<template>
  <div>
    <h1> shiliangl 2022年10月24日xx </h1>
  </div>
</template>

<script>
module.exports = {
  name: 'Shiliangl',
  props: {
    ad: {
      type: String,
      default: () => ''
    }
  },
  data() {
    return {

    }
  },
  mounted() {
    setTimeout(() => {
      console.error(this, '=x=');
      // this.$parent.show = false;
    }, 3200)
  },
  methods: {

  }
}
</script>
