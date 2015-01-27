function addDownload(){
  var url = document.getElementById('url').value;
  chrome.downloads.download({url:url}, function(downloadId) {window.close();}); 
}
document.addEventListener('DOMContentLoaded', function() {
  document.getElementById('button').addEventListener('click', function() {
    addDownload();
  });
  document.getElementById('url').addEventListener('keypress', function (e) {
    var key = e.which || e.keyCode;
    if (key == 13) { 
      addDownload();
    }
  });
});