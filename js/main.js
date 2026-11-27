/* ============================================================
   个人主页脚本  main.js
   ------------------------------------------------------------
   这个文件负责"小功能"，共三件事：
   1. 自动高亮当前页面对应的导航按钮
   2. 页脚自动显示今年是哪一年
   3. 学习笔记页的搜索框（输入关键词就筛选笔记）
   一般不需要修改，放心跳过。
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ---------- 1. 高亮当前页面的导航 ---------- */
  // 取出浏览器地址栏里当前页面的文件名，比如 notes.html
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  var navLinks = document.querySelectorAll('.site-nav a');

  for (var i = 0; i < navLinks.length; i++) {
    var href = navLinks[i].getAttribute('href');
    if (href === currentPage) {
      navLinks[i].classList.add('active');
    }
  }

  /* ---------- 2. 页脚年份 ---------- */
  var yearBox = document.getElementById('year');
  if (yearBox) {
    yearBox.textContent = new Date().getFullYear();
  }

  /* ---------- 3. 学习笔记搜索 ---------- */
  var searchInput = document.getElementById('note-search');
  if (searchInput) {
    var noteItems = document.querySelectorAll('.note-item');
    var emptyTip = document.querySelector('.empty-tip');

    searchInput.addEventListener('input', function () {
      var keyword = searchInput.value.trim().toLowerCase();
      var visibleCount = 0;

      for (var j = 0; j < noteItems.length; j++) {
        var text = noteItems[j].textContent.toLowerCase();
        var matched = keyword === '' || text.indexOf(keyword) !== -1;
        noteItems[j].style.display = matched ? '' : 'none';
        if (matched) { visibleCount++; }
      }

      if (emptyTip) {
        emptyTip.style.display = visibleCount === 0 ? 'block' : 'none';
      }
    });
  }
});
