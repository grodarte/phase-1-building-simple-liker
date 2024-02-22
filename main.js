// Defining text characters for the empty and full hearts for you to use later.
const EMPTY_HEART = '♡'
const FULL_HEART = '♥'

// Your JavaScript code goes here!
let hidden = document.querySelector("#modal").classList.add("hidden")

const likeGlyphs = document.getElementsByClassName("like-glyph")
for (let like of likeGlyphs){
  like.addEventListener("click", ()=>{
    mimicServerCall()
    .then(resp => {
      if (like.classList.contains("activated-heart")){
        like.textContent = EMPTY_HEART
        like.classList.remove("activated-heart")
      } else {
        like.textContent = FULL_HEART
        like.classList.add("activated-heart")
      }
      
    })
    .catch(error=>{
      const message = error.message
      const modal = document.querySelector("#modal")
      modal.classList.remove("hidden")
      modal.textContent = `Error: ${message}`
      setTimeout(()=> {
        let hidden = document.querySelector("#modal").classList.add("hidden")
      }, 3000)
    })
  })
}






//------------------------------------------------------------------------------
// Don't change the code below: this function mocks the server response
//------------------------------------------------------------------------------

function mimicServerCall(url="http://mimicServer.example.com", config={}) {
  return new Promise(function(resolve, reject) {
    setTimeout(function() {
      let isRandomFailure = Math.random() < .2
      if (isRandomFailure) {
        reject("Random server error. Try again.");
      } else {
        resolve("Pretend remote server notified of action!");
      }
    }, 300);
  });
}
