function review_load(){
	var btn = document.querySelector(".header .row_3");
	var btn_cls = document.querySelector(".header .row_2 .cls_btn");
	var slide = document.querySelector(".header .row_2");

	function close_slide(){
		slide.style.left="-100%";
		btn.style.visibility="visible";
	}

	function show_slide(){
		slide.style.left="0%";
		btn.style.visibility="hidden";
	}

	btn.addEventListener("click",show_slide,false);
	btn_cls.addEventListener("click",close_slide,false);
}

window.addEventListener("load",review_load,false);