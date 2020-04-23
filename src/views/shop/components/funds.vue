<template>
    <div>
        <div class="account-page">
            <div class="search-flex" style="margin-bottom: 20px">
                <div class="account-total">本金： <span class="spm8" style="color: red">{{ balance?balance:0 }}</span>元</div>
                <div class="account-total">佣金： <span class="spm8" style="color: #97A8BE">{{ brokerageBalance?brokerageBalance:0 }}</span>元</div>
                <div class="account-total">冻结资金： <span class="spm8" style="color: #97A8BE">{{ freezeBalance?freezeBalance:0 }}</span>元</div>
                <div style="position: absolute;right: 44px"><el-button class="btn-theme" size="mini" @click="dialogFormVisible = true">佣金充值</el-button></div>
            </div>

            <div class="search-flex" style="margin-bottom: 10px">
                <div class="item">
                    <span class="lb">账户类型：</span>
                    <el-select v-model="queryList.flag" style="width: 90px" size="mini">
                        <el-option
                                v-for="item in flagList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="item">
                    <span class="lb">收支：</span>
                    <el-select v-model="queryList.type" style="width: 90px" size="mini">
                        <el-option
                                v-for="item in typeList"
                                :key="item.value"
                                :label="item.label"
                                :value="item.value">
                        </el-option>
                    </el-select>
                </div>
                <div class="item">
                    <span class="lb">时间：</span>
                    <el-date-picker
                            value-format="yyyy-MM-dd"
                            size="mini"
                            style="width: 200px"
                            v-model="timeRange"
                            @change="timeChange"
                            type="daterange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </div>
                <el-button size="mini" class="btn-theme" @click="search">搜索</el-button>
                <el-button size="mini" class="btn-theme" @click="exportExcel" >导出</el-button>
            </div>
            <table class="table">
                <tr>
                    <th>时间</th>
                    <th>收支</th>
                    <th>金额</th>
                    <th>账户余额</th>
                    <th>备注</th>
                </tr>
                <tr v-for="item in list">
                    <td>{{ item.createTime }}</td>
                    <td><span :class="{'up':item.moneyType===1,'down':item.moneyType===2}">{{ item.moneyType===1?'收':'支' }}</span></td>
                    <td><span :class="{'up':item.moneyType===1,'down':item.moneyType===2}">{{ item.moneyDesc }}</span></td>
                    <td>{{ item.balance }}</td>
                    <td><span class="remark">{{ item.remarks }}</span></td>
                </tr>
            </table>
            <div class="pagination">
                <span class="total">共{{ total }}页</span>
                <a class="prev" @click="handleChangePage(false)">上一页</a>
                <span class="cur">{{ queryList.pageNum }}&nbsp;/&nbsp;{{ total?total:1 }}</span>
                <a class="next" @click="handleChangePage(true)">下一页</a>
                <input class="ipt" type="text" v-model="pageIn">
                <button class="btn" @click="handlePageIn">跳转</button>
            </div>
        </div>

        <el-dialog  :visible.sync="dialogFormVisible" :close-on-click-modal="false" width="400px">
            <div slot="title" >
                佣金充值
            </div>
            <div style="margin: 15px 0">
                1金币=1元。
            </div>
            <el-form :model="form" :rules="formRules" ref="form">
                <el-form-item prop="money">
                    <span slot="label" style="color:#97A8BE;">
                        充值金币
                    </span>
                    <el-input v-model="form.money" autocomplete="off" style="width: 200px">
                        <template slot="append">金</template>
                    </el-input>
                </el-form-item>
            </el-form>
            <div>
                备注说明：
            </div>
            <div style="color:#97A8BE;">
                <p>输入充入金币数量，自动从本金扣除相应金额得到对应金币（提前保持本金有足够余额），佣金一旦充值不予退还。</p>
            </div>
            <div slot="footer" class="dialog-footer">
                <el-button @click="dialogFormVisible = false">取 消</el-button>
                <el-button type="primary" @click="commission">确 定</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>
    import {addCommission,selectYwCapitalRecordList,exportYwCapitalRecordList} from '@/api/shop'
    export default {
        name: "funds",
        data(){
            var valiNumberPass1 = (rule, value, callback) => {//包含小数的数字
                let reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
                if (value === '') {
                    callback(new Error('请输入内容'));
                } else if (!reg.test(value)) {
                    callback(new Error('请输入数字'));
                } else {
                    callback();
                }
            };
            return{
                flagList: [{
                    value: 0,
                    label: '全部'
                },{
                    value: 1,
                    label: '本金'
                },{
                    value: 2,
                    label: '佣金'
                }],
                typeList: [{
                    value: 0,
                    label: '全部'
                },{
                    value: 1,
                    label: '收'
                },{
                    value: 2,
                    label: '支'
                }],
                dialogFormVisible:false,
                queryList:{
                    endTime:null,
                    startTime:null,
                    flag:0,
                    type:0,
                    pageNum:1,
                    pageSize:10,
                },
                list:[],
                total:1,
                pageIn:null,
                timeRange:[],
                form:{
                    money:''
                },
                formRules:{
                    money: [
                        { required: true, message: '请输入充值金币', trigger: 'blur' },
                        {validator:valiNumberPass1, message: '请输入数字', trigger: 'blur'}
                    ],
                },
                balance:0,
                brokerageBalance:0,
                freezeBalance:0,
            }
        },
        created(){
          this.init();
          this.balance = this.$store.getters.balance
          this.brokerageBalance = this.$store.getters.brokerageBalance
          this.freezeBalance = this.$store.getters.freezeBalance
        },
        methods:{
            init(){
                selectYwCapitalRecordList(this.queryList).then(response=>{
                    this.list = response.data.rows;
                    this.total = Math.ceil(response.data.total/this.queryList.pageSize);
                })
            },
            timeChange(val) {
                if (val === null) {
                    this.queryList.startTime = null
                    this.queryList.endTime = null
                }
            },
            handleChangePage(type){
                if (type){
                    if (this.queryList.pageNum < this.total){
                        this.queryList.pageNum++
                        this.init()
                    }

                }else{
                    if (this.queryList.pageNum >1){
                        this.queryList.pageNum--
                        this.init()
                    }
                }

            },
            handlePageIn(){
                if (this.pageIn<=this.total && this.pageIn>0) {
                    this.queryList.pageNum = this.pageIn
                    this.init();
                }
            },
            search() {
                if (this.timeRange && this.timeRange.length === 2) {
                    this.queryList.startTime = this.timeRange[0]
                    this.queryList.endTime = this.timeRange[1]
                }
                this.init();
            },
            exportExcel() {

                var sendData = {
                    flag:this.queryList.flag,
                    type:this.queryList.type,
                };
                if (this.timeRange && this.timeRange.length === 2) {
                    sendData.startTime = this.timeRange[0]
                    sendData.endTime = this.timeRange[1]
                }
                exportYwCapitalRecordList(sendData).then(response=>{
                    console.log(response);
                })
            },
            commission(){
                this.$refs.form.validate(valid => {
                    if (valid) {
                        addCommission(this.form).then(response=>{
                            if (response.code === 0) {
                                this.$message({
                                    message: '充值成功',
                                    type: 'success',
                                });
                                this.dialogFormVisible = false;
                                this.init()
                            } else {
                                this.$message({
                                    message: response.msg,
                                    type: 'warning',
                                })
                            }

                        })
                    } else {
                        console.log('error submit!!')
                        return false
                    }
                })

            }
        }
    }
</script>

<style scoped>
    .account-total{margin-bottom: 12px;color: #6666FF;margin-right: 30px}
    .search-flex{display: flex}
    .search-flex .item{margin-right: 15px}
    .lb{color: #97A8BE}
</style>
