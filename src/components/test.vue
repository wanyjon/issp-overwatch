<template>
  <div style="">
    <Row>
      <Col span="24">
        <div class="tanchuang_wrap" id="aaaa">
          <div class="lightbox"></div>
          <div class="tanchuang_neirong">
              <p><span @click="closeDiv" style=" cursor:pointer;">关闭</span></p>
              这里是弹窗内容
          </div>
      </div>
      <span @click="displayDiv" style="cursor:pointer;">点击我</span>
      <p>测试通过，兼容IE6.0、IE7.0、火狐3.6、遨游等各大浏览器</p>
      <div v-bind:style="{ color: activeColor, fontSize: fontSize + 'px',background:'red' }">内联样式</div>
      <h1>{{screenHeight}}</h1>
      <h1>{{screenWidth}}</h1>
      <Upload action="http://localhost:9750/lend/upload">
        <Button type="ghost" icon="ios-cloud-upload-outline">Upload files</Button>
      </Upload>
      <div :style="style">
        <!-- <h1>hello world</h1> -->
      </div>
      <!-- <img src="@/assets/logo.png" :width="screenWidth/10" :height="screenHeight/10"> -->
      </Col>
      
    </Row>
    
  </div>
</template>

<style>
  .demo-table-expand {
    font-size: 0;
  }
  .demo-table-expand label {
    width: 90px;
    color: #99a9bf;
  }
  .demo-table-expand .el-form-item {
    margin-right: 0;
    margin-bottom: 0;
    width: 50%;
  }
  body,td,th {
            font-size: 12px; padding:0; margin:0;
        }
        .tanchuang_wrap{ width:100%; height:100%;position:absolute;left: 0px;top: 0px;z-index:100; display:none;}
        .lightbox{width:100%;z-index:101; height:100%;background-color:#1c2438;filter:alpha(Opacity=20);-moz-opacity:0.2;opacity: 0.2; position:absolute; top:0px; left:0px;}
        .tanchuang_neirong{width:353px;height:153px;border:solid 1px #f7dd8c;background-color:#FFF;position:absolute;z-index:105;left: 123px;top: 123px;}
</style>

<script>
  export default {
    data() {
      return {
        screenHeight: window.innerHeight,
        screenWidth: document.body.clientWidth,
        style: 'border: 1px solid #000; width: '+this.screenWidth+'px; height: '+this.screenHeight+'px',
        activeColor: 'green',
        fontSize: 30
        
      }
    },
    created: function(){

    },
    mounted () { 
      const that = this
            window.onresize = () => {
                return (() => {
                    window.screenWidth = document.body.clientWidth
                    that.screenWidth = window.screenWidth
                    // that.screenHeight = window.screenWidth/2
                })()
            }
    },
    watch: {

    },
    methods: {
      closeDiv(){
          document.getElementById('aaaa').style.display = 'none';
      },
      displayDiv(){
          document.getElementById('aaaa').style.display = 'block';
      },
      test(){
        alert("hello")
      }
    }
  }
</script>