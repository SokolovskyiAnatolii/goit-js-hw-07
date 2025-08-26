const categories = document.querySelectorAll('#categories .item');

console.log(`Number of categories: ${categories.length}`);

categories.forEach(category => {
  const { firstElementChild: header, lastElementChild: list } = category;

  list
    .querySelectorAll('li')
    .forEach(element => element.classList.add('option-item'));

  console.log(`Category: ${header.textContent}`);
  console.log(`Elements: ${list.children.length}`);
});