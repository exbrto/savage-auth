const thumbUp = document.getElementsByClassName("fa-thumbs-up");
const thumbDown = document.getElementsByClassName("fa fa-thumbs-down");
const trash = document.getElementsByClassName("fa-trash");

Array.from(thumbUp).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId    // takes the attribute from ejs
        const thumbUp = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('messages', { // the name in fetch has to match with the server, but with Express we dont need
          method: 'put',     // to add the slash
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            // in JS if the key is the same as the value then
            // you can just have the key without the strings
            id,
            thumbUp
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(thumbDown).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        const thumbDown = parseFloat(this.parentNode.parentNode.childNodes[5].innerText)
        fetch('katYelledAtMe', { // the name in fetch has to match with the server, but with Express we dont need
          method: 'put',     // to add the slash
          headers: {'Content-Type': 'application/json'},
          body: JSON.stringify({
            // in JS if the key is the same as the value then
            // you can just have the key without the strings
            id,
            thumbDown
          })
        })
        .then(response => {
          if (response.ok) return response.json()
        })
        .then(data => {
          console.log(data)
          window.location.reload(true)
        })
      });
});
Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const id = this.parentNode.parentNode.childNodes[1].dataset.userId
        fetch('deleteThisShi', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            id
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
