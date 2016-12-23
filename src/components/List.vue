<template>
  <div class="main">
      <ul class="list-group">
        <li class="list-group-item" v-for="list in lists">{{list}} </li>
      </ul>
      <ul class="list-group" id="time">
         <li  class="list-group-item" v-for="time in times">{{time}}</li>
      </ul>
  </div>   
</template>


<script>

export default {
  name: 'list',
  data () {
    return {
      
    }
  },
  computed:{
    lists (){
      return this.$store.state.list
    },
    times (){
      return this.$store.state.time
    }
  },
  methods:{

  }
 
}
</script>

<style>
  ul,li{
    list-style: none;
  }
  .main{
    width: 630px;
    margin:0 auto;
  }
  ul{
    float: left;
  }
  .list-group{
    width: 400px;
    margin:0 auto;
  }
  .list-group-item{
    text-align: left;
    margin-top: 10px;
  }
  #time{
    width: 230px;
    float: left;
    margin-left: -2px;
  }
  
</style>