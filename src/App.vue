<template>
  <div id="app">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body {
	margin: 0;
}
#app {
  font-family: Helvetica,"PingFang SC";
	background: #F7F7F7;
	color: #333333;
	font-size: 14px;
	min-height: 100vh;
}
</style>
