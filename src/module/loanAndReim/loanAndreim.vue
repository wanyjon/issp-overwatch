<style>
  .layout{
        border: 1px solid #d7dde4;
        background: #f5f7f9;
        position: relative;
        border-radius: 4px;
        overflow: hidden;
    }
    .layout-header-bar{
        background: #fff;
        box-shadow: 0 1px 1px rgba(0,0,0,.1);
    }
    .layout-logo-left{
        width: 90%;
        height: 30px;
        background: #5b6270;
        border-radius: 3px;
        margin: 15px auto;
    }
    .menu-icon{
        transition: all .3s;
    }
    .rotate-icon{
        transform: rotate(-90deg);
    }
    .menu-item span{
        display: inline-block;
        overflow: hidden;
        width: 69px;
        text-overflow: ellipsis;
        white-space: nowrap;
        vertical-align: bottom;
        transition: width .2s ease .2s;
    }
    .menu-item i{
        transform: translateX(0px);
        transition: font-size .2s ease, transform .2s ease;
        vertical-align: middle;
        font-size: 16px;
    }
    .collapsed-menu span{
        width: 0px;
        transition: width .2s ease;
    }
    .collapsed-menu i{
        transform: translateX(5px);
        transition: font-size .2s ease .2s, transform .2s ease .2s;
        vertical-align: middle;
        font-size: 22px;
    }
    h2{
        color: white
    }
    .center-right{
        float: right;
    }
    .top,.bottom{
        text-align: center;
    }
    body {
        background: white;
    }
</style>
<template>
    <div class="layout">
        <Layout>
            <Sider ref="side1" hide-trigger collapsible :collapsed-width="78" v-model="isCollapsed" :style="{position: 'fixed', height: '100vh', left: 0, overflow: 'auto'}">
                <div align="center" style="margin-top: 15px;margin-bottom: 30px">
                    <!-- <img src="@/assets/WechatIMG561.jpeg"> -->
                    <Avatar size="large" icon="person"/>
                    <h2>{{formValidate.user}}</h2>
                    <p style="color: white">Action of the king</p>
                    <Row>
                        <Col span='16' offset="4">
                            <Row>
                                <Col span="8">
                                    <h2>12</h2>
                                </Col>
                                <Col span="8">
                                    <div style="float:left;width: 1px;height: 25px; background: white;margin-left: 20px"></div>
                                </Col>
                                <Col span="8">
                                    <h2>234</h2>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col span='16' offset="4">
                            <div style="margin-bottom: 15px">
                                <Row>
                                    <Col span="8">
                                        <p style="color: white">action</p>
                                    </Col>
                                    <Col span="8">
                                        <div style="float:left;width: 1px;height: 25px; background: #495060;margin-left: 20px"></div>
                                    </Col>
                                    <Col span="8">
                                        <p style="color: white">king</p>
                                    </Col>
                                </Row>
                            </div>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <Col span="6">
                                    <div class="top">
                                        <router-link to="/signIn"><Icon type="power" size="20" color="white"></Icon></router-link>
                                    </div>
                                </Col>
                                <Col span="6">
                                    <div class="top">
                                        <a href=""><Icon type="social-youtube" size="20" color="white"></Icon></a>
                                    </div>
                                </Col>
                                <Col span="6">
                                    <Badge dot>
                                        <Icon type="chatbox" size="20" color="white"></Icon>
                                    </Badge>
                                </Col>
                                <Col span="6">
                                    <Icon type="person-add" size="20" color="white"></Icon>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
                <Menu :active-name="menuName" theme="dark" width="auto" :class="menuitemClasses" @on-select="handleMenu">
                    <div v-show="this.$cookie.get('role') == 'user'">
                        <MenuGroup title="借款管理">
                            <MenuItem name="1">
                                <Icon type="document-text"></Icon>
                                借款进度
                            </MenuItem>
                            
                        </MenuGroup>
                        <MenuGroup title="报销管理">
                            <MenuItem name="2">
                                <Icon type="document-text"></Icon>
                                报销进度
                            </MenuItem>
                        </MenuGroup>
                    </div>
                    <div v-show="this.$cookie.get('role') != 'user'">
                        <Submenu name="1">
                            <template slot="title">
                                <Icon type="ios-navigate"></Icon>
                                借款管理
                            </template>
                            <div>
                                <MenuItem name="待审核">待审核</MenuItem>
                                <MenuItem name="待分析">待分析</MenuItem>
                                <MenuItem name="待付款">待付款</MenuItem>
                                <MenuItem name="待确认">待确认</MenuItem>
                                <MenuItem name="待还款">待还款</MenuItem>
                                <MenuItem name="待核对">待核对</MenuItem>
                                <MenuItem name="已完成">已完成</MenuItem>
                                <MenuItem name="有误记录">有误记录</MenuItem>
                            </div>
                            
                        </Submenu>
                        <Submenu name="2">
                            <template slot="title">
                                <Icon type="ios-keypad"></Icon>
                                报销管理
                            </template>
                            <MenuItem name="2-1">待审核</MenuItem>
                            <MenuItem name="2-2">待分析</MenuItem>
                            <MenuItem name="2-3">待核对</MenuItem>
                            <MenuItem name="2-4">待付款</MenuItem>
                            <MenuItem name="2-5">已完成</MenuItem>
                            <MenuItem name="2-6">有误记录</MenuItem>
                        </Submenu>
                    </div>
                    
                </Menu>

            </Sider>
            <Layout :style="{marginLeft: '200px'}">
                <Header :style="{padding: 0}" class="layout-header-bar">
                    <Icon @click.native="collapsedSider" :class="rotateIcon" :style="{margin: '20px 20px 0'}" type="navicon-round" size="24"></Icon>
                </Header>
                <Content :style="{margin: '20px', background: '#fff', minHeight: '260px',padding: '20px'}">
                    <Tabs :value="name">
                        <TabPane label="列表" icon="navicon" name="name1">
                            <Table :columns="columns10" :data="data9" :loading="loading" @on-select="selection" ref="table"></Table>
                            <div style="margin-top: 15px;margin-bottom: 15px">
                                <!-- <Button style="margin-right: 5px">这是一个无所事事的按钮</Button> --><Button type="primary" size="large" @click="exportData"><Icon type="ios-download-outline"></Icon> 导出当前页面数据 </Button>
                                  <Button size="large" type="error" @click="batchRemove">批量删除</Button>
                            </div>
                            <div align="center">
                                <Page :total="totalElements" show-total @on-change="pageSwitch"></Page>
                            </div>

                        </TabPane>
                        <TabPane label="添加" icon="plus" name="name2">
                            <Form ref="formValidate" :model="formValidate" :rules="ruleValidate" :label-width="0" label-position="top">
                            <Row :gutter="16">
                                <Col span="4" offset="1">
                                    <div>

                                            <FormItem label="借款人" prop="borrower">
                                                <Input v-model="formValidate.borrower" placeholder="请输入借款人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="负责人" prop="charge">
                                                <Input v-model="formValidate.charge" placeholder="请输入负责人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="借款方式" prop="wayOfBorrowing">
                                                <Select v-model="formValidate.wayOfBorrowing" placeholder="选择你的借款方式">
                                                    <Option value="现金">现金</Option>
                                                    <Option value="公司代购">公司代购</Option>
                                                    <Option value="转账">转账</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="预计借款时间" prop="estimateTime">
                                              <DatePicker type="date" placeholder="选一个好的时机" v-model="formValidate.estimateTime"></DatePicker>
                                            </FormItem>
                                            <FormItem label="是否有发票" prop="invoice">
                                                <RadioGroup v-model="formValidate.invoice">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="金额" prop="money">
                                                <InputNumber :max="10000" :min="0" v-model="formValidate.money"></InputNumber>
                                            </FormItem>
                                            <FormItem label="一级科目" prop="classA">
                                                <Select v-model="formValidate.classA" placeholder="请选择一个一级科目">
                                                    <Option value="主营业务成本">主营业务成本</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="三级科目" prop="classC">
                                                <Select v-model="formValidate.classC" placeholder="请选择一个三级科目">
                                                    <Option value="餐费">餐费</Option>
                                                    <Option value="交通费">交通费</Option>
                                                    <Option value="房租">房租</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="借款事由" prop="reason">
                                                <Input v-model="formValidate.reason" placeholder="说下理由呗"></Input>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="4">
                                    <div>

                                            <FormItem label="参与人">
                                                <Input v-model="formValidate.participants" placeholder="请输入参与人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="地区" prop="area">
                                                <Input v-model="formValidate.area" placeholder="请输入所在地区"></Input>
                                            </FormItem>
                                            <FormItem label="项目组" prop="project">
                                                <Input v-model="formValidate.project" placeholder="所在项目组"></Input>
                                            </FormItem>

                                            <FormItem label="项目名称" prop="projectName">
                                                <Input v-model="formValidate.projectName" placeholder="这个项目有名字吗"></Input>
                                            </FormItem>
                                            <FormItem label="是否补写" prop="writeUp">
                                                <RadioGroup v-model="formValidate.writeUp">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="无发票备注" prop="noInvoice">
                                                <Input v-model="formValidate.noInvoice" placeholder="请输入无发票备注"></Input>
                                            </FormItem>
                                            <FormItem label="二级科目" prop="classB">
                                                <Select v-model="formValidate.classB" placeholder="请选择一个二级科目">
                                                    <Option value="市场费">市场费</Option>
                                                    <Option value="员工培训">员工培训</Option>
                                                    <Option value="办公费">办公费</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="是否有准备金" prop="readyMoney">
                                                <RadioGroup v-model="formValidate.readyMoney">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="15">
                                    <vue-chart type="bar" :data="chartData"></vue-chart>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="8" offset="1">
                                    <FormItem label="商品链接" prop="link">
                                        <Input v-model="formValidate.link" placeholder="请输入商品链接"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="8" offset="1">
                                    <FormItem label="备注">
                                        <Input v-model="formValidate.remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="要不要说点什么呢"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset="1">
                                    <FormItem>
                                        <Button type="primary" @click="handleSubmit('formValidate')">Submit</Button>
                                        <Button type="ghost" @click="handleReset('formValidate')" style="margin-left: 8px">Reset</Button>
                                    </FormItem>
                                </Col>
                            </Row>
                            </Form>
                        </TabPane>
                    </Tabs>

                </Content>
            </Layout>
        </Layout>

        <div>
          <div v-if="data9[index] != null">
          <Modal
              v-model="modal1"
              title="Common Modal dialog box title"
              @on-ok="editSubmit"
              @on-cancel="cancel">
                  
                    <Form ref="data9[index]" :model="data9[index]" :rules="ruleValidate" :label-width="0" label-position="top">
                            <Row :gutter="16">
                                <Col span="11" offset="1">
                                    <div>

                                            <FormItem label="借款人" prop="borrower">
                                                <Input v-model="data9[index].borrower == null ? 0:data9[index].borrower" placeholder="请输入借款人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="负责人" prop="charge">
                                                <Input v-model="data9[index].charge" placeholder="请输入负责人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="借款方式" prop="wayOfBorrowing">
                                                <Select v-model="data9[index].wayOfBorrowing" placeholder="选择你的借款方式">
                                                    <Option value="现金">现金</Option>
                                                    <Option value="公司代购">公司代购</Option>
                                                    <Option value="转账">转账</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="预计借款时间" prop="estimateTime">
                                              <DatePicker type="date" placeholder="选一个好的时机" v-model="data9[index].estimateTime"></DatePicker>
                                            </FormItem>
                                            <FormItem label="是否有发票" prop="invoice">
                                                <RadioGroup v-model="data9[index].invoice">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="金额" prop="money">
                                                <InputNumber :max="10000" :min="0" v-model="data9[index].money"></InputNumber>
                                            </FormItem>
                                            <FormItem label="一级科目" prop="classA">
                                                <Select v-model="data9[index].classA" placeholder="请选择一个一级科目">
                                                    <Option value="主营业务成本">主营业务成本</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="三级科目" prop="classC">
                                                <Select v-model="data9[index].classC" placeholder="请选择一个三级科目">
                                                    <Option value="餐费">餐费</Option>
                                                    <Option value="交通费">交通费</Option>
                                                    <Option value="房租">房租</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="借款事由" prop="reason">
                                                <Input v-model="data9[index].reason" placeholder="说下理由呗"></Input>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="11">
                                    <div>

                                            <FormItem label="参与人">
                                                <Input v-model="data9[index].participants" placeholder="请输入参与人的姓名"></Input>
                                            </FormItem>
                                            <FormItem label="地区" prop="area">
                                                <Input v-model="data9[index].area" placeholder="请输入所在地区"></Input>
                                            </FormItem>
                                            <FormItem label="项目组" prop="project">
                                                <Input v-model="data9[index].project" placeholder="所在项目组"></Input>
                                            </FormItem>

                                            <FormItem label="项目名称" prop="projectName">
                                                <Input v-model="data9[index].projectName" placeholder="这个项目有名字吗"></Input>
                                            </FormItem>
                                            <FormItem label="是否补写" prop="writeUp">
                                                <RadioGroup v-model="data9[index].writeUp">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                            <FormItem label="无发票备注" prop="noInvoice">
                                                <Input v-model="data9[index].noInvoice" placeholder="请输入无发票备注"></Input>
                                            </FormItem>
                                            <FormItem label="二级科目" prop="classB">
                                                <Select v-model="data9[index].classB" placeholder="请选择一个二级科目">
                                                    <Option value="市场费">市场费</Option>
                                                    <Option value="员工培训">员工培训</Option>
                                                    <Option value="办公费">办公费</Option>
                                                    <Option value="办公用品">办公用品</Option>
                                                </Select>
                                            </FormItem>
                                            <FormItem label="是否有准备金" prop="readyMoney">
                                                <RadioGroup v-model="data9[index].readyMoney">
                                                    <Radio label="是">是</Radio>
                                                    <Radio label="否">否</Radio>
                                                </RadioGroup>
                                            </FormItem>
                                    </div>
                                </Col>
                                <Col span="15">
                                    <vue-chart type="bar" :data="chartData"></vue-chart>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="22" offset="1">
                                    <FormItem label="商品链接" prop="link">
                                        <Input v-model="data9[index].link" placeholder="请输入商品链接"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col span="22" offset="1">
                                    <FormItem label="备注">
                                        <Input v-model="data9[index].remarks" type="textarea" :autosize="{minRows: 2,maxRows: 5}" placeholder="要不要说点什么呢"></Input>
                                    </FormItem>
                                </Col>
                            </Row>
                            <Row>
                                <Col offset="1">
                                    <FormItem>
                                        <!-- <Button type="primary" @click="handleSubmit('data9[index]')">Submit</Button> -->
                                        <!-- <Button type="ghost" @click="handleReset('data9[index]')" style="margin-left: 8px">Reset</Button> -->
                                    </FormItem>
                                </Col>
                            </Row>
                            </Form>
                  
            </Modal>
            <Modal
        v-model="modal"
        title="Common Modal dialog box title"
        @on-ok="auditingSubmit"
        @on-cancel="cancel"
        width="420">
        <Row>
          <Col span="12">
            <h3>借款人: {{data9[index].borrower}}</h3>
            <h3>预计借款时间: {{data9[index].estimateTime}}</h3>
            <h3>一级科目: {{data9[index].classA}}</h3>
            <h3>借款事由: {{data9[index].reason}}</h3>
            <h3>项目组: {{data9[index].project}}</h3>
            <h3>借款方式: {{data9[index].wayOfBorrowing}}</h3>
            <h3>金额: {{data9[index].money}}</h3>
            <h3>三级科目: {{data9[index].classC}}</h3>
          </Col>
          <Col span="12">
            <h3>负责人: {{data9[index].charge}}</h3>
            <h3>是否有发票: {{data9[index].invoice}}</h3>
            <h3>二级科目: {{data9[index].classB}}</h3>
            <h3>参与人: {{data9[index].participants}}</h3>
            <h3>项目名称: {{data9[index].projectName}}</h3>
            <h3>地区: {{data9[index].area}}</h3>
            <h3>是否补写: {{data9[index].writeUp}}</h3>
          </Col>
          
        </Row>
        <Row>
          <Col span="24">
            <div style="margin-top: 20px" >
              <Input v-model="value5" type="textarea" placeholder="Enter something..."></Input>
            </div>
            
          </Col>
        </Row>
        <Row>
          <Col span="24">
            <div style="margin-top: 20px" align="right">
              <i-switch v-model="pass" @on-change="change"></i-switch>
            </div>
          </Col>
        </Row>
    </Modal>
            <Modal
                v-model="modal2"
                title="Common Modal dialog box title"
                @on-ok="repaymentSubmit"
                @on-cancel="cancel">
                <div>
                  <Row>
                    <Col span="12">
                      <h1>{{data9[index].borrower}}</h1>
                      <div style="padding: 15px">
                        <Input v-model="value" placeholder="Enter something..." style=""></Input>
                        <Input v-model="value" placeholder="Enter something..." style="margin-top: 15px"></Input>
                        <Input v-model="value" placeholder="Enter something..." style="margin-top: 15px"></Input>
                      </div>
                    </Col>
                    <Col span="12">
                      <h1>{{data9[index].borrower}}</h1>
                      <div style="padding: 15px">
                        <Input v-model="value" placeholder="Enter something..." style=""></Input>
                        <Input v-model="value" placeholder="Enter something..." style="margin-top: 15px"></Input>
                        <Input v-model="value" placeholder="Enter something..." style="margin-top: 15px"></Input>
                      </div>
                    </Col>
                  </Row>
                </div>
                <!-- <h1>是否确认付款</h1> -->
            </Modal>
            <Modal
                v-model="modal3"
                title="Common Modal dialog box title"
                @on-ok="checkSubmit"
                @on-cancel="cancel">
                <div>
                  <Row>
                    <Col span="12">
                      <h1>{{data9[index].borrower}}</h1>
                      <div style="padding: 15px">
                        <Input v-model="value" placeholder="Enter something..." style=""></Input>
                      </div>
                    </Col>
                    <Col span="12">
                      <h1>{{data9[index].borrower}}</h1>
                      <div style="padding: 15px">
                        <Input v-model="value" placeholder="Enter something..." style=""></Input>
                      </div>
                    </Col>
                  </Row>
                </div>
            </Modal>
          </div>

          
        </div>
    </div>
</template>
<script>
    import expandRow from './table-expand.vue';
    export default {
        components: {
            expandRow,
            // VueChart
        },
        data () {
          return {
                totalElements: 0,
                menuName: '待审核',
                loading: true,
                pass: false,
                test1: 'Button',
                index: 0,
                selection1: [],
                modal1: false,
                modal2: false,
                modal3: false,
                modal: false,
                disabled: false,
                formValidate: {
                    user: '',
                    borrower: '',
                    charge: '',
                    participants: '',
                    estimateTime: '',
                    area: '',
                    project: '',
                    projectName: '',
                    wayOfBorrowing: '',
                    classA: '',
                    classB: '',
                    classC: '',
                    writeUp: '',
                    reason: '',
                    money: 0,
                    invoice: '',
                    noInvoice: '',
                    readyMoney: '',
                    link: '',
                    remarks: '',
                    payOrigin: '',
                    payDate: '',
                    nowProgress: '待审核',
                },
                auditings: {
                    pass: false,
                    opinion: '',
                    reimbursement: '',
                    borrowMoney: '',
                    sendBack: '',
                    returnDate: '',
                    restitution: '',
                    account: '',
                },
                chartData: {
                    labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                    datasets: [{
                        label: '# of Votes',
                        data: [12, 19, 3, 5, 2, 3],
                        backgroundColor: [
                            'rgba(255, 99, 132, 0.2)',
                            'rgba(54, 162, 235, 0.2)',
                            'rgba(255, 206, 86, 0.2)',
                            'rgba(75, 192, 192, 0.2)',
                            'rgba(153, 102, 255, 0.2)',
                            'rgba(255, 159, 64, 0.2)'
                        ],
                        borderColor: [
                            'rgba(255,99,132,1)',
                            'rgba(54, 162, 235, 1)',
                            'rgba(255, 206, 86, 1)',
                            'rgba(75, 192, 192, 1)',
                            'rgba(153, 102, 255, 1)',
                            'rgba(255, 159, 64, 1)'
                        ],
                        borderWidth: 1
                    }]
                },
                ruleValidate: {
                    borrower: [
                        { required: true, message: '借款人不能为空', trigger: 'blur' }
                    ],
                    charge: [
                        { required: true, message: '负责人不能为空', trigger: 'blur' },
                        // { type: 'email', message: 'Incorrect email format', trigger: 'blur' }
                    ],
                    area: [
                        { required: true, message: '地区不能为空', trigger: 'blur' },
                    ],
                    project: [
                        { required: true, message: '项目组不能为空', trigger: 'blur' },
                    ],
                    projectName: [
                        { required: true, message: '项目名称不能为空', trigger: 'blur' },
                    ],
                    noInvoice: [
                        { required: true, message: '无发票备注不能为空', trigger: 'blur' },
                    ],
                    link: [
                        { required: true, message: '商品链接不能为空', trigger: 'blur' },
                    ],
                    reason: [
                        { required: true, message: '借款事由不能为空', trigger: 'blur' },
                    ],
                    money: [
                        { required: true, type: 'number', message: '金额不能为空', trigger: 'blur' },
                    ],
                    area: [
                        { required: true, message: '地区不能为空', trigger: 'blur' },
                    ],
                    wayOfBorrowing: [
                        { required: true, message: '请选择一种借款方式', trigger: 'change' }
                    ],
                    invoice: [
                        { required: true, message: '有还是没有发票', trigger: 'change' }
                    ],
                    city: [
                        { required: true, message: 'Please select the city', trigger: 'change' }
                    ],
                    gender: [
                        { required: true, message: 'Please select gender', trigger: 'change' }
                    ],
                    writeUp: [
                        { required: true, message: '到底是不是补写的', trigger: 'change' }
                    ],
                    readyMoney: [
                        { required: true, message: '有没有准备钱', trigger: 'change' },
                        // { type: 'array', max: 2, message: 'Choose two hobbies at best', trigger: 'change' }
                    ],
                    estimateTime: [
                        { required: true, type: 'date', message: '预估一下借款的时间', trigger: 'blur' }
                    ],
                    classA: [
                        { required: true, type: 'string', message: '一级科目不能为空', trigger: 'change' }
                    ],
                    classB: [
                        { required: true, type: 'string', message: '二级科目不能为空', trigger: 'change' }
                    ],
                    classC: [
                        { required: true, type: 'string', message: '三级科目不能为空', trigger: 'change' }
                    ],
                    desc: [
                        { required: true, message: 'Please enter a personal introduction', trigger: 'blur' },
                        { type: 'string', min: 20, message: 'Introduce no less than 20 words', trigger: 'blur' }
                    ]
                },
                isCollapsed: false,
                columns10: [
                    {
                        type: 'selection',
                        width: 60,
                        align: 'center'
                    },
                    {
                        type: 'expand',
                        width: 50,
                        render: (h, params) => {
                            return h(expandRow, {
                                props: {
                                    row: params.row
                                }
                            })
                        }
                    },
                    {
                        title: '填单人',
                        key: 'user',

                    },
                    {
                        title: '填单日期',
                        key: 'fillTime'
                    },
                    {
                        title: '借款金额(元)',
                        key: 'money'
                    },
                    {
                        title: '预计借款日期',
                        key: 'estimateTime'
                    },
                    {
                        title: '操作',
                        key: 'action',
                        // width: 150,
                        align: 'left',
                        render: (h, params) => {

                          if (this.menuName == '待审核') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show6(params.index,1)
                                            this.modal1 = true
                                            this.index = params.index
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            this.remove(params.row.id)
                                        }
                                    }
                                }, '删除'),
                                h('Button', {

                                    props: {
                                        type: '',
                                        size: 'small',
                                        disabled: this.disabled,
                                        display: true,
                                        // v-show: false,
                                    },
                                    
                                    on: {
                                        click: () => {
                                            this.modal = true
                                            this.index = params.index
                                            // this.show(params.index)
                                        }
                                    }
                                },'审核')
                            ]);
                          } else if (this.menuName == '待付款') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            // this.show6(params.index,1)
                                            this.index = params.index
                                            this.paymentSubmit()
                                            // this.modal2 = true
                                            
                                        }
                                    }
                                }, '付款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          } else if (this.menuName == '待确认') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '确认收款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          } else if (this.menuName == '待还款') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '寄件'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal2 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '还款'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          } else if (this.menuName == '待核对') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal3 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '核对'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal2 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '寄件信息'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          } else if (this.menuName == '已完成') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal3 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '查看附件'),
                                h('Button', {
                                    props: {
                                        type: 'primary',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal2 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '寄件信息'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          } else if (this.menuName == '有误记录') {
                            return h('div', [
                                h('Button', {
                                    props: {
                                        type: 'info',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            this.modal1 = true
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '编辑'),
                                h('Button', {
                                    props: {
                                        type: 'error',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px'
                                    },
                                    on: {
                                        click: () => {
                                            this.index = params.index
                                            // this.modal2 = true
                                            this.remove(params.row.id)
                                            // this.confirmSubmit()
                                            // this.index = params.index
                                        }
                                    }
                                }, '删除'),
                                h('Button', {
                                    props: {
                                        type: '',
                                        size: 'small'
                                    },
                                    style: {
                                        marginRight: '5px',
                                        display: false,
                                    },
                                    on: {
                                        click: () => {
                                            console.log(params)
                                            // this.remove(params.row.id)
                                        }
                                    }
                                }, '审核详情'),
                            ]);
                          }

                        }
                    }
                ],
                data9: [
                    {
                        user: 'John Brown',
                        fillTime: 18,
                        money: 'New York No. 1 Lake Park',
                        estimateTime: 'Data engineer',
                        interest: 'badminton',
                        birthday: '1991-05-14',
                        book: 'Steve Jobs',
                        movie: 'The Prestige',
                        music: 'I Cry'
                    },
                    {
                        user: 'Jim Green',
                        fillTime: 25,
                        money: 'London No. 1 Lake Park',
                        estimateTime: 'Data Scientist',
                        interest: 'volleyball',
                        birthday: '1989-03-18',
                        book: 'My Struggle',
                        movie: 'Roman Holiday',
                        music: 'My Heart Will Go On'
                    },
                    {
                        user: 'Joe Black',
                        fillTime: 30,
                        money: 'Sydney No. 1 Lake Park',
                        estimateTime: 'Data Product Manager',
                        interest: 'tennis',
                        birthday: '1992-01-31',
                        book: 'Win',
                        movie: 'Jobs',
                        music: 'Don’t Cry'
                    },
                    {
                        user: 'Jon Snow',
                        fillTime: 26,
                        money: 'Ottawa No. 2 Lake Park',
                        estimateTime: 'Data Analyst',
                        interest: 'snooker',
                        birthday: '1988-7-25',
                        book: 'A Dream in Red Mansions',
                        movie: 'A Chinese Ghost Story',
                        music: 'actor'
                    }
                ]
          }
        },
        created: function(){
              var _this = this
              this.loading = true
              _this.formValidate.user = _this.$cookie.get('username')
              // _this.menuName = name
              this.$http.get('http://192.168.0.83:9750/lend/list',{params:{
                progress: _this.menuName,
                pageNum: 1
              }})
              .then(function(respone){
                console.log(respone)
                _this.loading = false
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements

              })
              .catch(function(error){

              })
        },
        methods: {
            batchRemove () {
              var _this = this
              this.loading = true
              // console.log(this.selection1)
              this.$http.post('http://192.168.0.139:9750/lend/batchRemove',this.selection1)
              .then(function(respone){
                // console.log(respone.data)
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false

              })
              .catch(function(error){

              })
            },
            selection (selection,row) {
              console.log(selection)
              console.log(row)
              this.selection1 = selection
            },
            checkSubmit () {
              var _this = this
              this.loading = true
              this.data9[this.index].lastProgress = '待核对'
              this.data9[this.index].nowProgress = '已完成'
              this.$http.post('http://192.168.0.83:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })
            },
            repaymentSubmit () {
              var _this = this
              this.loading = true
              this.data9[this.index].lastProgress = '待还款'
              this.data9[this.index].nowProgress = '待核对'
              this.$http.post('http://192.168.0.83:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })
            },
            confirmSubmit () {
              var _this = this
              this.loading = true
              this.data9[this.index].lastProgress = '待确认'
              this.data9[this.index].nowProgress = '待还款'
              this.$http.post('http://192.168.0.83:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })
            },
            paymentSubmit () {
              var _this = this
              this.loading = true
              this.data9[this.index].lastProgress = '待付款'
              this.data9[this.index].nowProgress = '待确认'
              this.$http.post('http://192.168.0.139:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })

            },
            editSubmit () {
              var _this = this
              this.loading = true
              console.log(this.data9[this.index])
              this.$http.post('http://192.168.0.83:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })
            },
            auditingSubmit () {
              //审核提交
              // console.log(this.data9[this.index])
              this.loading = true
              var _this = this
              this.data9[this.index].auditings.push(this.auditings)
              this.data9[this.index].lastProgress = '待审核'
              if (this.auditings.pass) {
                this.data9[this.index].nowProgress = '待付款'
              } else {
                this.data9[this.index].nowProgress = '有误记录'
              }
              console.log(this.data9[this.index])
              this.$http.post('http://192.168.0.139:9750/lend/edit',this.data9[this.index])
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){
                
              })
              
            },
            change (status) {
              this.auditings.pass = status
            },
            remove (id) {
              //删除
              var _this = this
              _this.loading = true
              this.$http.delete('http://192.168.0.83:9750/lend/delete',{params:{
                id: id,
                progress: _this.menuName
              }})
              .then(function(respone){
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements
                _this.loading = false
              })
              .catch(function(error){

              })
            },
            handleSubmit (name) {
                var _this = this
                this.$refs[name].validate((valid) => {
                    if (valid) {
                        this.$Message.success('Success!');
                        console.log(this.formValidate)
                        this.$http.post('http://192.168.0.83:9750/lend/save',this.formValidate)
                            .then(function(respone){
                                console.log(respone)
                                // _this.loading = false
                                _this.data9 = respone.data.content
                                _this.totalElements = respone.data.totalElements
                                // location.reload()
                            })
                            .catch(function (error) {
                                console.log(error);
                            });
                    } else {
                        this.$Message.error('Fail!');
                    }
                })
            },
            handleMenu (name) {
              var _this = this
              this.loading = true
              _this.menuName = name
              this.$http.get('http://192.168.0.139:9750/lend/list',{params:{
                progress: name,
                pageNum: 1
              }})
              .then(function(respone){
                console.log(respone)
                _this.loading = false
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements

              })
              .catch(function(error){

              })

            },
            pageSwitch (number) {

              var _this = this
              _this.loading = true
              this.$http.get('http://192.168.0.139:9750/lend/list',{params:{
                progress: _this.menuName,
                pageNum: number
              }})
              .then(function(respone){
                _this.loading = false
                _this.data9 = respone.data.content
                _this.totalElements = respone.data.totalElements

              })
              .catch(function(error){

              })
            }
        }
    }
</script>