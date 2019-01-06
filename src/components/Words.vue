<template>
    <div class="container">
        <div>
            <div class="btn-group">
                <button :class="['btn', isHiragana && 'active']" @click='toggle(true)'>平假名</button>
                <button :class="['btn', isHiragana || 'active']" @click='toggle(false)'>片假名</button>
            </div>
            <div class="grid">
                <div class="row" v-for='(row, rowIndex) in hiragana' :key='rowIndex'>
                    <div class="cell" v-for='(col, colIndex) in row' :key='colIndex'>
                        <span class="text">{{col}}</span>
                    </div>
                </div>
            </div>
        </div>
        <div style="overflow: hidden;">
            <router-link to='/test' class='btn btn-primary left'>开始测评</router-link>
            <router-link to='/list' class='btn btn-default right'>生词表</router-link>
        </div>
    </div>
</template>

<script>
import Data from '../data.js';

export default {
    name: 'Words',
    computed: {
        hiragana () {
            return this.isHiragana ? Data['hiragana'] : Data['katakana'];
        }
    },
    data () {
        return {
            isHiragana: true,
        }
    },
    methods: {
        toggle (status) {
            this.isHiragana = status;
        }
    }
}
</script>

<style scoped>
    .container{
        width: 70%;
        margin: 0 auto;
    }
    .btn-group{
        margin-bottom: 10px;
        text-align: center;
    }
    .btn-group .btn{
        font-size: .6rem;
    }
    .cell{
        display: inline-block;
        width: 20%;
        height: 14vw;
        line-height: 14vw;
        text-align: center;
        font-size: 1.5rem;
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        background: #FAF9DE;
    }
    .row:last-child{
        border-bottom: 1px solid #ccc;
    }
    .row .cell:last-child{
        border-right: 1px solid #ccc;
    }
    .btn {
        padding: 6px 16px;
        background: #fff;
        border: 1px solid #aaa;
        border-radius: 4px;
        display: inline-block;
        font-size: 0.8rem;
    }
    .btn.active{
        background: green;
        color: #fff;
        border-color: darkgreen;
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

    @media screen and (max-width: 1000px){
        .container{
            width: 70%;
            margin: 0 auto;
            min-height: 100vh;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
            padding: 16px 0;
            box-sizing: border-box;
        }
    }
</style>


