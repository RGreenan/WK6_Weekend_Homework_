document.addEventListener('DOMContentLoaded', () => {

  // CREATE NEW FORM
  const createNewForm = document.querySelector('#new-item-form');
  createNewForm.addEventListener('submit', submitNewForm);

  // DELETE FORMS
  // const deleteAllButton = document.querySelector('#delete-all');
  // deleteAllButton.addEventListener('click', handleDeleteAllClick);
})

const submitNewForm = function (event) {
  event.preventDefault();

  const createNewForm = createNewFormItem(event.target);
  const movieList = document.querySelector('#movie-list');
  movieList.appendChild(createNewForm);

  event.target.reset();


};

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
