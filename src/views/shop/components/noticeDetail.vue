<template>
    <div class="notice-page">
        <div class="article">
            <h3 class="h3">{{ list.title }}</h3>
            <div class="time">发布时间：{{ list.releaseTime }}</div>
            <div v-html="list.content">

            </div>

        </div>
    </div>
</template>

<script>
    import {noticeDetail} from '@/api/shop'
    export default {
        name: "noticeDetail",
        data(){
            return{
                list:{},
                noticeId:''
            }
        },
        created() {
            if (this.$route.params.noticeId){
                this.noticeId = this.$route.params.noticeId;
                this.init();
            }else{
                this.$router.push({ path: "/admin/shop/notice" });
            }

        },
        methods:{
            init(){
                var self= this
                noticeDetail({id:this.noticeId}).then(function (response) {
                    self.list = response.data
                })

            }
        }
    }
</script>

<style scoped>

</style>
