document.addEventListener('DOMContentLoaded', () => {
	// Add event listeners to buttons
	document.querySelectorAll('button').forEach(button => {
		button.addEventListener('click', () => {
			const sectionId = button.parentNode.id;
			const section = document.getElementById(sectionId);
			const content = section.querySelector('div');
			content.classList.toggle('visible');
		});
	});
});