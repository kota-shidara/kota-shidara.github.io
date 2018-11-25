$(function() {
    for (let number = 1; number <= 13; number ++) {
        $('#modal-show_' + number).click(function() {
            $('#modal-painting-wrapper_' + number).fadeIn();
            $('#mask').fadeIn();
            modalResize();
            function modalResize() {
                let w = $(window).width();
                let t = $('#modal-show_' + number).offset().top;
                let cw = $('#modal-painting-wrapper_' + number).outerWidth();
                let chl = $('#modal-painting-wrapper_' + number).outerHeight();
                let chs = $('#modal-show_' + number).outerHeight();
                $('#modal-painting-wrapper_' + number).css( {
                    'left' : (w - cw) / 2 ,
                    'top' : t - (chl - chs)
                });
            }
            $('#mask').click(function() {
                $('#mask').fadeOut();
                $('#modal-painting-wrapper_' + number).fadeOut();
            });
        });
    }
});