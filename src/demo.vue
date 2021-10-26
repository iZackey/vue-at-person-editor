<template>
    <div>
        <vue-at-person-editor :paramPersonList="list"></vue-at-person-editor>
    </div>
</template>

<script>
export default {
    name: "demo",
    data(){
        return {
            list: [
                {value:'1', label:'张三'},
                {value:'2', label:'李四'},
                {value:'3', label:'王五'},
            ]
        }
    }
}
</script>

<style scoped>

</style>
