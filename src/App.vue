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
    font-size: .875rem;
}
.btn.active{
    background: green;
    color: #fff;
    border-color: darkgreen;
}
.btn-default{
    background: #fefefe;
    border-color: gray;
    color: #333;
}
.btn-primary{
    background: #08979c;
    border-color: #006d75;
    color: #eee;
}
.btn-success{
    background: #389e0d;
    border-color: #237804;
    color: #fff;
}
.btn-danger{
  background: #f5222d;
  border-color: #a8071a;
  color: #fff;
}

.page-title{
    height: 1.875rem;
    line-height: 1.875rem;
    background: darkcyan;
    padding: 0.625rem 1.25rem;
    color: #fff;
    font-weight: 100;
    font-size: .9375rem;
}
.page-bottom {
  margin-top: 1.25rem;
  overflow: hidden;
}
.full-container{
    margin: 0 auto;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    box-sizing: border-box;
}
@media screen and (min-width: 300px) {
  html{
    font-size: 14px;
  }
}
@media screen and (min-width: 360px) {
  html{
    font-size: 16px;
  }
}
@media screen and (min-width: 400px) {
  html{
    font-size: 18px;
  }
}
@media screen and (min-width: 700px) {
  html{
    font-size: 30px;
  }
}

</style>
