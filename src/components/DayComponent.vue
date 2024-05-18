<template>
    <div class="day" @click="handleDayClick"><div class="circle" :class="{passedDay: isPassed}"><h1>{{ daynumber }}</h1></div></div>
</template>

<script>
export default {
    props:['daynumber','month','year','isPassed'],
    methods: {
        handleDayClick(e){
            if (!this.isPassed) {
                this.$emit("daySelected",e,this.year,this.month,this.daynumber)
            }
        }  
    },
}
</script>

<style>

</style>