// Hotmart one-click funnel widget (same code for every step)
(function(){
  var s=document.createElement('script');
  s.src='https://checkout.hotmart.com/lib/hotmart-checkout-elements.js';
  s.onload=function(){ checkoutElements.init('salesFunnel').mount('#hotmart-sales-funnel'); };
  document.body.appendChild(s);
})();
// Real deadline: 15 minutes from the first time THIS browser opens this page.
// It does not reset on reload. When it ends, the offer is actually withdrawn.
(function(){
  var MIN=15, key='florica-deadline-'+location.pathname, end;
  try{ end=parseInt(localStorage.getItem(key),10); if(!end){ end=Date.now()+MIN*60000; localStorage.setItem(key,end); } }
  catch(e){ end=Date.now()+MIN*60000; }
  var out=document.getElementById('countdown'), label=document.getElementById('timer-label');
  function tick(){
    var s=Math.max(0,Math.round((end-Date.now())/1000));
    out.textContent=String(Math.floor(s/60)).padStart(2,'0')+':'+String(s%60).padStart(2,'0');
    if(s<=0){ document.body.classList.add('expired'); label.textContent='This one-time offer has closed'; out.style.display='none'; clearInterval(t); }
  }
  var t=setInterval(tick,1000); tick();
})();
