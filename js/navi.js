fetch('spinner.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('spinner').innerHTML = data;
  });

fetch('navbar.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('navbar').innerHTML = data;
  });

fetch('modalsearch.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('modalsearch').innerHTML = data;
  });

fetch('headline.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('headline').innerHTML = data;
  });

fetch('features.html')
  .then(res => res.text())
  .then(data => {
    document.getElementById('features').innerHTML = data;
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