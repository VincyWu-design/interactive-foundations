function readMore(element) {
  if (element.previousElementSibling.classList.contains('ellipsis-answer')) {
    element.previousElementSibling.classList.remove('ellipsis-answer');
    element.innerHTML = "Show less";
  } else {
    element.previousElementSibling.classList.add('ellipsis-answer');
    element.innerHTML = "Read more";
  }
}

function menu() {
  if (document.getElementById('menu').style.display == 'block') {
  	document.getElementById('menu').style.display = 'none';
  } else {
  	document.getElementById('menu').style.display = 'block';
  }
}