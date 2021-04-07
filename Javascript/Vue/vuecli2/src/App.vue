<template>
  <div id="app">
    <h1>{{ msg }}</h1>
    <div class="content">
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
}     
.content{
  display: flex;
  width: 800px;
  height: 700px;
}
</style>
