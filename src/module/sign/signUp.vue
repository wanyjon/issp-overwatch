<style scoped>

</style>
<template>
  <div class="" style="margin-top: 7%">
    <Row>
      <Col span="" offset="3">
        <div class="" style="margin-top: 15px;margin-bottom: 15px">
          <Button type="primary" @click="show = true,offset = 7">个人注册</Button>
          <Button type="ghost" @click="show = false,offset = 6,text = '下一步'">企业注册</Button>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="14" :offset="offset">
        <div class="" style="margin-top: 15px;margin-bottom: 15px" v-show="show">
          <Steps :current="num">
            <Step title="手机号" icon="android-phone-portrait"></Step>
            <Step title="验证身份" icon="person-add"></Step>
            <Step title="设置用户" icon="android-lock"></Step>
            <!-- <Icon type="android-lock"></Icon> -->
            <!-- <Icon type="android-phone-portrait"></Icon> -->
          </Steps>
        </div>
        <div v-show="!show" style="margin-top: 15px;margin-bottom: 15px">
            <Steps :current="num">
            <Step title="手机号" icon="android-phone-portrait"></Step>
            <Step title="验证身份" icon="person-add"></Step>
            <Step title="设置用户" icon="android-lock"></Step>
            <!-- <Icon type="android-lock"></Icon> -->
            <!-- <Icon type="android-phone-portrait"></Icon> -->
            <Step title="企业信息" icon="person-add"></Step>
          </Steps>
        </div>
      </Col>
    </Row>
    <Row>
      <Col span="4" offset="10">
        <div class="" align="left" style="margin-top: 15px;margin-bottom: 15px">

            <div v-show="num == 0" style="margin-bottom: 20px">
                <p>请输入注册的手机号</p>
                <Input v-model="user.telphone" placeholder="Enter something..." style=""></Input>
            </div>
            <div v-show="num == 1">
                <p>验证手机号：{{user.telphone}}</p>
                <Input v-model="code" placeholder="Enter something..." style=""></Input>

            </div>
            <div v-show="num == 2">
                <p>设置用户名</p>
                <Input v-model="user.name" placeholder="Enter something..." style=""></Input>
                <p>设置登录密码</p>
                <Input v-model="user.password" placeholder="Enter something..." style=""></Input>
                <p>确认密码</p>
                <Input v-model="value" placeholder="Enter something..." style=""></Input>
            </div>

            <div v-show="num == 3">
                <p>企业名称</p>
                <Input v-model="user.company" placeholder="Enter something..." style=""></Input>
                <p>企业人姓名</p>
                <Input v-model="user.realName" placeholder="Enter something..." style=""></Input>
            </div>
          
        </div>
        <div align="center">
            <Button type="primary" @click="cout">{{this.text}}</Button>
        </div>
      </Col>
    </Row>
  </div>


</template>
<script>
    export default {
      data(){
        return {
            show: true,
          text: "下一步",
          offset: 7,
          num: 0,
          // telphone: '',
          code: '',
          user: {
                    telphone: '',
                    name: '',
                    password: '',
                    company: '',
                    realName: '',
                }
        }
      },
      methods: {
        cout(){
            var _this = this
            if (this.num == 0) {
                this.$http.get('http://localhost:9740/sendSms',{params : {
                    telphone: this.user.telphone
                }})
                .then(function(respone){
                    if (_this.show) {
                if (_this.num < 2) {
                    _this.num += 1;
                  }
                if (_this.num == 2) {
                    _this.text = "确认"
                  }
            } else {
                _this.text = "下一步"
                if (_this.num < 3) {
                    _this.num += 1;
                }
                if (_this.num == 3) {
                    _this.text = "确认"
                }
            }
                })
                .catch(function(error){

                })
            }
            if (this.num == 1) {
                this.$http.get('http://localhost:9740/verification',{params : {
                    telphone: this.user.telphone,
                    code: this.code
                }})
                .then(function(respone){
                    if (_this.show) {
                if (_this.num < 2) {
                    _this.num += 1;
                  }
                if (_this.num == 2) {
                    _this.text = "确认"
                  }
            } else {
                _this.text = "下一步"
                if (_this.num < 3) {
                    _this.num += 1;
                }
                if (_this.num == 3) {
                    _this.text = "确认"
                }
            }
                })
                .catch(function(error){
                    _this.$Message.error(error.response.data.message);
                })
            }
            if (this.num == 2) {
                console.log(this.user)
                if (this.show) {
                    this.$http.post('http://localhost:9740/signUp',this.user)
                        .then(function(respone){
                            
                        })
                        .catch(function(error){

                        })
                    } else {
                        if (_this.show) {
                            if (_this.num < 2) {
                                _this.num += 1;
                              }
                            if (_this.num == 2) {
                                _this.text = "确认"
                              }
                        } else {
                            _this.text = "下一步"
                            if (_this.num < 3) {
                                _this.num += 1;
                            }
                            if (_this.num == 3) {
                                _this.text = "确认"
                            }
                        }
                    }
            }
            if (this.num == 3) {
                console.log(this.user)
                if (!this.show) {
                    this.$http.post('http://localhost:9740/signUp',this.user)
                        .then(function(respone){
                            
                        })
                        .catch(function(error){

                        })
                    } else {
                        
                    }
                
            }
            

        },
        coucu() {
            if (this.show) {
                if (this.num < 2) {
                    this.num += 1;
                  }
                if (this.num == 2) {
                    this.text = "确认"
                  }
            } else {
                this.text = "下一步"
                if (this.num < 3) {
                    this.num += 1;
                }
                if (this.num == 3) {
                    this.text = "确认"
                }
            }

        },
        check() {
            if (num == 0) {
                this.$http.get('http://localhost:9740/sendSms',{ params : {
                    telphone: this.user.telphone
                }})
                .then(function(respone){

                })
                .catch(function(error){

                })
            }
        }
      }

    }
</script>