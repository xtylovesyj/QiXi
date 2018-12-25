module.exports = function(){

			var container = $('#content');

			var element = container.find(':first');  //就是content-wrap//相对定位


			var slides = element.find("li");


			var width = container.width();
			var height = container.height();

			element.css({
				width:(slides.length * width) + 'px',
				height:height + 'px'

			});

			//设置每一个页面li的宽度
			$.each(slides,function(index){

					var slide = slides.eq(index);

					slide.css({
						width:width + 'px',
						height: height + 'px'
					});
			});

};






