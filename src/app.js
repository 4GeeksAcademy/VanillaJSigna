window.onload = function () {

  let who = ['A two headed pinecone', 'My dog', 'A crazy monkey', 'An alien'];
  let action = ['yelled at', 'ate', 'destroyed', 'stole'];
  let what = ['my sandwich', 'my homework', 'my phone'];
  let when = ['in my house', 'before class', 'while I was sleeping'];

  function random(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  let excuse =
    random(who) + " " +
    random(action) + " " +
    random(what) + " " +
    random(when);

  document.getElementById("excuse").innerHTML = excuse;
};