ScrollReveal().reveal('.box', {
  duration: 3000,   // アニメーションの時間（ミリ秒）
  origin: 'bottom', // 下から表示
  distance: '50px', // どれくらいの距離から出てくるか
  opacity: 0,       // 最初は透明
  easing: 'ease-in-out'
});

// images-works
function openModal(imgSrc, title, desc) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modal-img").src = imgSrc;
  document.getElementById("modal-caption").innerHTML = `<h2>${title}</h2><p>${desc}</p>`;
}
function closeModal() {
  document.getElementById("modal").style.display = "none";
}