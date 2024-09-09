$(function () {
  //偵測目前 div 的 font-size
  //   let currentSize = $("div").css("font-size");
  //   let currentSize = parseInt($("div").css("font-size"));

  $("#shrink").click(function () {
    changeSize("small");
  });
  $("#enlarge").click(function () {
    changeSize("big");
  });

  function changeSize(size) {
    let currentSize = parseInt($("div").css("font-size"));
    let newSize;
    if (size === "small") {
      newSize = currentSize - 2;
    } else {
      newSize = currentSize + 2;
    }
    $("div").css("font-size", newSize);
  }
});

/*..................
函數三部曲: 宣告、定義、呼叫

1. 沒傳參數，沒有傳回值
function action() { //宣告、定義
        console.log("hello")
}
action()//呼叫
    
2. 有傳參數，沒有傳回值
function action(name) { //宣告、定義
        console.log(`hello,${name}`)
}
    action("peter")//呼叫

3. 有傳參數，有傳回值
function action(name) { //宣告、定義
    console.log(`hello,${name}`)
    return "good"
}
   let ans =  action("peter")//呼叫，傳回"good"
4. 沒傳參數，有傳回值
function action() { //宣告、定義
    console.log(`hello`)
    return "Does it make sense?"
}
   let ans =  action()//呼叫
   */
