const hasTooltip = document.querySelectorAll('.has-tooltip');

hasTooltip.forEach(tip => {
	tip.insertAdjacentHTML('afterEnd', '<div class="tooltip"></div>');
	tip.addEventListener('click', function (event) {
		event.preventDefault();
		let { left, bottom } = tip.getBoundingClientRect();
		let toolTip = tip.nextElementSibling;
		toolTip.style.top = `${bottom}px`;
		toolTip.style.left = `${left}px`;
		toolTip.textContent = tip.getAttribute('title');
        toolTip.classList.toggle('tooltip_active');
	})
})