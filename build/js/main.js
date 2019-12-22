const fields = document.querySelectorAll(".card-number--input");
for (let field of fields) {
    field.addEventListener("keyup", function () {
        if (field.value.length >= field.getAttribute("maxlength")) {
            if (field.nextElementSibling !== null) {
            field.nextElementSibling.focus();
        }
        }
    });
}