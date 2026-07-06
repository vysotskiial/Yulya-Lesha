document.getElementById("confettiBtn").addEventListener("click", () => {
	const duration = 1000;
	const end = Date.now() + duration;

	(function frame() {
		confetti({
			particleCount: 7,
			angle: 60,
			spread: 60,
			startVelocity: 45,
			gravity: 1.2,
			drift: 0.1,
			ticks: 100,
			scalar: 1.1,
			colors: ["#bb0000", "#ffffff", "#00bb00", "#0000bb", "#ffbb00"],
			shapes: ["square", "circle"]
		});

		confetti({
			particleCount: 7,
			angle: 120,
			spread: 60,
			startVelocity: 45,
			gravity: 1.2,
			drift: -0.1,
			ticks: 100,
			scalar: 1.1,
			colors: ["#bb0000", "#ffffff", "#00bb00", "#0000bb", "#ffbb00"],
			shapes: ["square", "circle"]
		});

		if (Date.now() < end) requestAnimationFrame(frame);
	})();
});
