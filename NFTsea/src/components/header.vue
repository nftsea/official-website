<script>
	import {
		ElLoading,
		ElNotification,
		ElMessage,
		ElMessageBox
	} from 'element-plus'
	export default {
		data() {
			return {
				basePicUrl: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/',
				showVideo: false,
				showHeader: false,
				showPages: false,
				showFirstPage: false,
				lan: 'en',
				videoDom: '',
				videoLoading: '',
				winHeight: 960,
				pageActive: {
					1: 'active',
					2: '',
					3: '',
					4: '',
					5: ''
				},
				roles: {
					1: 'active',
					2: '',
					3: '',
					4: '',
					5: ''
				},
				monsters: {
					0: 'active',
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				},
				maps: {
					0: 'active',
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				},
				monstersPic: [{
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-1-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-1-l.png'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-2-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-2-l.png'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-3-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-3-l.png'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-4-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-4-l.png'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-5-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-5-l.png'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-6-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/mon-6-l.png'
				}],
				mapsPic: [{
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-1-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-1-l.png',
					type: 'video',
					vu: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-1-l.mp4'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-2-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-2-l.png',
					type: 'img'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-3-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-3-l.png',
					type: 'img'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-4-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-4-l.png',
					type: 'img'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-5-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-5-l.png',
					type: 'img'
				}, {
					b: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-6-b.png',
					l: 'https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/map-6-l.png',
					type: 'img'
				}],
				activeName: 1,
				thumbsSwiper: null,
				wheelCount: 0,
				moveWheel1: true,
				wheelClock: null,
				monsterAuto: false,
				mapAuto: false,
				connectTime: 5,
				connecting: false,
				connected: false,
				tronWeb: null,
				address: ''
			}
		},
		mounted() {
			let that = this
			that.showVideo = true
			that.videoDom = document.getElementById('video')
			that.videoLoading = ElLoading.service({
				lock: true,
				text: that.lan == 'zh' ? '页面加载中' : 'LOADING',
				background: 'rgba(0, 0, 0, 0.7)',
			})
			that.winHeight = document.documentElement.clientHeight + 160
			window.addEventListener('mousewheel', that.handleScroll, false)
			window.addEventListener("DOMMouseScroll", that.handleScroll, false)
			that.connectTronweb()
		},
		methods: {
			connectTronweb() {
				let that = this
				that.address = localStorage.getItem('address')
				if (that.address) {
					that.connected = true
					return false
				}
				let t = 0
				let checkLoginT = 0
				that.connecting = true
				let timer = setInterval(() => {
					t++
					let eth = window.ethereum
					if (window.tronWeb) {
						checkLoginT++
						that.tronWeb = window.tronWeb
						that.address = window.tronWeb.defaultAddress.base58
						if (!that.address) {
							if (checkLoginT == 1) {
								ElMessage({
									message: that.lan == 'en' ? 'Please log in to TronLink' : '请登录波宝',
									type: 'warning',
									duration: 0,
									'show-close': true
								})
							}
						} else {
							localStorage.setItem('address', that.address)
							that.connecting = false
							that.connected = true
							clearInterval(timer)
						}
					} else {
						if (t > that.connectTime) {
							clearInterval(timer)
							that.connecting = false
							ElMessageBox.prompt(that.lan == 'zh' ? '请安装并登录波宝或者输入波场钱包地址' :
								'Please install and log in to TronLink or enter the TRON wallet address', that
								.lan == 'zh' ? '温馨提示' : 'Tip', {
									confirmButtonText: that.lan == 'zh' ? '使用输入地址' : 'Use the entered address',
									cancelButtonText: that.lan == 'zh' ? '安装波宝' : 'Install TronLink',
									showClose: false,
									'close-on-click-modal': false
								}).then(({
								value
							}) => {
								that.address = value
								localStorage.setItem('address', that.address)
								that.connecting = false
								that.connected = true
							}).catch(() => {
								window.open(
									'https://chrome.google.com/webstore/detail/tronlink/ibnejdfjmmkpcnlpebklmnkoeoihofec'
									)
							})
						}
					}
				}, 1000)
			},
			handleScroll(e) {
				let that = this
				e = e || window.event
				let arrow = ''
				if (that.moveWheel1) {
					if (e.wheelDelta > 0) {
						arrow = 'up'
					}
					if (e.wheelDelta < 0) {
						arrow = 'down'
					}
					that.moveWheel1 = false
					let d1 = document.querySelector('html').scrollTop
					clearTimeout(that.wheelClock)
					that.wheelClock = setTimeout(() => {
						let d2 = document.querySelector('html').scrollTop
						that.moveWheel1 = true
						let nowPageNum = ''
						for (let i = 1; i <= 5; i++) {
							if (that.pageActive[i] == 'active') {
								nowPageNum = i
							}
						}
						let pageNum = ''
						if (arrow == 'up') {
							pageNum = nowPageNum - 1
						} else {
							pageNum = nowPageNum + 1
						}
						if (pageNum < 1) {
							pageNum = 1
						}
						if (pageNum > 5) {
							pageNum = 5
						}
						if (Math.floor(d2) - Math.floor(d1) == 0) {
							that.changePage(pageNum)
						}
					}, 500)
				}
			},
			videoStop() {
				let that = this
				that.showVideo = false
				that.showHeader = true
				that.showPages = true
				that.showFirstPage = true
			},
			stopLoading() {
				let that = this
				that.videoLoading.close()
			},
			changePage(index) {
				let that = this
				let arr = {
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				}
				arr[index] = 'active'
				that.pageActive = arr
			},
			changeRole(index) {
				let that = this
				let arr = {
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				}
				arr[index] = 'active'
				that.roles = arr
			},
			changeMonPic(index) {
				let that = this
				that.$refs.monsters.setActiveItem(index)
				let arr = {
					0: '',
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				}
				arr[index] = 'active'
				that.monsters = arr
			},
			changeMapPic(index) {
				let that = this
				that.$refs.maps.setActiveItem(index)
				let arr = {
					0: '',
					1: '',
					2: '',
					3: '',
					4: '',
					5: ''
				}
				arr[index] = 'active'
				that.maps = arr
			},
			monScroll(index) {
				let that = this
				that.changeMonPic(index)
			},
			mapScroll(index) {
				let that = this
				that.changeMapPic(index)
			},
			changeLan(lan) {
				let that = this
				that.lan = lan
			},
			goToPage() {
				let that = this
				that.$refs.bVideo.pause()
			},
			playVideo() {
				let that = this
				that.$refs.bVideo.play()
				that.showVideo = true
			},
			showTips() {
				let that = this
				ElNotification({
					title: 'Info',
					message: that.lan == 'zh' ? '精彩内容正在努力开发中，敬请期待' :
						'Wonderful content is under development, so stay tuned',
					type: 'info',
				})
			},
			openPage(page){
				this.$router.push({
					path: page,
					query: {},
				})
			}
		}
	}
</script>

<template>
	<el-container direction="vertical" style="align-items: center;">

		<!-- 头部-begin -->
		<transition name="el-fade-in-linear">
			<el-header class="header" height="84px" v-if="showHeader">
				<div class="content-box">
					<div class="left">
						<a href="#"><img :src="basePicUrl + 'logo.png'" alt=""></a>
						<span @click="openPage('/heroes')" class="tabs ftabs">{{lan == 'zh' ? '英雄' : 'Heroes'}}</span>
						<span @click="showTips" class="tabs"><a href="#">{{lan == 'zh' ? '装备' : 'Weaponry'}}</a></span>
						<span @click="showTips" class="tabs"><a href="#">{{lan == 'zh' ? '副本' : 'Maps'}}</a></span>
						<span @click="showTips" class="tabs"><a href="#">{{lan == 'zh' ? '交易市场' : 'Market'}}</a></span>
						<span class="tabs"><a target="_blank"
								:href="lan == 'zh' ? 'https://docsend.com/view/p372sbjrbqv7rd7x' : 'https://docsend.com/view/kgj7ex9jzimaxenq'">{{lan == 'zh' ? '百科全书' : 'Encyclopedia'}}</a></span>
					</div>
					<div class="right">
						<div class="lan" @click="changeLan('zh')" v-if="lan == 'en'">
							<img :src="basePicUrl + 'lan-zh.png'">
							<span>中文</span>
						</div>
						<div class="lan" @click="changeLan('en')" v-if="lan == 'zh'">
							<img :src="basePicUrl + 'lan-en.png'">
							<span>English</span>
						</div>
						<div class="conne" @click="connectTronweb()" v-if="!connecting && !connected">
							{{lan == 'zh' ? '链接钱包' : 'Connect'}}</div>
						<div class="conne" v-if="connecting">
							<img src="../assets/imgs/loading.svg">
						</div>
						<div class="conne coned" v-if="!connecting && connected">
							<div>{{lan == 'zh' ? '已连接' : 'Connected'}}</div>
							<div>{{address.substr(0,3) + '...' + address.substr(-3)}}</div>
						</div>
					</div>
				</div>
			</el-header>
		</transition>
		<!-- 头部-end -->

		<!-- 入场视频-begin -->
		<transition name="el-fade-in-linear">
			<div class="video" v-show="showVideo" @click="goToPage">
				<video ref="bVideo" id="video" preload="auto" muted="muted" autoplay="autoplay" playsinline="true"
					webkit-playsinline="true" x-webkit-airplay="true" x5-video-player-type="h5-page"
					x5-video-orientation="h5" x5-video-player-fullscreen="true" x5-video-ignore-metadata="true"
					@pause="videoStop" @ended="videoStop" @error="videoStop" @canplay="stopLoading">
					<source :src="basePicUrl + 'first_video.mp4'" type="video/mp4"> 您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
				</video>
			</div>
		</transition>
		<!-- 入场视频-end -->

		<!-- 页面内容-begin -->
		<transition name="el-fade-in">
			<div class="content" :style="'height:' + winHeight + 'px'" v-show="showPages" id="warp">
				<div class="nav-box">
					<div class="dot-box d1" :class="pageActive[1]" @click="changePage(1)">
						<div class="dot" v-show="pageActive[1] == ''"></div>
						<div class="dot-active" v-show="pageActive[1] == 'active'">
							<div></div>
						</div>
					</div>
					<div class="dot-box d2" :class="pageActive[2]" @click="changePage(2)">
						<div class="dot" v-show="pageActive[2] == ''"></div>
						<div class="dot-active" v-show="pageActive[2] == 'active'">
							<div></div>
						</div>
					</div>
					<div class="dot-box d3" :class="pageActive[3]" @click="changePage(3)">
						<div class="dot" v-show="pageActive[3] == ''"></div>
						<div class="dot-active" v-show="pageActive[3] == 'active'">
							<div></div>
						</div>
					</div>
					<div class="dot-box d4" :class="pageActive[4]" @click="changePage(4)">
						<div class="dot" v-show="pageActive[4] == ''"></div>
						<div class="dot-active" v-show="pageActive[4] == 'active'">
							<div></div>
						</div>
					</div>
					<div class="dot-box d5" :class="pageActive[5]" @click="changePage(5)">
						<div class="dot" v-show="pageActive[5] == ''"></div>
						<div class="dot-active" v-show="pageActive[5] == 'active'">
							<div></div>
						</div>
					</div>
				</div>
				<div class="pages">
					<transition name="el-fade-in">
						<div class="firstPage" v-if="pageActive[1] == 'active'">
							<img class="w" :src="basePicUrl + (lan == 'zh' ? 'fistpa-w-zh.png' : 'fistpa-w-en.png')">
							<img class="p" :src="basePicUrl + 'play.png'" @click="playVideo">
						</div>
					</transition>
					<transition name="el-fade-in">
						<div class="page2" v-if="pageActive[2] == 'active'">
							<div class="intro-box">
								<el-collapse v-model="activeName" @change="changeRole" accordion :style="{
									'--el-collapse-border-color':'none',
									'--el-collapse-header-height': '66px',
									'--el-collapse-header-font-size': '36px',
									'--el-collapse-header-bg-color': 'unset',
									'--el-collapse-header-text-color': 'rgba(255,255,255)',
									'--swiper-theme-color': 'unset',
									'--el-collapse-content-font-size': '16px',
									'--el-collapse-content-bg-color': 'unset',
									'--el-collapse-content-text-color': '#FFFFFF'
									}">
									<el-collapse-item :title="lan == 'zh' ? '战士' : 'WARRIOR'" :name="1">
										<div>{{lan == 'zh' ? '战士可能是救人于危难之中的坚定保护者，也可能是残酷无情的劫掠者或勇敢的冒险者。他们中有人有着世上最善良的灵魂，原意为了更多人的利益而牺牲自己。也有人毫无愧疚地为了私人利益——甚至为了娱乐——而杀戮。' : 'A warrior may be a steadfast protector who saves people from danger, or a cruel predator or a brave adventurer. Some of them have the kindest souls in the world, and they originally intended to sacrifice themselves for the benefit of more people. There are'}}</div>
									</el-collapse-item>
									<el-collapse-item :title="lan == 'zh' ? '盗贼' : 'ASSASSIN'" :name="2">
										<div>{{lan == 'zh' ? '盗贼之间只有很小的共同点，他们有些是潜伏的盗贼，有的是高明的骗子——，还可能是侦察员、潜入者、间谍、外交官或重大罪犯。他们唯一共通过的是多才多艺、能适应各种环境和足智多谋。一般来说，盗贼不喜欢正面作战，他们更喜欢布设致人死地的陷井、无声无息地突袭，而且他们用有令人非常害怕的技能：从打开锁到偷走别人的钱财。' : 'The thieves have very little in common. Some of them are lurking thieves, some are clever liars—or scouts, sneakers, spies, diplomats, or major criminals. The only thing they passed was versatility, adaptability to various environments, and resourcefulness. Generally speaking, thieves don’t like frontal combat. They prefer to lay traps to kill people and make silent raids. Moreover, they use very scary skills: from opening locks to stealing other people’s money.'}}</div>
									</el-collapse-item>
									<el-collapse-item :title="lan == 'zh' ? '法师' : 'MAGE'" :name="3">
										<div>{{lan == 'zh' ? '难懂的词语、多变的手势、复杂的动作、奇异的施法材料，通过艰苦的研究，法师们终于将魔法从不可思议的艺术变成了通过训练就能掌握的专业技术。他们创建了法术的理论和不同的学派，将施法变成了可以计算过程和预料结果的公式，但是法师们也因此把大量的时间化费在他的法术书本上，为了创造新的法术，法师们必须经过大量的研究和实践。无论什么时候，只要是可能，法师们总是在查阅古老的书籍，讨论着新的理论，实验着新的法术。' : 'Difficult words, changeable gestures, complicated movements, and strange casting materials. Through painstaking research, the mages finally turned magic from an incredible art into a professional technique that can be mastered through training. They created the theory of spells and different schools, turning spellcasting into a formula that can calculate the process and predict the result. However, the wizards also spent a lot of time on his spell books. In order to create new spells, the wizard We must go through a lot of research and practice. Whenever possible, the mages are always looking up old books, discussing new theories, and experimenting with new spells.'}}</div>
									</el-collapse-item>
									<el-collapse-item :title="lan == 'zh' ? '骑士' : 'KNIGHT'" :name="4">
										<div>{{lan == 'zh' ? '追求善良、维护法律、消灭邪恶是骑士的三件武器。极少有人能拥有成为骑士所必须的纯洁和热爱，但是骑士为此得到了回报，在保护上、在打击上。在诡计多端的巫师、邪恶的魔兽、噬血成性的龙和深渊的恶魔的阴影中生活的人们，骑士是他们最终的希望。' : 'Pursuing goodness, upholding the law, and eliminating evil are the three weapons of the knight. Few people have the purity and love necessary to become a knight, but the knight has been rewarded for this, in protection and combat. For people living in the shadows of scheming wizards, evil beasts, blood-eating dragons, and abyssal demons, knights are their ultimate hope.'}}</div>
									</el-collapse-item>
									<el-collapse-item :title="lan == 'zh' ? '游侠' : 'RANGER'" :name="5">
										<div>{{lan == 'zh' ? '森林是凶猛、狡猾的生物的家，但比它们更勇敢、更狡猾的就是游侠。他们都是熟练的猎人和巡林者。游侠如同熟悉自已家一样熟悉森林。' : 'The forest is home to fierce and cunning creatures, but the braver and cunning than them is the ranger. They are all skilled hunters and rangers. The ranger is as familiar with the forest as his own home.'}}</div>
									</el-collapse-item>
								</el-collapse>
							</div>
							<transition name="el-fade-in">
								<div class="con con1" v-if="roles[1] == 'active'"></div>
							</transition>
							<transition name="el-fade-in">
								<div class="con con2" v-if="roles[2] == 'active'"></div>
							</transition>
							<transition name="el-fade-in">
								<div class="con con3" v-if="roles[3] == 'active'"></div>
							</transition>
							<transition name="el-fade-in">
								<div class="con con4" v-if="roles[4] == 'active'"></div>
							</transition>
							<transition name="el-fade-in">
								<div class="con con5" v-if="roles[5] == 'active'"></div>
							</transition>
						</div>
					</transition>
					<transition name="el-fade-in">
						<div class="page3" v-if="pageActive[3] == 'active'">
							<el-carousel :style="{'--el-carousel-arrow-background': 'rgba(0,0,0,0.4)','--el-carousel-arrow-hover-background': 'rgba(0,0,0,0.6)'}" indicator-position="none" height="600px" :autoplay="monsterAuto" class="" arrow="always" ref="monsters" :loop="true" @change="monScroll">
								<el-carousel-item v-for="(item,index) in monstersPic">
									<img :src="item.b" alt="">
									<span>{{lan == 'zh' ? '与凶狠的怪物厮杀，尽享战斗乐趣' : 'Fight with fierce monsters and enjoy the fun of fighting'}}</span>
								</el-carousel-item>
							</el-carousel>
							<swiper :slidesPerView="'auto'" :loop="false" :spaceBetween="12" class="mySwiper">
								<swiper-slide v-for="(item,index) in monstersPic" @click=changeMonPic(index)
									:class="monsters[index]">
									<img :src="item.l" />
								</swiper-slide>
							</swiper>
						</div>
					</transition>
					<transition name="el-fade-in">
						<div class="page3" v-if="pageActive[4] == 'active'">
							<el-carousel
								:style="{'--el-carousel-arrow-background': 'rgba(0,0,0,0.4)','--el-carousel-arrow-hover-background': 'rgba(0,0,0,0.6)'}"
								indicator-position="none" height="600px" :autoplay="mapAuto" class="bigpic"
								arrow="always" ref="maps" @change="mapScroll">
								<el-carousel-item v-for="(item,index) in mapsPic">
									<img v-if="item.type == 'img'" :src="item.b" alt="">
									<video v-if="item.type == 'video'" :id="'mapVideo' + index" preload="auto"
										muted="muted" autoplay="autoplay" playsinline="true" webkit-playsinline="true"
										x-webkit-airplay="true" x5-video-player-type="h5-page" x5-video-orientation="h5"
										x5-video-player-fullscreen="true" x5-video-ignore-metadata="true"
										controls="controls" :poster="item.b">
										<source :src="item.vu" type="video/mp4"> 您的浏览器不支持本视频播放，请尝试换一个浏览器或升级到最新版本
									</video>
									<span>{{lan == 'zh' ? '丰富的地图地貌以供探索和寻宝' : 'Rich map landforms for exploration and treasure hunting'}}</span>
								</el-carousel-item>
							</el-carousel>
							<swiper :slidesPerView="'auto'" :loop="false" :spaceBetween="12" class="mySwiper">
								<swiper-slide v-for="(item,index) in mapsPic" @click=changeMapPic(index)
									:class="maps[index]">
									<img :src="item.l" />
								</swiper-slide>
							</swiper>
						</div>
					</transition>
					<transition name="el-fade-in">
						<div class="page5" v-if="pageActive[5] == 'active'">
							<img class="w" :src="basePicUrl + 'logo2.png'">
							<div class="buttons">
								<div @click="showTips" class="item">{{lan == 'zh' ? '关于游戏' : 'About'}}</div>
								<div @click="showTips" class="item" style="margin: 0 84px;">
									{{lan == 'zh' ? '立即游玩' : 'Play Now'}}</div>
								<div @click="showTips" class="item">{{lan == 'zh' ? '联系我们' : 'Contact'}}</div>
							</div>
						</div>
					</transition>
				</div>
			</div>
		</transition>
		<!-- 页面内容-end -->

		<!-- 尾部-begin -->
		<transition name="el-fade-in">
			<div class="footer" v-if="pageActive[5] == 'active'">

			</div>
		</transition>
		<!-- 尾部-end -->
	</el-container>
</template>

<style scoped lang="scss">
	.el-carousel__arrow {
		background-color: red !important;
	}

	.header {
		background: rgba(0, 0, 0, 0.4);
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		z-index: 100;
	}

	.content-box {
		width: 1680px;
		height: 100%;
		margin: auto;
		display: flex;
		display: -webkit-flex;
		justify-content: space-between;
		-webkit-justify-content: space-between;

		.left {
			display: flex;
			display: -webkit-flex;
			align-items: center;

			img {
				width: 104px;
				height: 50px;
				display: block;
			}

			a {
				color: unset;
				text-decoration: unset;
			}

			.tabs {
				margin-left: 48px;
				font-size: 16px;
				font-weight: 800;
				color: rgba(255, 255, 255, 0.4);
			}
			.tabs:hover{
				cursor: pointer;
			}
			.ftabs {
				margin-left: 77px;
			}

			.tabs:hover {
				color: rgba(255, 255, 255, 1);
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
				margin-left: 70px;

				img {
					width: 24px;
					height: 24px;
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
				width: 120px;
				height: 37px;
				margin-left: 36px;
				background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/but-conne.png);
				background-position: center center;
				background-repeat: no-repeat;
				background-size: cover;
				line-height: 37px;
				text-align: center;
				font-size: 14px;
				font-weight: 800;
				color: #FFFFFF;
				display: flex;
				align-items: center;
				justify-content: center;

				img {
					height: 100%;
					width: auto;
				}
			}

			.conne:hover {
				// background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/but-conne_active.png);
				cursor: pointer;
			}

			.coned {
				background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/but-conne-active.png);
				font-size: 8px;
				color: #DCC274;
				flex-direction: column;
				line-height: 15px;
			}
		}
	}

	.video {
		width: 100%;
		height: 100%;
		position: fixed;
		top: 50%;
		margin-top: -23%;
		left: 0;
		z-index: 101;

		video {
			width: 100%;
			height: auto;
		}
	}

	.video:hover {
		cursor: pointer;
	}

	.content {
		position: absolute;
		left: 0;
		top: 50%;
		margin-top: -23%;
		width: 100%;

		.nav-box {
			width: 1px;
			height: 317px;
			position: absolute;
			left: 124px;
			top: 50%;
			margin-top: -158px;
			background: #FFFFFF;
			z-index: 90;

			.dot-box {
				position: absolute;
				left: -4px;
				top: 30px;
				transform: rotate(45deg);
				-webkit-transform: rotate(45deg);

				.dot {
					width: 9px;
					height: 9px;
					background: #FFFFFF;
				}
			}

			.active {
				left: -7px;

				.dot-active {
					width: 13px;
					height: 13px;
					background: #000000;
					border: 1px solid #FFFFFF;
					display: flex;
					align-items: center;
					justify-content: center;

					div {
						width: 9px;
						height: 9px;
						background: #FFFFFF;
					}
				}
			}

			.d2 {
				top: 90px;
			}

			.d3 {
				top: 150px;
			}

			.d4 {
				top: 210px;
			}

			.d5 {
				top: 270px;
			}

			.dot-box:hover {
				cursor: pointer;
			}
		}

		.pages::-webkit-scrollbar {
			display: none;
		}

		.pages {
			width: 100%;
			height: 100%;
			overflow: auto;
			scrollbar-width: none;
			-ms-overflow-style: none;
			overflow-x: hidden;
			overflow-y: auto;
			position: relative;
			background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/page_bg.png);
			background-position: center center;
			background-repeat: no-repeat;
			background-size: cover;
			.firstPage {
				width: 100%;
				height: 100%;
				background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/firstpage-bg.png);
				background-position: center center;
				background-repeat: no-repeat;
				background-size: cover;
				position: relative;
				z-index: 10;

				img {
					display: block;
					margin: auto;
					position: absolute;
				}

				.w {
					width: 1200px;
					height: auto;
					top: 280px;
					left: 50%;
					margin-left: -600px;
				}

				.p {
					width: 60px;
					height: 60px;
					left: 0;
					top: 667px;
					left: 50%;
					margin-left: -30px;
				}

				.p:hover {
					cursor: pointer;
				}
			}

			.page5 {
				width: 100%;
				height: 100%;
				position: relative;
				z-index: 10;

				img {
					display: block;
					margin: auto;
					position: absolute;
				}

				.w {
					width: 972px;
					height: auto;
					top: 200px;
					left: 50%;
					margin-left: -486px;
				}

				.buttons {
					width: 100%;
					display: flex;
					justify-content: center;
					position: absolute;
					left: 0;
					top: 630px;
					height: 73px;

					.item {
						width: 240px;
						height: 73px;
						background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/but-conne.png);
						background-position: center center;
						background-repeat: no-repeat;
						background-size: cover;
						line-height: 73px;
						text-align: center;
						font-size: 28px;
						font-weight: 800;
						color: #FFFFFF;
					}

					.item:hover {
						// background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/but-conne_active.png);
						cursor: pointer;
					}
				}
			}

			.page2 {
				width: 100%;
				height: 100%;
				position: relative;
				display: flex;
				justify-content: flex-end;

				.intro-box {
					display: flex;
					flex-direction: column;
					justify-content: center;
					width: 600px;
					height: 100%;
					padding-right: 240px;
					position: relative;
					z-index: 22;

					.item {
						width: 100%;
						text-align: right;
						font-weight: 800;
						color: rgba(255, 255, 255, 0.4);
						margin-top: 25px;

						.title {
							font-size: 36px;
						}

						.title:hover {
							cursor: pointer;
						}

						.intro {
							font-size: 16px;
							line-height: 24px;
							margin-top: 20px;
						}
					}

					.active {
						color: rgba(255, 255, 255, 1);
					}
				}

				.con {
					width: 100%;
					height: 100%;
					position: absolute;
					top: 0;
					left: 0;
					z-index: 21;
					background-position: center center;
					background-repeat: no-repeat;
					background-size: cover;
				}

				.con1 {
					background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/zhanshi.png);
				}

				.con2 {
					background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/daozei.png);
				}

				.con3 {
					background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/fashi.png);
				}

				.con4 {
					background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/qishi.png);
				}

				.con5 {
					background-image: url(https://yaojiakeji.oss-accelerate-overseas.aliyuncs.com/gold_world/youxia.png);
				}
			}

			.page3 {
				width: 1200px;
				height: 720px;
				position: absolute;
				left: 50%;
				margin-left: -600px;
				top: 50%;
				margin-top: -360px;
				display: flex;
				flex-direction: column;
				justify-content: space-between;

				.bigpic {
					// width: 100%;
					text-align: center;
					position: relative;

					img {
						// width: 100%;
						height: 100%;
						display: block;
					}

					span {
						display: block;
						width: 100%;
						position: absolute;
						left: 0;
						bottom: 48px;
						font-size: 24px;
						font-weight: 800;
						color: #FFFFFF;
					}
				}

				.litt_pic {
					display: flex;

					// overflow-x: scroll;
					.item {
						width: 216px;
						height: 108px;
						margin-right: 12px;

						img {
							width: 100%;
							height: 100%;
							display: block;
						}
					}
				}
			}
		}
	}

	.swiper-slide img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}

	.swiper {
		width: 100%;
		height: 108px;
		margin-left: auto;
		margin-right: auto;
	}

	.swiper-slide {
		width: 216px !important;
	}

	.mySwiper {
		height: 108px;
	}

	.mySwiper .swiper-slide-thumb-active {
		opacity: 1;
	}

	.mySwiper .swiper-slide {
		opacity: 0.4;
	}

	.mySwiper .active {
		opacity: 1;
	}

	.swiper-slide:hover {
		cursor: pointer;
		opacity: 1;
	}
</style>
