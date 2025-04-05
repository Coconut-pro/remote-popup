document.getElementById('actionBtn').addEventListener('click', function() {
  if (window.Android) {
    window.Android.postAction('close');
  }
});
