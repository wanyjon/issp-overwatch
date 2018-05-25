<style scoped>
/*.layout{
    border: 1px solid #d7dde4;
    background: #f5f7f9;
    position: relative;
    border-radius: 4px;
    overflow: hidden;
}
.layout-logo{
    width: 100px;
    height: 30px;
    background: #5b6270;
    border-radius: 3px;
    float: left;
    position: relative;
    top: 15px;
    left: 20px;
}
.layout-nav{
    width: 420px;
    margin: 0 auto;
    margin-right: 20px;
}*/
</style>
<template>
    <div>
        <!-- <Row> -->
            <!-- <Col span="24" offset=""> -->

                <!-- <Row> -->
                    <!-- <Col span="12"> -->

                    <div style="position: absolute">

                        <img src="@/assets/login/背景.png" :width="screenWidth" :height="screenHeight" style="margin-top: 20px">
                        
                    </div>
                    <div style="position: absolute">
                        <h1>{{screenHeight/2.61}}</h1>
                        <h1>{{screenWidth/3.4615384615384617}}</h1>
                    </div>
                        
                    <!-- </Col> -->
                <!-- </Row> -->
                <!-- <Row> -->
                    <!-- <Col span="3"> -->
                    <div :style="{ position: 'absolute', left: screenWidth + 'px', top: screenHeight/2.61 + 'px',width: screenWidth/3.4615384615384617+'px'}">
                            <div>
                                <h1 style="color: #2d8cf0">欢迎登录</h1>
                            </div>
                            <div>
                                <Input type="text" v-model="user.name" placeholder="Username">
                                    <Icon type="ios-person-outline" slot="prepend"></Icon>
                                </Input>
                            </div>
                            
                            <div style="margin-top: 10px">
                                <Input type="password" v-model="user.password" placeholder="Password">
                                    <Icon type="ios-locked-outline" slot="prepend"></Icon>
                                </Input>
                            </div>

                            <div style="margin-top: 20px">
                                <Button type="primary" long>登录</Button>
                            </div>
                            <div align="right" style="margin-top: 5px">
                                <!-- <span>忘记密码?</span>免费注册 -->
                                <router-link to="/foo"><span style="color: red">忘记密码?</span></router-link>
                                <router-link to="/signUp">免费注册</router-link>
                            </div>
                    </div>
                        
                        <!-- <img src="@/assets/login/背景.png" width="100%" height="100%"> -->
                    <!-- </Col> -->
                <!-- </Row> -->
                

            </Col>

        </Row>
    </div>

</template>
<script>
    export default {
        data () {
            return {
                screenHeight: window.innerHeight - 20,
                screenWidth: document.body.clientWidth/1.6,
                loading: false,
                user: {
                    name: '',
                    password: '',
                }
                
            }
        },
        methods: {
            test(){
                var _this = this;
                 var websocket = null;

    //判断当前浏览器是否支持WebSocket
    if('WebSocket' in window){
        websocket = new WebSocket("ws://localhost:9740/websocket?"+this.username);
    }
    else{
        alert('Not support websocket')
    }

    //连接发生错误的回调方法
    websocket.onerror = function(){
        setMessageInnerHTML("error");
    };

    //连接成功建立的回调方法
    websocket.onopen = function(event){
        // setMessageInnerHTML("open");
        // alert("hello")
        _this.$router.push({ path: '/loan' })
    }

    //接收到消息的回调方法
    websocket.onmessage = function(event){
        // setMessageInnerHTML(event.data);
        console.log(event)
        _this.$Notice.info({
                    title: 'Notification title',
                    desc:'Here is the notification description. Here is the notification description. '
        });
    }

    //连接关闭的回调方法
    websocket.onclose = function(){
        // setMessageInnerHTML("close");
    }

    //监听窗口关闭事件，当窗口关闭时，主动去关闭websocket连接，防止连接还没断开就关闭窗口，server端会抛异常。
    window.onbeforeunload = function(){
        websocket.close();
    }

    //将消息显示在网页上
    function setMessageInnerHTML(innerHTML){
        // document.getElementById('message').innerHTML += innerHTML + '<br/>';
    }

    //关闭连接
    function closeWebSocket(){
        websocket.close();
    }

    //发送消息
    function send(){
        // var message = document.getElementById('text').value;
        // websocket.send(message);
    }
            },

            test2 () {
                var _this = this
                // sessionStorage.setItem("user_name","test22");
                _this.loading = true
                this.$http.post('http://localhost:9740/signIn',this.user)
                    .then(function(respone){
                        console.log(respone)
                        _this.test()
                        // console.log(document.cookie)
                        // sessionStorage.setItem("username",respone.data.name)
                        // sessionStorage.setItem("role",respone.data.roles[0].name)
                        _this.$cookie.set('username',respone.data.name)
                        _this.$cookie.set('role',respone.data.roles[0].name)
                        // console.log(sessionStorage.)
                        // document.cookie = "user="+respone.data;
                        _this.$router.push({ name: 'demo', params: { users: respone.data }});

                    })
                    .catch(function(error){
                        console.log(error)
                        _this.$Message.error(error.response.data.message);
                        error.response.data
                    })
            }
        }

    }
</script>