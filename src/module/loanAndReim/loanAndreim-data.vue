<style scoped>
.test {
    color: #5cadff
}
span{
    
}
h4 {
    margin-top: 5px
}
</style>
<template>
    <div>
        <div style="position:absolute;">
            <img src="@/assets/insidePage/背景.jpg" :width="screenWidth" :height="screenHeight">
        </div>
        <Row>
            <Col span="4" offset="1">
                <div>
                    <!-- <h1>{{screenHeight/50.1875}}</h1> -->
                    <!-- <h1>{{screenWidth/20}}</h1> -->
                    <img src="@/assets/insidePage/报销管理标题.png" width="100%" height="100%">
                    
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="2" offset="5">
                <div style="margin-top: 50px;">
                    <img src="@/assets/insidePage/返回.png" style="cursor: pointer" @click="go">
                </div>
            </Col>
        </Row>
        <Row>
            <Col span="2" offset="3">
                <div>
                    <Row>
                        <Col span="24">
                            <div style="margin-top: 20px">
                                <img src="@/assets/insidePage/列表.png" style="cursor: pointer; border-radius: 100px;">
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span="24">
                            <div style="margin-top: 20px">
                                <img src="@/assets/insidePage/添加.png" style="cursor: pointer; border-radius: 100px;">
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span="24">
                            <div style="margin-top: 20px">
                                <img src="@/assets/insidePage/delete.png" style="cursor: pointer; border-radius: 100px;" @click="delete1">
                            </div>
                        </Col>
                    </Row>
                </div>
                <div>
                    <Row>
                        <Col span="24">
                            <div style="margin-top: 20px">
                                <img src="@/assets/insidePage/导出数据.png" style="cursor: pointer; border-radius: 100px;">
                            </div>
                        </Col>
                    </Row>
                </div>
            </Col>
            <Col span="15">
                <div>
                    <Row :gutter="60">
                        <Col span="6" v-for="item in items">

                            <div style="margin-top: 20px;cursor:pointer;" >
                                <div style="position: absolute; padding-top: 10%;padding-left: 10%; ">
                                    <div @click="item.needAnalysis = !item.needAnalysis">
                                        <h4>填单人： <span style="color: #666666">{{item.user}}</span></h4>
                                        <h4>填单日期：</h4>
                                        <p>2001.2.3</p>
                                        <h4>借款金额：</h4>
                                        <p>{{item.money}}</p>
                                        <h4>预计借款日期：</h4>
                                        <p>2004.3.4</p>
                                    </div>
                                    
                                    <div :style="{marginTop: '6px', position: 'absolute'}">
                                        <Button type="error" shape="circle" size="small">审核</Button>
                                    </div>
                                    
                                </div>
                                <div style="position: absolute;margin-top: 13%;margin-left: 55%">
                                    <img src="@/assets/insidePage/编辑.png" width="100%" height="100%" @click="test">
                                </div>
                                <div :style="{ borderRadius: 100+'px', width: screenHeight/40.15+'px', height: screenHeight/40.15+'px', background: 'white', position: 'absolute', marginTop: screenHeight/4.51123595505618+'px', marginLeft: screenWidth/10.666666666666666+'px'}" align="center">
                                    <div :style="{ borderRadius: 100 + 'px', width: screenHeight/50.1875 + 'px', height: screenHeight/50.1875 + 'px', background: '#19be6b', marginTop: screenHeight/401.5 + 'px' }" v-show="item.needAnalysis">
                                        
                                    </div>
                                </div>
                                <img style="border-radius: 15px" src="@/assets/insidePage/数据背景.png" :width="screenWidth/8" :height="screenHeight/3.526570048309179" @click="item.needAnalysis = !item.needAnalysis">
                            </div>

                            
                        </Col>
                    </Row>
                    <div align="center">
                        <Page :total="totalElements" show-total @on-change="pageSwitch" page-size="8"></Page>
                    </div>
                    <!-- <img src="@/assets/insidePage/数据背景.png" width="100%" height="100%"> -->
                </div>
            </Col>
        </Row>
    
    
    </div>
</template>
<script>
    export default {
        data () {
            return {
                items: [],
                totalElements: 0,
                menuName: '待审核',
                screenHeight: window.innerHeight,
                screenWidth: document.body.clientWidth,

            }
        },
        created: function() {
            var _this = this
            this.$http.get('http://192.168.0.142:9750/lend/list',{params:{
                progress: '待审核',
                pageNum: 1
            }})
            .then(function(respone){
                console.log(respone)
                _this.items = respone.data.content
                _this.totalElements = respone.data.totalElements

            })
            .catch(function(error){

            })
        },
        methods: {
            test () {
                // alert("hello world")
            },
            test1 () {

                // alert("hah")
            },
            go () {
                this.$router.push('/')
            },
            pageSwitch (number) {

              var _this = this
              _this.loading = true
              this.$http.get('http://localhost:9750/lend/list',{params:{
                progress: _this.menuName,
                pageNum: number
              }})
              .then(function(respone){
                // _this.loading = false
                _this.items = respone.data.content
                _this.totalElements = respone.data.totalElements

              })
              .catch(function(error){

              })
            },
            delete1 () {
                var _this = this
                this.$http.post('http://localhost:9750/lend/batchRemove',this.items)
                .then(function(respone){
                    console.log(respone)
                    _this.items = respone.data.content
                    _this.totalElements = respone.data.totalElements

                })
                .catch(function(error){

                })
            }
        }

    }
</script>