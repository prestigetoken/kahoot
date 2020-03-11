window.onload = function() {
  chrome.storage.sync.get(["code", "name"], function(result) {
    document.getElementById("inputSession").value = result.code
    var evt = document.createEvent("HTMLEvents");
    evt.initEvent("change", false, true);
    document.getElementById("inputSession").dispatchEvent(evt)
    document.getElementsByClassName("join")[0].click()
    console.log("code injected")

    var observer = new MutationObserver(function(mutations) {
      if (document.getElementById('username')) {
        document.getElementById("username").value = result.name + Math.floor(Math.random()*1000)
        var evt = document.createEvent("HTMLEvents");
        evt.initEvent("change", false, true);
        document.getElementById("username").dispatchEvent(evt)
        document.getElementsByClassName("join")[0].click()
        observer.disconnect()
      }
    })
    observer.observe(document.body, {
      childList: true,
      subtree: true,
      attributes: true,
      characterData: true
    })
  });
}
