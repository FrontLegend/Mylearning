<template>
  <div id="app">
    <h1>{{ msg }}</h1>
<<<<<<< HEAD
    <div class="content">
      <chat-com></chat-com>
      <userlist-com :userlist="userlist"></userlist-com>
    </div>                                                      
=======
    <div class="conent">
      <chat-com></chat-com>
      <userlist-com :userlist="userlist"></userlist-com>
    </div>
>>>>>>> 956d364823d429f75a049330497fca1c62d3abb8
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
}     
.content{
  display: flex;
  width: 800px;
  height: 700px;
}

.content {
  width: @width;
  height: @height;
  display: flex;
  overflow: hidden;
}
</style>
