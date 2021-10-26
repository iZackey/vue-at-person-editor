# 基于vue的at选人组件（文本框@某人组件）

调用例子:

```html
<vue-at-person-editor
    placeholder="默认显示的文字"
    placement="top"
    :paramPersonList="list"
>
</vue-at-person-editor>

<script >
import VueAtPersonEditor from 'VueAtPersonEditor'

export default {
     components:{
         VueAtPersonEditor
     },
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

```

> 使用方法： 在文本框的开头直接输入“@”字符即可弹出选人，或者已经输入字符串，再打一个空格隔开，再输入“@”字符。
