const comenzar = document.querySelector('#comenzar');
const main = document.querySelector('#main');
const nombre = document.querySelector('#nombre');
const correo = document.querySelector('#correo');

const p1 = document.querySelector('#pregunta1');
const btn1 = document.querySelector('#btn-p1');
const res1 = document.querySelectorAll('input[type="radio"][name="flexRadio"]');

const p2 = document.querySelector('#pregunta2');
const btn2 = document.querySelector('#btn-p2');
const res2 = document.querySelectorAll('input[type="radio"][name="flexRadio2"]');

const p3 = document.querySelector('#pregunta3');
const btn3 = document.querySelector('#btn-p3');
const res3 = document.querySelectorAll('input[type="radio"][name="flexRadio3"]');

const p4 = document.querySelector('#pregunta4');
const btn4 = document.querySelector('#btn-p4');
const res4 = document.querySelectorAll('input[type="radio"][name="flexRadio4"]');

const p5 = document.querySelector('#pregunta5');
const btn5 = document.querySelector('#btn-p5');
const res5 = document.querySelectorAll('input[type="radio"][name="flexRadio5"]');

const p6 = document.querySelector('#pregunta6');
const btn6 = document.querySelector('#btn-p6');
const res6 = document.querySelectorAll('input[type="radio"][name="flexRadio6"]');

const p7 = document.querySelector('#pregunta7');
const btn7 = document.querySelector('#btn-p7');
const res7 = document.querySelectorAll('input[type="radio"][name="flexRadio7"]');

const p8 = document.querySelector('#pregunta8');
const btn8 = document.querySelector('#btn-p8');
const res8 = document.querySelectorAll('input[type="radio"][name="flexRadio8"]');

const p9 = document.querySelector('#pregunta9');
const btn9 = document.querySelector('#btn-p9');
const res9 = document.querySelectorAll('input[type="radio"][name="flexRadio9"]');

const p10 = document.querySelector('#pregunta10');
const btn10 = document.querySelector('#btn-p10');
const res10 = document.querySelectorAll('input[type="radio"][name="flexRadio10"]');

const p11 = document.querySelector('#pregunta11');
const btn11 = document.querySelector('#btn-p11');

const p12 = document.querySelector('#pregunta12');
const btn12 = document.querySelector('#btn-p12');

const p13 = document.querySelector('#pregunta13');
const video = document.querySelector('#video');

comenzar.onclick = function(e) {
  e.preventDefault();
  if (nombre.value != "" && correo.value != "" ) {
    main.style.display = 'none';
    p1.style.display = 'block';
  } else {
    nombre.focus();
  }
};

btn1.onclick = function(e) {
  e.preventDefault();
  if(res1[0].checked || res1[1].checked || res1[2].checked || res1[3].checked) {
    p1.style.display = 'none';
    p2.style.display = 'block';
  } 
}

btn2.onclick = function(e) {
  e.preventDefault();
  if(res2[0].checked || res2[1].checked || res2[2].checked || res2[3].checked) {
    p2.style.display = 'none';
    p3.style.display = 'block';
  } 
}

btn3.onclick = function(e) {
  e.preventDefault();
  if(res3[0].checked || res3[1].checked || res3[2].checked || res3[3].checked) {
    p3.style.display = 'none';
    p4.style.display = 'block';
  } 
}

btn4.onclick = function(e) {
  e.preventDefault();
  if(!res4[1].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p4.style.display = 'none';
      p5.style.display = 'block';
    }, "500");
  }
}

btn5.onclick = function(e) {
  e.preventDefault();
  if(!res5[0].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p5.style.display = 'none';
      p6.style.display = 'block';
    }, "500");
  }
}

btn6.onclick = function(e) {
  e.preventDefault();
  if(!res6[2].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p6.style.display = 'none';
      p7.style.display = 'block';
    }, "500");
  }
}

btn7.onclick = function(e) {
  e.preventDefault();
  if(!res7[1].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p7.style.display = 'none';
      p8.style.display = 'block';
    }, "500");
  }
}

btn8.onclick = function(e) {
  e.preventDefault();
  if(!res8[1].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p8.style.display = 'none';
      p9.style.display = 'block';
    }, "500");;
  }
}

btn9.onclick = function(e) {
  e.preventDefault();
  if(!res9[3].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p9.style.display = 'none';
      p10.style.display = 'block';
    }, "500");
  }
}

btn10.onclick = function(e) {
  e.preventDefault();
  if(!res10[1].checked) {
    Toastify({
      text: "Incorrecto",
      duration: 2000,
      style: {
        background: "red",
      }
    }).showToast();
  } else {
    Toastify({
      text: "Correcto",
      duration: 1000,
      style: {
        background: "green",
      }
    }).showToast();
    setTimeout(() => {
      p10.style.display = 'none';
      p11.style.display = 'block';
    }, "500");
  }
}

btn11.onclick = function(e) {
  e.preventDefault();
  p11.style.display = 'none';
  p12.style.display = 'block';
}

btn12.onclick = function(e) {
  e.preventDefault();
  p12.style.display = 'none';
  p13.style.display = 'block';
  video.autoplay = true;
}