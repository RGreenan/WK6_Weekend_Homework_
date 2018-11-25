document.addEventListener('DOMContentLoaded', () => {

  // CREATE NEW FORM / SAVE BUTTON
  const createNewForm = document.querySelector('#new-item-form');
  createNewForm.addEventListener('submit', submitNewForm);

  // DELETE FORMS
  const deleteAllButton = document.querySelector('#delete-all');
  deleteAllButton.addEventListener('click', deleteAll);
})


//SUBMIT NEW FORM
const submitNewForm = function (event) {
  event.preventDefault();

  const newFormItem = createNewFormItem(event.target);
  const movieList = document.querySelector('#movie-list');
  movieList.appendChild(newFormItem);

  event.target.reset();
};

// NEW FORM ATTRIBUTES
const createNewFormItem = function (form) {

  const newFormItem = document.createElement('ul');
  newFormItem.classList.add('new-form-item');

  const title = document.createElement('h2');
  title.textContent = form.title.value;
  newFormItem.appendChild(title);

  const director = document.createElement('h3');
  director.textContent = form.director.value;
  newFormItem.appendChild(director);

  const genre = document.createElement('p');
  genre.textContent = form.genre.value;
  newFormItem.appendChild(genre);

  return newFormItem;
}

const deleteAll = function (event) {
  const movieList = document.querySelector('#movie-list');
  movieList.innerHTML = 'Movie List Deleted!!!';
}
