<template>
	<div class="classList">
		<ul class="tabList">
			<li @click="activeMenu(index,item)" v-for="(item,index) in tabLists" :key="item.id">
				<span ref="menus">{{item.title}}</span>
				<img v-if="item.title == '价格'" :src="priceSortImg">
			</li>
		</ul>
		<div class="main">
			<ul>
				<li v-for="item in mainDataList" :key="item.id" @click="getDetails(item.id)">
					<img :src="item.imgsrc">
					<div class="title">{{item.title}}</div>
					<div class="price">
						<span>￥{{item.oldPrice}}</span>
						<span>￥{{item.nowPrice}}</span>
					</div>
					<div class="desc">
						<span>官方直营</span>
						<span>|</span>
						<span>品质保证</span>
					</div>
				</li>
			</ul>
		</div>
		<transition name="van-slide-left">
			<div class="classBox" v-if="classIsShowMore">
				<ul>
					<li v-for="(item,index) in classListData" @click="activeClassMoreList(index)"><span ref="classListMenu">{{item.title}}</span></li>
				</ul>
			</div>
		</transition>
	</div>
</template>

<script>
export default {
  name: 'classList',
  data () {
    return {
			tabLists: [
				{id: 1,title: '综合'},
				{id: 2,title: '销量'},
				{id: 3,title: '评论'},
				{id: 4,title: '价格',status: 1},
				{id: 5,title: '分类'}
			],
			priceSort: '',
			classIsShowMore: false,
			priceSortImg: '/static/img/jiantou1@2x.png', // 价格排序默认样式
			classListData: [
				{id: 1,title: '酱香型'},{id: 2,title: '茅台'},{id: 3,title: '干红/白'},{id: 4,title: '其他'},{id: 5,title: '原浆'}
			],
			mainDataList: [
				{id: 1,title: '托德斯2018秋冬女士小号牛皮手袋女士小号牛皮手女士小号牛皮手',oldPrice: '299',nowPrice: '79',imgsrc: '/static/img/jiu1.jpg'},
				{id: 2,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',nowPrice: '79',imgsrc: '/static/img/jiu1.jpg'},
				{id: 3,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',nowPrice: '79',imgsrc: '/static/img/jiu1.jpg'},
				{id: 4,title: '托德斯2018秋冬女士小号牛皮手袋',oldPrice: '299',nowPrice: '79',imgsrc: '/static/img/jiu1.jpg'}
			]
    }
  },
	methods: {
		activeMenu(index,item){
			let menus = this.$refs.menus
			for(let i in menus){
				menus[i].classList.remove('tabListActive')
			}
			menus[index].classList.add('tabListActive')
			// 价格选中样式
			if(index == 3){
				item.status++
				if(item.status == 2){
					this.priceSortImg = '/static/img/jiantou2@2x.png'
					this.priceSort = 'asc'
				}
				if(item.status == 3){
					this.priceSortImg = '/static/img/jiantou@2x.png'
					item.status = 1
					this.priceSort = 'desc'
				}
			}
			if(index != 3){
				this.priceSortImg = '/static/img/jiantou1@2x.png'
			}
			if(index == 4){
				this.classIsShowMore = !this.classIsShowMore
			}else{
				this.classIsShowMore = false
			}
		},
		activeClassMoreList(index){
			let classListMenu = this.$refs.classListMenu
			console.log(classListMenu)
			for(let i in classListMenu){
				classListMenu[i].classList.remove('activeClassListMenu')
			}
			classListMenu[index].classList.add('activeClassListMenu')
		},
		// 跳转商品详情
		getDetails(id){
			this.$router.push({name:'details', params:{id: id}})
		}
	}
}
</script>

<style scoped>
.activeClassListMenu {
	background: #E8321F !important;
	color: #fff !important;
}
.classMore {
	background: #E8321F;
	color: #fff;
	border-color: #E8321F !important;
}
.tabListActive {
	border-color: #E8321F !important;
	color: #E8321F;
	font-size: 17px;
}
.classList .tabList {
	display: flex;
	background: #fff;
	color: #333333;
}
.classList .tabList li {
	flex: 1;
	font-size: 15px;
	text-align: center;
	height: 44px;
  padding-top: 12px;
	box-sizing: border-box;
}
.classList .tabList li span {
	border-bottom: 3px solid #fff;
	padding-bottom: 6px;
}
.classList .tabList li img {
	width: 8px;
}
.classBox {
	position: fixed;
	top: 44px;
	padding: 10px;
	box-sizing: border-box;
	left: 0;
	width: 100%;
	height: 50%;
	background: #fff;
}
.classBox ul li {
	float: left;
	width: 20%;
	padding: 4px 8px;
	box-sizing: border-box;
	overflow: hidden;
}
.classBox ul li span {
	display: block;
	background: #EEEEEE;
	color: #000000;
	padding: 3px 5px;
	text-align: center;
}
.classMoreListActive {
	background: #E8321F;
	border-color: #E8321F !important;
	color: #fff;
}
.main ul {
	overflow: hidden;
	padding: 10px;
	box-sizing: border-box;
}
.main ul li {
	float: left;
	width: 49%;
	margin-right: 2%;
	border-radius:4px;
	background: #fff;
	margin-bottom: 6px;
	padding-bottom: 5px;
}
.main ul li:nth-child(even){
	margin-right: 0;
}
.main ul li img {
	display: block;
	width: 100%;
}
.main ul li .title {
	padding: 0 10px;
	box-sizing: border-box;
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: 2;
	-webkit-box-orient: vertical;
}
.main ul li .price {
	padding: 5px 10px;
}
.main ul li .price span:first-child {
	font-size: 15px;
	margin-right: 10px;
}
.main ul li .price span:last-child {
	font-size: 13px;
	color: #BCBCBC;
	text-decoration: line-through;
}
.main ul li .desc {
	color: #F5222D;
	padding: 0 10px;
	box-sizing: border-box;
}
.main ul li .desc span:nth-child(2){
	position: relative;
	top: -1px;
}
</style>