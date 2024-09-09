$(function () {
  divWidth = $("#sliderBoard").width();
  let imgCount = $("#content li").length;

  for (let i = 0; i < imgCount; i++) {
    $("#contentButton").append(`<li></li>`);
  }

  $("#contentButton li:first").addClass("clicked");
  $("#content li").width(divWidth); //li的寬
  $("#content").width(divWidth * imgCount); //ul的寬

  let index = 0;
  let timer = setInterval(moveToNext, 2000);

  $("#contentButton li").click(function () {
    clearInterval(timer);

    index = $(this).index();
    $("#content").animate({
      left: divWidth * index * -1,
    });
    $(this).addClass("clicked");
    $("#contentButton li").not(this).removeClass("clicked");

    timer = setInterval(moveToNext, 2000);
  });

  function moveToNext() {
    //控制index最多不超過li個數
    if (index < imgCount - 1) {
      index++;
    } else {
      index = 0;
    }
    $("#content").animate({
      left: divWidth * index * -1,
    });
    $(`#contentButton li:eq(${index})`).addClass("clicked");
    $("#contentButton li").not(`:eq(${index})`).removeClass("clicked");
  }
  //resize時讓content 及 li寬度跟著sliderBoard改變
  $(window).resize(function () {
    divWidth = $("#sliderBoard").width();
    $("#content li").width(divWidth);
    $("#content").width(divWidth * imgCount);
  });
});

// setInterval(函數, 毫秒數);
// clearInterval(物件);

// let timer = setInterval(函數, 毫秒數);
// clearInterval(timer);

// setTimeout(函數, 毫秒數);
