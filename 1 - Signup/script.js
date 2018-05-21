$(function() {
    $('.input-area').hide();
    $('.container').hide().slideDown(function() {
        $('.input-area').show(function() {
            $('#email').each(function() {
                $(this).fadeIn(500);
            })
        })
    });
})