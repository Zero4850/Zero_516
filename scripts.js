document.getElementById('contactForm').addEventListener('submit', async function(e) {
  e.preventDefault();

  const name = e.target.name.value;
  const message = e.target.message.value;
  const recaptcha = grecaptcha.getResponse();

  if (!recaptcha) {
    alert("يرجى التحقق من أنك لست روبوت.");
    return;
  }

  const webhookURL = "https://discord.com/api/webhooks/1375197806876168253/hAOxVCfgBfuzqFLzwH1VZKLi7cStT5N7045bRGfBsURGtgnlxCkXFLxW2EgLoDNqqZCv";

  const payload = {
    content: `📩 طلب جديد:\n👤 الاسم: ${name}\n📝 الطلب: ${message}`
  };

  const response = await fetch(webhookURL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(payload)
  });

  if (response.ok) {
    alert('✅ تم إرسال طلبك بنجاح!');
    e.target.reset();
    grecaptcha.reset();
  } else {
    alert('❌ حدث خطأ، حاول مرة ثانية.');
  }
});
