<template>
  <div id="myapp">
    <canvas
      id="canvas"
      width="800"
      height="600"
      @mousedown="canvasDown($event)"
      @mousemove="canvasMove($event)"
      @mouseup="canvasUp($event)"
      ref="canvas"
    >抱歉，您的浏览器不支持canvas元素</canvas>


    <button @click="cl">
        提交
    </button>
    <button @click="clear">
        清空
    </button>
    <img :src="img" alt="">
  </div>
</template>
<script>
export default {
  data() {
    return {
      img:"",
      ctx: {},
      preDrawAry: [],
      nextDrawAry: [],
      middleAry: [],
      canvas: {},
      canvasMoveUse: false
    };
  },
  mounted() {
    this.aaa();
  },
  methods: {
    aaa() {
      this.canvas = this.$refs.canvas;
      this.ctx = this.canvas.getContext("2d");
      this.ctx.lineWidth = 5;
      this.ctx.lineColor = "red";
      this.ctx.strokeStyle = "green";
    },
    canvasDown(e) {
      this.canvasMoveUse = true;
      // client是基于整个页面的坐标
      // offset是cavas距离顶部以及左边的距离
      const canvasX = e.clientX - e.target.offsetLeft;
      const canvasY = e.clientY - e.target.offsetTop;
      this.ctx.beginPath();
      // 移动的起点
      this.ctx.moveTo(canvasX, canvasY);
    },
    canvasMove(e) {
      if (this.canvasMoveUse) {
        // 只有允许移动时调用
        const t = e.target;
        let canvasX;
        let canvasY;
        canvasX = e.clientX - t.offsetLeft;
        canvasY = e.clientY - t.offsetTop;
        this.ctx.lineColor = "red";
        this.ctx.strokeStyle = "green";
        this.ctx.lineTo(canvasX, canvasY);
        this.ctx.stroke();
        // this.ctx.closePach();
      }
    },
    canvasUp(e) {
      this.canvasMoveUse = false;
    },
    cl(){
        var data = this.canvas.toDataURL( 'image/png', 1 );
        this.img = data;
        console.log(data)
    },
    clear(){
        this.ctx.clearRect(0, 0, this.ctx.canvas.width, this.ctx.canvas.height)
    },
  }
};
</script>
<style>
#myapp {
  width: 1200px;
  margin: 0 auto;
}
#myapp #canvas {
  border: 1px solid black;
}
</style>
