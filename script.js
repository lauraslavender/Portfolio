// Click any image inside a project page to see it full screen. Click anywhere or press Esc to close.
const box = document.getElementById("lightbox");
if (box) {
  const boxImg = box.querySelector("img");
  document.querySelectorAll(".cover img, .full img, .pair img, .split img, .quad img, .before img, .strip img, .browser img, .trio img, .evolve img").forEach((img) => {
    img.addEventListener("click", () => {
      boxImg.src = img.src;
      boxImg.alt = img.alt;
      box.hidden = false;
    });
  });
  box.addEventListener("click", () => (box.hidden = true));
  document.addEventListener("keydown", (e) => { if (e.key === "Escape") box.hidden = true; });
}

// Rosie the cat: lives at the very bottom of the homepage and chases her ball when you scroll.
(function () {
  const contact = document.getElementById("contact");
  if (!contact) return;
  const wrap = document.createElement("div");
  wrap.className = "rosie";
  wrap.setAttribute("aria-hidden", "true");
  wrap.innerHTML = '<div class="rosie-track"><div class="rosie-ball-wrap"><svg class="rosie-ball" viewBox="0 0 30 30" aria-hidden="true" focusable="false"><defs><filter id="rwb" x="-20%" y="-20%" width="140%" height="140%"><feTurbulence type="fractalNoise" baseFrequency="0.12" numOctaves="2" seed="2" result="n"/><feDisplacementMap in="SourceGraphic" in2="n" scale="1.6" xChannelSelector="R" yChannelSelector="G"/></filter></defs><g filter="url(#rwb)"><circle cx="15" cy="15" r="12.5" fill="#B99BF2"/></g></svg></div><div class="rosie-cat-wrap"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 220 140" class="rosie-cat" aria-hidden="true" focusable="false"> <defs> <filter id="rwc" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB"> <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="n"/> <feDisplacementMap in="SourceGraphic" in2="n" scale="3" xChannelSelector="R" yChannelSelector="G" result="d0"/> <feTurbulence type="turbulence" baseFrequency="0.5 0.35" numOctaves="1" seed="7" result="fur"/> <feDisplacementMap in="d0" in2="fur" scale="1.5" xChannelSelector="R" yChannelSelector="B" result="d1"/> <feGaussianBlur in="d1" stdDeviation=".35" result="d"/> <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="11" result="g"/> <feColorMatrix in="g" type="matrix" values="0 0 0 0 1  0 0 0 0 0.97  0 0 0 0 0.92  -8 0 0 0 3.1" result="specks"/> <feComposite in="specks" in2="d" operator="in" result="sp"/> <feComponentTransfer in="sp" result="sp2"><feFuncA type="linear" slope=".22"/></feComponentTransfer> <feMerge><feMergeNode in="d"/><feMergeNode in="sp2"/></feMerge> </filter> <filter id="rwbow" x="-12%" y="-12%" width="124%" height="124%" color-interpolation-filters="sRGB"> <feTurbulence type="fractalNoise" baseFrequency="0.035" numOctaves="3" seed="4" result="n"/> <feDisplacementMap in="SourceGraphic" in2="n" scale="1" xChannelSelector="R" yChannelSelector="G" result="d0"/> <feTurbulence type="turbulence" baseFrequency="0.5 0.35" numOctaves="1" seed="7" result="fur"/> <feDisplacementMap in="d0" in2="fur" scale="0.9" xChannelSelector="R" yChannelSelector="B" result="d1"/> <feGaussianBlur in="d1" stdDeviation=".35" result="d"/> <feTurbulence type="fractalNoise" baseFrequency="1.4" numOctaves="1" seed="11" result="g"/> <feColorMatrix in="g" type="matrix" values="0 0 0 0 1  0 0 0 0 0.97  0 0 0 0 0.92  -8 0 0 0 3.1" result="specks"/> <feComposite in="specks" in2="d" operator="in" result="sp"/> <feComponentTransfer in="sp" result="sp2"><feFuncA type="linear" slope=".22"/></feComponentTransfer> <feMerge><feMergeNode in="d"/><feMergeNode in="sp2"/></feMerge> </filter> <filter id="rsoft"><feGaussianBlur stdDeviation="1.3"/></filter> <clipPath id="rcb"><path d="M66 90 C63 72 78 61 98 62 C114 63 126 68 140 68 C153 68 161 76 160 87 C159 99 150 106 137 107.5 C117 110 94 110 81 106.5 C71 103.5 66 99 66 90 Z"/></clipPath> <clipPath id="rct"><path d="M71 88 C56 86 45 77 43 64 C41 52 46 42 55 37 C61.5 33.5 67 37 63.5 42.5 C58.5 48.5 58 56 61 63 C64 70 71 75 78 77 Z"/></clipPath> </defs> <ellipse cx="112" cy="130.5" rx="46" ry="2.4" fill="#B99BF2" opacity=".35"/> <g filter="url(#rwc)"> <g class="r-tail"><path d="M71 88 C56 86 45 77 43 64 C41 52 46 42 55 37 C61.5 33.5 67 37 63.5 42.5 C58.5 48.5 58 56 61 63 C64 70 71 75 78 77 Z" fill="#EFAE6E"/><g clip-path="url(#rct)" fill="#DB8846" opacity=".75"><g filter="url(#rsoft)"><path d="M44 64 l14 -6 l2 5 l-14 6Z"/><path d="M42 50 l14 -1 l0 5 l-14 1Z"/><path d="M46 38 l11 4 l-2 4 l-11 -4Z"/></g></g></g> <g class="r-leg r-leg-b2" style="transform-origin:90.4px 101px"><path d="M86 98 L86.6 126 Q86.8 129 89.5 129 L93.8 129 Q96.3 129 94.8 125.5 L94.8 98 Z" fill="#E6A061"/></g><g class="r-leg r-leg-f2" style="transform-origin:137.4px 101px"><path d="M133 98 L133.6 126 Q133.8 129 136.5 129 L140.8 129 Q143.3 129 141.8 125.5 L141.8 98 Z" fill="#E6A061"/></g> <path d="M66 90 C63 72 78 61 98 62 C114 63 126 68 140 68 C153 68 161 76 160 87 C159 99 150 106 137 107.5 C117 110 94 110 81 106.5 C71 103.5 66 99 66 90 Z" fill="#EFAE6E"/> <g clip-path="url(#rcb)"><g filter="url(#rsoft)" fill="#DB8846" opacity=".8"> <path d="M86 64 q5 10 2 22 l-4 0 q2 -10 -3 -20Z"/><path d="M101 64 q5 11 2 23 l-4 0 q2 -11 -3 -21Z"/><path d="M116 65 q5 11 2 23 l-4 0 q2 -11 -3 -21Z"/><path d="M131 66 q4 10 2 20 l-4 0 q1.5 -9 -2.5 -18Z"/> <path d="M64 80 q8 2 12 8 l-2 3 q-4 -5 -11 -7Z"/> </g></g> <g class="r-leg r-leg-b1" style="transform-origin:76.4px 101px"><path d="M72 98 L72.6 126 Q72.8 129 75.5 129 L79.8 129 Q82.3 129 80.8 125.5 L80.8 98 Z" fill="#EFAE6E"/></g><g class="r-leg r-leg-f1" style="transform-origin:150.4px 101px"><path d="M146 98 L146.6 126 Q146.8 129 149.5 129 L153.8 129 Q156.3 129 154.8 125.5 L154.8 98 Z" fill="#EFAE6E"/></g> <g class="r-head" transform="translate(-3 8)"> <g class="r-hf"><path d="M146 64 C144 53 150 45 160 44 L161 37 Q163 39 166 43.5 Q170 43 174 44 Q177 40 180 37.5 L180.5 46 C185 50 186 58 183 64 C180 71 172 74 164 73 C155 72 147 70 146 64 Z" fill="#EFAE6E"/><g filter="url(#rsoft)" fill="#DB8846" opacity=".7"><path d="M163 45 l2 0 l-.5 7 l-1 0Z"/><path d="M168 45 l2 0 l-.6 6 l-1 0Z"/></g><ellipse cx="166" cy="68.5" rx="6" ry="3.2" fill="#FFF1DF" opacity=".7"/></g> <g class="r-hs"><path d="M146 64 C144 53 150 45 159 43.5 L163 36 Q166 39.5 168.5 43.5 Q171.5 43 174 44.5 L178.5 38 L179.5 47.5 C182.5 50.5 185.5 54.5 186.8 58 C187.5 60.8 186 63 183 64 C180 70.5 172 74 164 73 C155 72 147 70 146 64 Z" fill="#EFAE6E"/><g filter="url(#rsoft)" fill="#DB8846" opacity=".7"><path d="M160 45 l2 0 l-.5 7 l-1 0Z"/><path d="M165 45 l2 0 l-.6 6 l-1 0Z"/><path d="M148 56 l7 1 l0 2 l-7 -1Z"/></g><ellipse cx="175" cy="69.5" rx="5" ry="2.8" fill="#FFF1DF" opacity=".7"/></g> </g> </g> <g transform="translate(-3 8)"> <g class="r-hf"> <ellipse cx="157.5" cy="63.5" rx="3.2" ry="1.9" fill="#F59AA8" opacity=".5"/> <ellipse cx="175.5" cy="63.5" rx="3.2" ry="1.9" fill="#F59AA8" opacity=".5"/> <circle cx="161" cy="58.5" r="1.7" fill="#6e5244"/><circle cx="172" cy="58.5" r="1.7" fill="#6e5244"/> <path d="M165.4 62.2 q1.1 .5 2.2 0 q-.4 1.2 -1.1 1.4 q-.7 -.2 -1.1 -1.4Z" fill="#E48F96"/> <path d="M166.5 63.8 q0 1.4 -1.6 1.6 M166.5 63.8 q0 1.4 1.6 1.6" fill="none" stroke="#8a6a5a" stroke-width=".55" stroke-linecap="round"/> <g stroke="#a58676" stroke-width=".45" stroke-linecap="round" fill="none" opacity=".8"><path d="M156 62 l-12 -2"/><path d="M156 63.5 l-12 1.5"/><path d="M177 62 l12 -2"/><path d="M177 63.5 l12 1.5"/></g> <g filter="url(#rwbow)"><g transform="translate(166.5 74) rotate(0) scale(0.78 0.78)"><path d="M0 0 C-3 -7 -10 -9 -11 -4 C-12 1 -6 3 0 0Z" fill="#B99BF2"/><path d="M0 0 C3 -7 10 -9 11 -4 C12 1 6 3 0 0Z" fill="#B99BF2"/><path d="M0 0 C-3 -4 -7 -5 -7.5 -3" fill="none" stroke="#9C77EA" stroke-width=".9" stroke-linecap="round"/><path d="M0 0 C3 -4 7 -5 7.5 -3" fill="none" stroke="#9C77EA" stroke-width=".9" stroke-linecap="round"/><path d="M-1 1 L-5 8 L-2.6 7.2 L-1.8 9.6 Z M1 1 L5 8 L2.6 7.2 L1.8 9.6 Z" fill="#A98AEF"/><ellipse cx="0" cy="0" rx="2.4" ry="2.2" fill="#8F67E6"/></g></g> </g> <g class="r-hs"> <ellipse cx="177" cy="63.5" rx="3.4" ry="2" fill="#F59AA8" opacity=".5"/> <circle cx="176.5" cy="57.3" r="1.7" fill="#6e5244"/> <path d="M185.4 58.6 q1.3 -.2 1.9 .6 q-.6 1.2 -1.4 1.3 q-.6 -.8 -.5 -1.9Z" fill="#E48F96"/> <path d="M185.6 61 q-.3 1.6 -2 1.8" fill="none" stroke="#8a6a5a" stroke-width=".55" stroke-linecap="round"/> <g stroke="#a58676" stroke-width=".45" stroke-linecap="round" fill="none" opacity=".8"><path d="M183 62.3 l12 -2.2"/><path d="M183 63.6 l12 1.2"/></g> <g filter="url(#rwbow)"><g transform="translate(161.5 73.5) rotate(-28) scale(0.74 0.74)"><path d="M0 0 C-3 -7 -10 -9 -11 -4 C-12 1 -6 3 0 0Z" fill="#B99BF2"/><path d="M0 0 C3 -7 10 -9 11 -4 C12 1 6 3 0 0Z" fill="#B99BF2"/><path d="M0 0 C-3 -4 -7 -5 -7.5 -3" fill="none" stroke="#9C77EA" stroke-width=".9" stroke-linecap="round"/><path d="M0 0 C3 -4 7 -5 7.5 -3" fill="none" stroke="#9C77EA" stroke-width=".9" stroke-linecap="round"/><path d="M-1 1 L-5 8 L-2.6 7.2 L-1.8 9.6 Z M1 1 L5 8 L2.6 7.2 L1.8 9.6 Z" fill="#A98AEF"/><ellipse cx="0" cy="0" rx="2.4" ry="2.2" fill="#8F67E6"/></g></g> </g> </g> </svg> </div></div>';
  const footer = document.querySelector("footer");
  footer.parentNode.insertBefore(wrap, footer);
  const track = wrap.querySelector(".rosie-track");
  const catEl = wrap.querySelector(".rosie-cat-wrap");
  const ballEl = wrap.querySelector(".rosie-ball-wrap");
  const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  let W = 0, catW = 0, ballW = 0, cx = 0, bx = 0, bdir = 1, face = 1, energy = 0, spin = 0, visible = false, raf = 0;
  function measure() {
    W = track.clientWidth; catW = catEl.offsetWidth; ballW = ballEl.offsetWidth;
    if (!cx) { cx = W * 0.08; bx = W * 0.08 + catW + 40; }
    cx = Math.min(cx, W - catW); bx = Math.min(bx, W - ballW);
  }
  function draw() {
    catEl.style.transform = "translateX(" + cx + "px)";
    catEl.firstChild.style.transform = face < 0 ? "scaleX(-1)" : "";
    ballEl.style.transform = "translateX(" + bx + "px)";
    ballEl.firstChild.style.transform = "rotate(" + spin + "deg)";
  }
  function kick(amount) {
    if (reduce || !visible) return;
    energy = Math.min(energy + amount, 5);
    if (!raf) raf = requestAnimationFrame(step);
  }
  function step() {
    const v = energy;
    // the ball rolls ahead and bounces off the edges
    bx += bdir * v * 1.25;
    spin += bdir * v * 6;
    if (bx > W - ballW) { bx = W - ballW; bdir = -1; }
    if (bx < 0) { bx = 0; bdir = 1; }
    // Rosie trots after it
    const target = bx + ballW / 2 - catW / 2;
    const dx = target - cx;
    if (Math.abs(dx) > catW * 0.15) face = dx > 0 ? 1 : -1;
    const gap = catW * 0.62;
    if (Math.abs(dx) > gap) cx += Math.sign(dx) * Math.min(v * 1.1, Math.abs(dx) - gap);
    cx = Math.max(0, Math.min(cx, W - catW));
    wrap.classList.toggle("walking", v > 0.25);
    wrap.style.setProperty("--step", (0.62 - Math.min(v, 4) * 0.08).toFixed(2) + "s");
    draw();
    energy *= 0.955;
    if (energy > 0.05) raf = requestAnimationFrame(step);
    else { energy = 0; raf = 0; wrap.classList.remove("walking"); }
  }
  measure(); draw();
  window.addEventListener("resize", () => { measure(); draw(); });
  new IntersectionObserver((e) => { visible = e[0].isIntersecting; if (visible) kick(1.5); }).observe(wrap);
  let lastY = window.scrollY;
  window.addEventListener("scroll", () => { const d = Math.abs(window.scrollY - lastY); lastY = window.scrollY; kick(Math.min(d, 80) * 0.03); }, { passive: true });
  window.addEventListener("wheel", (e) => kick(Math.min(Math.abs(e.deltaY), 80) * 0.02), { passive: true });
  let ty = 0;
  window.addEventListener("touchstart", (e) => { ty = e.touches[0].clientY; }, { passive: true });
  window.addEventListener("touchmove", (e) => { const y = e.touches[0].clientY; kick(Math.min(Math.abs(y - ty), 60) * 0.05); ty = y; }, { passive: true });
  wrap.addEventListener("click", () => kick(3));
})();
