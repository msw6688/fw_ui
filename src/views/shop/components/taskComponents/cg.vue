<template>
  <div>
    <div class="search-list">
      <el-row :gutter="10">
        <el-col :span="6">
          <span class="search-title">店铺名称：</span>
          <el-select v-model="queryList.storeId" placeholder="请选择" size="mini" style="width: 100px">
            <el-option
              v-for="item in storeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="6">
          <span class="search-title">任务ID：</span>
          <el-input v-model="queryList.id" size="mini" style="width: 100px" />
        </el-col>
        <el-col :span="6">
          <span class="search-title">任务类型：</span>
          <el-select v-model="queryList.advancePaymentType" placeholder="请选择" size="mini" style="width: 100px">
            <el-option
              v-for="item in advancePaymentTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <el-col :span="6">
          <span class="search-title">任务状态：</span>
          <el-select v-model="queryList.status" placeholder="请选择" size="mini" style="width: 100px">
            <el-option
              v-for="item in statusList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>

      </el-row>
      <el-row style="margin-top: 20px;margin-bottom: 10px">
        <el-col :span="6">
          <span class="search-title">评价类型：</span>
          <el-select v-model="queryList.commentType" placeholder="请选择" size="mini" style="width: 100px">
            <el-option
              v-for="item in commentTypeList"
              :key="item.value"
              :label="item.label"
              :value="item.value"
            />
          </el-select>
        </el-col>
        <!--<el-col :span="6">-->
        <!--<span class="search-title">订单类型：</span>-->
        <!--<el-select v-model="queryList.storeId" placeholder="请选择" size="mini" style="width: 100px">-->
        <!--<el-option-->
        <!--v-for="item in options"-->
        <!--:key="item.value"-->
        <!--:label="item.label"-->
        <!--:value="item.value">-->
        <!--</el-option>-->
        <!--</el-select>-->
        <!--</el-col>-->
        <el-col :span="10">
          <span class="search-title">时间：</span>
          <el-date-picker
            v-model="timeRange"
            value-format="yyyy-MM-dd"
            size="mini"
            style="width: 240px"
            type="daterange"
            range-separator="至"
            start-placeholder="开始日期"
            end-placeholder="结束日期"
            @change="timeChange"
          />
        </el-col>
        <el-col :span="5">
          <el-button size="mini" class="btn-theme" @click="init()">搜索</el-button>
          <el-button size="mini" class="btn-theme">导出</el-button>
        </el-col>
      </el-row>
    </div>

    <ul class="activity-list">
      <li v-for="(item, index) in list" :class="['item',{'cur':active===index}]">
        <div class="top">
          <i :class="(active===index) ?'el-icon-minus':'el-icon-plus'" style="cursor: pointer;width:13px;" @click="handleExpand(active,index)" />
          <div style="display: flex;align-items:center;width: 100px">
            <img src="../../../../assets/web/tb.png" class="fav">
            <div>
              {{ item.storeName }}
            </div>
          </div>
          <span style="width: 90px">任务ID：{{ item.id }}</span>
          <span class="sp" style="width: 190px">任务类型：{{ item.taskTypeName }}</span>
          <span class="sp" style="width: 70px">总单数：{{ item.orderNum }}</span>
          <span class="sp">{{ item.status===0?'待支付':item.status===1?'待审核':item.status===2?'已通过':item.status===3?'已完成':'未通过' }}</span>
          <span class="sp blink" @click="handleDetail(item.id)">查看详情</span>
          <span class="sp blink">重新发布</span>
          <span class="sp">{{ item.releaseDate }}</span>
        </div>
        <div class="box">
          <img :src="item.goodsImgUrl" alt="" class="img">
          <div class="con">
            <div class="d1 flex1">
              <p class="p1">{{ item.goodsName }}</p>
              <p class="p2" style="color: #97A8BE">实际付款：<span class="main-txt"> ¥ {{ item.goodsRealPrice }}</span></p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitReleaseNum }}</p>
              <p class="p2" style="color:#97A8BE ">待放单</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitAcceptNum }}</p>
              <p class="p2" style="color:#97A8BE ">待接单</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitOperationNum }}</p>
              <p class="p2" style="color:#97A8BE ">待操作</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitRefundsNum }}</p>
              <p class="p2" style="color:#97A8BE ">待返款</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitCommentNum }}</p>
              <p class="p2" style="color:#97A8BE ">待评价</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.waitConfirmNum }}</p>
              <p class="p2" style="color:#97A8BE ">待确认</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.alreadyCompleteNum }}</p>
              <p class="p2" style="color:#97A8BE ">已完成</p>
            </div>
            <div class="d1">
              <p class="p1" style="color:#6666FF ">{{ item.alreadyRevokeNum }}</p>
              <p class="p2" style="color:#97A8BE ">已撤销</p>
            </div>
          </div>
        </div>
      </li>

    </ul>
    <div class="pagination">
      <span class="total">共{{ pagetotal }}页</span>
      <a class="prev" @click="handleChangePage(false)">上一页</a>
      <span class="cur">{{ queryList.pageNum }}&nbsp;/&nbsp;{{ pagetotal?pagetotal:1 }}</span>
      <a class="next" @click="handleChangePage(true)">下一页</a>
      <input v-model="pageIn" class="ipt" type="text">
      <button class="btn" @click="handlePageIn">跳转</button>
    </div>
  </div>
</template>

<script>
import { taskFindList, getStoreList } from '@/api/shop'
export default {
  name: 'Cg',
  data() {
    return {
      queryList: {
        advancePaymentType: null,
        commentType: null,
        endTime: null,
        startTime: null,
        id: null,
        status: null,
        storeId: null,
        pageNum: 1,
        pageSize: 10
      },
      list: [],
      timeRange: [],
      advancePaymentTypeList: [{
        value: 1,
        label: '浏览任务'
      }, {
        value: 2,
        label: '垫付任务'
      }],
      commentTypeList: [{
        value: 1,
        label: '普通好评'
      }, {
        value: 2,
        label: '指定文字好评 '
      }, {
        value: 3,
        label: '指定图片好评 '
      }, {
        value: 4,
        label: '指定视频好评 '
      }],
      statusList: [{
        value: 0,
        label: '待支付'
      }, {
        value: 1,
        label: '待审核'
      }, {
        value: 2,
        label: '已通过'
      }, {
        value: 3,
        label: '已完成'
      }, {
        value: 4,
        label: '未通过'
      }],
      storeList: [],
      active: null,
      pagetotal: 1,
      pageIn: null

    }
  },
  created() {
    this.init()
    this.getS()
  },
  methods: {
    init() {
        if (this.timeRange && this.timeRange.length === 2) {
            this.queryList.startTime = this.timeRange[0]
            this.queryList.endTime = this.timeRange[1]
        }
      taskFindList(this.queryList).then(response => {
        this.list = response.data.rows
        this.pagetotal = Math.ceil(response.data.total / this.queryList.pageSize)
      })
    },
    handleChangePage(type) {
      if (type) {
        if (this.queryList.pageNum < this.pagetotal) {
          this.queryList.pageNum++
          this.init()
        }
      } else {
        if (this.queryList.pageNum > 1) {
          this.queryList.pageNum--
          this.init()
        }
      }
    },
    handlePageIn() {
      if (this.pageIn <= this.pagetotal && this.pageIn > 0) {
        this.queryList.pageNum = this.pageIn
        this.init()
      }
    },
    getS() {
      getStoreList().then(response => {
        response.data.forEach(item => {
          this.storeList.push({
            value: item.id,
            label: item.storeName
          })
        })
      })
    },
    handleMenuChange(val) {
      this.activeName = val
    },
    search() {

      this.init()
    },
    timeChange(val) {
      if (val === null) {
        this.queryList.startTime = null
        this.queryList.endTime = null
      }
    },
    handleExpand(active, index) {
      if (active === index) {
        this.active = ''
      } else {
        this.active = index
      }
    },
    handleDetail(id) {
      this.$router.push({ path: '/admin/shop/taskDetail/' + id })
    }
  }
}
</script>

<style scoped>
    .search-title{color:#97A8BE;font-size: 14px}
    .activity-list{font-size: 12px;}
    .activity-list .top{padding: 0 6px;height: 30px;display: flex;align-items: center;justify-content: space-between;background-color: #BCBCBC;color: white;}
    .activity-list .box{padding: 0 24px;height: 80px;display: flex;align-items: center;background-color: #BCBCBC;background-color: #f2f2f2}
    .activity-list .con{flex: 1;display: flex;align-items: center;}
    .activity-list .fav{width: 20px;height: 20px;border-radius: 4px;}
    .activity-list .img{width: 60px;height: 60px;}
    .activity-list .d1{width: 60px;text-align: center;}
    .activity-list .d1.flex1{margin-left: 24px;text-align: left;}
    .activity-list .p1{margin-bottom: 12px;color: #BCBCBC;}
    .activity-list .blink{color: #6666FF;text-decoration: underline;cursor: pointer;}
    .activity-list .icon-expanding{width: 12px;height: 12px;cursor: pointer;}
    .activity-list .box{display: none;}
    .activity-list .item.cur .box{display: flex;}
    .parcel-menu {
        display: flex;
    }

    .menu-button {
        margin: auto;
        width: 100%;
        color: rgb(188, 188, 188);
        font-size: 20px;
        cursor: pointer;
        text-align: center;
        padding-bottom: 5px;
        margin-bottom: 20px;
    }

    .menu-button-active {
        color: #6666ff;
        border-bottom: 1px solid rgb(102, 102, 255);
    }
</style>

