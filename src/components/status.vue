<template>
  <div>
    <div id="wenshidu"></div>
  </div>
</template> 

<script>
  import echarts from 'echarts';
  import axios from 'axios'

  export default {
    data() {
      return {
        chart: null
      };
    },
    methods: {
      
      drawbar(id) {
        this.chart = echarts.init(document.getElementById(id));
        var colors = ['#5793f3', '#d14a61', '#675bba'];
        this.chart.setOption({
        	color:colors,
          	title:{
				text:'温湿度'
			},
			tooltip:{},//提示框
			grid: {
				x: 35,
				x2: 10,
				y: 50,
				y2: 25
			},
			legend:{//图例组件
				data:['温度','湿度']
			},
			xAxis:[{
				type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine: {
		                onZero: false,
		                lineStyle: {
		                    color: colors[0]
		                }
		            },
		            axisPointer: {
		                label: {
		                    formatter: function (params) {
		                        return '温度  ' + params.value + '：' + params.seriesData[0].data;
		                    }
		                }
		            },
				data:["1","2","3","4","最新"]
			},{
		            type: 'category',
		            axisTick: {
		                alignWithLabel: true
		            },
		            axisLine: {
		                onZero: false,
		                lineStyle: {
		                    color: colors[1]
		                }
		            },
		            axisPointer: {
		                label: {
		                    formatter: function (params) {
		                        return '湿度  ' + params.value + '：' + params.seriesData[0].data;
		                    }
		                }
		            },
		            data:["1","2","3","4","最新"]
       			}],
			yAxis:{
				min: 0,
        		max: 80,
			},
			series: [{
        		name: '温度',
       			type: 'line',
        		data: [0,0,0,0,0]
        	},{
    			name:"湿度",
    			type:'line',
    			data:[0,0,0,0,0]
    		}]
      });
 	}
    },
    mounted() {
    	 
      	axios.get('http://119.29.201.31:3000/tem')
      	        .then((res) => {
      	        if (res.status === 200) {
      	          res = res.data;
      	          console.log(res);
      	          this.chart.setOption({
      	          	series: [{
      	          	    // 根据名字对应到相应的系列
      	          	    name: '温度',
      	          	    data: res
      	          	}]
      	          })
      	          if (res.errno === ERR_OK) {
      	            this.seller = Object.assign({}, this.seller, res.data);
      	          }
      	        };
      	      })
      	      .catch(function(err) {
      	          console.log(err); // 从数据库获取数据出现问题
      		  });
      	axios.get('http://119.29.201.31:3000/hum')
      	              .then((res) => {
      	              if (res.status === 200) {
      	                res = res.data;
      	                console.log(res);
      	                this.chart.setOption({
      	                	series: [{
      	                	    // 根据名字对应到相应的系列
      	                	    name: '湿度',
      	                	    data: res
      	                	}]
      	                })
      	                if (res.errno === ERR_OK) {
      	                  this.seller = Object.assign({}, this.seller, res.data);
      	                }
      	              };
      	            })
      	            .catch(function(err) {
      	                console.log(err); // 从数据库获取数据出现问题
      	      	  }); 
      	axios.get('http://119.29.201.31:3000/time')
      	              .then((res) => {
      	              if (res.status === 200) {
      	                res = res.data;
      	                console.log(res);
      	                this.chart.setOption({
      	                		 
 			    	        xAxis:{
								data:res
							}
  
      	                })
      	                if (res.errno === ERR_OK) {
      	                  this.seller = Object.assign({}, this.seller, res.data);
      	                }
      	              };
      	            })
      	            .catch(function(err) {
      	                console.log(err); // 从数据库获取数据出现问题
      	      	  });   
      	this.$nextTick(function() {
	        this.drawbar('wenshidu');
	        
	        var that = this;
	        var resizeTimer = null;
	        window.onresize = function() {
	          if (resizeTimer) clearTimeout(resizeTimer);
	          resizeTimer = setTimeout(function() {
	            that.drawbar('wenshidu');
 
	          }, 100);
		}
      });
    }
}
</script>

<style scoped>
  #wenshidu{
    position: relative;
    left: 40%;
    top:2%;
    width: 100%;
    height: 600px;
    margin-left: -45%;
    box-shadow: 0 0 5px #884EA2;
    border-radius: 5px;
  }  
  #gotobedpie {
    margin-top: 30px;
  } 
  @media screen and (max-width: 470px) {
    #gotobedpie {
      height: 500px;
    }
  }
</style>