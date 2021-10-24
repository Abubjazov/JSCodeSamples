import $ from 'jquery'

$(function() {
    $('p1').mouseenter((e) => e.target.style.color = 'red').mouseleave((e) => e.target.style.color = 'green')
})
