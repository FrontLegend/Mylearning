<template>
  <div class="userlist">
    <h1>User List</h1>
    <ul>
      <li v-for="(item, index) in userlist" :key="'userlist' + index">
        <h3>{{ item.username }}</h3>
        <span>{{ item.headerIcon }}</span>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data() {},
  props: ["userlist"],
};
</script>

<style scoped lang="less">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.userlist {
  width: 300px;
  height: 700px;
  background: skyblue;
}
.userlist ul li {
  display: flex;
}
</style>
