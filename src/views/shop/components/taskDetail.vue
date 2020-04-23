<template>
    <div>
        <h3>任务类型</h3>
        <table class="table" >
            <tr>
                <th style="width: 265px">店铺类型</th>
                <th style="width: 265px">任务类型</th>
                <th style="width: 265px">店铺名称</th>

            </tr>
            <tr>
                <td style="color: black;font-weight: bold">淘宝</td>
                <td style="color: black;font-weight: bold">手机淘宝任务</td>
                <td style="color: black;font-weight: bold">小二家服装店</td>
            </tr>

        </table>
        <h3>任务信息</h3>
        <div>
            <tbll :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 1"></tbll>
            <sjtb :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 2 || taskType === 3"></sjtb>
            <tbtb :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 4"></tbtb>
            <tbtk :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 5"></tbtk>
            <tbys :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 6"></tbys>
            <tbzp :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 7"></tbzp>
            <tbcjbq :storeType="storeType" :taskType="taskType"
                    :store="store" :expressFlag="expressFlag" v-if="taskType === 8"></tbcjbq>
            <tbdb :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 9"></tbdb>

            <jdll :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 10"></jdll>
            <sjjd :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 11"></sjjd>
            <jdtb :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 12"></jdtb>
            <jdys :storeType="storeType" :taskType="taskType"
                  :store="store" :expressFlag="expressFlag" v-if="taskType === 13"></jdys>
            <sjpdd :storeType="storeType" :taskType="taskType"
                   :store="store" :expressFlag="expressFlag" v-if="taskType === 14||taskType === 15"></sjpdd>
            <pddll :storeType="storeType" :taskType="taskType"
                   :store="store" :expressFlag="expressFlag" v-if="taskType === 16"></pddll>
        </div>

        <h3>收费详情</h3>
      <table class="table">
        <tr>
          <th>收费明细</th>
          <th>数量</th>
          <th>小计</th>
        </tr>
        <tr v-if="taskType!== 1 && taskType!== 10 && taskType!== 16">
          <td class="mw50">
            <div class="flexCSB">平台服务费：<span class="value">{{ priceDetail.platformServiceAmount }}元/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.platformServiceAmount * priceDetail.orderNum }}元</td>
        </tr>
        <!--<tr>-->
        <!--<td class="mw50">-->
        <!--<div class="flexCSB">平台代发：<span class="value">{{ priceDetail.orderNum }}元/单</span></div>-->
        <!--</td>-->
        <!--<td>{{ priceDetail.orderNum }}单</td>-->
        <!--<td>{{ priceDetail.orderNum * priceDetail.orderNum }}元</td>-->
        <!--</tr>-->
        <tr>
          <td class="mw50">
            <div class="flexCSB">评价：<span class="value">{{ priceDetail.commentAmount }}元/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.commentAmount * priceDetail.orderNum }}元</td>
        </tr>
        <tr>
          <td class="mw50">
            <div class="flexCSB">截图：<span class="value">{{ priceDetail.screenshotAmount }}元/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.screenshotAmount * priceDetail.orderNum }}元</td>
        </tr>
        <tr v-if="taskType!== 1 && taskType!== 10 && taskType!== 16">
          <td class="mw50">
            <div class="flexCSB">本金返款：<span class="value">{{ priceDetail.returnAmount }}元/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.returnAmount * priceDetail.orderNum }}元</td>
        </tr>
        <tr>
          <td class="mw50">
            <div class="flexCSB">千人千面：<span class="value">{{ priceDetail.manyPeopleAmount }}金/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.manyPeopleAmount * priceDetail.orderNum }}金</td>
        </tr>
        <tr>
          <td class="mw50">
            <div class="flexCSB">任务置顶：<span class="value">{{ priceDetail. taskToUpAmount }}元/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail. taskToUpAmount * priceDetail.orderNum }}元</td>
        </tr>
        <tr>
          <td class="mw50">
            <div class="flexCSB">基础佣金：<span class="value">{{ priceDetail.baseAmount }}金/单</span></div>
          </td>
          <td>{{ priceDetail.orderNum }}单</td>
          <td>{{ priceDetail.baseAmount * priceDetail.orderNum }}金</td>
        </tr>
        <tr class="last">
          <td> 合计</td>
          <td colspan="2"><span>本金：</span> <span class="down">{{ priceDetail.orderNum }}</span> <span
            class="opp"
          >元</span> +
            <span>佣金：</span> <span class="down">{{ priceDetail.orderNum }}</span> <span class="opp">金</span></td>
        </tr>
      </table>
    </div>
</template>

<script>
    import {taskDetail,getPrice} from '@/api/shop'
    import tbll from './activityComponents/tbll'
    import sjtb from './activityComponents/sjtb'
    import tbtb from './activityComponents/tbtb'
    import tbtk from './activityComponents/tbtk'
    import tbys from './activityComponents/tbys'
    import tbzp from './activityComponents/tbzp'
    import tbcjbq from './activityComponents/tbcjbq'
    import tbdb from './activityComponents/tbdb'
    import jdll from './activityComponents/jdll'
    import sjjd from './activityComponents/sjjd'
    import jdtb from './activityComponents/jdtb'
    import jdys from './activityComponents/jdys'
    import sjpdd from './activityComponents/sjpdd'
    import pddll from './activityComponents/pddll'
    export default {
        name: "taskDetail",
        components: {
            tbll,
            sjtb,
            tbtb,
            tbtk,
            tbys,
            tbzp,
            tbcjbq,
            tbdb,
            jdll,
            sjjd,
            jdtb,
            jdys,
            pddll,
            sjpdd,
        },
        data(){
            return{
                dialogFormVisible:false,
                taskId:null,
                priceDetail: '',
                taskType: ''
            }
        },
        created() {
            if (this.$route.params.taskId){
                this.taskId = this.$route.params.taskId;
                this.init(this.taskId);
            }else{
                this.$router.push({ path: "/admin/shop/task" });
            }

        },
        methods:{
            init(id){
                taskDetail({id:id}).then(response=>{
                    console.log(response)
                })
                getPrice({id: id}).then(response =>{
                    this.priceDetail = response.data
                    console.log(response)
                })
            }
        }
    }
</script>

<style scoped>
    .activity-button{border-color: #6666FF !important;color:#6666FF !important ;}
    .radio-list .item{padding-left: 10px;display: flex;color: #333;}
    .radio-list .radio{margin-right: 4px;}
    .radio-list .radio-tip{color: #BCBCBC;font-size: 14px;}
    .radio-list-logo{width: 25px;position: relative;top: 8px;margin-right: 5px;}
    .radio-list >>>.el-radio__input.is-checked+.el-radio__label{color: #606266;}
    .radio-list >>>.el-radio__input.is-checked .el-radio__inner{border-color:#6666FF;background:#6666FF;}
    .radio-list-new{width: 30px;height: 30px;position: relative;top: 1px;}
    .form .checkbox{margin-left: 14px;}
    .item-img{width: 30px;height: 30px;}
    .radio-list-y >>>.el-radio-button__inner, .el-radio-group{font-size:initial;display: inline-block;line-height: unset;vertical-align: middle;}
    .addShop{position: absolute;right: 0;top: 13px;}
    .step-title{margin-top: 24px;line-height: 32px;text-align: center;background-color:#6666FF;color: white;font-size: 16px;}
    .w400{width: 400px;}
    .form .form-err-change{padding: 6px 0 6px 54px;font-size: 12px;}
    .avatar-uploader  {border: 1px dashed #6666FF;border-radius: 6px;cursor: pointer;position: relative;overflow: hidden;}
    .avatar-uploader-icon {font-size: 28px;color: #8c939d;width: 100px;height: 100px;line-height: 100px;text-align: center;}
    .avatar {width: 100px;height: 100px;display: block;}
    .epshow{position: absolute;left: 173px;bottom: -29px;}
    .upload-d{font-size:12px;position:absolute;bottom:0px;color: #bcbcbc;}
    .upload-e{position:absolute;bottom:0px;right: 0;font-size:12px;}
    .form .form-label{min-width: 7em;}
    .form-label-price{min-width: 5em !important;margin-left: 39px;}
    .form-label >>> .el-radio__input.is-checked .el-radio__inner{border-color:#6666FF;background:#6666FF;}
    .form-label >>> .el-radio__input.is-checked+.el-radio__label{color: #606266;}
    .clock-list{margin-top: 8px;display: flex;justify-content: space-between;flex-wrap: wrap;text-align: center;}
    .clock-list .item{margin-bottom: 16px;width: 7.7%;display: flex;flex-direction: column;border: 1px solid #6666FF;}
    .clock-list .sp1{line-height: 32px; background-color: #6666FF;color: white;}
    .clock-list .sp2{padding:0 8px;width: 100%;height:32px;text-align: center;font-size:16px;color:#666; box-sizing: border-box;}
    .checkbox-mr >>> .el-checkbox__inner{width: 28px;height: 28px}
    .checkbox-mr >>>.el-checkbox__input.is-checked .el-checkbox__inner::after{transform: rotate(45deg) scaleY(3);}
    .checkbox-mr >>>.el-checkbox__inner::after{left: 9px;top: 7px;width: 8px;}
    .checkbox-mr{margin-right: 20px;position: relative;height: 54px;}
    .checkbox-tip{color: red;position: absolute;font-size: 12px;bottom: 0;width: 70px;right: 0;}
    .checkbox-button-width{width: 85px}
    .form-item >>> .el-button--mini, .el-button--mini.is-round{padding: 7px 7px;}
    .checkbox-list{border:1px solid #BCBCBC;width: 500px;height: 280px;border-radius:5px;padding: 10px}
    .remark{border:1px dashed #BCBCBC;width: 500px;height: 100px;border-radius:5px;padding: 10px;color:#BCBCBC;font-size: 12px }
    .activity-page >>>.el-dialog__header{padding: 0}
    .activity-page >>>.el-dialog__body{padding: 2px}
</style>
