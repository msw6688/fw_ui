<template>
    <div class="order">
        <div class="search-list" style="margin-bottom: 10px">

            <div>
                <span class="search-title">任务ID：</span>
                <el-input v-model="query.taskId" size="mini" style="width: 80px;margin-right: 8px"></el-input>

                <span class="search-title">订单ID：</span>
                <el-input v-model="query.id" size="mini" style="width: 80px;margin-right: 8px"></el-input>

                <span class="search-title">接单账户：</span>
                <el-input v-model="query.accountNum" size="mini" style="width: 80px;margin-right: 8px"></el-input>

                <span class="search-title">任务类型：</span>
                <el-select v-model="query.taskType" placeholder="请选择" size="mini" style="width: 80px;margin-right: 8px">
                    <el-option
                            v-for="item in taskTypeList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>

                <span class="search-title">订单状态：</span>
                <el-select v-model="query.status" placeholder="请选择" size="mini" style="width: 80px">
                    <el-option
                            v-for="item in statusList"
                            :key="item.value"
                            :label="item.label"
                            :value="item.value">
                    </el-option>
                </el-select>
            </div>

            <el-row style="margin-top: 20px;margin-bottom: 10px">
                <el-col :span="6">
                    <span class="search-title">店铺名称：</span>
                    <el-input v-model="query.storeName" size="mini" style="width: 120px;"></el-input>
                </el-col>
                <el-col :span="7">
                    <span class="search-title">订单编号：</span>
                    <el-input v-model="query.thirdOrderNo" size="mini" style="width: 130px;"></el-input>
                </el-col>
                <el-col :span="8">
                    <span class="search-title">付款时间：</span>
                    <el-date-picker
                            value-format="yyyy-MM-dd"
                            size="mini" style="width: 180px"
                            v-model="timeRange"
                            type="daterange"
                            @change="timeChange"
                            range-separator="至"
                            start-placeholder="开始日期"
                            end-placeholder="结束日期">
                    </el-date-picker>
                </el-col>
                <el-col :span="3">
                    <el-button  size="mini" class="btn-theme" @click="search">搜索</el-button>

                </el-col>
            </el-row>
            <el-button  size="mini" class="btn-theme">导出</el-button>
            <el-button  size="mini" type="success">批量确认</el-button>
            <el-button  size="mini" type="danger" @click="restSearch">撤销</el-button>
        </div>
        <el-table
                :data="tableData"
                class="table-new"
                style="width: 100%"
                border
                >
            <el-table-column
                    type="selection"
                    width="40">
            </el-table-column>
            <el-table-column label="任务ID" width="60">
                <template slot-scope="{row}">
                    <span>{{ row.taskId }}</span>
                </template>
            </el-table-column>
            <el-table-column label="订单ID" width="65">
                <template slot-scope="{row}">
                    <span>{{ row.id }}</span>
                </template>
            </el-table-column>
            <el-table-column label="店铺名称" width="85">
                <template slot-scope="{row}">
                    <span>{{ row.storeName }}</span>
                </template>
            </el-table-column>
            <el-table-column label="用户ID" width="71">
                <template slot-scope="{row}">
                    <span>{{ row.userId }}</span>
                </template>
            </el-table-column>
            <el-table-column label="接单账户" width="90">
                <template slot-scope="{row}">
                    <span>{{ row.accountNum }}</span>
                </template>
            </el-table-column>
            <el-table-column label="关键词" width="100">
                <template slot-scope="{row}">
                    <span>{{ row.keyword }}</span>
                </template>
            </el-table-column>
            <el-table-column label="订单状态" width="71">
                <template slot-scope="{row}">
                    <span>{{ stateReturn(row.status) }}</span>
                </template>
            </el-table-column>
            <el-table-column label="商家支付" width="71">
                <template slot-scope="{row}">
                    <span>{{ row.principalAmount }}</span>
                </template>
            </el-table-column>
            <el-table-column label="用户实付" width="71">
                <template slot-scope="{row}">
                    <span>{{ row.userPayAmount }}</span>
                </template>
            </el-table-column>
            <el-table-column label="返款金额" width="71">
                <template slot-scope="{row}">
                    <span>{{ row.refundsAmount }}</span>
                </template>
            </el-table-column>
            <el-table-column label="接单时间" width="90">
                <template slot-scope="{row}">
                    <span>{{ row.acceptTime }}</span>
                </template>
            </el-table-column>
            <el-table-column label="付款时间" width="90">
                <template slot-scope="{row}">
                    <span>{{ row.operationTime }}</span>
                </template>
            </el-table-column>
            <el-table-column label="操作" width="195" fixed="right">
                <template slot-scope="{row}">
                    <el-button type="text" style="color:#6666FF" @click="handleYes(row.id)">确认</el-button>
                    <el-button type="text" style="color:#6666FF " @click="handleDetail">详情</el-button>
                    <el-button type="text" style="color:#6666FF " @click="handleDialog(2,row.id)">改价</el-button>
                    <el-button type="text" style="color:#6666FF " @click="handleHr(row.id)">换人</el-button>
                </template>

            </el-table-column>
        </el-table>
        <div class="pagination">
            <span class="total">共{{ pagetotal }}页</span>
            <a class="prev" @click="handleChangePage(false)">上一页</a>
            <span class="cur">{{ query.pageNum }}&nbsp;/&nbsp;{{ pagetotal?pagetotal:1 }}</span>
            <a class="next" @click="handleChangePage(true)">下一页</a>
            <input class="ipt" type="text" v-model="pageIn">
            <button class="btn" @click="handlePageIn">跳转</button>
        </div>

        <el-dialog :title="title[titleIndex]" :visible.sync="dialogFormVisible" width="400px">
            <el-form :model="form">
                <!--<el-form-item v-if="titleIndex===0">-->
                    <!--<span>请选择换人理由：</span>-->
                    <!--<el-select v-model="value2" placeholder="请选择" size="mini" style="width: 150px">-->
                        <!--<el-option-->
                                <!--v-for="item in options"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->
                <!--<el-form-item v-if="titleIndex===1">-->
                    <!--<span>请选择拉黑原因：</span>-->
                    <!--<el-select v-model="value2" placeholder="请选择" size="mini" style="width: 150px">-->
                        <!--<el-option-->
                                <!--v-for="item in options"-->
                                <!--:key="item.value"-->
                                <!--:label="item.label"-->
                                <!--:value="item.value">-->
                        <!--</el-option>-->
                    <!--</el-select>-->
                <!--</el-form-item>-->

                <el-form-item v-if="titleIndex===2">
                    <span>请输入正确的返款金额：</span>
                    <el-input v-model="form.refundsAmount" size="mini" style="width: 150px"></el-input>
                </el-form-item>
            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align: center">
                <el-button @click="dialogFormVisible = false" size="mini" style="color: #6666FF">取消退出</el-button>
                <el-button class="btn-theme" @click="handleChangePrice" size="mini">确认提交</el-button>
            </div>
        </el-dialog>

    </div>
</template>

<script>

    import {orderList,orderConfirmOrder,orderSubstitution,orderUpdateRefundsAmount} from '@/api/shop'
    export default {
        name: "order",
        data(){
            return{
                query:{
                    endTime:null,
                    startTime:null,
                    status:null,
                    id:null,
                    storeName:null,
                    taskId:null,
                    taskType:null,
                    thirdOrderNo:null,
                    accountNum:null,
                    pageNum:1,
                    pageSize:10,
                },
                timeRange:[],
                title:['换人','拉黑用户','改价'],
                titleIndex:0,
                statusList: [{
                    value: 1,
                    label: '待发布'
                },{
                    value: 2,
                    label: '待接单 '
                },{
                    value: 3,
                    label: '待操作 '
                },{
                    value: 4,
                    label: '待返款'
                },{
                    value: 5,
                    label: '待评价 '
                },{
                    value: 6,
                    label: '待确认'
                },{
                    value: 7,
                    label: '已完成'
                },{
                    value: 8,
                    label: '已撤销'
                },],
                taskTypeList:[{
                    value: 1,
                    label: '浏览'
                },{
                    value: 2,
                    label: '垫付'
                }],
                dialogFormVisible:false,
                form:{
                    refundsAmount :null,
                    id :null
                },
                tableData:[],
                pagetotal:1,
                pageIn:null,
            }
        },
        created(){
            this.init();
        },
        methods:{
            timeChange(val) {
                if (val === null) {
                    this.query.startTime = null
                    this.query.endTime = null
                }
            },
            init(){
                orderList(this.query).then(response=>{
                    this.tableData = response.data.rows
                    this.pagetotal = Math.ceil(response.data.total/this.query.pageSize)
                })
            },
            handleChangePage(type){
                if (type){
                    if (this.query.pageNum < this.pagetotal){
                        this.query.pageNum++
                        this.init()
                    }

                }else{
                    if (this.query.pageNum >1){
                        this.query.pageNum--
                        this.init()
                    }
                }

            },
            handlePageIn(){
                if (this.pageIn<=this.pagetotal && this.pageIn>0) {
                    this.query.pageNum = this.pageIn
                    this.init();
                }
            },
            stateReturn(status){
              var data
              this.statusList.map(item=>{
                  if (item.value ===status ){
                      data = item.label
                  }
              })
                return data
            },
            restSearch() {
                this.query = {
                    endTime:null,
                    startTime:null,
                    status:null,
                    id:null,
                    storeId:null,
                    taskId:null,
                    taskType:null,
                    thirdOrderNo:null,
                }
                this.timeRange = [];
            },
            search() {
                if (this.timeRange && this.timeRange.length === 2) {
                    this.query.startTime = this.timeRange[0]
                    this.query.endTime = this.timeRange[1]
                }
                this.init();
            },
            handleYes(id){
                orderConfirmOrder({id:id}).then(response=>{
                    if (response.code === 0) {
                        this.$message({
                            message: '返款完成！',
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            message: response.msg,
                            type: 'warning',
                        })
                    }
                })

            },
            handleHr(id){
                orderSubstitution({id:id}).then(response=>{
                    if (response.code === 0) {
                        this.$message({
                            message: '换人成功！',
                            type: 'success'
                        });
                    } else {
                        this.$message({
                            message: response.msg,
                            type: 'warning',
                        })
                    }
                })

            },
            handleChangePrice(){
                orderUpdateRefundsAmount(this.form).then(response=>{
                    if (response.code === 0) {
                        this.$message({
                            message: '改价成功！',
                            type: 'success'
                        });
                        this.dialogFormVisible = false
                    } else {
                        this.$message({
                            message: response.msg,
                            type: 'warning',
                        })
                    }
                })
            },
            handleDialog(val,id){
                this.titleIndex=val;
                this.form.id=id;
                this.dialogFormVisible= true
            },
            handleDetail(){
                this.$emit('detail','1')
            }

        }
    }
</script>

<style scoped>
    .search-title{color:#97A8BE;font-size: 14px}
    .table-new{font-size: 12px !important;}
    .table-new >>>th{color: white;background-color: #6666FF;padding: 5px 1px;text-align: center;white-space: nowrap;}
    .table-new >>>td{color: #97A8BE;text-align: center;padding: 0}
    .order>>>.el-dialog__body{padding: 0 30px}
</style>
