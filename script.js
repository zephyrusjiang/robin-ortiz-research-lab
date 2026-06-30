
function copyCode(code, btn){
  navigator.clipboard.writeText(code).then(() => {
    const old = btn.textContent; btn.textContent = 'Copied';
    setTimeout(() => btn.textContent = old, 1400);
  });
}
