const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(tip => {
	tip.insertAdjacentHTML('afterEnd', '<div class="tooltip"></div>');
	tip.addEventListener('click', function (event) {
		event.preventDefault();
		let toolTip = tip.nextElementSibling;
		toolTip.style.position = 'absolute';
		toolTip.style.left = `${tip.getBoundingClientRect().left}px`;
		toolTip.textContent = tip.getAttribute('title');
        toolTip.classList.toggle('tooltip_active');
	})
})
