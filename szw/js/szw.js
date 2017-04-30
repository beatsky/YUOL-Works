function $(element) {
	if(arguments.length > 1) {
		for(var i = 0, length = arguments.length, elements = []; i < length; i++) {
			elements.push($(arguments[i]));
		}
		return elements;
	}
	if(typeof element == "string") {
		return document.getElementById(element);
	} else {
		return element;
	}
}
var Class = {
	create: function() {
		return function() {
			this.initialize.apply(this, arguments);
		}
	}
}
Function.prototype.bind = function(object) {
	var method = this;
	return function() {
		method.apply(object, arguments);
	}
}
var Scroll = Class.create();
Scroll.prototype = {
	initialize: function(element, height) {
		this.element = $(element);
		this.element.innerHTML += this.element.innerHTML;
		this.height = height;
		this.maxHeight = this.element.scrollHeight / 2;
		this.counter = 0;
		this.scroll();
		this.timer = "";
		this.element.onmouseover = this.stop.bind(this);
		this.element.onmouseout = function() {
			this.timer = setTimeout(this.scroll.bind(this), 1000);
		}.bind(this);
	},
	scroll: function() {
		if(this.element.scrollTop < this.maxHeight) {
			this.element.scrollTop++;
			this.counter++;
		} else {
			this.element.scrollTop = 0;
			this.counter = 0;
		}
		if(this.counter < this.height) {
			this.timer = setTimeout(this.scroll.bind(this), 20);
		} else {
			this.counter = 0;
			this.timer = setTimeout(this.scroll.bind(this), 3000);
		}
	},
	stop: function() {
		clearTimeout(this.timer);
	}
}
var myscroll = new Scroll("myscroll", 24);

window.onload = function() {
	//轮播速度
	var speed = 5000;

	var oCarousel = document.getElementById('carousel');
	oUl = oCarousel.getElementsByTagName('ul')[0],
		aLi = oUl.getElementsByTagName('li'),
		oPrev = document.getElementById('prev'),
		oNext = document.getElementById('next');
	//复制第一张图片并插入到末尾
	var imgFirst = aLi[0].cloneNode(true);
	oUl.appendChild(imgFirst);

	oUl.style.width = aLi[0].offsetWidth * aLi.length + 'px';

	var iNow = 1;

	var timer = null;
	timer = setInterval(startMove, speed);

	oCarousel.onmouseover = function() {
		clearInterval(timer);
	};
	oCarousel.onmouseout = function() {
		timer = setInterval(startMove, speed);

	};
	oPrev.onclick = function() {
		startMove();
	};
	oNext.onclick = function() {
		startMove();
	};

	function startMove() {
		if(iNow < 0) {
			iNow = aLi.length - 1;
		}
		if(iNow > aLi.length - 1) {
			iNow = 0;
		}
		var iTager = -iNow * aLi[0].offsetWidth;
		move(oUl, iTager);
		iNow++;
	}
	//缓慢运动框架
	function move(obj, iTager) {
		clearInterval(obj.timer);
		obj.timer = setInterval(function() {

			var iCur = 0;
			iCur = obj.offsetLeft;
			var iSpeed = (iTager - iCur) / 10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			obj.style.left = iCur + iSpeed + 'px';
			//如果将要像第一张滚动，那么瞬间滚动到第一张并且开始向第二张滚动
			if(iTager == 0) {
				oUl.style.left = '0';
				startMove();
			}
		}, 30);
	}

}