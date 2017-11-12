anime({
	targets: '#lineDrawing .lines path',
	strokeDashoffset: [anime.setDashoffset, 0],
	easing: 'easeOutSine',
	duration: 1000,
	delay: function(el, i) { return i * 250 },
	direction: 'alternate',
	loop: false,
	complete: function() {
		anime({
			targets: '#lineDrawing',
			translateY: "-4vh",
			duration: 1000,
			easing: 'easeOutSine'
		});
		anime({
			targets: '#subtitle',
			opacity: 1,
			duration: 1500,
			easing: 'easeInSine'
		});
		anime({
			targets: '.line, .border',
			opacity: 1,
			duration: 1500,
			easing: 'easeInSine'
		});
	}
});
