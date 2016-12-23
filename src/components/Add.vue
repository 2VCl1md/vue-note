<template>
	<div class="container">
		<div class="input">
			<textarea v-model="msg" placeholder="about the detail" name="" id="" cols="80" rows="10">		
			</textarea>
			 <button class="btn btn-primary save"  @click="add(),addTime()">Save</button> 
	        <router-link to="/home" class="btn btn-danger cancel">Cancel</router-link>
		</div>
		
	</div>

</template>
<script>
	export default {
		name:'add',
		data () {
			return  {
				msg:'',
				date:new Date()
			}
		},
		computed:{
			lists:function(){
				return this.$store.state.list
			},
			times:function(){
				return this.$store.state.time
			}
		},
		methods:{
			add () {
				const a=this.msg;
				this.$store.dispatch('add_action',a)
				this.$router.go(-1)
			}
			,
			 addTime (){
			 	const date=this.date
			 	, y=date.getFullYear()
			 	, m=date.getMonth()+1
			 	, d=date.getDate()
			 	, h=date.getHours()
			 	, min=date.getMinutes()
			    , s=date.getSeconds()
			    function num(n){
			    	if (n<10) {
			    		n= '0'+n
			    	}
			    	return n
			    };

				const b=y+'/'+m+'/'+d+'     '+num(h)+':'+num(min)+':'+num(s)
			 	this.$store.dispatch('add_action_time',b)
			 }
		}
	}
</script>

<style>
	.input{
		position: relative;
		width: 60%;
		margin:0 auto;
	}
	textarea{
		resize: none;
	}
	.save,.cancel{
		position: absolute;
		bottom: -40px;
		left: 50px;
		padding: 5px 20px;
	}
	.cancel{
		left:120px;
	}
</style>