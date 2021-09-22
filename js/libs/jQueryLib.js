// console.log($(document.body))

$('<div />')
    .css({
        margin: '20px auto',
        width: 200,
        height: 150,
        borderRadius: '50%',
        backgroundColor: 'red',
        transition: '.3s all'
    })
    .appendTo($(document.body))
    .hover(function() {
        $(this).css('transform', 'scale(1.1)')
    }, function() {
        $(this).css('transform', 'scale(1)')
    })
    .click(function() {
        const $clone = $(this).clone()

        $clone.css({
            position: 'relative',
            backgroundColor: 'yellow',
            top: 20
        })

        $(document.body).append( $clone)
    })
