function changeImage(imageSrc) {
  const mainImage = document.getElementById('displayedImage');
  if (mainImage) {
      mainImage.src = imageSrc;
  }
}