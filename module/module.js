export const formatDate = (d, isTime = false) => {
  const date = new Date(d);
  let yy = date.getFullYear();
  let mm = String(date.getMonth() + 1).padStart(2, "0");
  let dd = String(date.getDate()).padStart(2, "0");
  let time = date.toLocaleTimeString("tr-TR");

  return `${dd}-${mm}-${yy} ${isTime ? time : ""}`;
};

export const cnfDelete = () => {
  return new Promise((resolve, reject) => {
    swal({
      title: "Emin misiniz?",
      text: "Silindikten sonra bu dosyayı geri getiremezsiniz!",
      icon: "warning",
      buttons: {
        cancel: {
          text: "İptal",
          value: false,
          visible: true,
          className: "btn btn-secondary",
          closeModal: true,
        },
        confirm: {
          text: "Evet, Sil!",
          value: true,
          visible: true,
          className: "btn btn-danger",
          closeModal: true,
        },
      },
      dangerMode: true,
    }).then((willDelete) => {
      if (willDelete) {
        resolve(true);
        swal({
          title: "Başarılı!",
          text: "Dosyanız başarıyla silindi!",
          icon: "success",
        });
      } else {
        reject(false);
        swal({
          title: "İptal Edildi",
          text: "Dosyanız güvende!",
          icon: "info",
        });
      }
    });
  });
};

export const getDataFunc = (key) => {
  if (localStorage.getItem(key) != null) {
    let data = JSON.parse(localStorage.getItem(key));
    return data;
  } else {
    return [];
  }
};
