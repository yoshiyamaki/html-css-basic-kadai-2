function createShape() {
  const shapes = ['circle', 'square', 'octagon', 'cloud'];
  const shape = document.createElement('div');
  shape.classList.add('shape', shapes[Math.floor(Math.random() * shapes.length)]);
  shape.style.top = Math.random() * 80 + 'vh'; // ランダムな高さ
  document.body.appendChild(shape);
  
  setTimeout(() => shape.remove(), 5000); // アニメーション終了後に削除
}

setInterval(createShape, 1100); // 1秒ごとに新しい図形を追加