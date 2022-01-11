export const calculateScrollbarWidth = () =>
	document.documentElement.style.setProperty(
		"--scrollbar-width",
		`${innerWidth - document.documentElement.clientWidth}px`
	);
