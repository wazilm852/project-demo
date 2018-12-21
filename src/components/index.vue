<template>
  <div id="boxaa">
    <h1>hello world</h1>
    <ul>
      <li>123</li>
      <li>456</li>
      <li>789</li>
      <li>012</li>
    </ul>
  </div>
</template>
<script>
export default {
  data () {
    return {

    }
  },
  created () {
    this.show();
    this.fun("hello")
  },
  methods :{
    show () {
      // let [a,...c] = [1,2,3];
      // console.log(a+'-'+c)
      // console.log("\u0061")
      // console.log("\uD842\uDFB7")
    },
    fun (x,y = 'world') {
      console.log(x,y)
    }
  },
}
</script>
<style lang="less">
  #boxaa{
    h1{
      color:rgb(110, 3, 172);
    }
    ul{
      li{
        color:orange;
      }
    }
  }
</style>

