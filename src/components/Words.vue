<template>
    <div class="full-container">
        <div class='container'>
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
            <div class='page-bottom'>
                <router-link to='/test' class='btn btn-primary left'>开始测评</router-link>
                <router-link to='/list' class='btn btn-default right'>生词本</router-link>
            </div>
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
        width: 80%;
        margin: 1rem auto;
        text-align: center;
    }
    .btn-group .btn{
        font-size: 0.75rem;
    }
    .grid{
        margin-top: 0.625rem;
    }
    .cell{
        display: inline-block;
        width: 3.25rem;
        height: 3.25rem;
        line-height: 3.25rem;
        text-align: center;
        font-size: 1.25rem;
        border-left: 1px solid #ccc;
        border-top: 1px solid #ccc;
        box-sizing: border-box;
        background: #FAF9DE;
        vertical-align: top;
    }
    .row:last-child .cell{
        border-bottom: 1px solid #ccc;
    }
    .row .cell:last-child{
        border-right: 1px solid #ccc;
    }
</style>


