(function () {
	//	在ios系统的移动设备中, 需要在按钮元素或body/html上绑定一个touchstart事件才能激活:active状态。
    document.body.addEventListener('touchstart', function () { }); 
    
    // 设置初始化的font-size的大小
    document.addEventListener('DOMContentLoaded', function () {
        var html = document.documentElement;
        var windowWidth = html.clientWidth;
        html.style.fontSize = windowWidth / 3.75 + 'px';
//      html.style.fontSize = windowWidth / 3.2 + 'px';
        // 等价于html.style.fontSize = windowWidth / 640 * 100 + 'px';
    }, false);
    
    
//  //搜索跳转
//  if(document.getElementById("lb-search-text")!=undefined){
//		document.getElementById("lb-search-text").addEventListener("click", function( event ) {
//		    window.location.href="search.html";
//		  }, false);
//	}
    
	//应用设置跳转
    if(document.getElementById("return-index")!=undefined){
		document.getElementById("return-index").addEventListener("click", function( event ) {
		    window.location.href="app-mange.html";
		  }, false);
	}
    
    //应用设置跳转
    if(document.getElementById("recording")!=undefined){
		document.getElementById("recording").addEventListener("click", function( event ) {
		    document.getElementById("recording-cont").style.display="block";
		    document.getElementById("mask").style.display="block";
		  }, false);
	}
})();