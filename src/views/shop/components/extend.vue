<template>
  <div class="extend-page">
    <p class="p1">
      您己邀请：
      <span class="main-txt">{{extendData.count}}</span>人
    </p>
    <p class="p1">选中下面链接复制发送邀请给商家好友</p>
    <div class="link">
      邀请链接
      <input class="ipt" type="text" v-model="extendData.url" disabled />
      <button class="btn copyLink" @click="copy" :data-clipboard-text="extendData.url">复制</button>
    </div>
    <p class="p1">推广说明</p>
    <p class="p2">推广商家获佣：可获得下级商家发布任务支付费用-代发费用后的3.0%（返款服务费不参与分成），佣金不可提现，只可以用来发布任务。</p>
    <p class="p2">佣金结算时间，是按一个订单完成之后结算。</p>
    <p class="p2">平台保留活动最终解释权。</p>
  </div>
</template>
<script>
import { extendLink } from "@/api/shop2";
import Clipboard from "clipboard";

export default {
  name: "extend",
  data() {
    return {
      extendData: { count: 0, url: "" }
    };
  },
  created() {
    this.init();
  },
  methods: {
    init() {
      extendLink().then(response => {
        this.extendData = response.data;
        console.log(response);
      });
    },
    copy() {
      const clipboard = new Clipboard(".copyLink");
      clipboard.on("success", e => {
        this.$message({ type: "success", message: "复制成功" });
        clipboard.destroy();
      });
      clipboard.on("error", e => {
        this.$message({ type: "waning", message: "该浏览器不支持自动复制" });
        clipboard.destroy();
      });
    }
  }
};
</script>
<style >
/* 我的推广*/
.extend-page .p1 {
  margin-bottom: 12px;
  font-size: 16px;
  font-weight: bold;
  color: #333;
}
.extend-page .p2 {
  margin-bottom: 12px;
  font-size: 14px;
}
.extend-page .link {
  margin-bottom: 32px;
  display: flex;
  align-items: center;
}
.extend-page .link .ipt {
  flex: 1;
  margin: 0 12px;
  padding: 0 12px;
  height: 24px;
  border: 1px solid #e4e4e4;
  border-radius: 4px;
}
.extend-page .link .btn {
  line-height: 24px;
}
.step-title {
  margin-top: 24px;
  line-height: 32px;
  text-align: center;
  background-color: #c9ab78;
  color: white;
  font-size: 16px;
}
</style>