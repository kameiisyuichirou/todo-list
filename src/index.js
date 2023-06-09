import "./styles.css";
const onClickAdd = () => {
  //テキストボックスの値を取得し、初期化する
  const inputText = document.getElementById("add-text").value;
  document.getElementById("add-text").value = "";
  createIncompleteList(inputText);
};

//未完了リストから指定の要素を削除
const deleteFromIncompleteList = (target) => {
  document.getElementById("incomplete-list").removeChild(target);
};

//未完了リストに追加する関数
const createIncompleteList = (text) => {
  //div生成
  const div = document.createElement("div");
  div.className = "list-row";

  const p = document.createElement("p");
  p.innerText = text;

  const li = document.createElement("li");

  //完了ボタン作成
  const completeButton = document.createElement("button");
  completeButton.innerText = "完了";
  completeButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    const deleteParent = deleteTarget.parentNode;
    deleteFromIncompleteList(deleteParent);

    //完了リストに追加する要素
    const addTarget = completeButton.parentNode;

    //TODO内容テキストを取得
    const text = addTarget.firstElementChild.innerText;

    //div以下を初期化
    addTarget.textContent = null;

    //pタグの作成
    const p = document.createElement("p");
    p.innerText = text;

    //戻すボタンの生成
    const backButton = document.createElement("button");
    backButton.innerText = "戻す";
    backButton.addEventListener("click", () => {
      //押された戻るボタンの親タグ（li）を完了リストから削除
      const deleteTarget = backButton.parentNode;
      const deleteParent = deleteTarget.parentNode;
      document.getElementById("complete-list").removeChild(deleteParent);

      //テキスト取得
      const text = backButton.parentNode.firstElementChild.innerText;
      createIncompleteList(text);
    });

    //liタグの生成
    const li = document.createElement("li");

    //divの子要素に各要素を設定
    li.appendChild(addTarget);
    addTarget.appendChild(p);
    addTarget.appendChild(backButton);

    //完了リストに追加
    document.getElementById("complete-list").appendChild(li);
  });

  //削除ボタン作成
  const deleteButton = document.createElement("button");
  deleteButton.innerText = "削除";
  deleteButton.addEventListener("click", () => {
    //押された削除ボタンの親タグ（div）を未完了リストから削除
    const deleteTarget = deleteButton.parentNode;
    const deleteParent = deleteTarget.parentNode;
    deleteFromIncompleteList(deleteParent);
  });

  //divタグの子要素に各要素を設定
  li.appendChild(div);
  div.appendChild(p);
  div.appendChild(completeButton);
  div.appendChild(deleteButton);

  //未完了リストに追加
  document.getElementById("incomplete-list").appendChild(li);
};

document
  .getElementById("add-button")
  .addEventListener("click", () => onClickAdd());
