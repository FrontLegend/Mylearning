<template>
  <div id="app">
    <chat-com></chat-com>
	<userlist-com></userlist-com>
  </div>
</template>


<script>
// @ is an alias to /src
import chatCom from '@/components/chatcom.vue'
import userlistCom from '@/components/userlistcom.vue'

export default {
  name: 'app',
  components: {
    chatCom,
	userlistCom
  }
}
</script>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
