function openModalWithStorage(imageSrc, title, desc) {
  // データを localStorage に保存
  localStorage.setItem("modalImage", imageSrc);
  localStorage.setItem("modalTitle", title);
  localStorage.setItem("modalDesc", desc);

  // モーダルを開く
  openModal(imageSrc, title, desc);
}

// モーダルを開く処理
function openModal(imageSrc, title, desc) {
  let modal = document.getElementById("modal");
  let modalImg = document.getElementById("modal-img");
  let modalCaption = document.getElementById("modal-caption");

  modal.style.display = "flex";
  modalImg.src = imageSrc;
  modalCaption.innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
}

// ページをリロードしたときに、保存されたデータを取得してモーダルを開く
window.onload = function() {
  let savedImage = localStorage.getItem("modalImage");
  let savedTitle = localStorage.getItem("modalTitle");
  let savedDesc = localStorage.getItem("modalDesc");

  if (savedImage && savedTitle && savedDesc) {
      openModal(savedImage, savedTitle, savedDesc);
  }
};

function closeModal() {
  document.getElementById("modal").style.display = "none";
  localStorage.removeItem("modalImage");
  localStorage.removeItem("modalTitle");
  localStorage.removeItem("modalDesc");
}