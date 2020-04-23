<template>
  <div class="store">
    <el-button class="btn-theme" size="small" @click="handelShowAdd">+新增店铺</el-button>
    <div style="margin: 10px 0">
      <span style="color:#6666FF;font-size: 14px">温馨提示：</span>
      <span style="color: #97A8BE;font-size: 14px">商家账户可绑定多个店铺，切忌绑定他人店铺，恶搞同行，如有发现封号处理。</span>
    </div>

    <el-table
      :data="tableData"
      style="width: 100%;">
      <el-table-column label="店铺类型" align="center">
        <template slot-scope="{row}">
          <!--<img src="../../../assets/web/tbc.png" style="width: 20px;position: relative;top: 4px;">-->
          <span>{{ row.storeTypeName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="店铺名称" align="center">
        <template slot-scope="{row}">
          <span>{{ row.storeName }}</span>
        </template>
      </el-table-column>
      <el-table-column label="店铺网址" align="center">
        <template slot-scope="{row}">
          <el-button :class="'copy-'+row.id" type="text" style="color:#6666FF;" @click="copy(row.id)"
                     :data-clipboard-text="row.url">复制
          </el-button>
        </template>
      </el-table-column>
      <el-table-column label="接单间隔" align="center">
        <template slot-scope="{row}">
          <span>{{ row.intervalSet }}</span>
        </template>
      </el-table-column>
      <el-table-column label="审核状态" align="center">
        <template slot-scope="{row}">
          <span>{{ row.status===1?'待审核':row.status===2?'正常':'禁用' }}</span>
        </template>
      </el-table-column>
      <el-table-column label="绑定时间" align="center" width="170">
        <template slot-scope="{row}">
          <span>{{ row.createTime }}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center">
        <template slot-scope="{row}">
          <el-button type="text" style="color:#6666FF;" @click="handelShowEdit(row)">修改</el-button>
        </template>
      </el-table-column>
    </el-table>
    <!--<el-pagination-->
    <!--style="text-align: center"-->
    <!--:current-page="currentPage4"-->
    <!--layout="total, prev, pager, next, jumper"-->
    <!--:total="400">-->
    <!--</el-pagination>-->

    <el-dialog :visible.sync="dialogFormVisible" width="492.438px" :close-on-click-modal="false">
      <div slot="title">
        {{ type==='add'?'绑定店铺':'修改店铺' }}
      </div>
      <el-form :model="form" label-position="top" ref="form" :rules="formRules">
        <el-form-item style="display:flex;" prop="storeTypeId">
          <span class="form-label" style="color: #97A8BE;font-size: 15px;font-weight: 700;">店铺类型</span>
          <el-select v-model="form.storeTypeId " placeholder="请选择" size="small" style="width: 100px"
                     @change="handleStoreType">
            <el-option
              v-for="item in storeType"
              :key="item.id"
              :label="item.name"
              :value="item.id">
            </el-option>
          </el-select>

          <span class="form-label" style="font-weight: 700;margin-left: 20px" v-if="showIsTm">是否天猫店</span>
          <el-select v-model="form.tmallFlag " placeholder="请选择" size="small" style="width: 100px" v-if="showIsTm">
            <el-option
              v-for="item in isTm"
              :key="item.value"
              :label="item.label"
              :value="item.value">
            </el-option>
          </el-select>

        </el-form-item>
        <el-form-item prop="storeName">
          <span slot="label" class="form-label">店铺名称 <span class="form-span">（务必跟手机端手机店铺名一致）</span></span>
          <el-input v-model="form.storeName" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item prop="url">
          <span slot="label" class="form-label">店铺网址<span class="form-span">（务必跟手机端店铺掌柜名称一致）</span></span>
          <el-input v-model="form.url" autocomplete="off" size="small"></el-input>
        </el-form-item>
        <el-form-item prop="address">
          <span slot="label" class="form-label">发货地址<span class="form-span">（使用平台快递或者误发真包按此地址处理，无比真实填写）</span></span>
          <div>
            <el-input v-model="form.name" autocomplete="off" size="small" style="width: 30%"
                      placeholder="发货人姓名"></el-input>
            <el-input v-model="form.phone" autocomplete="off" @blur="checkPhone" size="small" placeholder="发货人手机号码"
                      style="width: 69%"></el-input>
          </div>
          <div style="display: flex;justify-content:space-between;">
            <v-distpicker :province="form.province" :city="form.city" :area="form.area" @province="onChangeProvince"
                          @city="onChangeCity" @area="onChangeArea"></v-distpicker>

          </div>
          <div>
            <el-input v-model="form.address" autocomplete="off" size="small"
                      placeholder="请填写店铺实际发货地的详细地址..."></el-input>
          </div>
        </el-form-item>
        <el-form-item prop="dataNum">
          <span slot="label" class="form-label">接单间隔</span>
          <el-input v-model="form.dataNum" autocomplete="off" size="small" style="width: 30%">
            <template slot="append">天</template>
          </el-input>
          <span>（最小30天，最大60天）</span>
        </el-form-item>
        <div>
          <p style="color: #97A8BE"><span style="color: #6666FF">温馨提示：</span>接单间隔是指同一个用户在同一个店铺内的接单天数间隔，最小间隔天数30天，最大间隔天数45天，
            如商家不设置天数，系统默认间隔天数为30天，商家可根据实际情况自行选择。如商家需设置不同店铺之间的接单限制，请联系客服处理。</p>

        </div>
      </el-form>
      <div slot="footer" class="dialog-footer" style="text-align: center">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="handleAddStore" v-if="type==='add'">确 定</el-button>
        <el-button type="primary" @click="handleEditStore" v-if="type==='edit'">确 定</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
    import {getStoreList, addStore, getStoreTypeList, editStore} from '@/api/shop'
    import VDistpicker from 'v-distpicker'
    import Clipboard from "clipboard";

    export default {
        name: "store",
        components: {VDistpicker},
        data() {
            var valiAddress = (rule, value, callback) => {//包含小数的数字
                if (!this.form.address || !this.form.area || !this.form.city || !this.form.name || !this.form.phone || !this.form.province) {
                    callback(new Error('请输入完整地址'));
                } else {
                    callback();
                }
            };
            var valiDataNum = (rule, value, callback) => {//包含小数的数字
                let reg = /^[+-]?(0|([1-9]\d*))(\.\d+)?$/g;
                if (!reg.test(value)) {
                    callback(new Error('请输入时间'));
                } else if (value < 30 || value > 60) {
                    callback(new Error('请输入正确的时间'));
                } else {
                    callback()
                }
            };
            return {
                tableData: [],
                form: {
                    address: null,
                    area: null,
                    city: null,
                    dataNum: null,
                    name: null,
                    phone: null,
                    province: null,
                    storeId: null,
                    storeName: '',
                    storeTypeId: '',
                    storeTypeName: '',
                    tmallFlag: 2,
                    url: '',
                },
                formRules: {
                    storeTypeId: [
                        {required: true, message: '请选择店铺类型', trigger: 'blur'},
                    ],
                    storeName: [
                        {required: true, message: '请输入店铺名称', trigger: 'blur'},
                    ],
                    url: [
                        {required: true, message: '请输入店铺网址', trigger: 'blur'},
                    ],
                    dataNum: [
                        {required: true, message: '请输入接单间隔', trigger: 'blur'},
                        {validator: valiDataNum, trigger: 'blur'}
                    ],
                    address: [
                        {validator: valiAddress, trigger: 'blur'}
                    ]

                },
                pac: '',
                dialogFormVisible: false,
                currentPage4: 1,
                storeType: [],
                isTm: [
                    {
                        value: 1,
                        label: '是',
                    },
                    {
                        value: 2,
                        label: '否',
                    }
                ],
                showIsTm: false,
                type: 'add',

            }
        },
        created() {
            this.init();
        },
        methods: {
            init() {
                getStoreList().then(response => {
                    this.tableData = response.data
                })
                getStoreTypeList().then(response => {
                    this.storeType = response.data;
                })
            },
            copy(id) {
                const clipboard = new Clipboard(".copy-" + id);
                clipboard.on("success", e => {
                    this.$message({type: "success", message: "复制成功"});
                    clipboard.destroy();
                });
                clipboard.on("error", e => {
                    this.$message({type: "waning", message: "该浏览器不支持自动复制"});
                    clipboard.destroy();
                });
            },
            checkPhone() {
                let phone = this.form.phone;
                if (!(/^1[3456789]\d{9}$/.test(phone))) {
                    this.$message.error('手机号码有误，请重填！');
                    return false;
                }
            },
            handleStoreType(val) {
                this.storeType.map(item => {
                    if (item.id === val) {
                        this.form.storeTypeName = item.name
                        if (item.name === '淘宝') {
                            this.showIsTm = true
                        } else {
                            this.showIsTm = false;
                        }
                    }
                })
            },
            handleAddStore() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        addStore(this.form).then(response => {
                            if (response.code === 0) {
                                this.$message({
                                    message: '添加成功',
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

            },
            initData() {
                this.form = {
                    address: null,
                    area: null,
                    city: null,
                    dataNum: null,
                    name: null,
                    phone: null,
                    province: null,
                    storeId: null,
                    storeName: '',
                    storeTypeId: '',
                    storeTypeName: '',
                    tmallFlag: 2,
                    url: '',
                }
            },
            handelShowAdd() {
                this.initData();
                this.type = 'add';
                this.dialogFormVisible = true;
            },
            handelShowEdit(val) {
                this.form = {
                    address: val.address,
                    area: val.area,
                    city: val.city,
                    dataNum: val.intervalSet,
                    name: val.name,
                    phone: val.phone,
                    province: val.province,
                    storeName: val.storeName,
                    storeTypeId: val.storeTypeId,
                    storeTypeName: val.storeTypeName,
                    tmallFlag: val.tmallFlag,
                    url: val.url,
                    storeId: val.id,
                }
                this.type = 'edit';
                this.dialogFormVisible = true;
            },

            handleEditStore() {
                this.$refs.form.validate(valid => {
                    if (valid) {
                        editStore(this.form).then(response => {
                            if (response.code === 0) {
                                this.$message({
                                    message: '修改成功',
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
                        this.$message({
                            message: '请输入要求的内容',
                            type: 'warning',
                        })
                        return false
                    }
                })

            },
            onChangeProvince(a) {
                if (a.value !== '省')
                    this.form.province = a.value;
            },
            onChangeCity(a) {
                if (a.value !== '市')
                    this.form.city = a.value;
            },
            onChangeArea(a) {
                if (a.value !== '区')
                    this.form.area = a.value;
            }
        }
    }
</script>

<style scoped>
  .form-label {
    color: #97A8BE;
    font-size: 15px
  }

  .form-span {
    color: #6B6B6B;
    font-size: 12px
  }

  .store >>> .el-form--label-top .el-form-item__label {
    padding: 0 0 5px;
    line-height: 5px;
  }

  .store >>> .distpicker-address-wrapper select {
    color: #97A8BE;
    width: 148px;
    height: 32px;
    font-size: inherit;
    padding: 0 .75rem;
  }
</style>
