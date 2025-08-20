const btn = document.getElementById("btn");

btn.addEventListener("click", function () {
  const span = document.createElement("span");
  span.className = "gongde";
  span.innerText = "怒气-1";

  // 获取按钮位置
  const rect = btn.getBoundingClientRect();
  span.style.left = rect.left + rect.width / 2 + "px";
  span.style.top = rect.top - 10 + "px";

  // 加到页面
  document.body.appendChild(span);

  // 动画结束后删除
  setTimeout(() => {
    span.remove();
  }, 1000);
});
