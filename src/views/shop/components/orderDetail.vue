<template>
    <div>
        <div style="margin-bottom: 10px">
            <span style="font-weight: bold">订单信息</span>
            <el-button size="mini" class="btn-theme" style="float: right;padding: 3px 12px;" @click="dialogFormVisible=true">申诉</el-button>
            <span style="float: right;color: red;margin-right: 15px">任务操作问题可联系客服处理或进行申诉</span>
        </div>
        <table class="table" style="margin-bottom: 30px">
            <tr>
                <th>订单ID</th>
                <th>用户ID</th>
                <th>接单账户</th>
                <th>搜索关键词</th>
                <th>付款金额</th>
                <th>订单编号</th>
            </tr>
            <tr>
                <td>7324567</td>
                <td>324524</td>
                <td>哦搜搜ok</td>
                <td>1970彩虹鞋</td>
                <td>39.9</td>
                <td>193404032431767609</td>
            </tr>
        </table>
        <div style="font-weight: bold;margin: 10px 0">操作进度</div>
        <table class="table">
            <tr>
                <th>任务步骤</th>
                <th>操作者</th>
                <th>操作时间</th>
                <th>内容</th>
            </tr>
            <tr>
                <td>详情文字</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>给骑士带来舒适，安心的驾控体验</td>
            </tr>
            <tr>
                <td>扫码截图</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                        style="width: 30px; height: 20px"
                        :src="url"
                        :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>搜索货比</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>浏览目标商品</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>收藏加购</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>聊天下单</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>商家返款</td>
                <td>商家</td>
                <td>2018-07-22 23:48:33</td>
                <td>返款金额：39.9元</td>
            </tr>
            <tr>
                <td>评价</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>追评</td>
                <td>用户</td>
                <td>2018-07-22 23:48:33</td>
                <td>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                    <el-image
                            style="width: 30px; height: 20px"
                            :src="url"
                            :preview-src-list="srcList"></el-image>
                </td>
            </tr>
            <tr>
                <td>商家确认</td>
                <td>商家</td>
                <td>2018-07-22 23:48:33</td>
                <td>佣金已经发放！</td>
            </tr>
        </table>

        <el-dialog title="发起申诉" :visible.sync="dialogFormVisible" width="550px" >
            <el-form :model="form">
                <el-row :gutter="20">
                    <el-col :span="12">
                        <el-form-item >
                            <span style="color: #97A8BE">订单编号：</span>
                            <el-input v-model="input1" size="mini" style="width: 130px"></el-input>
                        </el-form-item>
                    </el-col>
                    <el-col :span="12">
                        <el-form-item >
                        <span style="color: #97A8BE">申诉原因：</span>
                        <el-select v-model="value2" placeholder="请选择" size="mini" style="width: 130px">
                            <el-option
                                    v-for="item in options"
                                    :key="item.value"
                                    :label="item.label"
                                    :value="item.value">
                            </el-option>
                        </el-select>
                    </el-form-item></el-col>

                </el-row>


                <el-form-item  style="width: 100%">
                    <span style="color: #97A8BE">申诉说明：</span>
                    <el-input
                            style="width: 100%"
                            type="textarea"
                            :autosize="{ minRows: 2, maxRows: 4}"
                            placeholder="请输入内容"
                            v-model="form.textarea2">
                    </el-input>
                </el-form-item>
                <el-form-item  style="width: 100%">
                    <span style="color: #97A8BE">申诉说明：</span><span style="color: #BCBCBC">（最多2张图片，大小在3M以内）</span>
                    <el-upload
                            action=""
                            :file-list="fileList"
                            list-type="picture">
                        <el-button size="small" type="primary">点击上传</el-button>
                    </el-upload>
                </el-form-item>


            </el-form>
            <div slot="footer" class="dialog-footer" style="text-align: center">
                <el-button @click="dialogFormVisible = false" size="mini" style="color: #6666FF">取消退出</el-button>
                <el-button class="btn-theme" @click="dialogFormVisible = false" size="mini">确认提交</el-button>
            </div>
        </el-dialog>
    </div>
</template>

<script>
    export default {
        name: "orderDetail",
        data(){
            return{
                fileList: [
                    {name: 'food.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'},
                    {name: 'food2.jpeg', url: 'https://fuss10.elemecdn.com/3/63/4e7f3a15429bfda99bce42a18cdd1jpeg.jpeg?imageMogr2/thumbnail/360x360/format/webp/quality/100'}
                    ],
                url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                srcList: [
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                    'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
                ],
                form:{
                    textarea2:''
                },
                dialogFormVisible:false,
                input1:'',
                value2:'',
                options: [{
                    value: '选项1',
                    label: '选项1'
                },],
            }
        },
        methods:{

        }
    }
</script>

<style scoped>

</style>
