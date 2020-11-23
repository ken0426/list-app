// リスト作成する
window.addEventListener('click', function(){
  const button = document.getElementById("btn");
  let text = document.getElementById("text").value;
  document.getElementById("list").innerHTML = text;
})

// ログアウトのボタン
// window.addEventListener('load', function(){
//   const button = document.getElementById("log-out");
//     button.addEventListener("mouseenter", function(){
//       button.setAttribute("style", "background-color:#10ebff;")
//     })
  
//     button.addEventListener("mouseout", function(){
//       button.setAttribute("style", "background-color:#075F79;")
//     })
//   })

// リスト作成の色の変更
// window.addEventListener('load', function(){
//   const button = document.getElementById("btn");
//     button.addEventListener("mouseenter", function(){
//       button.setAttribute("style", "background-color:#10ebff;")
//     })
  
//     button.addEventListener("mouseout", function(){
//       button.setAttribute("style", "background-color:#186371;")
//     })
//   })


// 「1日のタスク完了」ボタンの色を変更
// window.addEventListener('load', function(){
// const button = document.getElementById("sumbit-btn");
//   button.addEventListener("mouseenter", function(){
//     button.setAttribute("style", "background-color:#10ebff;")
//   })

//   button.addEventListener("mouseout", function(){
//     button.setAttribute("style", "background-color:#0B6067;")
//   })
// })

window.addEventListener('load', function(){
const button = document.getElementById('done');
const li = document.getElementById('list');
  button.addEventListener('click', ()=> {
    li.style.textDecoration = "line-through";
  });
})

window.addEventListener('load', function(){
  const li = document.getElementById('li');
  li.innerText = input.value;
  document.body.appendChild(li)
})