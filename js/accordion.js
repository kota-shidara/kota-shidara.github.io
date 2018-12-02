$(function() {
    $('[data-accordion-btn]').click(function() {
        let target = $(this).data('accordion-btn');
        $(`[data-accordion-target=${target}]`).slideToggle();
        $(`[data-accordion-btn=${target}]`).toggleClass('is-hiden');
        console.log(target);
    });
});