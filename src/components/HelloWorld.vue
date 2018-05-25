<template>
  <div class="hello" >
    <canvas id="canvas" width="1200px" height="600px"></canvas>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      // fullHeight: document.documentElement.clientHeight,
      // msg: 'Welcome to Your Vue.js App'
      sun: new Image(),
      moon: new Image(),
      earth: new Image(),
    }
  },
  created: function () {
    

  },
  mounted:function(){
            
    this.sun.src = 'https://mdn.mozillademos.org/files/1456/Canvas_sun.png';
    this.moon.src = 'https://mdn.mozillademos.org/files/1443/Canvas_moon.png';
    this.earth.src = 'https://mdn.mozillademos.org/files/1429/Canvas_earth.png';
    window.requestAnimationFrame(this.draw);
  },
  methods: {
    draw () {
      var ctx = document.getElementById('canvas').getContext('2d');

      ctx.globalCompositeOperation = 'destination-over';
      ctx.clearRect(0,0,300,300); // clear canvas

      ctx.fillStyle = 'rgba(0,0,0,0.4)';
      ctx.strokeStyle = 'rgba(0,153,255,0.4)';
      ctx.save();
      ctx.translate(150,150);

      // Earth
      var time = new Date();
      ctx.rotate( ((2*Math.PI)/60)*time.getSeconds() + ((2*Math.PI)/60000)*time.getMilliseconds() );
      ctx.translate(105,0);
      ctx.fillRect(0,-12,50,24); // Shadow
      ctx.drawImage(this.earth,-12,-12);

      // Moon
      ctx.save();
      ctx.rotate( ((2*Math.PI)/6)*time.getSeconds() + ((2*Math.PI)/6000)*time.getMilliseconds() );
      ctx.translate(0,28.5);
      ctx.drawImage(this.moon,-3.5,-3.5);
      ctx.restore();

      ctx.restore();
      
      ctx.beginPath();
      ctx.arc(150,150,105,0,Math.PI*2,false); // Earth orbit
      ctx.stroke();
     
      ctx.drawImage(this.sun,0,0,300,300);

      window.requestAnimationFrame(this.draw);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
/*h1, h2 {
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
  color: #42b983;
}*/
</style>
