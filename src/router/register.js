const routers = []

function importAll (r) {
  r.keys().forEach(element => {
    console.log(r(element), '=element=')
    routers.push(r(element).default)
  })
}

importAll(require.context('@/views', true, /.index.vue/))
export default routers
