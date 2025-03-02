import { formatDate, cnfDelete, getDataFunc } from "../../../module/module.js";

export const categoryFunc = (userInfo) => {
  let catData = [];
  let catForm = document.querySelector(".cat-form");
  let allBtn = catForm.querySelectorAll("button");
  let catList = document.querySelector(".cat-list");
  let input = catForm.querySelector("INPUT");
  let key = userInfo.email.split("@")[0];

  catData = getDataFunc(`category`);

  catForm.onsubmit = (e) => {
    e.preventDefault();
    if (input.value != "") {
      let obj = {
        category: input.value,
        createdAt: new Date(),
      };
      catData.push(obj);
      localStorage.setItem(`category`, JSON.stringify(catData));

      swal("Başarılı", "Kategori başarıyla eklendi!", "success");
      catForm.reset();
      showCatData();
    } else {
      swal("Boş alan", "Kategori alanı zorunludur!", "warning");
    }
  };

  const showCatData = () => {
    catList.innerHTML = "";
    catData.forEach((obj, index) => {
      catList.innerHTML += `
      
    <tr>
        <td class="text-nowrap">${index + 1}</td>
        <td class="text-nowrap">${obj.category}</td>
        <td class="text-nowrap">${formatDate(obj.createdAt, true)}</td>
        <td class="text-nowrap">
          <button cat="${
            obj.category
          }" class="edit-btn btn btn-primary rounded-dull">
            <i class="fa fa-edit"></i>
          </button>
          <button class="del-btn btn btn-danger rounded-dull">
            <i class="fa fa-trash"></i>
          </button>
      </td> 
    </tr>

      `;
    });

    //Silme
    const allDelBtn = catList.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn, index) => {
      btn.onclick = async () => {
        try {
          let isDelete = await cnfDelete();
          if (isDelete) {
            catData.splice(index, 1);
            localStorage.setItem(`category`, JSON.stringify(catData));
            showCatData();
          }
        } catch (err) {
          console.log(err);
        }
      };
    });

    //Düzenleme
    const allEditBtn = catList.querySelectorAll(".edit-btn");
    allEditBtn.forEach((btn, index) => {
      btn.onclick = () => {
        let cat = btn.getAttribute("cat");
        input.value = cat;
        allBtn[0].classList.add("d-none");
        allBtn[1].classList.remove("d-none");
        allBtn[1].onclick = () => {
          let obj = {
            category: input.value,
            createdAt: new Date(),
          };
          catData[index] = obj;
          localStorage.setItem(`category`, JSON.stringify(catData));
          showCatData();
          allBtn[0].classList.remove("d-none");
          allBtn[1].classList.add("d-none");
          catForm.reset();
        };
      };
    });
  };
  showCatData();
};
