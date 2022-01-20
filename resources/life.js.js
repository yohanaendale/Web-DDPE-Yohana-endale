let v=document.getElementById("video");
let myFunction=()=> document.getElementById("qwe").innerHTML = "articles changed!";
  function playvid()
  {
    
    if(v.paused)
    {
      v.play();
      document.getElementById("butt").innerHTML="Pause";
    }
    else
    {
      v.pause();
      document.getElementById("butt").innerHTML = "Play";
    }
    
  }
  function config()
  {
    let x=prompt("Enter the width: ");
    size(x);
  }
  function size(x)
  {
    if(x>10&&x<3000)
    v.width=x;
    else
    alert("Size isn't possible")    
  }