
var page2 = {


	cloudRun:function(){

		$('.cloud2').addClass('cloudRun');
		$('.cloud1').addClass('cloudRun');
	},

	/*开左边门*/
	openLeftDoor:function(){

		var dtd = $.Deferred();

		$('.door-left').animate({
			left:'-50%'
		},5000,function(){

			dtd.resolve();
		});

		return dtd;
	},

	/*关左边的们*/
	closeLeftDoor:function(){

		var dtd = $.Deferred();

		$('.door-left').animate({
			left:'0%'
		},2000,function(){
			dtd.resolve();
		})

		return dtd;
	},

	/*开右边的们*/
	openRightDoor:function(){
		var dtd = $.Deferred();
		$('.door-right').animate({
			left:'100%'
		},5000,function(){

				dtd.resolve();
		})

		return dtd;
	},

	/*关右边的门*/
	closeRightDoor:function(){

		var dtd = $.Deferred();
		$('.door-right').animate({
			left:'50%'
		},2000,function(){

			dtd.resolve();
		})

		return dtd;
	},
	/*按延迟时间开门*/
	openDoorByDelayTime:function(delayTime){

		var dtd = $.Deferred();
		var that = this;

		setTimeout(function(){

			that.openRightDoor();
			that.openLeftDoor().then(function(){

				dtd.resolve();
			});

		},delayTime);

		return dtd;
	},

	/*按延时关门*/
	closeDoorByDelayTime:function(){

		var dtd = $.Deferred();
		var that = this;

			that.closeRightDoor();
			that.closeLeftDoor().then(function(){

				dtd.resolve();
			})
		return dtd;
	},

	/*小男孩走进门里*/
	toDoor:function(){

			/*先得到门的左边的偏移量*/
			var shopOffset =  $('.shop').offset();
			var shopLeft = shopOffset.left;
			var boyOffset = $('#boy').offset();
			var boyLeft = boyOffset.left;


	}

}

module.exports = page2;