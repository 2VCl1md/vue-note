<template>
  <div class="jumbotron">
    <h1>note</h1>
    <p>
      <strong>
        <router-link to="/add" class="btn btn-info">add</router-link>
      </strong>
    </p>
  </div>
</template>

<script>
export default {
  name: 'show',
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #fff;
  padding:  5px 20px;
}
</style>
