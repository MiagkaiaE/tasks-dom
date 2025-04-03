// задача 1
// первый способ
const firstLi = document.querySelector('li.active a:first-child');
console.log(firstLi);
console.log(firstLi.matches("[href = '#about']"));
// второй способ
const liFirst = document.querySelector('li.active').children[0]
console.log(liFirst);
console.log(liFirst.matches("[href = '#about']"));
// третий способ
const lf = document.querySelector('li.active').firstElementChild;
console.log(lf);
console.log(lf.getAttribute('href') === '#about');

// задача 2
const allP = document.querySelectorAll('.content p');
console.log(allP);
for (let p of allP) {
	if (p.closest('[data-type="news"]')) {
		console.log(p.textContent);
	}
}
// второй вариант
for (let p of allP) {
	if (p.parentElement.getAttribute('data-type') === 'news') {
	  console.log(p.textContent);
	}
};
// третий вариант
const articleNews = document.querySelector('[data-type="news"]');
for (let p of allP) {
	if (p.parentElement === articleNews) {
		console.log(p.textContent);
	}
}