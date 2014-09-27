(function($){
	$('.tabgroup > div').hide();
	$('.tabgroup > div:first-of-type').show();
	$('.tabs a').mouseover(function(e){

	    var $this = $(this),
	        tabgroup = '#'+$this.parents('.tabs').data('tabgroup'),
	        others = $this.closest('li').siblings().children('a'),
	        target = $this.attr('href');
	        
	    others.removeClass('active');
	    $this.addClass('active');
	    $(tabgroup).children('div').hide();
	    $(target).show();

	});
})(jQuery);