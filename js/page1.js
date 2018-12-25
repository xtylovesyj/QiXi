var container = $('#content');
var element = container.find(':first');  //就是content-wrap//相对定位
var width = element.children().width();

var page1 ={

		/*通过css来实现换页*/
		pageScroll:function(delayTime,durationTime,pageNum){

			var dtd = $.Deferred(); //生成deferred对象

		element.css({
		'transition-delay':delayTime,
		'transition-timing-function':'linear',
		'transition-duration':durationTime,
		'transform':'translate3d(' +(-(width * pageNum)) +'px,0px,0px)'
		});

		
		return dtd;
	},

	/*通过jquery来实现换页*/
	pageScrollAnimate:function(delayTime,time){

		var dtd = $.Deferred();

		setTimeout(function(){

				element.animate({
				left:(-width)
			},time,function(){
				dtd.resolve();
			})
		},delayTime);
		
		return dtd;
	}

}

module.exports = page1;