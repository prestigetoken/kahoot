window.onload = function() {
  document.getElementById("floodButton").addEventListener("click", flood);
}

function flood() {
  let code = document.getElementById('code').value
  let name = document.getElementById('name').value
  let number = document.getElementById('number').value

  if (code && name && number) {
    if (name.length <= 12) {
      chrome.storage.sync.set({"code": code, "name": name}, function() {
        for (var i = 0; i < number; i++) {
          chrome.tabs.create({
            "url": "https://kahoot.it",
            "active": false
          }, function(tab) {
            chrome.tabs.executeScript(tab.id, {
              "file": "autojoin.js"
            })
          })
        }
        document.getElementById("container").innerHTML = "<h1>Flooded Successfully</h1><p>Keep the tabs open to ensure that the users stay in the Kahoot game.</p>"
      });
    } else {
      alert("Bot name must be shorter than or equal to 12 characters due to Kahoot limit.")
    }
  } else {
    alert("A required field is blank.")
  }
}
