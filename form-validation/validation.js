// meyeleksi semua inputan
const inputs = document.querySelectorAll('input');

// pattern regex
const patterns = {
      username: /^[a-z\d]{5,12}$/i,
      email: /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/,
      password: /^[\w@-]{8,20}$/,
      telephone: /^\d{12}$/,
      slug: /^[a-z\d]{8,20}$/,
      time: /^([0-9]{2}):([0-9]{2})$/,
      site: /^(https:\/\/)?([a-z\d-]+)\.([a-z]{2,3})(\.[a-z]{2,3})?$/,
      date: /^([0-9]{2})-([0-9]{2})-([0-9]{4})$/
}


// fungsi validasi
function validate(field, regex) {
      if (regex.test(field.value)) {
            field.className = "valid";
      } else {
            field.className = "invalid";
      }
}


inputs.forEach((input) => {
      input.addEventListener("keyup", (e) => {
            validate(e.target, patterns[e.target.attributes.name.value]);
      });
});