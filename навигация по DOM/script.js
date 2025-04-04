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

// задача 3
const pHighlight = document.querySelector('p.highlight');
console.log(pHighlight);
// выведет элемент, если родитель соотвествует
console.log(pHighlight.parentElement.closest('div#root'));
// вывод true или false
console.log(!!pHighlight.parentElement.closest('div#root'));


// второй вариант
const pHighlightParent = pHighlight.closest('article');
console.log(pHighlightParent);
console.log(!!pHighlightParent.closest('div#root'))

// задача 4
const h1Title = document.querySelector('h1.title');
console.log(h1Title);
const h1TitleParent = h1Title.parentElement
console.log(h1TitleParent.childNodes.length);
if (h1Title.nextElementSibling) {
	console.log(h1Title.nextElementSibling.textContent);
};

// второй вариант
const parentTitle = h1Title.closest('header');
console.log(parentTitle.childNodes.length);
if (h1Title.nextElementSibling) {
	console.log(h1Title.nextElementSibling.textContent);
}

// задача 5
// первый вариант
const users = document.getElementById('users');
console.log(users)
for (let tr of users.rows) {
	if (tr.classList.contains('user-row')) {
		console.log(tr.cells[0].textContent)
	}
};
console.log(users.rows[0].cells[1].matches('.age'));

// второй вариант
for (let tr of users.rows) {
	if (tr.matches('.user-row')) {
		console.log(tr.cells[0].textContent)
	}
};
const usersTh = users.rows[0];
console.log(usersTh);
console.log(usersTh.cells[1].matches('.age'))

// третий
const userRow = document.querySelector('tr.user-row') 
if (users.contains(userRow)) {
	console.log(userRow.cells[0].textContent)
}
console.log(users.rows[0].cells[1].matches('.age'));
