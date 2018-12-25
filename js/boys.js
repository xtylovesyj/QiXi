
var boy = $('#boy');
//页面可视区域
var visualWidth = $('#content').width();
var visualHeight = $('#content').height();
var boys = {

	/*根据方向和相应的比例来计算移动的距离*/
	calculateDist:function(direction,proportion){

		return(direction == "x" ? visualWidth : visualHeight) * proportion;

	},

	/**
	 * [boyStartRun description]
	 * @return {[type]} [description]
	 * direction:让小男孩水平走起来
	 */
	boyStartRun:function(time,delayTime){
		boy.css({

			'transition-property':'left',
			'transition-duration':time,
			'transition-delay':delayTime,
			'transition-timing-function':'linear',
			'-moz-transition-property':'left',
			'-moz-transition-duration':time,
			'-moz-transition-delay':delayTime,
			'-moz-transition-timing-function':'linear',
			'-webkit-transition-property':'left',
			'-webkit-transition-duration':time,
			'-webkit-transition-delay':delayTime,
			'-webkit-transition-timing-function':'linear',
			'-o-transition-property':'left',
			'-o-transition-duratin':time,
			'-o-transition-delay':delayTime,
			'-o-transition-timing-function':'linear'
		})
		boy.css({
			left:this.calculateDist('x',0.5)
		})
	},
	/*让小男孩垂直走起来*/
	boyStartVerticalRun:function(time,delayTime){

		var dtd = $.Deferred();


		setTimeout(function(){

			boy.animate({
				top:'23%'
			},time,function(){

				dtd.resolve();
			})

		},delayTime);

		return dtd;
		
	},
	/*男孩开始摆动*/
	boyStartVibrate:function(){

		boy.addClass('slowWalk');
	},

	/*男孩暂定摆动*/
	boyPasueVibrate:function(){

		boy.addClass('boyPasueWalk');
	},

	/*男孩重新摆动*/
	boyRestartVibrate:function(){

		boy.removeClass('boyPasueWalk');
	},

	boyTestDeferred:function(){

		var dfdPlay =$.Deferred();

		/*deferred的用法*/
		boy.animate({
			left:500
		},1000,function(){
			
		})

			return dfdPlay;
	}
}

module.exports = boys;