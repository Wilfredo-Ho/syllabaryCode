<template>
    <div class="full-container">
        <h5 class='page-title'>随机测评</h5>
        <div class="card-wpt">
            <div class="card-title">当前进度：{{count}} / 45</div>
            <div class="card" >
                <div class="box" @click='toggle(true)'>{{hiragana}}</div>
                <div class="box" @click='toggle(false)'>{{katakana}}</div>
            </div>
            <div class="btn-group">
                <button class='btn left btn-default' @click='forget'>x</button>
                <button class='btn right btn-success' @click='remember'>√</button>
            </div>
        </div>
        <div class="page-bottom bottom">
            <router-link class='btn btn-primary left' to="/">基础音图</router-link>
            <router-link class='btn btn-default right' to="/list">生词本</router-link>
        </div>
    </div>
</template>

<script>
import Data from '../data';

export default {
    data () {
        return {
            ind: [0, 0],
            indArr: [],
            count: 0,
        }
    },
    computed: {
        hiragana () {
            return Data['hiragana'][this.ind[0]][this.ind[1]];
        },
        katakana () {
            return Data['katakana'][this.ind[0]][this.ind[1]];
        }
    },
    methods: {
        generateInd () {
            let arr = this.indArr;
            if (arr.length === 0) {
                this.initIndArr(); 
                this.count = 0;
            }
            let index = this.getRandom(arr.length);
            this.ind =  arr[index];
            this.indArr.splice(index, 1);
            this.count ++;
        },
        getRandom (max, min = 0) {
            return Math.floor(Math.random() * (max - min));
        },
        forget () {
            let str = window.localStorage.getItem('wordIndexArr');
            let obj = JSON.parse(str) || {};
            let index = this.ind[0] + '' + this.ind[1];
            if (obj[index]) {
                obj[index] ++;
            } else {
                obj[index] = 1;
            }

            window.localStorage.setItem('wordIndexArr', JSON.stringify(obj));
            this.generateInd();
        },
        remember () {
            let str = window.localStorage.getItem('wordIndexArr') || '{}';
            let obj = JSON.parse(str) || {};
            let index = this.ind[0] + '' + this.ind[1];
            if (obj[index]) {
                delete obj[index];
            }
            window.localStorage.setItem('wordIndexArr', JSON.stringify(obj));
            this.generateInd();
        },
        toggle (status) {
            let box = document.querySelectorAll('.box');
            if (status) {
                box[0].style.transform = "rotateY(180deg)";
                box[1].style.transform = "rotateY(0deg)";
            } else {
                box[1].style.transform = "rotateY(-180deg)";
                box[0].style.transform = "rotateY(0deg)";
            }
        },
        initIndArr () {
            let k = 0;
            for(let i = 0; i< 10; i++) {
                for(let j = 0; j<5; j++) {
                    if(i === 7 && j === 1) continue;
                    if(i === 7 && j === 3) continue;
                    if(i === 9 && j === 1) continue;
                    if(i === 9 && j === 2) continue;
                    if(i === 9 && j === 3) continue;
                    this.indArr[k ++] = [i, j];
                }
            }
        }
    },
    created () {
        this.initIndArr();
        this.generateInd();
    }
}
</script>

<style scoped>
.card-wpt{
    width: 50%;
    margin: 0 auto;
}
.card-title{
    text-align: center;
    margin-bottom: .625rem;
    color: #08979c;
    font-size: .875rem;
}
.card{
    width: 100%;
    height: 50vw;
    line-height: 50vw;
    font-size: 8rem;
    text-align: center;
    position: relative;
    perspective: 1500;
    -webkit-perspective: 1500;
    -moz-perspective: 1500;
}
.box{
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    transition: all 1s;
    backface-visibility: hidden;
    cursor: pointer;
    background: url(../assets/wordBg.png) no-repeat;
    background-size: contain;
    background-color: #FAF9DE;
}
.box:last-child{
    transform: rotateY(-180deg);
}
.btn-group{
    margin-top: 0.625rem;
    overflow: hidden;
}
.bottom {
    padding: 0.625rem 1.25rem;
}
</style>


