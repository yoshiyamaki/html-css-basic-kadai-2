$(document).ready(function() {
  console.log("ローカルのjQueryが正しく読み込まれました！");

  // $("#start").click(function() {
      let duration = 3000; // アニメーションの時間（ミリ秒）

      // ボックスを右に移動
      $("#box").animate({ left: "1000px" }, duration);

      // 一定時間後に自動で止める（ここを追加！）
      setTimeout(function() {
          $("#box").stop();
          console.log("自動で停止しました！");
      }, 1500); // 1.5秒後に停止
  // });
});