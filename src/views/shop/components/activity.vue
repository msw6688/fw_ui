<template>
  <div class="activity-page">
    <el-backtop/>
    <el-steps :active="active" finish-status="success">
      <el-step title="任务类型"/>
      <el-step title="任务信息"/>
      <el-step title="收费详情"/>
      <el-step title="发布任务"/>
    </el-steps>
    <div class="content">

      <div v-show="active===0" class="form">

        <div class="form-item">
          <span class="form-required">*必填</span>
          <span class="form-label">请选择店铺类型：</span>
          <div class="form-block radio-list">

            <el-radio-group
              v-model="storeType"
              class="item"
              style="margin-left: 14px"
              fill="red"
              text-color="#6666FF"
              @change="handleSelectYwTaskTypeList"
            >
              <div class="item-img"/>
              <el-radio v-for="item in storeTypeList" :key="item.id" :label="item.id" style="top: -4px;">
                <img :src="item.img" class="radio-list-logo">{{ item.name }}
              </el-radio>
            </el-radio-group>
          </div>
        </div>

        <div class="form-item">
          <span class="form-required">*必填</span>
          <span class="form-label">请选择任务类型：</span>
          <div class="form-block radio-list radio-list-y">
            <el-radio-group v-model="taskType">
              <div v-for="(item2, index) in taskTypeList" :key="index" class="item">
                <div class="item-img">
                  <!--<img src="../../../assets/web/new.png" alt=""-->
                  <!--class="radio-list-new">-->
                </div>
                <div class="checkbox">
                  <el-radio :label="item2.id">{{ item2.name }}</el-radio>
                </div>
                <span class="radio-tip">{{ item2.brief }}</span>
              </div>
            </el-radio-group>
          </div>
        </div>

        <div class="form-item" style="position: relative">
          <span class="form-required">*必填</span>
          <span class="form-label" style="width: 128px">请选择店铺：</span>
          <div class="form-block radio-list radio-list-y">
            <el-radio-group v-model="store">

              <div v-for="(item3, index) in storeList" :key="index" class="item">
                <div class="item-img"/>
                <div class="checkbox">
                  <el-radio :label="item3.id" @click.native.prevent="clickStore(item3.id)">{{ item3.storeName }}
                  </el-radio>
                </div>
              </div>

            </el-radio-group>
          </div>
          <el-button type="text" class="addShop" @click="toAddStore">+新增店铺</el-button>
        </div>
      </div>

      <div v-show="active===1">
        <tbll
          v-if="taskType === 1"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <sjtb
          v-if="taskType === 2"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <sjtbwjt
          v-if="taskType === 3"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbtb
          v-if="taskType === 4"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbtk
          v-if="taskType === 5"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbys
          v-if="taskType === 6"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbzp
          v-if="taskType === 7"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbcjbq
          v-if="taskType === 8"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <tbdb
          v-if="taskType === 9"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />

        <jdll
          v-if="taskType === 10"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <sjjd
          v-if="taskType === 11"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <jdtb
          v-if="taskType === 12"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <jdys
          v-if="taskType === 13"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <sjpdd
          v-if="taskType === 14||taskType === 15"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />
        <pddll
          v-if="taskType === 16"
          :store-type="storeType"
          :task-type="taskType"
          :store="store"
          :express-flag="expressFlag"
        />

      </div>

      <div v-show="active===2" class="form">
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
        <div class="table-tatol">账户余额：<span class="main-txt spm8">{{ balance }}</span>元</div>
      </div>

    </div>

    <div v-if="active===0 ||active===2 " style="text-align: center; margin-top: 65px">
      <el-button
        class="activity-button"
        style="margin-right: 80px;width: 100px"
        :disabled="active===0"
        size="mini"
        @click="handleNextOrPre(false)"
      >上一步
      </el-button>
      <el-button
        v-if="active < 2"
        class="activity-button"
        style="width: 100px"
        size="mini"
        @click="handleNextOrPre(true)"
      >下一步
      </el-button>
      <el-button v-if="active === 2" class="btn-theme" size="mini" @click="handleSuccess">付款并发布任务</el-button>
    </div>

    <el-dialog width="25%" top="30vh" :visible.sync="dialogFormVisible" @close="close">
      <p style="color:#6666FF;text-align: center;font-size: 19px;font-weight: bold ">恭喜，发布成功！</p>
    </el-dialog>

  </div>

</template>

<script>
    import {getStoreTypeList, selectYwTaskTypeList, getStoreList, getPrice, pay} from '@/api/shop'
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
    import sjtbwjt from './activityComponents/sjtbwjt'

    export default {
        name: 'Activity',
        components: {
            sjtbwjt,
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
            sjpdd
        },
        data() {
            return {
                active: 0,
                dialogFormVisible: false,
                storeType: null,
                storeTypeList: [],
                taskTypeList: [],
                taskType: null,
                storeList: [],
                store: null,
                taskId: null,
                balance: null,
                expressFlag: true,
                taskTypeAllList: [],
                priceDetail: {
                    platformServiceAmount: 0,
                    taskToUpAmount: 0,
                    commentAmount: 0,
                    manyPeopleAmount: 0,
                    returnAmount: 0,
                    screenshotAmount: 0,
                    commissionTotal: 0,
                    principalAmountTotal: 0,
                    orderNum: 0,
                    baseAmount: 0
                }
            }
        },
        watch: {
            storeType: {
                handler: function (val, oldval) {
                    if (val && val !== null) {
                    }
                },
                deep: true
            }
        },
        activated() {
        },
        created() {
            this.init()
            this.balance = this.$store.getters.balance
            this.expressFlag = this.$store.getters.expressFlag
            setTimeout(() => {
                this.handleSelectYwTaskTypeList(this.storeType)
            }, 800)
        },
        methods: {
            init() {
                getStoreTypeList().then(response => {
                    this.storeTypeList = response.data
                    response.data.forEach(res => {
                        selectYwTaskTypeList({storeTypeId: res.id}).then(response3 => {
                            this.taskTypeAllList[res.id] = response3.data
                        })
                    })
                    this.storeType = this.storeTypeList[0].id
                    // this.taskTypeList = this.taskTypeAllList[this.storeType]
                })
            },
            handleSelectYwTaskTypeList(val) {
                this.taskTypeList = this.taskTypeAllList[val]
                console.log(val)
                getStoreList({storeTypeId: val}).then(response => {
                    this.storeList = response.data
                    // if (response.data.length > 0) {
                    //     this.store = response.data[0].id
                    // } else {
                    //     this.store = null
                    // }
                })
            },
            toAddStore() {
                this.$router.push({path: '/admin/shop/store'})
            },
            clickStore(val) {
                val === this.store ? this.store = null : this.store = val
            },
            handleNextOrPre(jd) {
                if (this.storeType !== null && this.taskType !== null && this.store !== null) {
                    if (jd) {
                        if (this.active < 3) {
                            this.active++
                        }
                    } else {
                        if (this.active > 0) {
                            this.active--
                        }
                    }
                } else {
                    this.$message.error('请选择完必填项！')
                }
            },
            handlePrice(id) {
                this.taskId = id
                getPrice({id: id}).then(response => {
                    this.priceDetail = response.data
                    this.active++
                })
            },
            handleSuccess() {
                pay({id: this.taskId}).then(response => {
                    if (response.code === 0) {
                        this.dialogFormVisible = true
                    } else {
                        this.$message({
                            message: response.msg,
                            type: 'warning'
                        })
                    }
                })
            },
            close() {
                this.active = 0
                this.init()
                this.storeType = null
                this.taskTypeList = []
            }
        }
    }
</script>

<style scoped>
  .radio-none >>> .el-radio__input {
    display: none;
  }

  .radio-none >>> .el-radio {
    margin-right: 8px;
  }

  .radio-none >>> .el-radio__label {
    padding-left: 0;
  }

  .radio-none >>> .el-radio--mini.is-bordered {
    padding: 6px 9px 0 10px
  }

  .form .form-action {
    width: 3em;
  }

  .form .form-action i {
    font-size: 26px;
    color: #6666FF
  }

  .boder-all {
    border: 1px solid #BCBCBC
  }

  .table td {
    border: 1px solid #6666FF;
  }

  .activity-button {
    border-color: #6666FF !important;
    color: #6666FF !important;
  }

  .radio-list .item {
    padding-left: 10px;
    display: flex;
    color: #333;
  }

  .radio-list .radio {
    margin-right: 4px;
  }

  .radio-list .radio-tip {
    color: #BCBCBC;
    font-size: 14px;
  }

  .radio-list-logo {
    width: 25px;
    position: relative;
    top: 8px;
    margin-right: 5px;
  }

  .radio-list >>> .el-radio__input.is-checked + .el-radio__label {
    color: #606266;
  }

  .radio-list >>> .el-radio__input.is-checked .el-radio__inner {
    border-color: #6666FF;
    background: #6666FF;
  }

  .radio-list-new {
    width: 30px;
    height: 30px;
    position: relative;
    top: 1px;
  }

  .form .checkbox {
    margin-left: 14px;
  }

  .item-img {
    width: 30px;
    height: 30px;
  }

  .radio-list-y >>> .el-radio-button__inner, .el-radio-group {
    font-size: initial;
    display: inline-block;
    line-height: unset;
    vertical-align: middle;
  }

  .addShop {
    position: absolute;
    right: 0;
    top: 13px;
  }

  .step-title {
    margin-top: 24px;
    line-height: 32px;
    text-align: center;
    background-color: #6666FF;
    color: white;
    font-size: 16px;
  }

  .w400 {
    width: 400px;
  }

  .form .form-err-change {
    padding: 6px 0 6px 54px;
    font-size: 12px;
  }

  .avatar-uploader {
    border: 1px dashed #6666FF;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 100px;
    height: 100px;
    line-height: 100px;
    text-align: center;
  }

  .avatar {
    width: 100px;
    height: 100px;
    display: block;
  }

  .epshow {
    position: absolute;
    left: 173px;
    bottom: -29px;
  }

  .upload-d {
    font-size: 12px;
    position: absolute;
    bottom: 0px;
    color: #bcbcbc;
  }

  .upload-e {
    position: absolute;
    bottom: 0px;
    right: 0;
    font-size: 12px;
  }

  .form .form-label {
    min-width: 7em;
  }

  .form-label-price {
    min-width: 5em !important;
    margin-left: 39px;
  }

  .form-label >>> .el-radio__input.is-checked .el-radio__inner {
    border-color: #6666FF;
    background: #6666FF;
  }

  .form-label >>> .el-radio__input.is-checked + .el-radio__label {
    color: #606266;
  }

  .clock-list {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    text-align: center;
  }

  .clock-list .item {
    margin-bottom: 16px;
    width: 7.7%;
    display: flex;
    flex-direction: column;
    border: 1px solid #6666FF;
  }

  .clock-list .sp1 {
    line-height: 32px;
    background-color: #6666FF;
    color: white;
  }

  .clock-list .sp2 {
    padding: 0 8px;
    width: 100%;
    height: 32px;
    text-align: center;
    font-size: 16px;
    color: #666;
    box-sizing: border-box;
  }

  .checkbox-mr >>> .el-checkbox__inner {
    width: 28px;
    height: 28px
  }

  .checkbox-mr >>> .el-checkbox__input.is-checked .el-checkbox__inner::after {
    transform: rotate(45deg) scaleY(3);
  }

  .checkbox-mr >>> .el-checkbox__inner::after {
    left: 9px;
    top: 7px;
    width: 8px;
  }

  .checkbox-mr {
    margin-right: 20px;
    position: relative;
    height: 54px;
  }

  .checkbox-tip {
    color: red;
    position: absolute;
    font-size: 12px;
    bottom: 0;
    width: 70px;
    right: 0;
  }

  .checkbox-button-width {
    width: 82px
  }

  .form-item >>> .el-button--mini, .el-button--mini.is-round {
    padding: 7px 7px;
  }

  .checkbox-list {
    border: 1px solid #BCBCBC;
    width: 500px;
    height: 280px;
    border-radius: 5px;
    padding: 10px
  }

  /deep/ .el-textarea__inner {
    border: 1px dashed #BCBCBC;
  }

  .remark {
    width: 600px;
    height: 100px;
    border-radius: 5px;
    padding: 10px;
    color: #BCBCBC;
    font-size: 12px
  }

  .activity-page >>> .el-dialog__header {
    padding: 0
  }

  .activity-page >>> .el-dialog__body {
    padding: 2px
  }
</style>
