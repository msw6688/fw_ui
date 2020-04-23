<template>
  <div class="blacklist-page">
    <div class="search">
      <div class="item">
        <span class="lb">用户ID:</span>
        <input class="ipt" type="text" v-model="queryList.userId" />
      </div>
      <button class="btn btn-add" @click="openAddDialog">发起申诉</button>
      <button class="btn" @click="search">搜索</button>
      <button class="btn" @click="handleRemoveYwBlack()">批量删除</button>
    </div>
    <table class="table">
      <tr>
        <th>
          <div class="checkbox">
            <input class="chk-ipt" type="checkbox" v-model="checked" @click="checkedAll" />
            <span class="chk-out">
              <span class="chk-in"></span>
            </span>全选
          </div>
        </th>
        <th>用户ID</th>
        <th>拉黑时间</th>
        <th>拉黑原因</th>
        <th>操作</th>
      </tr>
      <tr v-for="(item,index) in list" :key="index">
        <td>
          <div class="checkbox">
            <input class="chk-ipt checkItem" type="checkbox" v-model="checkall" :value="item.id" />
            <span class="chk-out">
              <span class="chk-in"></span>
            </span>{{item.id}}
          </div>
        </td>
        <td>{{item.userId}}</td>
        <td>{{item.createTime}}</td>
        <td>{{item.reason}}</td>
        <td>
          <span class="opp" @click="openDelDialog(item.id)">取消</span>
        </td>
      </tr>
    </table>
    <div class="pagination">
      <span class="total">共{{ pagetotal }}页</span>
      <a class="prev" href>上一页</a>
      <span class="cur">{{ queryList.pageNum }}&nbsp;/&nbsp;{{ pagetotal }}</span>
      <a class="next" href>下一页</a>
      <input class="ipt" type="text" v-model="queryList.pageNum" />
      <button class="btn">跳转</button>
    </div>
    <div class="dialog blackAdd-dialog" v-show="addToggle">
      <div class="dialog-wrap md">
        <div class="dialog-title">发起申诉</div>
        <div class="dialog-close" @click="closeAddDialog"></div>
        <el-form ref="form" :model="addToggleForm" style="padding: 0 20px">
          <el-row :gutter="20">
            <el-col :span="24">
              <el-form-item label-width="80px">
                <div slot="label" style="color: #97A8BE;text-align: left">订单编号:</div>
                <el-input v-model="addToggleForm.userId" size="mini"></el-input>
              </el-form-item>
            </el-col>
            <el-col :span="24">
              <el-form-item label-width="80px">
                <div slot="label" style="color: #97A8BE">申诉原因:</div>
                <el-select v-model="addToggleForm.reason" size="mini">
                  <el-option
                    v-for="item in type2List"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value"
                  ></el-option>
                </el-select>
              </el-form-item>
            </el-col>

          </el-row>
        </el-form>

        <div class="dialog-bot">
          <button class="btn" @click="addToggle=false">取消</button>
          <button class="btn" @click="handleAddYwBlack">提交</button>
        </div>
      </div>
    </div>

    <div class="dialog blackDelete-dialog" v-show="delToggle">
      <div class="dialog-wrap">
        <div class="dialog-title">删除黑名单</div>
        <div class="dialog-close" @click="closeDelDialog"></div>
        <div class="dialog-center">确定删除黑名单？？？</div>
        <div class="dialog-bot">
          <button class="btn" @click="delToggle=false">取消</button>
          <button class="btn" @click="handleRemoveYwBlack(delIndex)">提交</button>
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import { blackList, AddBlack, removeYwBlack } from "@/api/shop2";
export default {
  name: "blacklist",
  data() {
    return {
      addToggle: false,
      delToggle: false,
      delIndex:null,
      queryList: {
        userId: null,
        pageNum: 1,
        pageSize: 10,
      },
      addToggleForm: {
        userId : "",
        reason : ""
      },
      checkall: [],
      checked: false,
      pagetotal: 1,
      timeRange: [],
      list: [],
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
    };
  },
  watch: {
    checkall: {
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
  created() {
    this.init();
  },
  methods: {
    init() {
      blackList(this.queryList).then(response => {
        console.log(response);
        this.list = response.data.rows;
        this.pagetotal = Math.ceil(
          response.data.total / this.queryList.pageSize
        );
      });
    },
    search() {
      this.init();
    },
    handleAddYwBlack() {
      AddBlack(this.addToggleForm).then(response => {
        if (response.code === 0) {
          this.$message({
            message: "提交成功",
            type: "success"
          });
          this.addToggle = false;
          this.init();
        } else {
          this.$message({
            message: response.msg,
            type: "warning"
          });
        }
      });
    },
    checkedAll() {
      console.log(this.checked);
      var checkObj = document.querySelectorAll(".checkItem"); // 获取所有checkbox项
      if (!this.checked) {
        // 判定全选checkbox的勾选状态
        for (var i = 0; i < checkObj.length; i++) {
          if (!checkObj[i].checked) {
            // 将未勾选的checkbox选项push到绑定数组中
            this.checkall.push(checkObj[i].value);
          }
        }
      } else {
        // 如果是去掉全选则清空checkbox选项绑定数组
        this.checkall = [];
      }
    },

    handleRemoveYwBlack(id = false) {

      var ids;
      if (id) {
        ids = id;
      } else {
        ids = this.checkall.join(",");
      }

      removeYwBlack({ ids: ids }).then(response => {
        if (response.code === 0) {
          this.$message({
            message: "删除成功",
            type: "success"
          });
          this.init();
          this.delToggle=false;
        } else {
          this.$message({
            message: response.msg,
            type: "warning"
          });
        }
      });
    },
    openAddDialog() {
      this.addToggle = true;
    },
    closeAddDialog() {
      this.addToggle = false;
    },
    openDelDialog(index) {
      this.delToggle = true;
      this.delIndex=index;
    },
    closeDelDialog() {
      this.delToggle = false;
    }
  }
};
</script>
<style >
</style>
