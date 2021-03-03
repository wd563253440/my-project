<template>
    <div class="md_root_content" v-bind:style="{width:this.width,height: this.height}">
        <!--功能按钮区-->
        <div class="button_bar">
            <span v-on:click="addBold"><B>B</B></span>
            <span v-on:click="addUnderline"><B>U</B></span>
            <span v-on:click="addItalic"><B>I</B></span>
            <span v-on:click="addItalic"><B>md转html</B></span>
            <span v-on:click="addItalic"><B>html转md</B></span>
            <span v-on:click="addItalic"><B>下载</B></span>
            <span v-on:click="addItalic"><B>保存</B></span>
            <span v-on:click="addItalic"><B>新建</B></span>
        </div>
        <!--主要内容区-->
        <div class="content_bar">
            <!-- markdown文件列表区 -->
            <div class="markdown_dir" ref="ref_markdown_dir" >
              <li ref="ref_md_markdown_dir" class="md_markdown_dir" v-html="markdownDir" v-bind:title="testDir">
                </li>

            </div>
            <!--markdown编辑器区-->
            <div class="markdown_body" ref="ref_markdown_body">
                <textarea ref="ref_md_edit" class="md_textarea_content" v-model="markString">
                </textarea>
            </div>
            <!-- 界面分割区 -->
            <div class="markdown_space" v-on:click="foldDiv" ref="ref_md_space">

            </div>
            <!--解析成html区-->
            <div class="html_body" ref="ref_html_body" v-show="htmlBodyShow">
                <p v-html="htmlString"></p>
            </div>
        </div>
    </div>
</template>
<script>
    import marked from 'marked' // 解析mardown语法的库
    import hljs from 'highlight.js' // 对代码进行语法高亮的库
    import testData from '../testData' // 测试数据
    import testDir from '../testDir' // 测试数据
    export default {
      name: 'HelloMarkDown',
      props: {
        width: {
          type: String,
          default: '1376px'
        },
        height: {
          type: String,
          default: '920px'
        }
      },
      data () {
        return {
          markString: '',
          htmlString: '',
          markdownDir: [],
          htmlBodyShow: true
        }
      },
      mounted () {
        this.markString = testData
        this.markdownDir = testDir
      },
      methods: {
        // 加粗
        addBold () {
          this.changeSelectedText('**', '**')
        },
        // 斜体
        addItalic () {
          this.changeSelectedText('***', '***')
        },
        // 加下划线
        addUnderline () {
          this.changeSelectedText('<u>', '</u>')
        },
        foldDiv () {
          if (this.htmlBodyShow) {
            this.htmlBodyShow = false
            this.$refs.ref_markdown_body.style.width = '90%'
          } else {
            this.htmlBodyShow = true
            this.$refs.ref_markdown_body.style.width = '45%'
          }
        },
        changeSelectedText (startString, endString) {
          let t = this.$refs.ref_md_edit
          if (window.getSelection) {
            if (t.selectionStart !== undefined && t.selectionEnd !== undefined) {
              let str1 = t.value.substring(0, t.selectionStart)
              let str2 = t.value.substring(t.selectionStart, t.selectionEnd)
              let str3 = t.value.substring(t.selectionEnd)
              let result = str1 + startString + str2 + endString + str3
              t.value = result
              this.markString = t.value
            }
          }
        }
      },
      watch: {
        // 监听markString变化
        markString: function (value) {
          marked.setOptions({
            renderer: new marked.Renderer(),
            gfm: true,
            tables: true,
            breaks: true,
            pedantic: false,
            sanitize: false,
            smartLists: true,
            smartypants: false
          })
          this.htmlString = marked(value)
        },
        // 监听htmlString并对其高亮
        htmlString: function (value) {
          this.$nextTick(() => {
            const codes = document.querySelectorAll('.html_body pre code')
            // elem 是一个 object
            codes.forEach(elem => {
              elem.innerHTML = '<ul style="list-style:none"><li>' + elem.innerHTML.replace(/\n/g, '\n</li><li>') + '\n</li></ul>'
              hljs.highlightBlock(elem)
            })
          })
        },
        markdownDir: function (value) {
          console.log(value)
        }
      }
    }
</script>
<style scoped>
    .md_root_content {
        display: flex;
        display: -webkit-flex;
        flex-direction: column;
    }

    .button_bar {
        width: 100%;
        height: 40px;
        background-color: #d4d4d4;
        display: flex;
        display: -webkit-flex;
        align-items: center;
    }

    div.button_bar span {
        /* width: 30px; */
        line-height: 40px;
        text-align: center;
        color: orange;
        cursor: pointer;
        white-space: nowrap;
        margin: 5px;
    }

    .content_bar {
        display: flex;
        display: -webkit-flex;
        width: 100%;
        height: 100%;
    }

    .markdown_dir {
        width: 10%;
    }

    .markdown_dir li {
      list-style:none;
    }
    .markdown_body {
        width: 45%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
    }

    .html_body {
        width: 45%;
        height: 100%;
        display: flex;
        display: -webkit-flex;
        background-color: #232323;
        color: blanchedalmond;
        overflow:auto;
    }

    .md_textarea_content {
        flex: 1;
        height: 100%;
        padding: 12px;
        overflow: auto;
        box-sizing: border-box;
        resize: none;
        outline: none;
        border: none;
        background-color:#232323;
        font-size: 14px;
        color:blanchedalmond;
        line-height: 24px;
    }

    .markdown_space {
        width: 10px;
        background-color: burlywood;
        height: 100%;
    }
</style>