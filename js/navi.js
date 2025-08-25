fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

// fetch('modalsearch.html')
//   .then(res => res.text())
//   .then(data => {
//     document.getElementById('modalsearch').innerHTML = data;
//   });

fetch('headline.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('headline').innerHTML = data;
  });

fetch('bestsellers.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('bestsellers').innerHTML = data;
  });

fetch('stores.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('stores').innerHTML = data;
  });
fetch('features.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('features').innerHTML = data;
  });

fetch('items.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('items').innerHTML = data;
  });

fetch('footer.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('footer').innerHTML = data;
  });

fetch('copyright.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('copyright').innerHTML = data;
  });

fetch('category.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('category').innerHTML = data;
  });