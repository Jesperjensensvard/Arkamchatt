/* server comunication */
var socket = io();
var messages = document.getElementById('messages');
var form = document.getElementById('form');
var input = document.getElementById('input');

form.addEventListener('submit', function(e) {
  e.preventDefault();
  if (input.value) {
    socket.emit('chat message', input.value);
    input.value = '';
  }
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