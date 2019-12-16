<template>
	<div class="details">
		<van-swipe @change="onChange">
		  <van-swipe-item>
				<img class="swipe_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576224739884&di=91ea30c31d88ab05b79eb15a660d2e53&imgtype=0&src=http%3A%2F%2Fattach.bbs.miui.com%2Fforum%2F201304%2F25%2F195151szk8umd8or8fmfa5.jpg">
			</van-swipe-item>
		  <van-swipe-item>
				<img class="swipe_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576224739882&di=5e4a333bce1f22319ffd62b87d473893&imgtype=0&src=http%3A%2F%2Fd.5857.com%2Fkpsjbz_130114%2F008.jpg">
			</van-swipe-item>
		  <van-swipe-item>
				<img class="swipe_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576224739881&di=adb41baabd2c680f91cead39bffe58df&imgtype=0&src=http%3A%2F%2F01.minipic.eastday.com%2F20170407%2F20170407003654_378f6ef6206429f9902331e27bb3ba3d_5.jpeg">
			</van-swipe-item>
		  <van-swipe-item>
				<img class="swipe_img" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576224739880&di=fae6fcfdfe8184d1c7c388cc20f8a5ee&imgtype=0&src=http%3A%2F%2Fattachments.gfan.net.cn%2Fforum%2F201412%2F21%2F231053pjmq86yaqavzgf7y.jpg">
			</van-swipe-item>
			<div class="custom-indicator" slot="indicator">
				{{ current + 1 }}/4
			</div>
		</van-swipe>
		<div class="desc">
			<div class="price">
				<span>￥298</span>
				<span>￥598</span>
			</div>
			<div class="label_list">
				<span>官方直营</span>
				<span>正品保证</span>
				<span>破损包退</span>
			</div>
			<div class="title">
				杜嘉班纳连衣裙-女士时尚连衣裙 真丝/涤纶 时尚 百褶裙 混色 百搭款
			</div>
			<div class="from">
				货源所在地：北京
			</div>
			<div class="tips">
				价格说明：划线价格指商品的专柜价、吊牌价、正品零售价、厂商指导价或该商品的曾经展示过的销售价等，并非原价，仅供参
			</div>
		</div>
		<div class="explainList">
			<van-cell is-link @click="getCoupon">优惠券</van-cell>
			<van-cell is-link @click="getSpecifications">规格参数</van-cell>
			<van-cell is-link @click="getGuarantee">商城保障</van-cell>
		</div>
		<van-tabs class="details_tab" v-model="active">
		  <van-tab title="详情" class="details_content">
				<img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1576224739880&di=fae6fcfdfe8184d1c7c388cc20f8a5ee&imgtype=0&src=http%3A%2F%2Fattachments.gfan.net.cn%2Fforum%2F201412%2F21%2F231053pjmq86yaqavzgf7y.jpg">
				<span>此处应是富文本</span>
			</van-tab>
		  <van-tab title="评价" class="comment_content" style="padding-bottom: 0">
				<div class="comment_label_list">
					<span>全部(123)</span>
					<span>好评(100)</span>
					<span>中评(20)</span>
					<span>差评(3)</span>
					<span>有图(40)</span>
				</div>
				<div class="comment_list">
					<div class="row1">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
						<span class="nickname">甄卓斌今天没有来呀</span>
					</div>
					<div class="row2">
						<span>2018-07-13</span>
						<span>颜色:黑白</span>
						<span>尺码:L</span>
					</div>
					<div class="row3">
						衣服款式是最新的，上身效果不错，很fashion，尺码 刚刚好，总体不错。
					</div>
					<div class="row4">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
					</div>
				</div>
				<div class="comment_list">
					<div class="row1">
						<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
						<span class="nickname">甄卓斌今天没有来呀</span>
					</div>
					<div class="row2">
						<span>2018-07-13</span>
						<span>颜色:黑白</span>
						<span>尺码:L</span>
					</div>
					<div class="row3">
						衣服款式是最新的，上身效果不错，很fashion，尺码 刚刚好，总体不错。
					</div>
				</div>
				<div class="getMoreComment">查看全部评价</div>
			</van-tab>
		</van-tabs>
		
		<div class="more">
			<div class="more_title">猜你喜欢</div>
			<ul>
				<li v-for="item in mainDataList" :key="item.id" @click="getDetails(item.id)">
					<img :src="item.imgsrc">
					<div class="title">{{item.title}}</div>
					<div class="price">
						<span>￥{{item.oldPrice}}</span>
					</div>
				</li>
			</ul>
		</div>
		
		<!-- 弹出层 -->
		<van-popup closeable v-model="isShowCoupon" position="bottom" :style="{ height: '30%' }">优惠券</van-popup>
		<van-popup closeable v-model="isShowSpecifications" position="bottom" :style="{ height: '30%' }">
			<div class="explainList_content">
				<div class="title">规格参数</div>
				<div class="desc">
					<p>
						<span>度数</span>
						<span>53%</span>
					</p>
					<p>
						<span>净含量</span>
						<span>500ml</span>
					</p>
				</div>
			</div>
		</van-popup>
		<van-popup closeable v-model="isShowGuarantee" position="bottom" :style="{ height: '100%' }">商城保障</van-popup>
		<van-popup closeable v-model="isShowBuyNow" position="bottom" :style="{ height: 'auto' }">
			<div class="buy_now">
				<div class="row1">
					<img src="http://pic3.zhimg.com/50/v2-0bf82b048a8f186160f0fab27e6483d0_hd.jpg">
					<div class="buy_now_desc">
						<p>￥10900</p>
						<p>库存607件</p>
						<p>已选：红色 L</p>
					</div>
				</div>
				<div class="row2">
					<div class="row2_title">颜色分类</div>
					<div class="row2_label">
						<span @click="selectColor(item.title,index)" ref="colors" v-for="(item,index) in colors" :key="item.id">{{item.title}}</span>
					</div>
				</div>
				<div class="row2" style="border-top: 1px solid #E7E7E7">
					<div class="row2_title">尺码</div>
					<div class="row2_label">
						<span @click="selectSize(item.title,index)" ref="size" v-for="(item,index) in size" :key="item.id">{{item.title}}</span>
					</div>
				</div>
				<div class="row2" style="border-top: 1px solid #E7E7E7;overflow: hidden;padding-bottom: 0">
					<div class="row2_title" style="float: left;">购买数量</div>
					<van-stepper style="float: right;margin: 15px 0;" v-model="buyNum" />
				</div>
			</div>
			<div class="confirm_buy" @click="confirmBuy">确定</div>
		</van-popup>
		<!-- 底部悬浮层 -->
		<div class="bottom">
			<span>联系客服</span>
			<span @click="buyNow()">立即购买</span>
		</div>
		<!-- 浮动层 -->
		<div class="float_menu">
			<img class="home" src="/static/img/home.png" @click="goHome()">
		</div>
		<div class="float_menu" style="bottom: 90px" @click="goNextPage()">
			<img class="callback" src="/static/img/callback.png">
		</div>
	</div>
</template>

<script>
export default {
  name: 'detailsA',
  data () {
    return {
			current: 0,
			isShowCoupon: false, // 优惠券弹出层
			isShowSpecifications: false, // 规格参数
			isShowGuarantee: false, // 商城保障
			isShowBuyNow: false, // 立即购买
			active: 1,
			mainDataList: [
				{id: 1,title: '托德斯2018秋冬女士小号牛皮手袋女士小号牛皮手女士小号牛皮手',oldPrice: '299',imgsrc: '/static/img/jiu1.jpg'},
				{id: 2,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',imgsrc: '/static/img/jiu1.jpg'},
				{id: 3,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',imgsrc: '/static/img/jiu1.jpg'},
				{id: 4,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',imgsrc: '/static/img/jiu1.jpg'}
			],
			buyNum: 1,
			colors: [
				{id: 1,title: '白色'},
				{id: 2,title: '红色'},
				{id: 3,title: '蓝色'},
				{id: 4,title: '无色'},
				{id: 5,title: '红色'}
			],
			size: [
				{id: 1,title: 'S'},
				{id: 2,title: 'M'},
				{id: 3,title: 'L'},
				{id: 4,title: 'XL'},
				{id: 5,title: 'XXL'}
			],
			goodDesc: {
				color: '',
				size: ''
			}
    }
  },
	methods: {
		onChange(index) {
			this.current = index;
		},
		getCoupon(){
			this.isShowCoupon = true
		},
		getSpecifications(){
			this.isShowSpecifications = true
		},
		getGuarantee(){
			this.isShowGuarantee = true
		},
		goNextPage(){
			this.$router.go(-1)
		},
		goHome(){
			this.$router.push('/')
		},
		buyNow(){
			this.isShowBuyNow = true
		},
		confirmBuy(){
			this.$router.push({
				name: 'settlement',
				parmas: {id: 1}
			})
		},
		selectColor(value,index){
			let colors = this.$refs.colors
			for(let i in colors){
				colors[i].classList.remove('activeColor')
			}
			colors[index].classList.add('activeColor')
			this.$set(this.goodDesc,'color',value)
		},
		selectSize(value,index){
			let size = this.$refs.size
			for(let i in size){
				size[i].classList.remove('activeSize')
			}
			size[index].classList.add('activeSize')
			this.$set(this.goodDesc,'size',value)
		}
	}
}
</script>

<style scoped>
/deep/.van-popup {
	border-radius: 16px 16px 0 0;
}
.activeSize,.activeColor {
	background: #E8321F !important;
	color: #fff !important;
}
.details {
	padding-bottom: 60px;
}
.swipe_img {
	width: 100%;
}
.custom-indicator {
	position: absolute;
	right: 15px;
	bottom: 20px;
	background: rgba(0,0,0,0.7);
	color: #fff;
	padding: 2px 10px;
	border-radius: 15px;
}
.desc {
	padding: 10px;
	box-sizing: border-box;
	background: #fff;
}
.desc .price span:first-child {
	font-size: 18px;
}
.desc .price span:last-child {
	font-size: 12px;
	text-decoration: line-through;
	color: #BCBCBC;
}
.desc .label_list {
	padding: 5px 0;
}
.desc .label_list span {
	font-size: 10px;
	border: 1px solid #FB2222;
	color: #FB2222;
	padding: 1px 3px;
	border-radius: 4px;
}
.desc .title {
	font-size: 15px;
	font-weight: bold;
	margin-top: 5px;
}
.desc .from {
	font-size: 12px;
	margin-top: 5px;
}
.desc .tips {
	font-size: 12px;
	color: #999999;
	margin-top: 5px;
}
.explainList {
	margin-top: 10px;
}
.explainList_content {
	padding: 15px;
}
.explainList_content .title {
	font-weight: bold;
}
.explainList_content .desc {
	padding: 0;
}
.explainList_content .desc p span:first-child {
	color: #666666;
	width: 70px;
	display: inline-block;
}
.details_tab {
	margin-top: 10px;
}
.details_tab .details_content {
	padding: 20px;
	background: #fff;
}
.details_tab .details_content img {
	width: 100%;
}
.details_tab .comment_content {
	padding: 20px;
	background: #fff;
}
.details_tab .comment_content .comment_label_list {
	overflow: hidden;
	margin-bottom: 30px;
}
.details_tab .comment_content .comment_label_list span {
	padding: 5px 10px;
	float: left;
	background: #E8321F;
	color: #fff;
	border-radius: 15px;
	margin-right: 10px;
	margin-bottom: 10px;
}
.details_tab .comment_content .comment_label_list span:nth-child(4){
	margin-right: 0;
	background: #DCDCDC;
	color: #222A37;
}
.details_tab .comment_content .comment_list {
	margin-bottom: 20px;
}
.details_tab .comment_content .comment_list .row1 img {
	width: 32px;
	height: 32px;
	border-radius: 50%;
	margin-right: 5px;
	position: relative;
	top: 10px;
}
.details_tab .comment_content .comment_list .row1 .nickname {
	font-size: 16px;
}
.details_tab .comment_content .comment_list .row2 {
	padding: 10px 0;
}
.details_tab .comment_content .comment_list .row2 span {
	font-size: 13px;
	color: #888888;
	margin-right: 10px;
}
.details_tab .comment_content .comment_list .row2 span:last-child {
	margin-right: 0;
}
.details_tab .comment_content .comment_list .row3 {
	color: #444444;
	font-size: 14px;
}
.details_tab .comment_content .comment_list .row4 {
	margin-top: 10px;
	display: flex;
	box-sizing: border-box;
}
.details_tab .comment_content .comment_list .row4 img {
	display: inline-block;
	width: 23.5%;
	flex: 1;
	border-radius:4px;
	margin-right: 2%;
}
.details_tab .comment_content .comment_list .row4 img:last-child {
	margin-right: 0;
}
.getMoreComment {
	border-top: 1px solid #E7E7E7;
	font-size: 15px;
	padding: 15px 0;
	text-align: center;
}
/* 浮动按钮 */
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
/* 底部悬浮层 */
.bottom {
	position: fixed;
	bottom: 0;
	left: 0;
	width: 100%;
	height: 50px;
	line-height: 50px;
	line-height: 50px;
	font-size: 16px;
	color: #fff;
	box-sizing: border-box;
}
.bottom span {
	float: left;
	width: 50%;
	text-align: center;
}
.bottom span:first-child {
	background: #212121;
}
.bottom span:last-child {
	background: #E8321F;
}
.more {
	margin-top: 10px;
	padding: 0 10px;
	background: #fff;
}
.more .more_title {
	padding: 10px 0;
	color: #000000;
	font-size: 15px;
	font-weight: bold;
	border-bottom: 1px solid #E7E7E7;
}
.more ul {
	overflow: hidden;
	padding: 10px;
	box-sizing: border-box;
}
.more ul li {
	float: left;
	width: 49%;
	margin-right: 2%;
	border-radius:4px;
	background: #fff;
	margin-bottom: 6px;
	padding-bottom: 5px;
}
.more ul li:nth-child(even){
	margin-right: 0;
}
.more ul li img {
	display: block;
	width: 100%;
}
.more ul li .title {
	padding: 0 10px;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.more ul li .price {
	padding: 5px 10px;
	font-size: 15px;
	font-weight: bold;
}
.buy_now {
	padding: 20px;
	box-sizing: border-box;
}
.buy_now .row1 {
	position: relative;
	padding-left: 131px;
}
.buy_now .row1 img {
	position: absolute;
	left: 0;
	top: 0;
	width: 111px;
	height: 111px;
	border-radius: 2px;
}
.buy_now .row1 {
	border-bottom: 1px solid #E7E7E7;
	padding-bottom: 10px;
}
.buy_now .row1 .buy_now_desc {
	padding: 0;
	padding-top: 42px;
}
.buy_now .row1 .buy_now_desc p {
	margin: 0;
	height: 25px;
	line-height: 25px;
}
.buy_now .row1 .buy_now_desc p:nth-child(1){
	color: #333333;
	font-size: 18px;
	font-weight: bold;
}
.buy_now .row1 .buy_now_desc p:nth-child(2){
	color: #999999;
	font-size: 14px;
}
.buy_now .row1 .buy_now_desc p:nth-child(3){
	color: #000000;
	font-size: 14px;
}
.buy_now .row2 {
	box-sizing: border-box;
	padding-bottom: 20px;
}
.buy_now .row2 .row2_title {
	padding: 20px 0;
	color: #000000;
	font-size: 15px;
}
.buy_now .row2 .row2_label span {
	color: #000000;
	background: #EBEBEB;
	padding: 4px 15px;
	border-radius: 15px;
	margin-right: 5px;
}
.confirm_buy {
	background: #E8321F;
	padding: 10px 0;
	text-align: center;
	color: #fff;
	margin: 10px 20px;
}
</style>
