<template>
    <div class="process">
        <ul class="process_wraper clearfix">
             <slot name='process_list'></slot>          
        </ul>
    </div>
</template>

<script type="text/ecmascript-6">
    export default {
        data() {
            return {}
        },
        components: {}
    }
</script>

<style scoped>
    .process {
        width:1200px;
        margin: 10px auto;        
    }
    .process_item {
        float: left;
        width: 25%;
        text-align: center;
        color: #333;
        font-size: 18px;
        padding: 5px 0;
        box-sizing: border-box;
    }
    .active {
        background-color: #ca141d;
        color: #fff;
    }
</style>
