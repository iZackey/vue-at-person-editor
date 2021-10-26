<template>
    <div :class="prefixCls">
        <at-ta
            :members="paramPersonList"
            name-key="label"
            @input="onchangeValue"
        >
            <!-- custom: with avatars -->
            <template v-slot:item="s">
                <span v-text="s.item.label"></span>
            </template>

            <textarea
                :style="{height: height, minHeight: minHeight, width: width}"
                v-model="showText"
                :id="editorId"
                :placeholder="placeholder"
                :maxlength="maxlength"
                class="element-editor"
            ></textarea>
            <!-- <el-input
                type="textarea"
                v-model="showText"
                class="element-editor"
                :id="editorId"
                :placeholder="placeholder"
                :style="{height: height, minHeight: minHeight, width: width}"
                :maxlength="maxlength"
            >
            </el-input>-->
        </at-ta>
    </div>
</template>

<script>
    import AtTa from './at-textarea.vue'

    export default {
        name: "vue-at-person-editor",

        components: {
            AtTa
        },

        props: {
            //为空的时候文字提示
            placeholder:{
                type:String
            },

            //宽度
            width:{
                type:String,
                default:'300px'
            },

            //高度
            height:{
                type:String,
                default:''
            },

            //最小高度
            minHeight:{
                type:String,
                default:'50px'
            },

            //弹出人员列表的方向，默认下方，可以传 top 为上方
            placement:{
                type:String,
                default:'top'
            },

            //参数传过来的待选择的人员列表
            paramPersonList:{
                type:Array,
                default:() => []
            },

            //最大允许输入长度
            maxlength:{
                type:Number
            }
        },

        data() {
            return {
                prefixCls: 'components-at-person-editor-index',
                editorId:'components-at-person-editor',
                showText:'',
            }
        },

        computed: {},

        watch: {},

        created() {
            this.editorId = this.editorId + (new Date()).getTime(); //生成唯一id
        },

        mounted() {
            document.querySelector(`#${this.editorId}`).style.height = this.height;
            document.querySelector(`#${this.editorId}`).style.minHeight = this.minHeight;
        },

        beforeDestroy() {
        },

        methods: {
            onchangeValue(val){
                let str = val;
                let data = [];
                str = str.replace(/(@[^@\s]+\s)/g, ($1) => {
                    const label = $1.substr(1, $1.length - 2); //截取去除@符号和最后面的空格如："@马云 "
                    const value = (this.paramPersonList.find(item => item.label === label) || {}).value || '';
                    //如果匹配到了
                    if(value){
                        data.push({
                            value: value,
                            label: label
                        });
                        return `<span class="person-at-label" data-label="${label}" data-value="${value}">${$1}</span>`;
                    }
                    return `${$1}`;
                })
                this.$emit('on-change', str);
                this.$emit('on-change-person', data);
            },

            //设置值
            setValue(val){
                if(!val) {
                  return false;
                }
                const str = val.replace(/<[^>]+>/g, ''); //去掉html标签
                this.showText = str;
            },

            //清空显示内容
            clearEditorContent(){
                this.showText = '';
            },

        }
    }
</script>

<style lang="scss">
$prefixCls:components-at-person-editor-index;
.#{$prefixCls}{
  .el-textarea{
    textarea{
      width: 100%;
      height: 100%;
    }
  }
}
</style>
