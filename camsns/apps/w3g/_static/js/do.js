$(document).ready(function(){
	menu_button=$("#menu_button");
	shadow=$("#shadow");
	menu=$("#menu");
	write_button=$("#write_button");
	post_twitter=$("#post_twitter");
	post_twitter_input=$("#post_twitter_input");
	if_menu_button=0;
	if_twitter_button=0;
	//设置APP
	app_search=$("#app_search");
	app_i=$("#app_i");
	menu_button.click(function(){
		if(if_twitter_button==1){
			shadow.hide();
			post_twitter.hide();
		}
		// shadow.toggle();
		// menu.toggle();
		write_button.removeClass("write_button_active");
		if(if_menu_button==0){
			shadow.fadeIn(300);
			menu.slideDown(300);
			menu_button.addClass("menu_button_active");
			if_menu_button=1;
		}else{
			shadow.fadeOut(300);
			menu.slideUp(300);
			menu_button.removeClass("menu_button_active");
			if_menu_button=0;
		}
	});
	write_button.click(function(){
		if(if_menu_button==1){
			shadow.hide();
			menu.hide();
		}
		// shadow.toggle();
		// post_twitter.toggle();
		menu_button.removeClass("menu_button_active");
		if(if_twitter_button==0){
			shadow.fadeIn(300);
			post_twitter.slideDown(300);
			post_twitter_input.focus();
			write_button.addClass("write_button_active");
			if_twitter_button=1;
		}else{
			shadow.fadeOut(300);
			post_twitter.slideUp(300);
			if_twitter_button=0;
			write_button.removeClass("write_button_active");
		}
	})
	shadow.click(function(){
		shadow.hide();
		menu.hide();
		post_twitter.hide();
		menu_button.removeClass("menu_button_active");
		write_button.removeClass("write_button_active");
		if_menu_button=0;
		if_twitter_button=0;
	});
	//app跳转
	app_search.click(function(){
		  location.href="search.html";
	});
	
	app_i.click(function(){
		  location.href="i.html";
	});
	//4demo
	function demo2url(div,page){
		$("#"+div).click(function(){
		location.href=page+".html";
		});
	}
	demo2url('search_0','search_r');
	demo2url('logo','index');
	demo2url('i_logo','index');
	demo2url('login','index');
	demo2url('sets_1','sets_2');
	demo2url('sets_2','sets_3');
	demo2url('sets_3','sets_jbxx');
	demo2url('sets_jbxx','sets');
	demo2url('app_sets','sets');
	demo2url('app_msg','msg');
	demo2url('app_weiba','weiba_i');
	demo2url('msg_1','msg_2');
	demo2url('msg_2','msg_3');
	demo2url('msg_3','msg_topic');
	demo2url('msg_4','msg');
	demo2url('i_weibo','i_guanzhu');
	demo2url('i_guanzhu','i_fensi');
	demo2url('i_fensi','i');
	demo2url('weiba_i','weiba_tj');
	demo2url('weiba_tj','weiba_list');
	demo2url('weiba_list','weiba_i');
	demo2url('weibo_2','index_3');
	demo2url('weibo_3','index_4');
	demo2url('weibo','index_2');
	demo2url('index_6_weibo','index');
});