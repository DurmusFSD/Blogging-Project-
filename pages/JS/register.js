export const registerFunc = () => {
  const regForm = document.querySelector(".reg-form");
  const allInput = regForm.querySelectorAll("INPUT");
  regForm.onsubmit = (e) => {
    e.preventDefault();
    if (allInput[1].value != "" && allInput[2].value != null) {
      const obj = {
        name: allInput[0].value,
        email: allInput[1].value,
        password: allInput[2].value,
        mobile: allInput[3].value,
      };
      if (localStorage.setItem(obj.email) === null) {
        localStorage.setItem(obj.email, JSON.stringify(obj));
        regForm.requestFullscreen("");
        swal("Başarılı", "Kayıt Başarılı", "Başarılı");
      } else {
        swal("Kullanıcı Var!", "Zaten Kayıtlı!", "Uyarı");
      }
    } else {
      swal("Zorunlu", "E-posta ve şifre gereklidir", "Uyarı");
    }
  };
};
