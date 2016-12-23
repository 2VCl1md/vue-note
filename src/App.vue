<template>
  <div id="app">
    <nav class="navbar navbar-default">
      <div class="container">
        <a class="navbar-brand" href="#">
          <i class="  glyphicon glyphicon-bookmark"></i>
          note
        </a>
        <ul class="nav navbar-nav">
          <li>
            <router-link  to="/home">
              <i class="  glyphicon glyphicon-home"></i>
              Home
            </router-link></li>
          <li>
            <router-link to="/notelist">
              <i class="glyphicon glyphicon-th-list"></i>
              NoteList
            </router-link>
          </li>
        </ul>
      </div>
    </nav>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
import Show from './components/Show'
import Add from './components/Add'
import List from './components/List'

export default {
  name: 'app',
  data () {
    return {

    }
  }
,
  components: {
    Show,Add,List
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
