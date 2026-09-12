/*
  Shared HRLX logo color-cycle engine, used by every product page.
  HRLX slash colors are brand variants, not product-ownership colors —
  this keeps the nav/footer wordmark cycling the same palette on every
  product, independent of that product's own page accent.
*/
(function(){
  const COLORS = [
    '../assets/images/brand/hrlx-purple.png',
    '../assets/images/brand/hrlx-blue.png',
    '../assets/images/brand/hrlx-cyan.png',
    '../assets/images/brand/hrlx-green.png',
    '../assets/images/brand/hrlx-pink.png',
    '../assets/images/brand/hrlx-red.png',
    '../assets/images/brand/hrlx-orange.png',
    '../assets/images/brand/hrlx-gold.png'
  ];
  const icons = document.querySelectorAll('.brand-icon');
  if(!icons.length) return;
  COLORS.forEach(src=>{ const img = new Image(); img.src = src; });

  if(matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  const CYCLE_MS = 8500;
  function tick(){
    const elapsed = Date.now();
    const count = Math.floor(elapsed / CYCLE_MS);
    const progress = (1 - Math.cos(Math.PI * (elapsed - count * CYCLE_MS) / CYCLE_MS)) / 2;
    const current = COLORS[count % COLORS.length];
    const next = COLORS[(count + 1) % COLORS.length];
    icons.forEach(wrap=>{
      const a = wrap.querySelector('.icon-a');
      const b = wrap.querySelector('.icon-b');
      if(!a || !b) return;
      if(a.dataset.src !== current){ a.src = current; a.dataset.src = current; }
      if(b.dataset.src !== next){ b.src = next; b.dataset.src = next; }
      a.style.opacity = 1 - progress;
      b.style.opacity = progress;
    });
    requestAnimationFrame(tick);
  }
  requestAnimationFrame(tick);
})();
