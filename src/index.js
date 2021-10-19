import "./styles.css";
// テキストボックスの値を取得し、初期化する
const onClickAdd = () => {
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";

  createIncompleteList(inputText);
};

// deleteElement
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplate-list").removeChild(target);
};

// 未完了リストに追加する関数
const createIncompleteList = (text) => {
  // div
  const div = document.createElement("div");
  div.className = "list-row";

  // li
  const li = document.createElement("li");
  li.innerText = text;

  //button(finish)
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    // delete button
    deleteFromIncompleteList(completeButton.parentNode);
    // ad complatelist
    const addTarget = completeButton.parentNode;
    // get todotext
    const text = addTarget.firstElementChild.innerText;

    // div clear
    addTarget.textContent = null;

    // add li
    const li = document.createElement("li");
    li.innerText = text;

    // add button
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      // delete
      const deleteTarget = backButton.parentNode;
      document.getElementById("complate-list").removeChild(deleteTarget);

      // get text
      const text = backButton.parentNode.firstChild.innerText;
      createIncompleteList(text);
    });

    // div
    addTarget.appendChild(li);
    addTarget.appendChild(backButton);
    console.log(addTarget);

    // add complete-list
    document.getElementById("complate-list").appendChild(addTarget);
  });

  //button(delete)
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    // delete div
    deleteFromIncompleteList(deleteButton.parentNode);
  });

  // div li
  div.appendChild(li);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  // ul
  document.getElementById("incomplate-list").appendChild(div);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
