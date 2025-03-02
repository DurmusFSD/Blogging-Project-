import { formatDate, getDataFunc } from "../../module/module.js";

export const homeFunc = () => {
  let catData = getDataFunc("category");
  let blogsData = getDataFunc("blogs");
  let catList = document.querySelector(".category-list");
  let showBlogs = document.querySelector(".show-blogs");

  catData.innerHTML = `<button class="all-btn btn capitalize bg-white">Tümü</button>`;
  catData.forEach((cat, index) => {
    catList.innerHTML += `
     <button cat="${cat.category}" class="cat-btn btn capitalize bg-white">${cat.category}</button>
    `;
  });

 
  let showAllBtn = catList.querySelector(".all-btn");
  showAllBtn.onclick = () => {
    showBlogsFunc(blogsData);
  };
  let allBtn = catList.querySelectorAll(".cat-btn");
  allBtn.forEach((btn, index) => {
    btn.onclick = () => {
      let category = btn.getAttribute("cat");
      let filter = blogsData.filter(
        (blog) => blog.category.toLowerCase() === category.toLowerCase()
      );
      showBlogsFunc(filter);
    };
  });

  const showBlogsFunc = (array) => {
    showBlogs.innerHTML = "";
    array.forEach((blog, index) => {
      showBlogs.innerHTML += ` 
        <div class="flex flex-col gap-2 bg-white p-1 shadow rounded">
            <img src="${blog.thumbnail}" alt="${blog.title}">
            <div class="flex justify-between items-center px-2">
                <h1 class="font-bold text-xl">${blog.title}</h1>
                <p class="text-zinc-300 font-semibold">${formatDate(
                  blog.createdAt,
                  true
                )}</p>
            </div>
            <div class="p-2">
                <p class="text-justify mb-3">${blog.desc}</p>
            </div>
        </div>
        `;
    });
  };
  showBlogsFunc(blogsData);
};
