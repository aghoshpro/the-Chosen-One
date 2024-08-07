"use strict";

// element toggle function
const elementToggleFunc = function (elem) {
	elem.classList.toggle("active");
};

// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () {
	elementToggleFunc(sidebar);
});

// testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// modal variable
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// modal toggle function
const testimonialsModalFunc = function () {
	modalContainer.classList.toggle("active");
	overlay.classList.toggle("active");
};

// add click event to all modal items
for (let i = 0; i < testimonialsItem.length; i++) {
	testimonialsItem[i].addEventListener("click", function () {
		modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
		modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
		modalTitle.innerHTML = this.querySelector(
			"[data-testimonials-title]"
		).innerHTML;
		modalText.innerHTML = this.querySelector(
			"[data-testimonials-text]"
		).innerHTML;

		testimonialsModalFunc();
	});
}

// add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-selecct-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () {
	elementToggleFunc(this);
});

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
	selectItems[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		elementToggleFunc(select);
		filterFunc(selectedValue);
	});
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
	for (let i = 0; i < filterItems.length; i++) {
		if (selectedValue === "all") {
			filterItems[i].classList.add("active");
		} else if (selectedValue === filterItems[i].dataset.category) {
			filterItems[i].classList.add("active");
		} else {
			filterItems[i].classList.remove("active");
		}
	}
};

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
	filterBtn[i].addEventListener("click", function () {
		let selectedValue = this.innerText.toLowerCase();
		selectValue.innerText = this.innerText;
		filterFunc(selectedValue);

		lastClickedBtn.classList.remove("active");
		this.classList.add("active");
		lastClickedBtn = this;
	});
}

// contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
	formInputs[i].addEventListener("input", function () {
		// check form validation
		if (form.checkValidity()) {
			formBtn.removeAttribute("disabled");
		} else {
			formBtn.setAttribute("disabled", "");
		}
	});
}

// page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
	navigationLinks[i].addEventListener("click", function () {
		for (let i = 0; i < pages.length; i++) {
			if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
				pages[i].classList.add("active");
				navigationLinks[i].classList.add("active");
				window.scrollTo(0, 0);
			} else {
				pages[i].classList.remove("active");
				navigationLinks[i].classList.remove("active");
			}
		}
	});
}

// Toggle Theme

const btn = document.querySelector(".btn-toggle");
const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: dark)");
const currentTheme = localStorage.getItem("theme");
const moonIcon = document.querySelector(".btn-toggle .moon");
const sunIcon = document.querySelector(".btn-toggle .sun");

function setTheme(theme) {
	if (theme === "dark") {
		document.body.classList.add("dark-theme");
		document.body.classList.remove("light-theme");
		moonIcon.style.display = "none";
		sunIcon.style.display = "inline-block";
	} else {
		document.body.classList.add("light-theme");
		document.body.classList.remove("dark-theme");
		moonIcon.style.display = "inline-block";
		sunIcon.style.display = "none";
	}
	localStorage.setItem("theme", theme);
}

if (currentTheme) {
	setTheme(currentTheme);
} else {
	setTheme(prefersDarkScheme.matches ? "dark" : "light");
}

btn.addEventListener("click", function () {
	if (document.body.classList.contains("dark-theme")) {
		setTheme("light");
	} else {
		setTheme("dark");
	}
});

// Listen for changes in system theme
prefersDarkScheme.addEventListener("change", (e) => {
	setTheme(e.matches ? "dark" : "light");
});

// // Toggle Theme

// const btn = document.querySelector(".btn-toggle");
// const prefersDarkScheme = window.matchMedia("(prefers-color-scheme: light)");
// const currentTheme = localStorage.getItem("theme");

// if (currentTheme == "dark") {
// 	document.body.classList.toggle("dark-theme");
// } else if (currentTheme == "light") {
// 	document.body.classList.toggle("light-theme");
// }

// btn.addEventListener("click", function () {
// 	if (prefersDarkScheme.matches) {
// 		document.body.classList.toggle("light-theme");
// 		var theme = document.body.classList.contains("light-theme")
// 			? "light"
// 			: "dark";
// 	} else {
// 		document.body.classList.toggle("dark-theme");
// 		var theme = document.body.classList.contains("dark-theme")
// 			? "dark"
// 			: "light";
// 	}
// 	localStorage.setItem("theme", theme);
// });

/**
 * back to top & header
 */

const header = document.querySelector("[data-header]");

const backTopBtn = document.querySelector("[data-back-to-top]");

window.addEventListener("scroll", function () {
	if (window.scrollY >= 250) {
		header.classList.add("active");
		backTopBtn.classList.add("active");
	} else {
		header.classList.remove("active");
		backTopBtn.classList.remove("active");
	}
});
