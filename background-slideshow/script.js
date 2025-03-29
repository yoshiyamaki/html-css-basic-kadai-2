'use strict';
jQuery(function($){
$('#mainvisual').vegas({
slides:[
{src:'img/space.jpg'},
{src:'img/constellations.jpg'},
{src:'img/universe.jpg'},
// {src:'img/sikaku.jpg'}
],
transition: 'fade',
transitionDuration: 4000,
delay: 18000,
cover:true,
animation: 'random',
animationDuration: 20000,
timer: true
});
});