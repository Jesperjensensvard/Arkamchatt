/* server comunication */
var socket = io();
var messages = document.getElementById('messages');
//RequestFuction
function makeRequest(url, method, formdata, callback) {
  fetch(url, {
      method: method,
      body: formdata
  }).then((data) => {
      return data.json()
  }).then((result) => {
      callback(result)
  }).catch((err)=>{
      console.log(err)
  })
}
var registerForm = document.getElementById('login-form');
registerForm.addEventListener('submit', function(e) {
  e.preventDefault();
  var userinformation = new FormData();
  userinformation.append("action", "registerUser");
  userinformation.append("UN", username);
  userinformation.append("PW", password);
  makeRequest("/registeruser", "POST", userinformation, (response) => { console.log(response) });
});

socket.on('chat message', function(msg) {
  var item = document.createElement('li');
  item.textContent = msg;
  messages.appendChild(item);
  window.scrollTo(0, document.body.scrollHeight);
});
// example function fetch 
async function search() {
  var movieInput = document.getElementById('movieSearch').value
  if(movieInput != ""){
      searchTerm = movieInput.replace(' ', '+');
      url = '/movie/' + searchTerm
      let res = await fetch(url)
      if(res.status != 200){
          throw new Error(response.status + ': ' + response.statusText)
      }else{
          let data =  await res.json();
          printRespons(data)
      }
  }
}