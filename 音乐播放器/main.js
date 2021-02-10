
var app = new Vue({
	el:"#app",
	data:{
		query:"",
		musicList:[],
		audioSrc:"",
		imgUrl:"",
		hotComments:[],
		mvUrl:"",
		isShow:false
	},
	methods:{
		
		//搜索音乐
		searchMusic(){
			var that = this;
			console.log(this.query);
			axios.get("https://autumnfish.cn/search?keywords="+this.query)
			.then(function(response){
				that.musicList = response.data.result.songs;
				that.musicList.splice(8);
			},function(err){
				console.log(err);
			})
		},
		
		//播放音乐
		playMusic(musicId){
			var that = this;
			// console.log(musicId);
			// this.audioSrc = this.searchMusic[index];
			axios.get("https://autumnfish.cn/song/url?id="+musicId)
			.then(function(response){
				that.audioSrc = response.data.data[0].url;
				// console.log(response.data.data[0].url);
			},function(err){
				console.log(err);
			})
			
			
			//获取音乐流数据的同时也需要获取图片，图片信息在另外一个接口中
			axios.get("https://autumnfish.cn/song/detail?ids="+musicId)
			.then(function(response){
				// console.log(response.data.songs[0].al.picUrl);
				that.imgUrl = response.data.songs[0].al.picUrl;
			},function(err){
				
			})
			
			
			//获取音乐评论
			axios.get("https://autumnfish.cn/comment/hot?type=0&id="+musicId)
			.then(function(response){
				console.log(response.data.hotComments);
				that.hotComments = response.data.hotComments.splice(0,2);
				console.log(response.data)
			},function(err){
				console.log(err);
			})
			
		},
	
	
		play(){
			console.log("播放中");
		},
		pause(){
			console.log("暂停中");
		},
		
		
		playMV(mvid){
			var that = this;
			axios.get("https://autumnfish.cn/mv/url?id="+mvid)
			.then(function(response){
				console.log(response.data.data.url);
				that.mvUrl = response.data.data.url;
				that.isShow = true;
			},function(err){
				console.log(err);
			})
			this.audioSrc = "";
		},
		close(){
			this.isShow = false;
			this.mvUrl = "";
		}
	}
})

