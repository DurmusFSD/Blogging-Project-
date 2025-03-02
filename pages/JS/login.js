export const loginFunc = () => {
  const loginForm = document.querySelector(".login-form");
  const allInput = loginForm.querySelectorAll("INPUT");

  loginForm.addEventListener("submit", (e) => {
    e.preventDefault();
    if (localStorage.getItem(allInput[0].value) !== null) {
      const dbRes = JSON.parse(localStorage.getItem(allInput[0].value));
      if (dbRes.password == allInput[1].value) {
        delete dbRes.password;
        sessionStorage.setItem("userInfo", JSON.stringify(dbRes));
        window.location.href = "http://127.0.0.1:5500/Admin/index.html";
      } else {
        swal("Geçersiz Kullanıcı", "Yanlış kimlik bilgileri!", "Uyarı");
      }
    } else {
      swal("Geçersiz Kullanıcı", "Yanlış kimlik bilgileri!", "Uyarı");
    }
  });
};
