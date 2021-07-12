import consumer from "./consumer";

document.addEventListener("turbolinks:load", () => {
  window.messageContainer = document.getElementById("message-container");

  if (messageContainer === null) {
    return;
  }

  consumer.subscriptions.create("RoomChannel", {
    connected() {
      // Called when the subscription is ready for use on the server
    },

    disconnected() {
      // Called when the subscription has been terminated by the server
    },

    received(data) {
      // Called when there's incoming data on the websocket for this channel
      messageContainer.insertAdjacentHTML("beforeend", data["message"]);
    },
  });
  const documentElement = documentElement;
  // js.erb内でも使えるように変数を決定
  window.messageContent = document.getElementById("message_content");
  //一番下まで移動する関数。js.erb内でも使用できるように変数を決定
  window.scrollToBottom = () => {
    window.scroll(0, documentElement.scrollHeight);
  };
  scrollToBottom();

  const messageButton = document.getElementById("message-button");

  const button_activation = () => {
    if (messageContent.value === "") {
      messageButton.classList.add("disabled");
    } else {
      messageButton.classList.remove("disabled");
    }
  };

  //フォームに入力した際の動作
  messageContent.addEventListener("input", () => {
    button_activation();

    changeLineCheck();
  });

  //送信ボタンが押された時にボタンを無効化
  messageButton.addEventListener("click", () => {
    messageButton.classList.add("disabled");

    changeLineCount(1);
  });

  const maxLineCount = 10;

  const getLineCount = () => {
    return (messageContent.value + "\n").match(/\r?\n/g).length;
  };

  let getLineCount = getLineCount();
  let newLineCount;

  const changeLineCheck = () => {
    //現在の入力関数を取得　(ここでは最大の行数はmaxLineCountとする)
    newLineCount = Math.min(getLineCount(), maxLineCount);

    //不当化演算子は左右を比較し等しくなければtrue 等しければfalseを返す
    if (lineCount !== newLineCount) {
      changeLineCount(newLineCount);
    }
  };

  const changeLineCount = () => {
    //フォームの行数を変更
    messageContent.rows = lineCount = newLineCount;
  };
});
