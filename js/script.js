$(function() {
    for (let number = 1; number <= 13; number ++) {
        $('#painting-modal-show_' + number).click(function() {
            $('#painting-modal-wrapper_' + number).fadeIn();
            $('#mask').fadeIn();
            modalResize();
            $('#mask').click(function() {
                $('#mask').fadeOut();
                $('#painting-modal-wrapper_' + number).fadeOut();
            });

            function modalResize() {
                let w = $(window).width();
                let t = $('#painting-modal-show_' + number).offset().top;
                let cw = $('#painting-modal-wrapper_' + number).outerWidth();
                let chl = $('#painting-modal-wrapper_' + number).outerHeight();
                let chs = $('#painting-modal-show_' + number).outerHeight();
                $('#painting-modal-wrapper_' + number).css( {
                    'left' : (w - cw) / 2 ,
                    'top' : t - (chl - chs)
                });
            }
        });
    }
});