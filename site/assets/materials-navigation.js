/* Local navigation only. No analytics, external requests, or background actions. */
(()=>{
 const routes={"p-opening": {"book": "basic-what", "slide": 1, "label": "Codex란"}, "p-name": {"book": "basic-name", "slide": 4, "label": "이름 이야기"}, "p-preview": {"book": "showcase", "slide": 5, "label": "결과 맛보기"}, "p-why": {"book": "basic-why", "slide": 6, "label": "왜 지금"}, "p-pricing": {"book": "basic-pricing", "slide": 10, "label": "요금·사용량"}, "p-controls": {"book": "basic-controls", "slide": 12, "label": "기본 조작"}, "p-input": {"book": "basic-input", "slide": 13, "label": "대화 입력창"}, "p-plan-mode": {"book": "basic-plan-mode", "slide": 14, "label": "계획 모드"}, "p-goal-mode": {"book": "basic-goal-mode", "slide": 15, "label": "골 모드"}, "p-mode-start": {"book": "basic-mode-start", "slide": 16, "label": "모드 여는 방법"}, "p-capture": {"book": "basic-capture", "slide": 17, "label": "캡처·앱샷"}, "p-settings": {"book": "basic-models", "slide": 18, "label": "모델·추론·권한"}, "p-viewer": {"book": "basic-viewer", "slide": 21, "label": "기록·뷰어"}, "p-projects": {"book": "basic-projects", "slide": 22, "label": "프로젝트·대화"}, "p-rules": {"book": "basic-rules", "slide": 23, "label": "반복 규칙"}, "p-boundary": {"book": "basic-boundary", "slide": 24, "label": "작업 공간과 범위"}, "p-warmup": {"book": "warmup", "slide": 26, "label": "맛보기"}, "p-warmup-edit": {"book": "warmup", "slide": 27, "label": "말투 수정"}, "p-setup": {"book": "setup", "slide": 28, "label": "폴더 준비"}, "p-00": {"book": "setup", "slide": 30, "label": "위치 확인"}, "p-01-1": {"book": "01-1", "slide": 32, "label": "열 맞춤 계획"}, "p-01-2": {"book": "01-2", "slide": 35, "label": "Excel 만들기"}, "p-01-3": {"book": "01-3", "slide": 36, "label": "거래·합계 대조"}, "p-break": {"book": "02-1", "slide": 40, "label": "5분 휴식"}, "p-02-1": {"book": "02-1", "slide": 41, "label": "PPT 구성안"}, "p-02-2": {"book": "02-2", "slide": 44, "label": "PPT 만들기"}, "p-02-3": {"book": "02-3", "slide": 47, "label": "검토·규칙 저장"}, "p-showcase": {"book": "showcase", "slide": 48, "label": "가능성 보기"}, "p-transfer": {"book": "transfer", "slide": 51, "label": "다음 주 재사용"}, "p-finish": {"book": "next", "slide": 53, "label": "마무리"}, "p-recover": {"book": "recover", "slide": null, "label": "막혔을 때"}, "p-own-start": {"book": "next", "slide": null, "label": "수업 후"}};
 const source=new URLSearchParams(location.search).get('from');
 const validSource=Object.hasOwn(routes,source)?source:null;
 const back=document.querySelector('[data-material-return]');
 function sync(){
  if(document.querySelector('#stage-select')){
   window.name='yjd-live';
   const stage=Object.hasOwn(routes,location.hash.slice(1))?location.hash.slice(1):'p-opening',r=routes[stage];
   const deck=document.querySelector('[data-stage-deck]'),book=document.querySelector('[data-stage-book]'),cases=document.querySelector('[data-stage-case]');
   deck.hidden=!r.slide;deck.href=`deck.html?from=${stage}#s${r.slide||1}`;deck.textContent=r.slide?`설명 슬라이드 · ${r.slide}장부터`:'설명 슬라이드';
   book.href=`textbook.html?from=${stage}#${r.book}`;cases.href=`showcase.html?from=${stage}#start`;cases.hidden=!['p-preview','p-showcase'].includes(stage);
  }else if(back){
   let stage=validSource;
   if(!stage&&document.body.classList.contains('deck')){
    const num=Number(location.hash.slice(2)||1);
    const matched=Object.entries(routes).filter(([id,r])=>r.slide&&r.slide<=num).sort((a,b)=>b[1].slide-a[1].slide)[0];
    stage=matched?.[0];
   }
   if(stage)back.href='live.html#'+stage;
   back.target='yjd-live';
  }
 }
 document.querySelector('[data-open-material-help]')?.addEventListener('click',e=>{e.preventDefault();const box=document.querySelector('#material-help');box.open=!box.open;if(box.open)box.scrollIntoView({block:'nearest'});});
 addEventListener('hashchange',sync);sync();
})();
