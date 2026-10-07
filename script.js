(function(){
  const menu=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));
})();
