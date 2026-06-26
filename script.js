function copyUPI() {
  const upiId = document.getElementById('upiId').textContent;
  navigator.clipboard.writeText(upiId).then(() => {
    const btn = document.querySelector('.btn-copy');
    btn.textContent = 'Copied!';
    btn.style.background = '#4caf50';
    setTimeout(() => {
      btn.textContent = 'Copy UPI ID';
      btn.style.background = '';
    }, 2000);
  });
}
