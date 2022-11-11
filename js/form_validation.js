const d = document;

export default function contactFormValidation() {
  const $form = d.getElementById("form"),
    $inputs = d.querySelectorAll("#form input"),
    $textArea = d.querySelector(".text-area"),
    expressions = {
      name: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/, // Letras y espacios en blanco, pueden llevar acentos.
      email:
        /^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$/,
      subject: /^[A-Za-zÑñÁáÉéÍíÓóÚúÜü\s]+$/,
      message: /^.{10,255}$/,
    };
  const slots = {
    name: false,
    email: false,
    subject: false,
    message: false,
  };

  const formValidation = (e) => {
    switch (e.target.name) {
      case "name":
        slotValidation(expressions.name, e.target, "name");
        break;
      case "email":
        slotValidation(expressions.email, e.target, "email");
        break;
      case "subject":
        slotValidation(expressions.subject, e.target, "subject");
        break;
      case "message":
        slotValidation(expressions.message, e.target, "message");
        break;
    }
  };

  const slotValidation = (expresion, input, slot) => {
    if (expresion.test(input.value)) {
      d.getElementById(`group-${slot}`).classList.remove(
        "form-group-incorrect"
      );
      d.getElementById(`group-${slot}`).classList.add("form-group-correct");
      d.querySelector(`#group-${slot} i`).classList.remove("bxs-x-circle");
      d.querySelector(`#group-${slot} i`).classList.add("bxs-check-circle");
      d.querySelector(`#group-${slot} .form-group-error`).classList.add("none");
      slots[slot] = true;
    } else {
      d.getElementById(`group-${slot}`).classList.add("form-group-incorrect");
      d.getElementById(`group-${slot}`).classList.remove("form-group-correct");
      d.querySelector(`#group-${slot} i`).classList.add("bxs-x-circle");
      d.querySelector(`#group-${slot} i`).classList.remove("bxs-check-circle");
      d.querySelector(`#group-${slot} .form-group-error`).classList.remove(
        "none"
      );
      slots[slot] = false;
    }
  };
  $inputs.forEach((input) => {
    input.addEventListener("keyup", formValidation);
    input.addEventListener("blur", formValidation);
  });

  $textArea.addEventListener("keyup", formValidation);
  $textArea.addEventListener("blur", formValidation);

  d.addEventListener("submit", function (e) {
    e.preventDefault();

    const $loader = d.querySelector(".loader-send"),
      $response = d.querySelector(".form-response"),
      $responseError = d.querySelector(".form-response-error");

    $loader.classList.remove("none");

    if (slots.name && slots.email && slots.subject && slots.message) {
      fetch("https://formsubmit.co/ajax/manuelferg14@gmail.com", {
        method: "POST",
        body: new FormData(e.target),
      })
        .then((res) => (res.ok ? res.json() : Promise.reject(res)))
        .then(() => {
          $loader.classList.add("none");
          $response.classList.remove("none");
          d.querySelectorAll(".form-group-correct").forEach((el) => {
            el.classList.remove("form-group-correct");
          });
          $form.reset();
        })
        .catch(() => {
          $loader.classList.add("none");
          $responseError.classList.remove("none");
        })
        .finally(() => {
          setTimeout(() => {
            $responseError.classList.add("none");
            $response.classList.add("none");
          }, 3000);
        });
    } else {
      $loader.classList.add("none");
      d.querySelector(".form-message").classList.remove("none");
      setTimeout(() => {
        d.querySelector(".form-message").classList.add("none");
      }, 3000);
    }
  });
}
