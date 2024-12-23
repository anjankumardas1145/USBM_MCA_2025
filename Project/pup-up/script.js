document.getElementById('notifyBtn').addEventListener('click', function() {
  var notification = document.getElementById('notification');
  notification.classList.remove('hidden');
  
  setTimeout(function() {
      notification.classList.add('hidden');
  }, 5000); // 5000 milliseconds = 5 seconds
});
