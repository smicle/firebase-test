<template>
  <v-app>
    <div id="app">
      <AppBar></AppBar>
      <!-- <div id="nav">
        <router-link to="/">Todo</router-link> |
        <router-link to="/hello">Hello</router-link>
      </div>
      -->
      <router-view />
    </div>
  </v-app>
</template>

<script lang="ts">
import {Component, Vue} from 'vue-property-decorator'
import AppBar from '@/components/AppBar.vue'

@Component({
  components: {
    AppBar,
  },
})
export default class App extends Vue {}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
