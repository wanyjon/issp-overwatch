<style type="text/css">
	.an {
		background: white;
		width: 20px;
		height: 20px;
		animation:myfirst 20s;
		animation-iteration-count:infinite;
		animation-direction:alternate;
		position: absolute;
		left: 900px;
		top: 255px

	}
	.en {
		background: white;
		width: 20px;
		height: 20px;
		animation:myse 15s;
		animation-iteration-count:infinite;
		animation-direction:alternate;
		position: absolute;
		left: 895px;
		top: 470px
	}
	.in {
		background: white;
		width: 20px;
		height: 20px;
		animation:myse 30s;
		animation-iteration-count:infinite;
		animation-direction:alternate;
		position: absolute;
		left: 895px;
		top: 470px
	}
	.ing {
		width: 5px;
		height: 30px;
		background: #f8f8f9;
		position: absolute;
		transform:skew(-55deg,20deg);
		top: 447px;
		left: 1115px
	}
	@keyframes myfirst
	{
		100% {
			left: 900px;
			top: 255px;
		}
		90% {
			left: 970px;
			top: 300px;
		}
		75% {
			left: 810px;
			top: 405px;
		}
		60% {
			left: 695px;
			top: 350px
		}
		45% {
			left: 500px;
			top: 536px;
		}
		30% {
			left: 760px;
			top: 670px;
		}
		15% {
			left: 960px;
			top: 515px
		}
		0% {
			left: 895px;
			top: 470px;
		}

	}
	@keyframes myse
	{
		0% {
			left: 900px;
			top: 255px;
		}
		15% {
			left: 970px;
			top: 300px;
		}
		30% {
			left: 810px;
			top: 405px;
		}
		45% {
			left: 695px;
			top: 350px
		}
		60% {
			left: 500px;
			top: 536px;
		}
		75% {
			left: 760px;
			top: 670px;
		}
		90% {
			left: 960px;
			top: 515px
		}
		100% {
			left: 895px;
			top: 470px;
		}

	}
</style>
<template>
  <div>
  	<Row>
  		<Col span="24">
	  		<div style="position:absolute;" @mousemove="fn">
	  			<img src="@/assets/demo1.png" :width="screenWidth" :height="screenHeight">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.15 + 'px', top: screenHeight/11 + 'px'}">
	  			<img src="@/assets/icon.png" width="75%" height="75%">
	  		</div>
	  		<div id="username" :style="{ position:'absolute', left: screenWidth/1.1 + 'px', top: screenHeight/9.2 + 'px'}">
	  			<h1 style="color: white">hello</h1>
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.3 + 'px', top: screenHeight/1.08 + 'px'}">
	  			<img src="@/assets/bar.png" width="90%" height="90%">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.23 + 'px', top: screenHeight/1.11 + 'px'}">
	  			<img src="@/assets/setting.png" width="25%" height="25%" style="cursor: pointer" @click="show = !show">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.15 + 'px', top: screenHeight/1.106 + 'px'}">
	  			<img src="@/assets/messege.png" width="33%" height="33%" style="cursor: pointer">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.08 + 'px', top: screenHeight/1.103 + 'px'}">
	  			<img src="@/assets/quit.png" width="54%" height="54%" style="cursor: pointer" @click="quit">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/4.3 + 'px', top: screenHeight/1.4 + 'px'}" v-show="show">
	  			<img src="@/assets/rabbot.png" width="20%" height="20%" style="cursor: pointer">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/3.17 + 'px', top: screenHeight/1.3 + 'px'}" v-show="show">
	  			<img src="@/assets/dialo.png" width="60%" height="60%" style="cursor: pointer">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/3.17 + 'px', top: screenHeight/1.3 + 'px'}">
	  			
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/2.15 + 'px', top: screenHeight/1.8 + 'px'}" v-show="show1">
	  			<img src="@/assets/sign.png" width="5%" height="5%">
	  		</div>
	  		<div :style="{ position:'absolute', left: screenWidth/1.95 + 'px', top: screenHeight/1.85 + 'px'}" v-show="show2">
	  			<img src="@/assets/sign.png" width="5%" height="5%">
	  		</div>
	  		<div :style="{ width: screenWidth/22.857142857142858 + 'px', height: screenHeight/6.691666666666666 + 'px', position: 'absolute', left: screenWidth/2.2325581395348837 + 'px',top: screenHeight/1.6905263157894737 + 'px', cursor: 'pointer' }" @mouseover="show1 = !show1" @mouseout="show1 = !show1">
	  			
	  		</div>
	  		
	  		
	  		<div :style="{ width: screenWidth/18.7012987012987 + 'px', height: screenHeight/5.576388888888889 + 'px', position: 'absolute', left: screenWidth/2.0338983050847457 + 'px',top: screenHeight/1.7158119658119657 + 'px', cursor: 'pointer' }" @mouseover="show2 = !show2" @mouseout="show2 = !show2"  @click="go">
	  			
	  		</div>
  			<div style="position:absolute;">
  				<h1>{{screenWidth/708}}</h1>
  				<h1>{{screenHeight/468}}</h1>
  				<h1>y:{{y}}</h1>
  				<h1>x:{{x}}</h1>
  				<h1>{{test}}</h1>
  			</div>
  			<!-- <div v-bind:style="{ background:'red' , position: 'absolute', width: screenWidth/2.2325581395348837 + 'px', height: screenHeight/1.6905263157894737 + 'px'}">内联样式</div> -->
  		</Col>
  	</Row>
  </div>
</template>
<script>
    export default {
        data () {
        	return {
        		x: 0,
        		y: 0,
        		random: 10*Math.random(),
        		test: 400,
        		show1: false,
        		show2: false,
        		show: false,
        		screenHeight: window.innerHeight,
        		screenWidth: document.body.clientWidth,
        	}
        },
        methods: {
        	go () {
        		this.$router.push('/data')
        	},
        	fn (e) {
        		this.x = e.clientX;
        		this.y = e.clientY;
        	},
        	mou () {
        		this.test = this.test + 50*Math.random()
        	},
        	quit () {
        		this.$router.push('/signIn')
        	}
        }
    }
</script>