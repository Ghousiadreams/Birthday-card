let front = document.querySelector("#myDiv");
let p = document.querySelector(".p");
let image = document.querySelector(".image");

let move = true;

front.addEventListener('click', () => {
  if(move) {
    front.classList.add('moved');
    front.classList.remove('moved_back');
    console.log("card clicked");
    p.innerText = "";
    image.style.display = 'none';
    move = false;
  } else {
    front.classList.remove('moved');
    front.classList.add('moved_back');
    console.log("card unclicked");
    p.innerText = "Happy Birthday";
    image.style.display = 'block';
    move = true;
  }
});