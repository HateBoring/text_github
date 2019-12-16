<template>
	<div class="settlement">
		<div class="good_desc">
			<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
			<div class="desc">
				<div class="title">2019夏季新款时尚显瘦文艺小清纯新狗子 限量狗子 纯真狗子 小公狗 智商高 性格高 粘人 不挑食</div>
				<div class="desc1">包装：单个装（赠送狗粮一袋）</div>
				<div class="desc2">数量：1只</div>
				<div class="desc3">￥112</div>
			</div>
		</div>
		<van-cell title="运费" value="免运费" />
		<van-cell title="优惠券抵扣" value="￥12.00" />
		<van-field style="margin-top: 10px;" v-model="name" rows="1" autosize label="收货人" type="textarea" placeholder="请输入收货人"/>
		<van-field v-model="phone" label="手机号" placeholder="请输入手机号" error-message=""/>
		<van-field v-model="address" rows="1" autosize label="收货地址" type="textarea" placeholder="请输入收货地址"/>
		<van-field style="margin-top: 10px;" v-model="message" rows="1" autosize label="买家留言" type="textarea" placeholder="请输入留言"/>
		
		<div class="float_menu">
			<img class="home" src="/static/img/home.png" @click="goHome()">
		</div>
		<div class="float_menu" style="bottom: 90px" @click="goNextPage()">
			<img class="callback" src="/static/img/callback.png">
		</div>
		
		<div class="bottom_box">
			<div class="bottom">
				<span>合计金额：￥112</span>
				<span>提交订单</span>
			</div>
		</div>
	</div>
</template>

<script>
export default {
  name: 'settlement',
  data () {
    return {
			name: '',
			address: '',
			phone: '',
			message: ''
    }
  },
	methods: {
		goNextPage(){
			this.$router.go(-1)
		},
		goHome(){
			this.$router.push('/')
		}
	}
}
</script>

<style scoped>
.settlement .good_desc {
	position: relative;
	padding-left: 110px;
	background: #F7F7F7;
}
.settlement .good_desc img {
	position: absolute;
	left: 10px;
	top: 10px;
	width: 100px;
	height: 100px;
}
.settlement .good_desc .desc {
	padding: 10px;
	box-sizing: border-box;
}
.settlement .good_desc .desc .title {
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.settlement .good_desc .desc .desc1 {
	margin-top: 2px;
	font-size: 13px;
	color: #999999;
}
.settlement .good_desc .desc .desc2 {
	margin-top: 2px;
	font-size: 13px;
	color: #999999;
}
.settlement .good_desc .desc .desc3 {
	margin-top: 3px;
}
.bottom_box {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
}
.bottom {
	position: relative;
	height: 50px;
	line-height: 50px;
	padding-right: 110px;
	background: #fff;
}
.bottom span:first-child {
	padding-left: 10px;
}
.bottom span:last-child {
	position: absolute;
	right: 0;
	top: 0;
	width: 100px;
	height: 50px;
	text-align: center;
	background: #E8321F;
	color: #fff;
}
/* 浮动层 */
.float_menu {
	position: fixed;
	right: 20px;
	bottom: 150px;
	width: 36px;
	height: 36px;
	background: #fff;
	border-radius: 50%;
	box-shadow: 0px 0px 10px #CCCCCC;
}
.float_menu .home {
	position: relative;
	top: 5px;
	left: 5px;
	width: 26px;
}
.float_menu .callback {
	position: relative;
	top: 8px;
	left: 8px;
	width: 18px;
}
</style>
