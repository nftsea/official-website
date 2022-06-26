<script>
	import { ElLoading, ElNotification, ElMessage, ElMessageBox } from 'element-plus'
	import { useRouter } from 'vue-router'
	export default {
		data() {
			return {
				navList: [
					{name: 'Marketplace', value: 'marketplace'},
					{name: 'Auction', value: 'auction'},
					{name: 'Launch', value: 'launch'},
					{name: 'Free Mystery Box', value: 'fmb'},
					{name: 'Stake', value: 'stake'},
				],
				lunList: [
					{pic: '/src/assets/imgs/pic4.avif', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic5.png', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic6.avif', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic7.jpg', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic8.png', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic9.png', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic10.avif', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'},
					{pic: '/src/assets/imgs/pic11.avif', title: 'Kopoko', des: 'Kopoko is moving back in time to meet ...'}
				],
				activeNav: 0,
				activeLun: 0,
				userAddress: '',
				connecting: false,
				connected: false,
				lunTimer: null
			}
		},
		mounted() {
			let that = this
			that.ethereum = window.ethereum
			that.connectWeb()
			//自动轮播
			that.lunTimer = setInterval(() => {
				if (that.activeLun + 1 >= that.lunList.length){
					that.activeLun = 0
				}else{
					that.activeLun ++
				}
			},3000)
			//加载粒子动效
			setTimeout(()=>{
				particlesJS("lizi", {
				  "particles": {
				    "number": {
				      "value": 80,
				      "density": {
				        "enable": true,
				        "value_area": 700 } },
				
				
				    "color": {
				      "value": "#D5E3FF" },
				
				    "shape": {
				      "type": "circle",
				      "stroke": {
				        "width": 0,
				        "color": "#000000" },
				
				      "polygon": {
				        "nb_sides": 5 } },
				
				
				    "opacity": {
				      "value": 1,
				      "random": false,
				      "anim": {
				        "enable": false,
				        "speed": 0.1,
				        "opacity_min": 0.1,
				        "sync": false } },
				
				
				    "size": {
				      "value": 5,
				      "random": true,
				      "anim": {
				        "enable": false,
				        "speed": 10,
				        "size_min": 0.1,
				        "sync": false } },
				
				
				    "line_linked": {
				      "enable": true,
				      "distance": 150,
				      "color": "#D5E3FF",
				      "opacity": 1,
				      "width": 2 },
				
				    "move": {
				      "enable": true,
				      "speed": 2,
				      "direction": "none",
				      "random": false,
				      "straight": false,
				      "out_mode": "out",
				      "bounce": false,
				      "attract": {
				        "enable": false,
				        "rotateX": 600,
				        "rotateY": 1200 } } },
				
				
				
				  "interactivity": {
				    "detect_on": "canvas",
				    "events": {
				      "onhover": {
				        "enable": true,
				        "mode": "grab" },
				
				      "onclick": {
				        "enable": true,
				        "mode": "push" },
				
				      "resize": true },
				
				    "modes": {
				      "grab": {
				        "distance": 140,
				        "line_linked": {
				          "opacity": 1 } },
				
				
				      "bubble": {
				        "distance": 400,
				        "size": 40,
				        "duration": 2,
				        "opacity": 8,
				        "speed": 3 },
				
				      "repulse": {
				        "distance": 200,
				        "duration": 0.4 },
				
				      "push": {
				        "particles_nb": 4 },
				
				      "remove": {
				        "particles_nb": 2 } } },
				
				
				
				  "retina_detect": true })
				  particlesJS("lizi2", {
				    "particles": {
				      "number": {
				        "value": 80,
				        "density": {
				          "enable": true,
				          "value_area": 700 } },
				  
				  
				      "color": {
				        "value": "#D5E3FF" },
				  
				      "shape": {
				        "type": "circle",
				        "stroke": {
				          "width": 0,
				          "color": "#000000" },
				  
				        "polygon": {
				          "nb_sides": 5 } },
				  
				  
				      "opacity": {
				        "value": 1,
				        "random": false,
				        "anim": {
				          "enable": false,
				          "speed": 0.1,
				          "opacity_min": 0.1,
				          "sync": false } },
				  
				  
				      "size": {
				        "value": 5,
				        "random": true,
				        "anim": {
				          "enable": false,
				          "speed": 10,
				          "size_min": 0.1,
				          "sync": false } },
				  
				  
				      "line_linked": {
				        "enable": true,
				        "distance": 150,
				        "color": "#D5E3FF",
				        "opacity": 1,
				        "width": 2 },
				  
				      "move": {
				        "enable": true,
				        "speed": 2,
				        "direction": "none",
				        "random": false,
				        "straight": false,
				        "out_mode": "out",
				        "bounce": false,
				        "attract": {
				          "enable": false,
				          "rotateX": 600,
				          "rotateY": 1200 } } },
				  
				  
				  
				    "interactivity": {
				      "detect_on": "canvas",
				      "events": {
				        "onhover": {
				          "enable": true,
				          "mode": "grab" },
				  
				        "onclick": {
				          "enable": true,
				          "mode": "push" },
				  
				        "resize": true },
				  
				      "modes": {
				        "grab": {
				          "distance": 140,
				          "line_linked": {
				            "opacity": 1 } },
				  
				  
				        "bubble": {
				          "distance": 400,
				          "size": 40,
				          "duration": 2,
				          "opacity": 8,
				          "speed": 3 },
				  
				        "repulse": {
				          "distance": 200,
				          "duration": 0.4 },
				  
				        "push": {
				          "particles_nb": 4 },
				  
				        "remove": {
				          "particles_nb": 2 } } },
				  
				  
				  
				    "retina_detect": true })
			},50)
			
		},
		methods: {
			connectWeb() {
				let that = this
				that.connecting = true
				let eth = window.ethereum
				if (typeof that.ethereum !== 'undefined') {
					if (that.ethereum.selectedAddress == null || that.ethereum.selectedAddress == 'null') {
						that.ethereum.enable().then(function(accounts) {
							that.web3 = new Web3(that.ethereum)
							that.ethereum.on('accountsChanged',that.accountChange)
							that.setAccount(that.ethereum.selectedAddress)
						}).catch(function(err) {
							that.connecting = false
							that.connected = false
						})
					} else {
						that.web3 = new Web3(that.ethereum)
						that.ethereum.on('accountsChanged',that.accountChange)
						that.setAccount(that.ethereum.selectedAddress)
					}
				} else {
					that.connecting = false
					that.connected = false
				}
			},
			accountChange(e){
				let that = this
				that.setAccount(e[0])
			},
			setAccount(account) {
				let that = this
				that.connecting = false
				that.connected = true
				that.userAddress = account
				localStorage.setItem('userAddress',that.userAddress)
			},
			chooseNav(index){
				let that = this
				that.activeNav = index
			},
			alert(){
				ElMessage({
					message: 'Content in development',
					type: 'info',
				})
			},
			lunmouseover(){
				let that = this
				clearInterval(that.lunTimer)
			},
			lunmouseout(){
				let that = this
				that.lunTimer = setInterval(() => {
					if (that.activeLun + 1 >= that.lunList.length){
						that.activeLun = 0
					}else{
						that.activeLun ++
					}
				},3000)
			}
		}
	}
</script>

<template>
	<el-container direction="vertical" style="align-items: center;">

		<!-- 头部-begin -->
		<el-header class="header" height="72px">
			<div class="content-box">
				<div class="left">
					<div class="logo">
						<img src="../assets/imgs/logo.png" alt="">
					</div>
					<div class="navs">
						<span :class="activeNav == index ? 'activenav' : ''" v-for="(item,index) in navList" @click="chooseNav(index)">{{item.name}}</span>
					</div>
				</div>
				<div class="right">
					<div class="conne notconne" @click="connectWeb()" v-if="!connecting && !connected">
						{{lan == 'zh' ? '链接钱包' : 'Connect Wallet'}}</div>
					<div class="conne" v-if="connecting">
						<img style="width: 30px;height: 30px;" src="../assets/imgs/loading.svg">
					</div>
					<div class="conne coned" v-if="!connecting && connected">
						<div>{{userAddress.substr(0,6) + '...' + userAddress.substr(-4)}}</div>
					</div>
					<div class="lan">
						<img src="../assets/imgs/lang.png" alt="">
					</div>
				</div>
			</div>
		</el-header>
		<!-- 头部-end -->

		
		<!-- 页面内容order_list-begin -->
		<div class="content">
			<div class="part1">
				<div class="con">
					<div class="left">
						<div class="title">Trade, launch, and mint<br>extraordinary NFTs</div>
						<div class="sub_title">Bring more cross-chain liquidity to NFTs</div>
						<div class="input">
							<img src="../assets/imgs/search.png" alt="">
							<input type="text" placeholder="Search by items, collections or user">
						</div>
						<div class="buttons">
							<div class="item" @click="alert()">
								<div class="white"></div>
								<span>List an NFT</span>
							</div>
							<div class="item" @click="alert()">
								<div class="white"></div>
								<span>Explore</span>
							</div>
						</div>
						<div class="bo">
							<img src="../assets/imgs/finger.png" alt="">
							<span>More about NFTsea</span>
						</div>
					</div>
					<div class="right">
						<img class="kou" src="../assets/imgs/kou.png" alt="">
						<img class="kou" src="../assets/imgs/kou.png" alt="" style="right: 80px;left: unset;">
						<div class="item_box" @mouseover="lunmouseover" @mouseout="lunmouseout">
							<div class="item" :class="activeLun == index ? 'activeitem' : ''" v-for="(item,index) in lunList">
								<div class="pic">
									<img :src="item.pic" alt="">
								</div>
								<div class="l1">{{item.title}}</div>
								<div class="l2">{{item.des}}</div>
							</div>
						</div>
						<div class="dots">
							<div class="item" :class="activeLun == index ? 'activeitem' : ''" v-for="(item,index) in lunList" @click="activeLun = index">
								<img class="black" src="../assets/imgs/dot_black.png" alt="">
								<img class="light" src="../assets/imgs/dot_light.png" alt="">
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part2">
				<div class="con">
					<div class="title">
						<span>Trade, launch and mint more than</span><br><span style="font-size: 60px;color: #3575E5;">0</span><span> NFTs</span>
					</div>
					<div class="sub_title">All NFTs in one liquidity pool, decentralize the NFT trading marketplace</div>
					<div class="list">
						<div class="item">
							<div class="top">
								<img src="../assets/imgs/eth_icon_lg.png" alt="">
								<span>Ethereum</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 30</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="top" style="background: #FCD535;">
								<img src="../assets/imgs/bnb_icon_lg.png" alt="">
								<span style="color: #23262F;">BNB Chain</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 4</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="top" style="background: #794FDD;">
								<img src="../assets/imgs/Pol.png" alt="">
								<span style="color: #23262F;">Polygon</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 2</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="top" style="background: #E84142;">
								<img src="../assets/imgs/ava_icon_lg.png" alt="">
								<span>Avalanche</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 2</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="top" style="background: #000000;">
								<img src="../assets/imgs/sol_icon_lg.png" alt="">
								<span>Solana</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 4</div>
									</div>
								</div>
							</div>
						</div>
						<div class="item">
							<div class="top" style="background: #E8E8E8;">
								<img src="../assets/imgs/near_icon_lg.png" alt="">
								<span style="color: #23262F;">Near</span>
							</div>
							<div class="bottom">
								<div class="it">
									<img src="../assets/imgs/icon1.png" alt="">
									<div class="c">
										<div>10,001,001</div>
										<div style="margin-top: 5px;">$NFTS 2</div>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part3">
				<div class="con">
					<div class="title">Why Choose NFTsea?</div>
					<div class="list">
						<div class="item">
							<img src="../assets/imgs/pic1.png" alt="">
							<div class="title">Multi-Chain and Open-Market</div>
							<div class="des">NFTSea is a decentralized exchange and protocol for exchanging NFT projects with fungible token to bring them more cross-chain liquidity and financialization.</div>
						</div>
						<div class="item">
							<img src="../assets/imgs/pic2.png" alt="">
							<div class="title">The Largest Liquidity Marketplace</div>
							<div class="des">NFTSea puts all NFTs into a liquidity pool. The innovative AMM algorithm makes the trading have almost infinite depth. Addressing the liquidity problem allows for arbitrage opportunities.</div>
						</div>
						<div class="item">
							<img src="../assets/imgs/pic3.png" alt="">
							<div class="title">Community-based</div>
							<div class="des">NFTSea is a community-based NFT marketplace and 100% of NFTSea’s transaction fees in the auction market are redistributed to $NFTS stakers, along with bonus $NFTS rewards.</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part4">
				<div class="sepa sepa1">
					<div class="con">
						<div class="left">
							<div class="title">Become a Partner<br>And Boost Project Development</div>
							<div class="des">We will provide exclusive pages, collective verification and<br> launchpad to accelerate your projects from issuing to forming<br> a unique price consensus.</div>
							<div class="buttons">
								<div class="item" @click="alert()">
									<div class="white"></div>
									<span>Mint Apply</span>
								</div>
								<div class="item" @click="alert()">
									<div class="white"></div>
									<span>Verify Apply</span>
								</div>
								<div class="item" @click="alert()">
									<div class="white"></div>
									<span>Launch Apply</span>
								</div>
							</div>
						</div>
						<div class="right">
							<img src="../assets/imgs/pic_partner.png" alt="">
						</div>
					</div>
				</div>
				<div class="sepa sepa2">
					<div id="lizi2">
						
					</div>
					<div class="con">
						<div class="title">Start listing</div>
						<div class="sub_title">To trade your NFTs instantly, list it now</div>
						<div class="buttons" style="justify-content: center;">
							<div class="item" @click="alert()">
								<div class="white"></div>
								<span>Start</span>
							</div>
						</div>
					</div>
				</div>
			</div>
			<div class="part5">
				<div class="sepa sepa1">
					<div class="con">
						<div class="title">Partners & Investors</div>
						<div class="pars">
							<img style="width: 157px;" src="../assets/imgs/par1.png" alt="">
							<img style="width: 114px;" src="../assets/imgs/par2.png" alt="">
							<!-- <img style="width: 106px;" src="../assets/imgs/par3.png" alt=""> -->
							<img style="width: 170px;" src="../assets/imgs/par4.png" alt="">
							<img style="width: 90px;" src="../assets/imgs/par5.png" alt="">
						</div>
					</div>
				</div>
				<div class="sepa sepa2">
					<div id="lizi">
						
					</div>
					<div class="con">
						<div class="title">Subscribe for More Updates</div>
						<div class="sub_title">Get the latest about NFTSea and activities</div>
						<div class="search">
							<input type="text" placeholder="Enter your email address">
							<div class="btn">Subscribe</div>
						</div>
					</div>
				</div>
				<div class="sepa sepa3">
					<div class="con">
						<div class="col1">
							<div class="logo">
								<img src="../assets/imgs/logo.png" alt="">
							</div>
							<div class="l2">Trade, launch, and mint extraordinary NFTs.</div>
							<div class="l3"><a href="mailto:bd@nftsea.club" target="_blank"> Business: bd@nftsea.club</a></div>
							<div class="l3 l32"><a href="mailto:dev@nftsea.club" target="_blank"> Developers: dev@nftsea.club</a></div>
							<div class="l3 l32"><a href="mailto:market@nftsea.club" target="_blank"> Marketing: market@nftsea.club</a></div>
						</div>
						<div class="col2">
							<div class="l1">Docs</div>
							<div class="l2">Tutorial</div>
							<div class="l2">Whitepaper</div>
							<div class="l2">Audit report</div>
						</div>
						<div class="col2">
							<div class="l1">Apply</div>
							<div class="l2">Mint NFT</div>
							<div class="l2">Verify NFT</div>
							<div class="l2">Launch NFT</div>
						</div>
						<div class="col2">
							<div class="l1">Join NFTSea community</div>
							<div class="contacts">
								<a href="https://twitter.com/NFTSeaClub" target="_blank"><img src="../assets/imgs/facebook.png" alt=""></a>
								<a href="https://discord.gg/PXhYdcbFta" target="_blank"><img src="../assets/imgs/discord.png" alt=""></a>
								<a href="https://t.me/NFTSeaClub" target="_blank"><img src="../assets/imgs/telegram.png" alt=""></a>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
		<!-- 页面内容order_list-end -->

	</el-container>
</template>

<style scoped lang="scss">
	.el-carousel__arrow {
		background-color: red !important;
	}
	.buttons{
		display: flex;
		align-items: center;
		margin-top: 59px;
		.item{
			width: 160px;
			height: 60px;
			background: linear-gradient(90deg, #3575E5 0%, #5A94FB 100%);
			border-radius: 16px;
			display: flex;
			align-items: center;
			justify-content: center;
			font-size: 16px;
			font-family: Poppins;
			font-weight: 600;
			color: #3575E5;
			margin-right: 24px;
			position: relative;
			transition: all 0.5s;
			.white{
				width: 158px;
				height: 58px;
				background: #FFFFFF;
				border-radius: 16px;
				position: absolute;
				top: 1px;
				left: 1px;
				z-index: 1;
				transition: all 0.5s;
				opacity: 1;
			}
			span{
				position: relative;
				z-index: 2;
			}
		}
		.item:hover{
			cursor: pointer;
			color: #FFFFFF;
			.white{
				opacity: 0;
			}
		}
	}
	.header {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
		background: #FFFFFF;
		box-shadow: 0px 3px 3px 0px rgba(204, 204, 204, 0.3);
	}

	.content-box {
		height: 100%;
		margin: auto;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;
		padding: 0 48px;
		.left {
			display: flex;
			align-items: center;
			.logo{
				display: flex;
				align-items: center;
				font-size: 20px;
				font-family: Avenir;
				font-weight: 900;
				color: #010101;
				img {
					width: 106px;
					height: 36px;
					display: block;
					margin-right: 12px;
				}
			}
			.navs{
				font-size: 16px;
				font-family: Poppins;
				font-weight: 600;
				color: #777E90;
				margin-left: 85px;
				span{
					margin-right: 46px;
					transition: all 0.5s;
				}
				span:hover{
					cursor: pointer;
					color: #000000;
				}
				.activenav{
					color: #000000;
				}
			}
		}
		
		.right {
			display: flex;
			display: -webkit-flex;
			align-items: center;
			justify-content: flex-end;
			-webkit-justify-content: flex-end;
			.lan {
				display: flex;
				display: -webkit-flex;
				align-items: center;
				margin-left: 24px;

				img {
					width: 28px;
					height: 28px;
					display: block;
					margin-right: 12px;
				}

				span {
					font-size: 14px;
					font-weight: bold;
					color: #FFFFFF;
				}
			}

			.lan:hover {
				cursor: pointer;
			}
			.conne {
				padding: 0 15px;
				height: 48px;
				background: #23262F;
				font-size: 14px;
				font-weight: 600;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;
				border-radius: 16px;
				width: auto;
				line-height: 0;
				text-align: unset;
			}
			.conne:hover {
				cursor: pointer;
			}
		}
	}
	.content{
		padding-top: 72px;
		width: 100%;
		.part1{
			display: flex;
			justify-content: center;
			width: 100%;
			background: linear-gradient(0deg, rgba(53, 117, 229, 0) 0%, rgba(90, 148, 251, 0.2) 100%);
			padding-top: 74px;
			padding-bottom: 80px;
			.con{
				width: 1200px;
				display: flex;
				align-items: center;
				justify-content: space-between;
				.left{
					.title{
						font-size: 48px;
						font-family: Poppins;
						font-weight: bold;
						color: #23262F;
						line-height: 48px;
					}
					.sub_title{
						font-size: 24px;
						font-family: Poppins;
						font-weight: 500;
						color: #777E90;
						margin-top: 20px;
					}
					.input{
						width: 520px;
						height: 52px;
						background: #FFFFFF;
						border: 1px solid #E5E8EB;
						border-radius: 16px;
						padding: 0 20px;
						display: flex;
						align-items: center;
						margin-top: 48px;
						img{
							width: 24px;
							height: 24px;
							display: block;
							flex-shrink: 0;
							margin-right: 20px;
						}
						input{
							background: unset;
							border: unset;
							width: 100%;
							height: 100%;
							font-size: 14px;
							font-family: Poppins;
							font-weight: 500;
							color: #777E90;
							outline: none;
						}
					}
					.bo{
						margin-top: 50px;
						display: flex;
						align-items: center;
						font-size: 14px;
						font-family: Poppins;
						font-weight: 600;
						color: #3575E5;
						img{
							width: 24px;
							height: 24px;
							display: block;
							margin-right: 12px;
						}
					}
					.bo:hover{
						cursor: pointer;
					}
				}
				.right{
					width: 455px;
					height: auto;
					padding: 16px;
					background: #FFFFFF;
					box-shadow: 0px 6px 10px 0px rgba(204, 204, 204, 0.5);
					border-radius: 16px;
					position: relative;
					.kou{
						width: 13px;
						height: 27px;
						display: block;
						position: absolute;
						top: -14px;
						left: 80px;
					}
					.item_box{
						padding-top: 2px;
						.item{
							display: none;
							opacity: 0;
							transition: all 0.5s;
							.pic{
								width: 100%;
								height: 423px;
								background: #F9F9F9;
								display: flex;
								align-items: center;
								justify-content: center;
								overflow: hidden;
								img{
									width: 100%;
									height: auto;
									display: block;
								}
							}
							.l1{
								font-size: 14px;
								font-family: Poppins;
								font-weight: 500;
								color: #777E90;
								margin-top: 15px;
							}
							.l2{
								font-size: 14px;
								font-family: Poppins;
								font-weight: bold;
								color: #23262F;
								margin-top: 10px;
							}
						}
						.activeitem{
							display: block;
							opacity: 1;
						}
					}
					.dots{
						margin-top: 24px;
						display: flex;
						align-items: center;
						justify-content: center;
						.item{
							margin: 8px;
							height: 8px;
							width: 8px;
							position: relative;
							img{
								position: absolute;
								top: 0;
								left: 0;
								width: 100%;
								height: 100%;
								display: block;
								transition: all 0.5s;
							}
							.black{
								visibility: hidden;
								opacity: 0;
							}
							.light{
								visibility: visible;
								opacity: 1;
							}
						}
						.item:hover{
							cursor: pointer;
						}
						.activeitem{
							.black{
								visibility: visible;
								opacity: 1;
							}
							.light{
								visibility: hidden;
								opacity: 0;
							}
						}
					}
				}
			}
		}
		.part2{
			width: 100%;
			padding-top: 119px;
			padding-bottom: 193px;
			background: #FFFFFF;
			display: flex;
			justify-content: center;
			.con{
				width: 1200px;
				.title{
					font-size: 36px;
					font-family: Poppins;
					font-weight: bold;
					color: #23262F;
					text-align: center;
					line-height: 72px;
				}
				.sub_title{
					margin-top: 30px;
					font-size: 20px;
					font-family: Poppins;
					font-weight: 500;
					color: #777E90;
					text-align: center;
				}
				.list{
					margin-top: 50px;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.item{
						background: #FFFFFF;
						border: 1px solid #E8E8E8;
						border-radius: 16px;
						overflow: hidden;
						width: 180px;
						transition: all 0.5s;
						.top{
							background: #415FE9;
							text-align: center;
							padding-top: 40px;
							padding-bottom: 15px;
							img{
								width: 88px;
								height: 88px;
								display: block;
								margin: auto;
								margin-bottom: 30px;
							}
							span{
								font-size: 24px;
								font-family: Poppins;
								font-weight: 600;
								color: #FFFFFF;
							}
						}
						.bottom{
							padding: 15px 0;
							display: flex;
							align-items: center;
							justify-content: center;
							.it{
								display: flex;
								align-items: flex-start;
								font-size: 14px;
								font-family: Poppins;
								font-weight: 500;
								color: #23262F;
								img{
									width: 16px;
									height: 16px;
									display: block;
									margin-right: 10px;
								}
							}
						}
					}
					.item:hover{
						box-shadow: 0px 6px 10px 0px rgba(204, 204, 204, 0.5);
					}
				}
			}
		}
		.part3{
			width: 100%;
			background: #F8F8F8;
			padding-top: 149px;
			padding-bottom: 164px;
			display: flex;
			justify-content: center;
			.con{
				width: 1200px;
				.title{
					text-align: center;
					font-size: 36px;
					font-family: Poppins;
					font-weight: bold;
					color: #23262F;
				}
				.list{
					margin-top: 50px;
					display: flex;
					justify-content: space-between;
					.item{
						width: 380px;
						img{
							widows: 100%;
							height: auto;
						}
						.title{
							font-size: 16px;
							font-family: Poppins;
							font-weight: 500;
							color: #23262F;
							margin-top: 25px;
						}
						.des{
							margin-top: 28px;
							font-size: 14px;
							font-family: Poppins;
							font-weight: 500;
							color: #777E90;
							line-height: 20px;
							text-align: center;
						}
					}
				}
			}
		}
		.part4{
			width: 100%;
			.sepa{
				width: 100%;
				display: flex;
				justify-content: center;
				.con{
					width: 1200px;
				}
			}
			.sepa1{
				background: #FFFFFF;
				padding: 120px 0;
				.con{
					display: flex;
					align-items: center;
					justify-content: space-between;
					.left{
						.title{
							font-size: 36px;
							font-family: Poppins;
							font-weight: bold;
							color: #23262F;
							line-height: 48px;
						}
						.des{
							margin-top: 30px;
							font-size: 20px;
							font-family: Poppins;
							font-weight: 500;
							color: #777E90;
							line-height: 30px;
						}
					}
					.right{
						width: 512px;
						height: auto;
						img{
							width: 100%;
							height: auto;
							display: block;
						}
					}
				}
			}
			.sepa2{
				background: #EFF6FF;
				padding: 80px 0;
				position: relative;
				#lizi2{
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
				}
				.con{
					position: relative;
					z-index: 2;
					.title{
						text-align: center;
						font-size: 36px;
						font-family: Poppins;
						font-weight: bold;
						color: #23262F;
					}
					.sub_title{
						text-align: center;
						margin-top: 30px;
						font-size: 20px;
						font-family: Poppins;
						font-weight: 500;
						color: #777E90;
					}
				}
			}
		}
		.part5{
			width: 100%;
			.sepa{
				width: 100%;
				display: flex;
				justify-content: center;
				.con{
					width: 1200px;
				}
			}
			.sepa1{
				background: #FFFFFF;
				padding: 119px 0 135px 0;
				.con{
					.title{
						text-align: center;
						font-size: 36px;
						font-family: Poppins;
						font-weight: bold;
						color: #23262F;
					}
					.pars{
						margin-top: 50px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						img{
							height: auto;
							display: block;
						}
					}
				}
			}
			.sepa2{
				background: #EFF6FF;
				padding: 80px 0;
				position: relative;
				#lizi{
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 1;
				}
				.con{
					position: relative;
					z-index: 2;
					.title{
						font-size: 36px;
						font-family: Poppins;
						font-weight: bold;
						color: #23262F;
						text-align: center;
					}
					.sub_title{
						text-align: center;
						font-size: 20px;
						font-family: Poppins;
						font-weight: 500;
						color: #777E90;
						margin-top: 30px;
					}
					.search{
						padding: 10px 10px 10px 30px;
						width: 640px;
						height: 60px;
						background: #FFFFFF;
						border-radius: 16px;
						margin: auto;
						margin-top: 59px;
						display: flex;
						align-items: center;
						justify-content: space-between;
						input{
							background: unset;
							border: unset;
							outline: none;
							width: 100%;
							height: 100%;
							font-size: 16px;
							font-family: Poppins;
							font-weight: 500;
							color: #777E90;
						}
						.btn{
							width: 140px;
							height: 60px;
							background: #23262F;
							border-radius: 16px;
							display: flex;
							align-items: center;
							justify-content: center;
							font-size: 16px;
							font-family: Poppins;
							font-weight: 500;
							color: #FFFFFF;
							flex-shrink: 0;
						}
						.btn:hover{
							cursor: pointer;
						}
					}
				}
			}
			.sepa3{
				background: #000000;
				padding: 80px 0;
				.con{
					display: flex;
					align-items: flex-start;
					justify-content: space-between;
					.col1{
						.logo{
							display: flex;
							align-items: center;
							font-size: 20px;
							font-family: Avenir;
							font-weight: 900;
							color: #FFFFFF;
							img{
								width: 106px;
								height: 36px;
								display: block;
								margin-right: 12px;
							}
						}
						.l2{
							margin-top: 10px;
							font-size: 14px;
							font-family: Poppins;
							font-weight: 500;
							color: #FFFFFF;
						}
						.l3{
							margin-top: 30px;
							font-size: 14px;
							font-family: Poppins;
							font-weight: 500;
							
							opacity: 0.6;
							a{
								color: #FFFFFF;
							}
						}
						.l32{
							margin-top: 9px;
						}
					}
					.col2{
						.l1{
							font-size: 16px;
							font-family: Poppins;
							font-weight: 600;
							color: #FFFFFF;
						}
						.l2{
							font-size: 14px;
							font-family: Poppins;
							font-weight: 500;
							color: #FFFFFF;
							opacity: 0.6;
							margin-top: 20px;
						}
						.contacts{
							margin-top: 19px;
							display: flex;
							img{
								width: 28px;
								height: 28px;
								display: block;
								margin-right: 24px;
							}
						}
					}
				}
			}
		}
	}
</style>
