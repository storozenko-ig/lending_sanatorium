//Opening box with form
function openFormCallBack(btnRequest, classForm, classClosed) {
  const form = document.querySelector(classForm);
  [...document.querySelectorAll(btnRequest)].forEach((el) => {
    el.onclick = (e) => {
      form.style.display = "block";
    };
  });
  document.querySelector(classClosed).onclick = (e) => {
    form.style.display = "none";
    [...form.querySelectorAll("input")].forEach((el) => {
      el.value = "";
    });
  };
}
// Form call back
const PHONE_MASK = "^(\\+7|8)[\\d]{10}$";
const MAIL_MASK = "^[a-zA-z]+\\W?[a-z]+@[a-zA-z]+\\.[a-z]{2,3}$";
const NAME_MASK = "^[a-zA-Zа-яА-Я'][a-zA-Zа-яА-Я-' ]+[a-zA-Zа-яА-Я']?$";

function getMask(name) {
  return name === "phone" ? PHONE_MASK : name === "email" ? MAIL_MASK : NAME_MASK;
}

function test(mask, domElem, domfildError, messageError, messageNotCorrect, className, classNameValue) {
  if (domElem.value === "") {
    domfildError.innerHTML = messageError;
  } else if (new RegExp(getMask(mask)).test(domElem.value)) {
    domfildError.innerHTML = "";
    domElem.setAttribute(className, classNameValue);
  } else {
    domfildError.innerHTML = messageNotCorrect;
  }
}

//Form gallery with zoom
function galleryWithZoom() {
  const arr = document.querySelectorAll(className);
  const form = document.querySelector(classForm);
  const pleca = document.querySelector(classPleca);
  arr.forEach((el, index) => {
    el.onclick = (e) => {
      const slideIndex = index;
      form.style.display = "block";
      pleca.style.opacity = 0;
      setTimeout(surfacing, 350, pleca);
      pleca.src = el.src;
      const rigth = document.querySelector(className);
      btnNext(pleca, slideIndex, arr, rigth);
      const left = document.querySelector(classPrev);
      btnPrev(pleca, slideIndex, arr, left);
    };
  });
  document.querySelector(classFormClosed).onclick = (e) => {
    form.style.display = "none";
    arr.length = 0;
  };
}

function btnNext(pleca, slideIndex, arr, rigth) {
  rigth.onclick = (e) => {
    pleca.style.opacity = 0;
    setTimeout(surfacing, 350, pleca);
    if (slideIndex < arr.length - 1) slideIndex++;
    else slideIndex = 0;
    pleca.src = arr[slideIndex].src;
  };
}

function surfacing(pleca) {
  pleca.style.opacity = 1;
  pleca.style.transition = "opacity 0.2s ease-in-out";
}

function btnPrev(pleca, slideIndex, arr, left) {
  left.onclick = (e) => {
    pleca.style.opacity = 0;
    setTimeout(surfacing, 350, pleca);
    if (slideIndex > 0) slideIndex--;
    else slideIndex = arr.length - 1;
    pleca.src = arr[slideIndex].src;
  };
}

// picturZoom
function picturZoom() {
  const arr = document.querySelectorAll(className);
  const form = document.querySelector(classForm);
  const pleca = document.querySelector(classPleca);
  arr.forEach((el) => {
    el.onclick = (e) => {
      form.style.display = "block";
      pleca.style.opacity = 0;
      setTimeout(oposit, 350, pleca);
      pleca.src = el.src;
    };
  });
  document.querySelector(classFormClosed).onclick = (e) => {
    form.style.display = "none";
    arr.length = 0;
  };
}

//pictureReplacement
function pictureReplacement(obj, pactures, generalImg) {
  const arrObj = document.querySelectorAll(obj);
  arrObj.forEach((el) => {
    const arrPicturs = el.querySelectorAll(pactures);
    const place = el.querySelector(generalImg);
    for (let pictur of arrPicturs) {
      pictur.onclick = (e) => {
        place.src = pictur.src;
      };
    }
  });
}

// smoothScroll
function smoothScroll() {
  const parent = document.querySelector(className);
  const smoothLinks = parent.querySelectorAll("a");
  for (let smoothLink of smoothLinks) {
    smoothLink.onclick = (e) => {
      e.preventDefault();
      const id = smoothLink.getAttribute("href");
      console.log(id);

      document.querySelector(id).scrollIntoView({
        behavior: "smooth",
        block: "start",
        inline: "start",
      });
    };
  }
}
