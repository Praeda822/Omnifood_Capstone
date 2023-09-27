console.log("Hello World");

const myName = "Patrick Kelly";
const h1 = document.querySelector(".heading-primary");
console.log(myName);
console.log(h1);

// const (constant) is a container that holds a value that cannot be changed
// so the constant, h1, is declared as the class .heading primary
// Then we console.log the constant, myName, and the constant, h1
// Naming convention for ALL functions is to capitalize the first letter of the second word

h1.addEventListener("click", function () {
	h1.textContent = myName;
	h1.style.backgroundColor = "red";
	h1.style.padding = "5rem";
});

// Here I'm adding an event listener to the h1 constant to listen for a click and I declare the function with empty () to run the following when the click happens:
// 1. Change the text content of the h1 constant to the value of the myName constant
// 2. Change the background color of the h1 constant to red
// 3. Change the padding of the h1 constant to 5rem

const yearEl = document.querySelector(".year");
const currentYear = new Date().getFullYear();
console.log(currentYear);
yearEl.textContent = currentYear;

// Here I declare the constant yearEl as the class .year
// Then I declare the constant currentYear as the current year
// Then I console.log the currentYear constant
// Then I change the text content of the yearEl constant to the value of the currentYear constant

// const mainNavItemEl = document.querySelector(".main-nav-item");
// const headerEl = document.querySelector(".header");

// btnNavEl.addEventListener("click", function () {
// mainNavItemEl.classList.toggle("nav-open");

///////////////////////////////////////////////////////////
//Making the mobile navigation work////////////////////////
///////////////////////////////////////////////////////////

const btnNavEl = document.querySelector(".btn-mobile-nav");
const headerEl = document.querySelector(".header");

btnNavEl.addEventListener("click", function () {
	headerEl.classList.toggle("nav-open");
});

// Here I declare the constant btnNavEl as the class .btn-mobile-nav
// Then I declare the constant headerEl as the class .header
// Then I add an event listener to the btnNavEl constant to listen for a click and I declare the function with empty () to run the following when the click happens:
// 1. Toggle the class nav-open on the headerEl constant
// 2. The nav-open class is declared in the header.scss file and it has a display of flex and a height of 100vh
// 3. The nav-open class is toggled on and off when the btnNavEl constant is clicked

///////////////////////////////////////////////////////////
//Smooth Scrolling Animation///////////////////////////////
///////////////////////////////////////////////////////////

const allLinks = document.querySelectorAll("a:link");
console.log(allLinks);
allLinks.forEach(function (link) {
	link.addEventListener("click", function (e) {
		e.preventDefault();
		const href = link.getAttribute("href");
		console.log(href);

		//scroll back to top
		if (href === "#")
			window.scrollTo({
				top: 0,
				behavior: "smooth",
			});

		//scroll to other sections
		if (href !== "#" && href.startsWith("#")) {
			const sectionEl = document.querySelector(href);
			sectionEl.scrollIntoView({ behavior: "smooth" });
		}

		// close mobile navigation
		if (link.classList.contains("main-nav-link")) {
			headerEl.classList.toggle("nav-open");
		}
	});
});

///////////////////////////////////////////////////////////
// Sticky navigation///////////////////////////////////////
///////////////////////////////////////////////////////////
const sectionHeroEl = document.querySelector(".section-hero");

const obs = new IntersectionObserver(
	function (entries) {
		const ent = entries[0];

		if (ent.isIntersecting === false) {
			console.log(ent);
			document.querySelector(".header").classList.add("sticky");
		}
	},

	{
		//Within viewport
		root: null,
		threshold: 0,
		rootMargin: "-50px",
	}
);
obs.observe(sectionHeroEl);

///////////////////////////////////////////////////////////
// Fixing flexbox gap property missing in some Safari versions
function checkFlexGap() {
	var flex = document.createElement("div");
	flex.style.display = "flex";
	flex.style.flexDirection = "column";
	flex.style.rowGap = "1px";

	flex.appendChild(document.createElement("div"));
	flex.appendChild(document.createElement("div"));

	document.body.appendChild(flex);
	var isSupported = flex.scrollHeight === 1;
	flex.parentNode.removeChild(flex);
	console.log(isSupported);

	if (!isSupported) document.body.classList.add("no-flexbox-gap");
}
checkFlexGap();

// https://unpkg.com/smoothscroll-polyfill@0.4.4/dist/smoothscroll.min.js

/*
.no-flexbox-gap .main-nav-list li:not(:last-child) {
  margin-right: 4.8rem;
}

.no-flexbox-gap .list-item:not(:last-child) {
  margin-bottom: 1.6rem;
}

.no-flexbox-gap .list-icon:not(:last-child) {
  margin-right: 1.6rem;
}

.no-flexbox-gap .delivered-faces {
  margin-right: 1.6rem;
}

.no-flexbox-gap .meal-attribute:not(:last-child) {
  margin-bottom: 2rem;
}

.no-flexbox-gap .meal-icon {
  margin-right: 1.6rem;
}

.no-flexbox-gap .footer-row div:not(:last-child) {
  margin-right: 6.4rem;
}

.no-flexbox-gap .social-links li:not(:last-child) {
  margin-right: 2.4rem;
}

.no-flexbox-gap .footer-nav li:not(:last-child) {
  margin-bottom: 2.4rem;
}

@media (max-width: 75em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 3.2rem;
  }
}

@media (max-width: 59em) {
  .no-flexbox-gap .main-nav-list li:not(:last-child) {
    margin-right: 0;
    margin-bottom: 4.8rem;
  }
}
*/
