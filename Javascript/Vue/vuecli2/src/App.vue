<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="content">
      <chat-com></chat-com>
      <userlist-com :userlist="userlist"></userlist-com>
    </div>
    <div class="conent">
      <chat-com></chat-com>
      <userlist-com :userlist="userlist"></userlist-com>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import chatCom from "@/components/chatcom.vue";
import userlistCom from "@/components/userlistcom.vue";

export default { 
  metaInfo: {
    title: 'This is the test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width' }
    ]
  },
  name: "app",
  components: {
    chatCom,
    userlistCom,
  },
  data() {
    return {
      msg: "Welcome",
      userlist: [
        {
          username: "Li",
          headerIcon: "L",
        },
        {
          username: "Wang",
          headerIcon: "L",
        },
        {
          username: "Zhao",
          headerIcon: "L",
        },
        {
          username: "Xu",
          headerIcon: "L",
        },
      ],
    };
  },
};
</script>

<style scoped lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;   
  margin: 0;
  padding: 0;
} 
</style>
