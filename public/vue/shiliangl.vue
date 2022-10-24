<template>
  <div>
    <h1> shiliangl </h1>
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
    }, 2000)
  },
  methods: {

  }
}
</script>
