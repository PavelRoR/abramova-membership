$(document).ready(function() {

    /* Якорь */
    $(function () {
        $("a[href='#prices']").click(function (h) {
            h.preventDefault();
            var f = $(this).attr("href"),
                g = $(f).offset().top;
            $("body,html").animate({
                scrollTop: g
            }, 1500)
        });
    });
    /* Видео */
	$(".video_wrapper img").click(function () {
		var a = $(this).parent().attr("data-youtube");
		$(this).parent().html('<iframe src="https://www.youtube.com/embed/' + a + '?showinfo=0&rel=0&autoplay=1" allowfullscreen></iframe>')
    });
    /* Отзывы */
	$('#reviews').owlCarousel({
		loop: true,
		margin: 20,
		nav: true,
		navText: ["", ""],
		dots: false,
		items: 1,
		autoHeightClass: 'owl-height',
		autoHeight: true
	})
/*Конец документа*/
});