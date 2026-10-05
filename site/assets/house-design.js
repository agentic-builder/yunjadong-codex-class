(()=>{
 const nav=document.querySelector('.book-nav'), menu=document.querySelector('.book-menu');
 const links=[...nav.querySelectorAll('a[href^="#"]')];
 const sections=links.map(a=>document.getElementById(a.hash.slice(1))).filter(Boolean);
 function mark(){
  const active=[...sections].reverse().find(s=>s.getBoundingClientRect().top<=125)||sections[0];
  links.forEach(a=>{const on=a.hash==='#'+active.id;a.classList.toggle('current',on);if(on)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});
  document.querySelector('.book-progress i').style.width=(100*(sections.indexOf(active)+1)/sections.length)+'%';
 }
 function expanded(){menu.setAttribute('aria-expanded',String(nav.classList.contains('open')))}
 menu.addEventListener('click',expanded);
 links.forEach(a=>a.addEventListener('click',()=>{nav.classList.remove('open');expanded();setTimeout(mark,50)}));
 document.addEventListener('keydown',e=>{if(e.key==='Escape'){nav.classList.remove('open');expanded()}});
 document.addEventListener('click',e=>{if(innerWidth<=900&&!nav.contains(e.target)&&!menu.contains(e.target)){nav.classList.remove('open');expanded()}});
 let pending=false;addEventListener('scroll',()=>{if(!pending){pending=true;requestAnimationFrame(()=>{mark();pending=false})}},{passive:true});
 addEventListener('hashchange',()=>setTimeout(mark,50));addEventListener('load',mark);document.fonts.ready.then(mark);mark();
})();
