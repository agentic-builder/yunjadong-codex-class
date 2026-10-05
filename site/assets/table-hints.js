(()=>{
 const entries=[...document.querySelectorAll('.orientation-table,.table-wrap')].map(box=>{
  const hint=document.createElement('p');hint.className='table-scroll-hint';hint.textContent='표를 좌우로 밀어 나머지 열을 확인하세요.';hint.hidden=true;box.before(hint);return {box,hint};
 });
 const update=()=>entries.forEach(({box,hint})=>{const scroll=box.clientWidth>0&&box.scrollWidth>box.clientWidth+2;hint.hidden=!scroll;if(scroll){box.tabIndex=0;box.setAttribute('role','region');box.setAttribute('aria-label','좌우로 스크롤할 수 있는 표');}else box.removeAttribute('tabindex');});
 addEventListener('resize',update);addEventListener('hashchange',update);document.fonts.ready.then(update);
 if(window.ResizeObserver){const ro=new ResizeObserver(update);entries.forEach(({box})=>ro.observe(box));}
})();
