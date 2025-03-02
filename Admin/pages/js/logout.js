export const logoutFunc = () => {
  let btn = document.querySelector(".logout-btn");
  console.log(btn)
  btn.onclick = () => {
   sessionStorage.removeItem("userInfo");
   window.location.href = "http://127.0.0.1:5500/index.html";
  };
};
