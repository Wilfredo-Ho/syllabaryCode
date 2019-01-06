<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
* {
  margin: 0;
  padding: 0;
}
html {
  font-size: calc(14vw * 0.4);
  background: #f1f2f3;
}
a{
  text-decoration: none;
}
.left{
  float: left;
}
.right{
  float: right;
}
.btn{
    background: #fff;
    padding: 4px 10px;
    border: 1px solid #aaa;
    box-sizing: content-box;
    border-radius: 3px;
    font-size: 1rem;
}
.btn-primary{
    background: darkcyan;
    border-color: #777;
    color: #eee;
}
.btn-default{
    background: #fefefe;
    border-color: gray;
    color: #333;
}
.title{
    background: darkcyan;
    padding: 10px 20px;
    color: #fff;
    font-weight: 100;
}
</style>
