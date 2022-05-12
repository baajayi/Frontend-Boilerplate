
// // Grab DOM element using id

// const form = document.getElementsByTagname('form')[0];

// // const [input,button] = form.elements;
// const input = form.elements.searchInput;

// input.addEventListener('focus', () => alert('focused'), false);
// input.addEventListener('change', () => alert('changed'), false);
// // const form = document.forms['search'];
// form.addEventListener ('submit', search, false);

// function search() {
//     alert(' Form Submitted');

// }
// function search(event) {
//   alert('Form Submitted');
//   event.preventDefault();
// }
// input.addEventListener('focus', function(){
//   if (input.value==='Search Here') {
//       input.value = '' 
//   }
// }, false);

// input.addEventListener('blur', function(){
//   if(input.value === '') {
//       input.value = 'Search Here';
//   } }, false);

document.querySelector("#year").innerHTML = new Date().getFullYear()
document.querySelector("#date").innerHTML = new Date(document.lastModified).toLocaleString()
