function openFormCallBack() {
  const form = document.querySelector(".popup-form");
  [...document.querySelectorAll(".popup-btn")].forEach((el) => {
    el.onclick = (e) => {
      form.style.display = "block";
    };
  });
  document.querySelector(".popur-form-closed").onclick = (e) => {
    form.style.display = "none";
    [...form.querySelectorAll("input")].forEach((el) => {
      el.value = "";
    });
  };
}

//Form call back
//
//messageName
const nameError = "Поле обязательно для заполнения";
const nameNotCorrect = "Проверьте поле имя";
// messagePhone
const phoneError = "Поле обязательно для заполнения";
const phoneNotCorrect = "Некооректный номер телефона";
//messageEmail
const emailError = "Поле обязательно для заполнения";
const emailNotCorrect = "Некооректный почтовый адрес";

[...document.querySelectorAll(".popup-form-inner")].forEach((el) => {
  let nameFildError = el.querySelector(".fild-error-one");
  let phoneFildError = el.querySelector(".fild-error-two");
  let emailFildError = el.querySelector(".fild-error-three");
  el.querySelector(".fild-contener-bth").onclick = (evt) => {
    evt.preventDefault();
    for (let input of el.querySelectorAll(".input-all")) {
      if (input.dataset.validatio === "name") {
        test(input.dataset.validatio, input, nameFildError, nameError, nameNotCorrect);
      } else if (input.dataset.validatio === "phone") {
        test(input.dataset.validatio, input, phoneFildError, phoneError, phoneNotCorrect, "data-correct", "true");
      } else if (input.dataset.validatio === "email") {
        test(input.dataset.validatio, input, emailFildError, emailError, emailNotCorrect);
      }
    }
    for (let input of document.querySelectorAll("[data-correct]")) {
      if (input.dataset.correct) {
        el.querySelector(".form").onsubmit = async () => {
          let formData = new FormData(form);
          let respons = await fetch("URL", {
            method: "GET",
            body: formData,
          });
          let result = await respons.json();
          console.log(result);
        };
      } else {
        return false;
      }
    }
  };
});

// galleryWithZoom
function galleryWithZoom() {
  const arr = document.querySelectorAll(".slider-item img");
  const form = document.querySelector(".popup_img");
  const pleca = document.querySelector(".popup_img-wrap img");
  arr.forEach((el, index) => {
    el.onclick = (e) => {
      const slideIndex = index;
      form.style.display = "block";
      pleca.style.opacity = 0;
      setTimeout(surfacing, 350, pleca);
      pleca.src = el.src;
      const rigth = document.querySelector(".popup_img-next");
      btnNext(pleca, slideIndex, arr, rigth);
      const left = document.querySelector(".popup_img-prev");
      btnPrev(pleca, slideIndex, arr, left);
    };
  });
  document.querySelector(".popup_img-closed").onclick = (e) => {
    form.style.display = "none";
  };
}

// picturZoom
function picturZoom() {
  const arr = document.querySelectorAll(".swimming_pool-slider-item img");
  const form = document.querySelector(".popup-zoom_img");
  const pleca = document.querySelector(".popup-zoom_img-wrap img");
  arr.forEach((el) => {
    el.onclick = (e) => {
      form.style.display = "block";
      pleca.style.opacity = 0;
      setTimeout(surfacing, 350, pleca);
      pleca.src = el.src;
    };
  });
  document.querySelector(".popup-zoom_img-closed").onclick = (e) => {
    form.style.display = "none";
  };
}

function pictureReplacement() {
  const arrObj = document.querySelectorAll(".room-item");
  arrObj.forEach((el) => {
    const arrPicturs = el.querySelectorAll(".ro-item img");
    const place = el.querySelector(".room-item-general img");
    for (let pictur of arrPicturs) {
      pictur.onclick = (e) => {
        place.src = pictur.src;
      };
    }
  });
}

// smoothScroll
function smoothScroll() {
  const parent = document.querySelector(".scroll");
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

document.querySelector(".header__wrapper-mobile_menu").onclick = () => {
  document.querySelector(".mobile_menu").classList.add("active");
  document.querySelector(".header__wrapper-logo img").style.display = "none";
};

document.querySelector(".mobile_menu").onclick = () => {
  document.querySelector(".mobile_menu").classList.remove("active");
  document.querySelector(".header__wrapper-logo img").style.display = "block";
};

openFormCallBack();
galleryWithZoom();
picturZoom();
pictureReplacement();
smoothScroll();
