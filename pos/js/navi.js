fetch('shops.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('shops').innerHTML = data;
  });

fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

fetch('user.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('user').innerHTML = data;
  });