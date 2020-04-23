<template>
  <div>
    <div class="appeal-page">
      <div class="search">
        <div class="item">
          <span class="lb">申诉原因：</span>
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
          <span class="lb">申诉状态：</span>
          <el-select v-model="queryList.status" style="width: 90px" size="mini">
            <el-option
                    v-for="item in statusList"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
            </el-option>
          </el-select>
        </div>
        <div class="item">
          <span class="lb">订单编号：</span>
          <input class="ipt" type="text" v-model="queryList.orderId" />
        </div>
        <button class="btn btn-add" @click="openAddDialog" >发起申诉</button>
      </div>
      <div class="search">
        <div class="item">
          <span class="lb">时间：</span>
          <el-date-picker
                  value-format="yyyy-MM-dd"
                  size="mini"
                  style="width: 300px"
                  v-model="timeRange"
                  @change="timeChange"
                  type="daterange"
                  range-separator="至"
                  start-placeholder="开始日期"
                  end-placeholder="结束日期">
          </el-date-picker>
        </div>
        <button class="btn" @click="search">搜索</button>
        <button class="btn" @click="handleEndYwAppeal()">批量完结</button>
        <button class="btn" @click="handleRemoveYwAppeal()">批量删除</button>
      </div>
      <table class="table">
        <tr>
          <th>
            <div class="checkbox">
              <input class="chk-ipt " type="checkbox" v-model="checked" @click="checkedAll" />
              <span class="chk-out">
                <span class="chk-in"></span>
              </span>全选
            </div>
          </th>
          <th>申诉时间</th>
          <th>申诉原因</th>
          <th>订单编号</th>
          <th>申诉状态</th>
          <th>操作</th>
        </tr>
        <tr>
          <td>
            <div class="checkbox">
              <input class="chk-ipt checkItem" type="checkbox" v-model="checkall" value="0"/>
              <span class="chk-out">
                <span class="chk-in"></span>
              </span>1
            </div>
          </td>
          <td>2018-07-06 11:28:52</td>
          <td>操作问题</td>
          <td>300000</td>
          <td>进行中</td>
          <td>
            <span class="opp" @click="openDetailDialog">详情</span>
            <span class="opp" @click="openEndDialog">完结</span>
            <span class="opp" @click="openDelDialog">删除</span>
          </td>
        </tr>
        <tr>
          <td>
            <div class="checkbox">
              <input class="chk-ipt checkItem" type="checkbox" v-model="checkall" value="1" />
              <span class="chk-out">
                <span class="chk-in"></span>
              </span>1
            </div>
          </td>
          <td>2018-07-06 11:28:52</td>
          <td>操作问题</td>
          <td>300000</td>
          <td>进行中</td>
          <td>
            <span class="opp">详情</span>
            <span class="opp">完结</span>
            <span class="opp">删除</span>
          </td>
        </tr>
        <tr>
          <td>
            <div class="checkbox">
              <input class="chk-ipt checkItem" type="checkbox" v-model="checkall" value="2" />
              <span class="chk-out">
                <span class="chk-in"></span>
              </span>1
            </div>
          </td>
          <td>2018-07-06 11:28:52</td>
          <td>操作问题</td>
          <td>300000</td>
          <td>进行中</td>
          <td>
            <span class="opp">详情</span>
            <span class="opp">完结</span>
            <span class="opp">删除</span>
          </td>
        </tr>
      </table>
      <div class="pagination">
        <span class="total">共{{ pagetotal }}页</span>
        <a class="prev" @click="handleChangePage(false)">上一页</a>
        <span class="cur">{{ queryList.pageNum }}&nbsp;/&nbsp;{{ pagetotal?pagetotal:1 }}</span>
        <a class="next" @click="handleChangePage(true)">下一页</a>
        <input class="ipt" type="text" v-model="pageIn">
        <button class="btn" @click="handlePageIn">跳转</button>
      </div>
    </div>
    <div class="dialog appealAdd-dialog" v-show="addToggle">
      <div class="dialog-wrap md">
        <div class="dialog-title">发起申诉</div>
        <div class="dialog-close" @click="closeAddDialog"></div>
        <el-form ref="form" :model="addToggleForm" style="padding: 0 20px">
          <el-row :gutter="20">
            <el-col :span="12">
              <el-form-item label-width="80px">
                <div slot="label" style="color: #97A8BE;text-align: left" >
                  订单编号:
                </div>
                <el-input v-model="addToggleForm.orderId" size="mini"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="12">
              <el-form-item label-width="80px">
                <div slot="label" style="color: #97A8BE">
                  申诉原因:
                </div>
                <el-select v-model="addToggleForm.type" size="mini">
                  <el-option
                          v-for="item in type2List"
                          :key="item.value"
                          :label="item.label"
                          :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item>
                <div slot="label" style="color: #97A8BE">
                  申诉说明
                </div>
                <el-input
                        style="width: 100%"
                        type="textarea"
                        :autosize="{ minRows: 4}"
                        placeholder="最多200字"
                        v-model="addToggleForm.content">
                </el-input>
              </el-form-item>
            </el-col>
          </el-row>

          <el-form-item>
                <div slot="label" style="color: #97A8BE;">
                添加图片证据
                  <span style="color: #BCBCBC;font-size: 12px;margin-left: 10px">(最多两张照片，大小在3M以内)</span>
                </div>
            <div style="height: 100px;width: 100%;display: flex;">
              <el-upload
                      action
                      :http-request="uploadImage1"
                      :before-upload="beforeAvatarUpload"
                      :show-file-list="false">
                <img v-if="addToggleForm.img1" :src="addToggleForm.img1" class="avatar" style="height: 100px;width: 100px">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
              <el-upload
                      style="margin-left: 30px"
                      action
                      :http-request="uploadImage2"
                      :before-upload="beforeAvatarUpload"
                      :show-file-list="false">
                <img v-if="addToggleForm.img2" :src="addToggleForm.img2" class="avatar" style="height: 100px;width: 100px">
                <i v-else class="el-icon-plus avatar-uploader-icon"></i>
              </el-upload>
            </div>

          </el-form-item>

        </el-form>


        <div class="dialog-bot">
          <button class="btn" @click="addToggle=false">取消</button>
          <button class="btn" @click="handleAddYwAppeal">提交</button>
        </div>
      </div>
    </div>
    <div class="dialog appealDetail-dialog" v-show="detailToggle" >
      <div class="dialog-wrap md">
        <div class="dialog-title">申诉详情</div>
        <div class="dialog-close" @click="closeDetailDialog"></div>
        <div class="appealDetail">
          <div class="flexCSB">
            <div class="flex1">订单ID：300001</div>
            <div class="flex1">用户ID：201206</div>
            <div class="flex1">申诉原因：操作问题</div>
          </div>
          <div class="appealDetail-wrap">
            <ul class="appealDetail-list">
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
              <li class="item">
                <div class="time">2018-07-06 11:28:52</div>
                <div class="con">
                  <span class="label">申诉描述：</span>
                  <div class="flex1">
                    <div class="p">该用户拍错店铺了，没有在我店铺下单。</div>
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                    <img src="@/assets/images/goodsImg.jpg" alt class="img" />
                  </div>
                </div>
              </li>
            </ul>
          </div>
          <div class="tareaWrap">
            <textarea class="tarea"></textarea>
          </div>
          <div class="botBtn">
            <button class="btn">回复</button>
            <button class="btn">添加图片</button>
            <button class="btn">申请客服介入</button>
            <button class="btn">完结申诉</button>
          </div>
        </div>
      </div>
    </div>
    <div class="dialog appealEnd-dialog" v-show="endToggle">
      <div class="dialog-wrap">
        <div class="dialog-title">完结申诉</div>
        <div class="dialog-close" @click="closeEndDialog"></div>
        <div class="dialog-center">确定完结任务申诉？？？</div>
        <div class="dialog-bot">
          <button class="btn">取消</button>
          <button class="btn">提交</button>
        </div>
      </div>
    </div>
    <div class="dialog appealDelete-dialog" v-show="delToggle">
      <div class="dialog-wrap">
        <div class="dialog-title">删除申诉</div>
        <div class="dialog-close" @click="closeDelDialog"></div>
        <div class="dialog-center">确定删除活动申诉？？？</div>
        <div class="dialog-bot">
          <button class="btn">取消</button>
          <button class="btn">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {selectYwAppealList,addYwAppeal,getYwAppeal,endYwAppeal,removeYwAppeal} from '@/api/shop'
  import {uploadImage} from '@/utils'
export default {
  name: "appeal",
  data() {
    return {
      addToggle:false,
      detailToggle:false,
      endToggle:false,
      delToggle:false,
      statusList: [{
        value: 0,
        label: '全部'
      },{
        value: 1,
        label: '处理中'
      },{
        value: 2,
        label: '已回复'
      },{
        value: 3,
        label: '已完结'
      },{
        value: 4,
        label: '平台介入'
      }],
      typeList: [{
        value: 0,
        label: '全部'
      },{
        value: 1,
        label: '资金问题'
      },{
        value: 2,
        label: '任务问题'
      },{
        value: 3,
        label: '操作问题'
      }],
      type2List: [{
        value: 1,
        label: '资金问题'
      },{
        value: 2,
        label: '任务问题'
      },{
        value: 3,
        label: '操作问题'
      }],
      queryList: {
        endTime:null,
        startTime:null,
        orderId:null,
        pageNum:1,
        pageSize:10,
        status:0,
        type:0,
      },
      addToggleForm:{
        content:'',
        img1:null,
        img2:null,
        orderId :'',
        type :'',
      },
      checkall:[],
      checked:false,
      pagetotal:1,
      timeRange:[],
      list:[],
    };
  },
  created(){
    this.init()
  },
  watch: {
    'checkall': {
      handler: function(val, oldVal) {
        if (val.length === this.list.length) {
          this.checked = true;
        } else {
          this.checked = false;
        }
      },
      deep: true
    }
  },
  methods: {
    init(){
      selectYwAppealList(this.queryList).then(response=>{
        this.list = response.data.rows
        this.pagetotal = Math.ceil(response.data.total/this.queryList.pageSize)
      })
    },
    uploadImage1(e){
       this.addToggleForm.img1= uploadImage(e)
    },
    uploadImage2(e){
       this.addToggleForm.img2= uploadImage(e)
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


    search(){
      if (this.timeRange && this.timeRange.length === 2) {
        this.queryList.startTime = this.timeRange[0]
        this.queryList.endTime = this.timeRange[1]
      }
      this.init();
    },
    timeChange(val) {
      if (val === null) {
        this.queryList.startTime = null
        this.queryList.endTime = null
      }
    },

    handleAddYwAppeal(){
      addYwAppeal(this.addToggleForm).then(response=>{
        if (response.code === 0) {
          this.$message({
            message: '提交成功',
            type: 'success',
          });
          this.addToggle = false;
          this.init();
        } else {
          this.$message({
            message: response.msg,
            type: 'warning',
          })
        }
      })
    },
    checkedAll() {
      console.log(this.checked);
      // if (this.checked) { //实现反选
      //   this.checkall = [];
      // } else { //实现全选
      //   this.checkall = [];
      //   this.checkall.forEach(function(item, index) {
      //     this.checkList.push(item.id);
      //   });
      // }

      var checkObj = document.querySelectorAll('.checkItem'); // 获取所有checkbox项
      if(!this.checked){ // 判定全选checkbox的勾选状态
        for(var i=0;i<checkObj.length;i++){
          if(!checkObj[i].checked){ // 将未勾选的checkbox选项push到绑定数组中
            this.checkall.push(checkObj[i].value);
          }
        }
      }else { // 如果是去掉全选则清空checkbox选项绑定数组
        this.checkall = [];
      }

    },
    handleEndYwAppeal(id =false){
      console.log(this.checkall);
      return;
      var ids;
      if (id){
        ids = id;
      } else{
        ids = this.checkall.join(',');
      }
      endYwAppeal({ids:ids}).then(response=>{
        if (response.code === 0) {
          this.$message({
            message: '提交成功',
            type: 'success',
          });
          this.init();
        } else {
          this.$message({
            message: response.msg,
            type: 'warning',
          })
        }
      })
    },
    handleRemoveYwAppeal(id =false){
      var ids;
      if (id){
        ids = id;
      } else{
        ids = this.checkall.join(',');
      }
      removeYwAppeal({ids:ids}).then(response=>{
        if (response.code === 0) {
          this.$message({
            message: '删除成功',
            type: 'success',
          });
          this.init();
        } else {
          this.$message({
            message: response.msg,
            type: 'warning',
          })
        }
      })
    },
    beforeAvatarUpload(file) {
      // const isJPG = file.type === "image/jpeg/png";
      const isLt3M = file.size / 1024 / 1024 < 3;

      // if (!isJPG) {
      //   this.$message.error("上传头像图片只能是 JPG 格式!");
      // }
      if (!isLt3M) {
        this.$message.error("上传图片大小不能超过 3MB!");
      }
      // return isJPG && isLt2M;
      return isLt3M;
    },
    openAddDialog(){
      this.addToggle=true;
    },
    closeAddDialog(){
      this.addToggle=false;
    },
    openDetailDialog(){
      this.detailToggle=true;
    },
    closeDetailDialog(){
      this.detailToggle=false;
    },
    openEndDialog(){
      this.endToggle=true;
    },
    closeEndDialog(){
      this.endToggle=false;
    },
    openDelDialog(){
      this.delToggle=true;
    },
    closeDelDialog(){
      this.delToggle=false;
    },
  }
};
</script>

<style scoped>
.appealAdd-dialog .form-label{min-width: 7em;}
.appealAdd-dialog .form-item .form-input+.form-required{margin-left: 24px;}
.appealDetail{color: #999;}
.appealDetail .flexCSB{padding: 12px 20px;}
.appealDetail-wrap{max-height: 360px;max-height: calc(100vh - 400px);overflow-y: auto;}
.appealDetail-list{padding: 0 20px;}
.appealDetail-list .item{margin-bottom: 24px;}
.appealDetail-list .time{margin-bottom: 6px;}
.appealDetail-list .con{display: flex;}
.appealDetail-list .label{min-width: 80px;}
.appealDetail-list .p{margin-bottom: 10px}
.appealDetail-list .img{width: 80px;height: 80px;}
.appealDetail-list .img+.img{margin-left: 40px}
.appealDetail .tareaWrap{margin: 12px 60px 0 100px;}
.appealDetail .tarea{padding: 12px;width: 100%;height: 64px;border: 1px solid #E4E4E4;resize: none;box-sizing: border-box;border-radius: 6px;}
.appealDetail .botBtn{margin: 12px 60px 20px 100px;}
.appealDetail .botBtn .btn{padding: 0 8px;background-color: transparent;border: 1px solid #6666FF;color: #6666FF;}
.appealDetail .botBtn .btn+.btn{margin-left: 3px;}
.avatar-uploader .el-upload {
  border: 1px dashed #d9d9d9;
  border-radius: 6px;
  cursor: pointer;
  position: relative;
  overflow: hidden;
}
.avatar-uploader .el-upload:hover {
  border-color: #409EFF;
}
.avatar-uploader-icon {
  font-size: 28px;
  color: #8c939d;
  width: 100px;
  height: 100px;
  line-height: 100px;
  text-align: center;
  border: 1px dashed #d9d9d9;
}
.avatar {
  width: 100px;
  height: 100px;
  display: block;
}

</style>
