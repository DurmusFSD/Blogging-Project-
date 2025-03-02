import { cnfDelete, formatDate, getDataFunc } from "../../../module/module.js";

export const blogsFunc = (userInfo) => {
  let catData = [];
  let blogsData = [];
  let url = null;
  let blogsForm = document.querySelector(".blogs-form");
  let allBtn = blogsForm.querySelectorAll("button");
  let allInput = blogsForm.querySelectorAll("INPUT");
  let textArea = blogsForm.querySelector("textarea");
  let blogsList = document.querySelector(".blogs-list");
  let select = blogsForm.querySelector("select");
  let key = userInfo.email.split("@")[0];

  catData = getDataFunc(`category`);
  blogsData = getDataFunc(`blogs`);

  catData.forEach((obj, index) => {
    select.innerHTML += `
        <option value="${obj.category.toLowerCase()}">
            ${obj.category}
        </option>
    `;
  });

  allInput[0].onchange = (e) => {
    let file = e.target.files[0];
    let fileReader = new FileReader();
    fileReader.readAsDataURL(file);
    fileReader.onload = (r) => {
      url = r.target.result;
    };
  };

  blogsForm.onsubmit = (e) => {
    e.preventDefault();
    const obj = {
      category: select.value,
      thumbnail: url
        ? url
        : "https://matrikstr.com/uploads/20sorudacctv.jpg?w=270",
      title: allInput[1].value,
      desc: textArea.value,
      createdAt: new Date(),
    };
    blogsData.push(obj);
    localStorage.setItem(`blogs`, JSON.stringify(blogsData));
    swal("Başarılı", "Bloglar başarıyla eklendi", "success");
    blogsForm.reset("");
    showBlogs();
    url = null;
  };

  const showBlogs = () => {
    blogsList.innerHTML = "";
    blogsData.forEach((obj, index) => {
      blogsList.innerHTML += `
      
       <tr>
          <td>${index + 1}</td>
          <td>
            <img width="50" src="${obj.thumbnail}" alt=""/>      
          </td>
          <td class="text-nowrap">${obj.category}</td>
          <td class="text-nowrap">${obj.title}</td>
          <td class="text-nowrap">${obj.desc}</td>
          <td class="text-nowrap">${formatDate(obj.createdAt, true)}</td>
          <td class="text-nowrap">
            <button thumb="${obj.thumbnail}" desc="${obj.desc}" title="${
        obj.title
      }" cat="${obj.category}" class="edit-btn btn btn-primary rounded-dull">
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
    const allDelBtn = blogsList.querySelectorAll(".del-btn");
    allDelBtn.forEach((btn, index) => {
      btn.onclick = async () => {
        try {
          let isDelete = await cnfDelete();
          if (isDelete) {
            blogsData.splice(index, 1);
            localStorage.setItem(`blogs`, JSON.stringify(blogsData));
            showBlogs();
          }
        } catch (error) {
          console.log(error);
        }
      };
    });

    //Düzenleme
    const allEditBtn = blogsList.querySelectorAll(".edit-btn");
    allEditBtn.forEach((btn, index) => {
      btn.onclick = () => {
        let category = btn.getAttribute("cat");
        let title = btn.getAttribute("title");
        let desc = btn.getAttribute("desc");
        let thumbnail = btn.getAttribute("thumb");

        select.value = category;
        (allInput[1].value = title), (textArea.value = desc);
        url = thumbnail;
        allBtn[0].classList.add("d-none");
        allBtn[1].classList.remove("d-none");
        allBtn[1].onclick = () => {
          let obj = {
            category: select.value,
            thumbnail: url,
            title: allInput[1].value,
            desc: textArea.value,
            createdAt: new Date(),
          };
          blogsData[index] = obj;
          localStorage.setItem(`blogs`, JSON.stringify(blogsData));
          swal("Başarılı", "Bloglar başarıyla güncellendi", "success");
          blogsForm.reset("");
          allBtn[0].classList.remove("d-none");
          allBtn[1].classList.add("d-none");
          showBlogs();
        };
      };
    });
  };
  showBlogs();
};
