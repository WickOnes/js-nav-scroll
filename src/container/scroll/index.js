
window.buttonScroll.onclick = () => {
  window.scrollTo({
    top:0,
    left:0,
    behavior: 'smooth',
  })
}

setInterval(() => {
  
if(window.scrollY > window.innerHeight){
  window.buttonScroll.style.display = 'flex'
}
if(window.scrollY <= window.innerHeight){
  window.buttonScroll.style.display = 'none'
}



}, 500);