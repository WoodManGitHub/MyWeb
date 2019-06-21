$(document).ready(function() {
    $('#fullpage').fullpage({
	    css3: true,
	    scrollingSpeed: 700,
	    autoScrolling: true,
	    fitToSection: true,
	    fitToSectionDelay: 1000,
	    scrollBar: false,
	    easing: 'easeInOutCubic',
	    easingcss3: 'ease',
	    loopBottom: true,
	    loopTop: false,
	    loopHorizontal: true,
	    continuousVertical: false,
	    continuousHorizontal: false,
	    scrollHorizontally: false,
	    interlockedSlides: false,
	    dragAndMove: false,
	    offsetSections: false,
	    resetSliders: false,
	    fadingEffect: false,
	    normalScrollElements: '#element1, .element2',
	    scrollOverflow: false,
	    scrollOverflowReset: false,
	    scrollOverflowOptions: null,
	    touchSensitivity: 15,
	    normalScrollElementTouchThreshold: 5,
	    bigSectionsDestination: null,
	    afterLoad: function(anchorLink, index){
            if(index == 2){
                $('#python_circle').circleProgress({
                    startAngle: - Math.PI / 2,
                    value: 0.7,
                    fill: {color: '#BE77FF'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(70 * progress) + "%");
                });
                $('#HTML_circle').circleProgress({
                    startAngle: - Math.PI / 2,
                    value: 0.75,
                    fill: {color: '#BE77FF'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(75 * progress) + "%");
                });
                $('#nodejs_circle').circleProgress({
                    startAngle: - Math.PI / 2,
                    value: 0.8,
                    fill: {color: '#BE77FF'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(80 * progress) + "%");
                });
                $('#kotlin_circle').circleProgress({
                    startAngle: - Math.PI / 2,
                    value: 0.5,
                    fill: {color: '#BE77FF'}
                }).on('circle-animation-progress', function(event, progress) {
                    $(this).find('strong').html(Math.round(50 * progress) + "%");
                });
            }
        }
	});    
});