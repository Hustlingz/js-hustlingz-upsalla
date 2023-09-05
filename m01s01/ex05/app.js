var inputRadius = document.getElementById('radius');
var inputResult = document.getElementById('result');
var form = document.querySelector('form');

form.addEventListener(
  'submit',

  function (event) {
    event.preventDefault();

    var radius = inputRadius.value || 0;
    var result = 0;

    result = Math.PI * (4 / 3) * Math.pow(radius, 3);

    elementResult.innerText = result;
  },
  false,
);
