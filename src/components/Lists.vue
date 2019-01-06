<template>
    <div class="container">
        <h5 class='title'>生词本</h5>
        <div class="list-wpt" v-if='arr.length>0'>
            <div class="list-title">
                <span class="col col1">读音</span>
                <span class="col col2">平假名</span>
                <span class="col col3">片假名</span>
                <span class="col col4">频率</span>
            </div>
            <ul class="list-body" >
                <li v-for="(item, index) in arr" :key="index" class='list-item'>
                    <span class="col col1">{{item.s}}</span>
                    <span class="col col2">{{item.hira}}</span>
                    <span class="col col3">{{item.kata}}</span>
                    <span class="col col4">{{item.count}}</span>
                </li>
            </ul>
        </div>
        <div class="no-list" v-else>很棒哦，生词一个都没有え</div>
        <div class="btn-group">
            <button class="btn btn-default" style="margin-right: 30px;" v-if='arr.length>0' @click='showModal(true)'>清空生词本</button>
            <router-link tag='button' class='btn btn-primary' to='/test'>开始评测</router-link>
        </div>
        <transition name="modal">
            <div class="modal-bg" v-show='modal'>
                <div class="modal">
                    <h3 class="modal-title">
                        清空操作会删除所有生词记录，确定清空生词表吗？
                    </h3>
                    <div class="modal-bottom">
                        <button class="btn btn-default" @click='showModal(false)'>取消</button>
                        <button class="btn btn-primary" @click='clear'>确定</button>
                    </div>
                </div>
            </div>
        </transition>
    </div>
</template>

<script>
import Data from '../data';
export default {
    data () {
        return {
            arr: [],
            modal: false
        }
    },
    created () {
        let obj = JSON.parse(window.localStorage.getItem('wordIndexArr'));
        console.log(obj);
        let arr = [];
        for (let i in obj) {
            let ind = i.split('');
            arr.push({
                s: Data['sound'][ind[0]][ind[1]],
                hira: Data['hiragana'][ind[0]][ind[1]],
                kata: Data['katakana'][ind[0]][ind[1]],
                count: obj[i]
            })
        }
        this.arr = arr;
    },
    methods: {
        showModal (flag) {
            this.modal = flag;
        },
        clear () {
            window.localStorage.removeItem('wordIndexArr');
            this.arr = [];
            this.modal = false;
        }
    }
}
</script>


<style scoped>
.container{
    padding-bottom: 0;
}
.no-list {
    text-align: center;
    color: #aaa;
    font-size: 0.8rem;
    margin-top: 30vh;
}
.list-wpt{
    margin-top: 10px;
    background: #fff;
}
.list-title{
    font-weight: 500;
    color: darkgreen;
    border-bottom: 1px solid darkgreen; 
    margin: 0 20px;
    padding: 4px 0;
    font-size: .8rem;
}
.list-body{
    list-style: none;
    padding: 0 20px;
    color: #636363;
    font-size: .8rem;
    max-height: calc(100vh - 134px);
    overflow-y: auto;
}
.list-item{
    border-bottom: 1px solid #e3e3e3;
    padding: 4px 0;
}
.list-item:last-child{
    border-bottom: none;
}
.col{
    display: inline-block;
    text-align: center;
}
.col1{
    width: 18%;
}
.col2{
    width: 28%;
}
.col3{
    width: 30%;
}
.col4{
    width: 18%;
}
.btn{
    font-size: .8rem;
}
.btn-group{
    margin: 10px 0;
    text-align: center;
}
.modal-bg{
    position: absolute;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background: rgba(0,0,0,.4);
    z-index: 1;
}
.modal{
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #fff;
    border-radius: 6px;
    width: 40vh;
    padding: 16px;
    box-sizing: border-box;
}
.modal-title{
    font-weight: normal;
    font-size: .7rem;
    color: #333;
}
.modal-bottom{
    margin-top: 16px;
    text-align: right;
}
.modal-enter-active,
.modal-leave-active{
  will-change: transform;
  transition: all 500ms;
}
.modal-enter {
  opacity: 0;
  /* transform: translate3d(-100%, 0, 0); */
}
.modal-leave-active {
  opacity: 0;
  /* transform: translate3d(100%, 0, 0); */
}
</style>

