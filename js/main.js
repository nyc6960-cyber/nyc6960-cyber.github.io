/* ============================================
   成都启声科技有限公司 — 交互脚本
   ============================================ */

/* ── 移动端导航菜单 ── */
(function () {
  var toggle = document.getElementById('navToggle');
  var links  = document.getElementById('navLinks');
  if (!toggle || !links) return;

  toggle.addEventListener('click', function () {
    links.classList.toggle('open');
  });

  // 点击菜单项后自动收起
  var items = links.querySelectorAll('a');
  for (var i = 0; i < items.length; i++) {
    items[i].addEventListener('click', function () {
      links.classList.remove('open');
    });
  }

  // 点击页面其他区域收起
  document.addEventListener('click', function (e) {
    if (!toggle.contains(e.target) && !links.contains(e.target)) {
      links.classList.remove('open');
    }
  });
})();

/* ── 联系表单提交 ── */
(function () {
  var form = document.getElementById('contactForm');
  if (!form) return;

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    // 简单防重复提交
    var btn = form.querySelector('button[type="submit"]');
    if (btn.disabled) return;
    var originalText = btn.textContent;
    btn.disabled = true;
    btn.textContent = '正在提交...';

    // 收集表单数据
    var data = {
      name:    form.name.value.trim(),
      phone:   form.phone.value.trim(),
      email:   form.email.value.trim(),
      project: form.project.value,
      message: form.message.value.trim()
    };

    // 当前阶段：表单数据在本地打印。
    // 有服务器后，把这里改成 fetch('/api/contact', {method:'POST', body: JSON.stringify(data)})
    console.log('留言提交:', data);

    setTimeout(function () {
      alert('感谢您的留言，我们会在1-2个工作日内与您联系。');
      form.reset();
      btn.disabled = false;
      btn.textContent = originalText;
    }, 400);
  });
})();
