import "./styles.css";
// テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  // li生成
  const li = document.createElement("li");
  li.className = "list";

  // pタグ生成
  const p = document.createElement("p");
  p.innerText = inputText;

  // liタグの子要素に各要素を設定
  li.appendChild(p);
  // console.log(li);
  // 未完了リストに追加
  document.getElementById("incomplate-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
