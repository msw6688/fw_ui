<template>
    <div>
        <div class="shop">

        </div>
        <el-row :gutter="10">
            <el-col :span="3">
                <div class="side">
                    <div class="sideHead">
                        <div class="avatarWrap">
                            <el-avatar size="large" src="circleUrl" style="width: 50px;height: 50px;"></el-avatar>
                            <input type="file" class="file">
                        </div>

                        <span class="idNo">ID:2315461</span>
                    </div>
                    <div class="sideNav">
                        <!--<a :class="['item',{'cur':activeTab==='notice' || activeTab==='noticeDetail' }]"  @click="handleMenu('notice','公告中心')" tab="notice"> <svg-icon class="icon" icon-class="gonggao" />公告中心</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='activity' }]" @click="handleMenu('activity','发布任务')" tab="activity"> <svg-icon class="icon" icon-class="zhifeiji" />发布任务</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='store' }]" @click="handleMenu('store','店铺管理')" tab="store"> <svg-icon class="icon" icon-class="dianpu" />店铺管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='recharge' }]" @click="handleMenu('recharge','账户充值')" tab="recharge"> <svg-icon class="icon" icon-class="chongzhi" />账户充值</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='funds' }]" @click="handleMenu('funds','资金明细')" tab="funds"> <svg-icon class="icon" icon-class="zijinmingxi" />资金明细</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='task' }]" @click="handleMenu('task','任务管理')" tab="task"> <svg-icon class="icon" icon-class="renwuguanli" />任务管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='order' }]" @click="handleMenu('order','订单管理')" tab="order"> <svg-icon class="icon" icon-class="dingdanguanli" />订单管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='parcel' }]" @click="handleMenu('parcel','快递代发')" tab="parcel"> <svg-icon class="icon" icon-class="kuaidi" />快递代发</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='parcelMng' }]" @click="handleMenu('parcelMng','代发管理')" tab="substitute"> <svg-icon class="icon" icon-class="daifa" />代发管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='single' }]" @click="handleMenu('single','单号管理')" tab="single"> <svg-icon class="icon" icon-class="chongzhi" />单号管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='appeal' }]" @click="handleMenu('appeal','申诉中心')" tab="appeal"> <svg-icon class="icon" icon-class="gantanhao" />申诉中心</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='extend' }]" @click="handleMenu('extend','我的推广')" tab="extend"> <svg-icon class="icon" icon-class="qrcode" />我的推广</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='blacklist' }]" @click="handleMenu('blacklist','黑名单')" tab="blacklist"> <svg-icon class="icon" icon-class="heimingdan" />黑名单</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='feedback' }]" @click="handleMenu('feedback','意见反馈')" tab="feedback"> <svg-icon class="icon" icon-class="yijianfankui" />意见反馈</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/notice') > -1 || nowPath.indexOf('/admin/shop/noticeDetail') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/notice','公告中心')">-->
                            <!--<router-link :to="{ path:'/admin/shop/notice'}" tag="span">-->
                                <!--<svg-icon class="icon" icon-class="gonggao"/>-->
                                <!--公告中心-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/activity') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/activity','发布任务')">-->
                            <!--<router-link :to="{ path:'/admin/shop/activity'}" tag="span">-->
                                <!--<svg-icon class="icon" icon-class="zhifeiji"/>-->
                                <!--发布任务-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--&lt;!&ndash;<router-link :to="{ path:'/admin/shop/activity'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/activity') > -1}]"  > <svg-icon class="icon" icon-class="zhifeiji" />发布任务</router-link>&ndash;&gt;-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/store') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/store','店铺管理')">-->
                            <!--<router-link :to="{ path:'/admin/shop/store'}">-->
                                <!--<svg-icon class="icon" icon-class="dianpu"/>-->
                                <!--店铺管理-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/recharge') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/recharge','账户充值')">-->
                            <!--<router-link :to="{ path:'/admin/shop/recharge'}">-->
                                <!--<svg-icon class="icon" icon-class="chongzhi"/>-->
                                <!--账户充值-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/funds') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/funds','资金明细')">-->
                            <!--<router-link :to="{ path:'/admin/shop/funds'}">-->
                                <!--<svg-icon class="icon" icon-class="zijinmingxi"/>-->
                                <!--资金明细-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/task') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/task','任务管理')">-->
                            <!--<router-link :to="{ path:'/admin/shop/task'}">-->
                                <!--<svg-icon class="icon" icon-class="renwuguanli"/>-->
                                <!--任务管理-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/order') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/order','订单管理')">-->
                            <!--<router-link :to="{ path:'/admin/shop/order'}">-->
                                <!--<svg-icon class="icon" icon-class="dingdanguanli"/>-->
                                <!--订单管理-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/parcel') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/parcel','快递代发')">-->
                            <!--<router-link :to="{ path:'/admin/shop/parcel'}">-->
                                <!--<svg-icon class="icon" icon-class="kuaidi"/>-->
                                <!--快递代发-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/parcelMng') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/parcelMng','代发管理')">-->
                            <!--<router-link :to="{ path:'/admin/shop/parcelMng'}">-->
                                <!--<svg-icon class="icon" icon-class="daifa"/>-->
                                <!--代发管理-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/single') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/single','单号管理')">-->
                            <!--<router-link :to="{ path:'/admin/shop/single'}">-->
                                <!--<svg-icon class="icon" icon-class="chongzhi"/>-->
                                <!--单号管理-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/appeal') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/appeal','申诉中心')">-->
                            <!--<router-link :to="{ path:'/admin/shop/appeal'}">-->
                                <!--<svg-icon class="icon" icon-class="gantanhao"/>-->
                                <!--申诉中心-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/extend') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/extend','我的推广')">-->
                            <!--<router-link :to="{ path:'/admin/shop/extend'}">-->
                                <!--<svg-icon class="icon" icon-class="qrcode"/>-->
                                <!--我的推广-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/blacklist') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/blacklist','黑名单')">-->
                            <!--<router-link :to="{ path:'/admin/shop/blacklist'}">-->
                                <!--<svg-icon class="icon" icon-class="heimingdan"/>-->
                                <!--黑名单-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <!--<a :class="['item',{'cur':nowPath.indexOf('/admin/shop/feedback') > -1}]"-->
                           <!--@click="addViewTags('/admin/shop/feedback','意见反馈')">-->
                            <!--<router-link :to="{ path:'/admin/shop/feedback'}">-->
                                <!--<svg-icon class="icon" icon-class="yijianfankui"/>-->
                                <!--意见反馈-->
                            <!--</router-link>-->
                        <!--</a>-->
                        <router-link :to="{ path:'/admin/shop/notice'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/notice') > -1 || nowPath.indexOf('/admin/shop/noticeDetail') > -1}]"><svg-icon class="icon" icon-class="gonggao"/>公告中心</router-link>
                        <router-link :to="{ path:'/admin/shop/activity'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/activity') > -1}]"  > <svg-icon class="icon" icon-class="zhifeiji" />发布任务</router-link>
                        <router-link :to="{ path:'/admin/shop/store'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/store') > -1}]"> <svg-icon class="icon" icon-class="dianpu" />店铺管理</router-link>
                        <router-link :to="{ path:'/admin/shop/recharge'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/recharge') > -1}]"> <svg-icon class="icon" icon-class="chongzhi" />账户充值</router-link>
                        <router-link :to="{ path:'/admin/shop/funds'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/funds') > -1}]"> <svg-icon class="icon" icon-class="zijinmingxi" />资金明细</router-link>
                        <router-link  :to="{ path:'/admin/shop/task'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/task') > -1}]"> <svg-icon class="icon" icon-class="renwuguanli" />任务管理</router-link>
                        <router-link :to="{ path:'/admin/shop/order'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/order') > -1}]"> <svg-icon class="icon" icon-class="dingdanguanli" />订单管理</router-link>
                        <router-link v-if="auxiliaryFlag" :to="{ path:'/admin/shop/parcel'}" :class="['item',{'cur':nowPath==='/admin/shop/parcel'}]"> <svg-icon class="icon" icon-class="kuaidi" />快递代发</router-link>
                        <router-link v-if="auxiliaryFlag" :to="{ path:'/admin/shop/parcelMng'}" :class="['item',{'cur':nowPath==='/admin/shop/parcelMng'}]"> <svg-icon class="icon" icon-class="daifa"  />代发管理</router-link>
                        <router-link v-if="auxiliaryFlag" :to="{ path:'/admin/shop/single'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/single') > -1}]"> <svg-icon class="icon" icon-class="chongzhi" />单号管理</router-link>
                        <router-link :to="{ path:'/admin/shop/appeal'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/appeal') > -1}]"> <svg-icon class="icon" icon-class="gantanhao" />申诉中心</router-link>
                        <router-link :to="{ path:'/admin/shop/extend'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/extend') > -1}]"> <svg-icon class="icon" icon-class="qrcode" />我的推广</router-link>
                        <router-link :to="{ path:'/admin/shop/blacklist'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/blacklist') > -1}]"> <svg-icon class="icon" icon-class="heimingdan" />黑名单</router-link>
                        <router-link :to="{ path:'/admin/shop/feedback'}" :class="['item',{'cur':nowPath.indexOf('/admin/shop/feedback') > -1}]"> <svg-icon class="icon" icon-class="yijianfankui" />意见反馈</router-link>
                        <!--&lt;!&ndash;<a :class="['item',{'cur':activeTab==='notice' || activeTab==='noticeDetail' }]"  @click="handleMenu('notice','公告中心')" tab="notice"> <svg-icon class="icon" icon-class="gonggao" />公告中心</a>&ndash;&gt;-->
                        <!--<a :class="['item',{'cur':activeTab==='activity' }]" @click="handleMenu('activity','发布任务')" tab="activity"> <svg-icon class="icon" icon-class="zhifeiji" />发布任务</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='store' }]" @click="handleMenu('store','店铺管理')" tab="store"> <svg-icon class="icon" icon-class="dianpu" />店铺管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='recharge' }]" @click="handleMenu('recharge','账户充值')" tab="recharge"> <svg-icon class="icon" icon-class="chongzhi" />账户充值</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='funds' }]" @click="handleMenu('funds','资金明细')" tab="funds"> <svg-icon class="icon" icon-class="zijinmingxi" />资金明细</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='task' }]" @click="handleMenu('task','任务管理')" tab="task"> <svg-icon class="icon" icon-class="renwuguanli" />任务管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='order' }]" @click="handleMenu('order','订单管理')" tab="order"> <svg-icon class="icon" icon-class="dingdanguanli" />订单管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='parcel' }]" @click="handleMenu('parcel','快递代发')" tab="parcel"> <svg-icon class="icon" icon-class="kuaidi" />快递代发</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='parcelMng' }]" @click="handleMenu('parcelMng','代发管理')" tab="substitute"> <svg-icon class="icon" icon-class="daifa" />代发管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='single' }]" @click="handleMenu('single','单号管理')" tab="single"> <svg-icon class="icon" icon-class="chongzhi" />单号管理</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='appeal' }]" @click="handleMenu('appeal','申诉中心')" tab="appeal"> <svg-icon class="icon" icon-class="gantanhao" />申诉中心</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='extend' }]" @click="handleMenu('extend','我的推广')" tab="extend"> <svg-icon class="icon" icon-class="qrcode" />我的推广</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='blacklist' }]" @click="handleMenu('blacklist','黑名单')" tab="blacklist"> <svg-icon class="icon" icon-class="heimingdan" />黑名单</a>-->
                        <!--<a :class="['item',{'cur':activeTab==='feedback' }]" @click="handleMenu('feedback','意见反馈')" tab="feedback"> <svg-icon class="icon" icon-class="yijianfankui" />意见反馈</a>-->
                    </div>
                </div>
            </el-col>
            <el-col :span="20">
                <div class="mainNav">
                    <router-link
                            v-for="(item,index) in viewTab"
                            :to="{ path:item.path}"
                            :class="['item',{'cur':nowPath===item.path}]">
                        {{ item.title }}
                        <svg-icon v-if="index!==0" class="icon icon-close" icon-class="guanbi" @click.prevent.stop="delViewTags(item)"/>
                    </router-link>

                    <!--<div v-for="(item,index) in viewTab" :class="['item',{'cur':activeTab === item.key}]" :key="index">-->
                    <!--<a @click="handleTab(item.key)">-->
                    <!--{{ item.name }}-->
                    <!--</a>-->

                    <!--</div>-->
                </div>

                <div class="page-load">
                    <router-view :key="key"/>
                    <!--<notice v-if="activeTab === 'notice'" @detail="handleNoticDetail"></notice>-->
                    <!--<notice-detail v-if="activeTab === 'noticeDetail'" :noticeId="noticeId"></notice-detail>-->
                    <!--<activity v-if="activeTab === 'activity'"></activity>-->
                    <!--<store v-if="activeTab === 'store'"></store>-->
                    <!--<deposit v-if="activeTab === 'recharge'"></deposit>-->
                    <!--<funds v-if="activeTab === 'funds'"></funds>-->
                    <!--<task v-if="activeTab === 'task'" @detail="handleTaskDetail"></task>-->
                    <!--<task-detail v-if="activeTab === 'taskDetail'" ></task-detail>-->
                    <!--<order v-if="activeTab === 'order'" @detail="handleOrderDetail"></order>-->
                    <!--<order-detail v-if="activeTab === 'orderDetail'" ></order-detail>-->
                    <!--<parcel v-if="activeTab === 'parcel'" ></parcel>-->
                    <!--<parcel-mng v-if="activeTab === 'parcelMng'" ></parcel-mng>-->
                    <!--<single v-if="activeTab === 'single'" ></single>-->
                    <!--<appeal v-if="activeTab === 'appeal'" ></appeal>-->
                    <!--<extend v-if="activeTab === 'extend'" ></extend>-->
                    <!--<blacklist v-if="activeTab === 'blacklist'" ></blacklist>-->
                    <!--<feedback v-if="activeTab === 'feedback'" ></feedback>-->
                </div>
            </el-col>

        </el-row>
    </div>
</template>

<script>
    // import notice from './components/notice'
    // import noticeDetail from './components/noticeDetail'
    // import activity from './components/activity'
    // import store from './components/store'
    // import deposit from './components/deposit'
    // import funds from './components/funds'
    // import task from './components/task'
    // import taskDetail from './components/taskDetail'
    // import order from './components/order'
    // import orderDetail from './components/orderDetail'
    // import parcel from './components/parcel'
    // import parcelMng from './components/parcelMng'
    // import single from './components/single'
    // import appeal from './components/appeal'
    // import extend from './components/extend'
    // import feedback from './components/feedback'
    // import blacklist from './components/blacklist'


    export default {
        name: "shop",
        // components:{
        //     notice,noticeDetail,activity,store,deposit,funds,task,taskDetail,order,orderDetail,
        //     parcel,parcelMng,single,appeal,extend,feedback,blacklist
        // },
        computed: {
            key() {
                return this.$route.fullPath;
            }
        },
        beforeRouteUpdate (to, from, next) {
            const { path } = to
            if (this.viewTab.some(v => v.path === path))
                next();
            else if (this.viewTab.length >= 8){
                this.$message({
                    message: '页签不超过8个',
                    type: 'warning'
                });
            }else{
                this.addViewTags(to);
                next();
            }

        },
        watch: {

            key: function (val) {
                this.nowPath = this.$route.path;
            },

        },
        data() {
            return {
                circleUrl: "https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png",
                activeTab: 'notice',
                noticeId: '',
                nowPath: "",
                auxiliaryFlag: "",
                viewTab: [],
            }
        },
        created() {
            this.nowPath = this.$route.path;
            this.viewTab = this.$store.getters.view
            this.auxiliaryFlag = this.$store.getters.auxiliaryFlag
            if (!this.viewTab.some(v => v.path === this.nowPath)) {
                this.addViewTags(this.$route)
            }

        },
        mounted() {
        },
        methods: {
            isActive(route) {
                return route.path === this.$route.path
            },
            addViewTags(to) {
                const { path } = to
                if (this.viewTab.some(v => v.path === path)) return;

                if (path) {
                    const view = {
                        path:to.path,
                        title:to.meta.title
                    }
                    this.$store.dispatch('addView', view)
                }
                // return false
            },
            delViewTags(url) {
                const { path } = url
                if (path) {
                    const view = {
                        path:url.path,
                        title:url.title
                    };
                    this.$store.dispatch('delView', view).then(() => {
                        if (this.isActive(view)) {
                            this.$router.push({path:'/admin/shop/notice'})
                        }
                    })

                }
                // return false
            },
            // addViewTags(path, name) {
            //     console.log(this.viewTab);
            //     if (this.viewTab.some(v => v.path === path)) return;
            //     if (this.viewTab.length >= 8) {
            //         this.$message({
            //             message: '页签不超过8个',
            //             type: 'warning'
            //         });
            //         return;
            //     }
            //     if (path) {
            //         const view = {
            //             path: path,
            //             title: name
            //         }
            //         this.$store.dispatch('addView', view)
            //     }
            //     // return false
            // },
            handleMenu(menu, name) {
                if (this.viewTab.length >= 7) {
                    if (this.viewTab.some(v => v.key === menu)) {
                        this.activeTab = menu;
                    } else {
                        this.$message({
                            message: '页签不超过8个',
                            type: 'warning'
                        });
                    }
                } else {
                    this.activeTab = menu;
                    if (menu !== 'notice') {
                        this.addView(menu, name);
                    }

                }
            },
            handleTab(menu) {
                this.activeTab = menu;
            },
            addView(menu, name) {
                if (this.viewTab.some(v => v.key === menu)) return;
                if (this.viewTab.length >= 8) {
                    this.$message({
                        message: '页签不超过8个',
                        type: 'warning'
                    });
                    return;
                }
                this.viewTab.push({
                    'name': name,
                    'key': menu,
                })
            },
            delView(index, item) {
                if (this.activeTab === item.key) {
                    this.viewTab.splice(index, 1);
                    let change = index - 1;
                    if (change >= 0) {
                        this.activeTab = this.viewTab[change].key;
                    } else {
                        this.activeTab = 'notice'
                    }
                } else {
                    this.viewTab.splice(index, 1);
                }

            },
            handleNoticDetail(val) {
                this.addView('noticeDetail', '公告详情');
                this.activeTab = 'noticeDetail';
                this.noticeId = val;
            },
            handleTaskDetail(val) {
                this.addView('taskDetail', '任务详情');
                this.activeTab = 'taskDetail';
            },
            handleOrderDetail(val) {
                this.addView('orderDetail', '订单详情');
                this.activeTab = 'orderDetail';
            }
        }
    }
</script>

<style scoped>
    .icon {
        font-size: 19px;
        color: #E7E7E7;
    }

    .icon-close {
        color: #6666FF;
    }

    .page-load {
        position: relative;
        min-height: 683px;
        padding: 40px;
        font-size: 16px;
        background-color: white;
        box-sizing: border-box;
    }

</style>
