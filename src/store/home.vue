<template>
  <div>同步修改state：{{ $store.state.user.info.uname }}</div>
  <p>-----------------------------------------------</p>
  <div>异步修改state:{{ $store.state.user.info.age }}</div>
  <p>-----------------------------------------------</p>
  <div>getters数据:{{ $store.getters['user/format'] }}</div>
  <button @click="handleClick">修改</button>
</template>

<script>
import { useStore } from 'vuex'
export default {
  name: 'App',
  setup() {
    const store = useStore()
    const handleClick = () => {
      console.log(store)
      
      store.commit('user/updateUname', 'Tom')

      store.dispatch('user/asyncUpdate', 23)
    }

    return { handleClick }
  }
}
</script>