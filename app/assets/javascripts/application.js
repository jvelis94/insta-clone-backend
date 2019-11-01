//= require rails-ujs
//= require_tree .
//= require activestorage
// direct_uploads.js

// Get the modal
var modal = document.getElementById("myModal");

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
  modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}


let listHandle = () => {
  document.getElementById("list").style.display = "contents"
  document.getElementById('grid').style.display = "none"
}

let gridHandle = () => {
  document.getElementById("list").style.display = "none"
  document.getElementById('grid').style.display = "contents"
}

addEventListener("direct-upload:initialize", event => {
    const { target, detail } = event
    const { id, file } = detail
    target.insertAdjacentHTML("beforebegin", `
      <div id="direct-upload-${id}" class="direct-upload direct-upload--pending">
        <div id="direct-upload-progress-${id}" class="direct-upload__progress" style="width: 0%"></div>
        <span class="direct-upload__filename">${file.name}</span>
      </div>
    `)
  })
   
  addEventListener("direct-upload:start", event => {
    const { id } = event.detail
    const element = document.getElementById(`direct-upload-${id}`)
    element.classList.remove("direct-upload--pending")
  })
   
  addEventListener("direct-upload:progress", event => {
    const { id, progress } = event.detail
    const progressElement = document.getElementById(`direct-upload-progress-${id}`)
    progressElement.style.width = `${progress}%`
  })
   
  addEventListener("direct-upload:error", event => {
    event.preventDefault()
    const { id, error } = event.detail
    const element = document.getElementById(`direct-upload-${id}`)
    element.classList.add("direct-upload--error")
    element.setAttribute("title", error)
  })
   
  addEventListener("direct-upload:end", event => {
    const { id } = event.detail
    const element = document.getElementById(`direct-upload-${id}`)
    element.classList.add("direct-upload--complete")
  })

