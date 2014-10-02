(function($){
    $(document).on("scroll", onScroll);
    
    //smoothscroll
    $('a[href^="#"]').on('click', function (e) {
        e.preventDefault();
        $(document).off("scroll");
        
        $('a').each(function () {
            $(this).removeClass('active');
        })
        $(this).addClass('active');
      
        var target = this.hash,
            menu = target,
            padding = 145;
        $target = $(target);

        //var padding = $('header').outerHeight;
        //console.log(padding);

        $('html, body').stop().animate({
            'scrollTop': $target.offset().top - padding
        }, 200, 'swing', function () {
            window.location.hash = target;
            $(document).on("scroll", onScroll);
        });
    });
})(jQuery);

function onScroll(event){
    var scrollPos = $(document).scrollTop();
    $('#nav a').each(function () {
        var currLink = $(this);
        var refElement = $(currLink.attr("href"));
        if (refElement.position().top <= scrollPos && refElement.position().top + refElement.height() > scrollPos) {
            $('#nav li a').removeClass("active");
            currLink.addClass("active");
        }
        else{
            currLink.removeClass("active");
        }
    });
}