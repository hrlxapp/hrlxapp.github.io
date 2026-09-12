/*
  HRLX Browser — isolated page script.
  Static, calm accent by design (no color-cycling animation).
*/
const translations={
  ar:{
    dir:'rtl',
    nav:{ back:'HRLX ›', modes:'التصفح', download:'التنزيلات', support:'الدعم', products:'المنتجات', psSubs:'الاشتراكات', psHaven:'Haven', psBrowser:'Browser' },
    hero:{
      eyebrow:'HRLX Browser',
      title:'تصفح أوضح، بضجيج أقل.',
      desc:'يمنحك HRLX Browser تجربة تصفح مباشرة، مع تحكم أوضح فيما تراه وما تحمّله — دون أي تعقيد إضافي.',
      primary:'استكشف التجربة',
      secondary:'تعرّف على HRLX',
      visualCaption:'تصفح، بخطوط أهدأ وتحكم أوضح.'
    },
    modes:{
      kicker:'التصفح',
      title:'تصفح عادي، أو انتقل إلى سياق خاص.',
      desc:'تنقّل بين الصفحات بالطريقة المعتادة، أو افتح نافذة خاصة عند الحاجة إلى سياق منفصل لا يبقى ضمن سجل تصفحك المعتاد.',
      labelNormal:'عادي', labelPrivate:'خاص'
    },
    clean:{
      kicker:'تصفح أهدأ',
      title:'حجب إعلانات مدمج، ضمن تجربة التصفح.',
      desc:'يأتي HRLX Browser بحجب إعلانات مدمج يمكنك تفعيله أو إيقافه متى شئت، لتصفح أقل إزعاجًا وأكثر تركيزًا على المحتوى.',
      note:'هذا لا يعني اختفاء كل إعلان على الإنترنت — لكنه يمنحك تحكمًا حقيقيًا في مقدار الإزعاج.',
      toggleLabel:'حجب الإعلانات'
    },
    media:{
      kicker:'الوسائط',
      title:'يتعرّف HRLX على الوسائط المتاحة، ويمنحك خيارات مفيدة.',
      desc:'عند تصفح صفحة تحتوي صورًا أو فيديو مدعومًا، يوفّر لك Browser إجراءات سريعة للتعامل معها — دون أن يتحوّل التطبيق إلى أداة تنزيل فقط.',
      chip1:'حفظ', chip2:'تنزيل'
    },
    download:{
      kicker:'التنزيل',
      title:'نزّل ما تريد، بالجودة والوجهة التي تختارها.',
      desc:'اختر جودة الملف عندما تتوفر أكثر من خيار، وحدّد أين يُحفظ. يتيح لك «اسألني دائمًا» تحديد الجودة والوجهة في كل مرة، وتجمع المكتبة كل ما نزّلته في مكان واحد.',
      qualityLabel:'الجودة', destLabel:'الوجهة', destValue:'التنزيلات',
      askLabel:'اسألني دائمًا', libraryLabel:'المكتبة'
    },
    fast:{
      kicker:'تنزيل سريع',
      title:'زر تنزيل واحد. دائمًا.',
      desc:'التنزيل السريع تفضيل تُفعّله من الإعدادات، وليس زرًا إضافيًا. يختار HRLX الطريقة المناسبة داخليًا، فتضغط زر تنزيل واحد فقط، دون الحاجة لفهم أي تفاصيل تقنية.',
      settingLabel:'تنزيل سريع', buttonLabel:'تنزيل', buttonNote:'إجراء تنزيل واحد فقط'
    },
    context:{
      kicker:'إجراءات سريعة',
      title:'اضغط مطولًا، لإجراءات أسرع.',
      desc:'الضغط المطوّل على صورة أو فيديو يفتح إجراءات سياقية مفيدة — كالحفظ أو المشاركة — عند توفّرها، دون أن يكون ذلك محور تجربة المتصفح.',
      item1:'حفظ الصورة', item2:'حفظ الفيديو', item3:'نسخ الرابط'
    },
    control:{
      kicker:'التحكم',
      title:'أنت من يقرر، في كل خطوة.',
      desc:'من وضع التصفح إلى الحجب والتنزيلات والجودة ووجهة الحفظ — يمنحك HRLX Browser تحكمًا واضحًا في كل التفاصيل التي تهمك.',
      c1:'وضع التصفح', c2:'الحجب', c3:'التنزيلات', c4:'الجودة', c5:'وجهة التخزين'
    },
    devices:{
      kicker:'على iPhone وiPad',
      title:'التجربة نفسها، بمساحة تناسب جهازك.',
      desc:'تصفح مألوف على iPhone، ومساحة أوسع لعرض الصفحات والتنزيلات على iPad.'
    },
    cta:{
      desc:'تصفح أوضح، بتحكم أكبر — دون تعقيد إضافي.',
      primary:'تواصل مع فريق HRLX',
      secondary:'استكشف HRLX'
    },
    footer:{
      tagline:'متصفح مركّز، بتحكم أوضح وتصفح أهدأ.',
      home:'الرئيسية', support:'الدعم', privacy:'الخصوصية', terms:'الشروط',
      subs:'HRLX Subscriptions', haven:'HRLX Haven', browser:'HRLX Browser',
      copy:'© 2026 HRLX'
    }
  },
  en:{
    dir:'ltr',
    nav:{ back:'‹ HRLX', modes:'Browsing', download:'Downloads', support:'Support', products:'Products', psSubs:'Subscriptions', psHaven:'Haven', psBrowser:'Browser' },
    hero:{
      eyebrow:'HRLX Browser',
      title:'Clearer browsing, less noise.',
      desc:'HRLX Browser gives you a direct browsing experience, with clearer control over what you see and what you download — without extra clutter.',
      primary:'Explore the experience',
      secondary:'Discover HRLX',
      visualCaption:'Browsing, with calmer lines and clearer control.'
    },
    modes:{
      kicker:'Browsing',
      title:'Browse normally, or step into a private context.',
      desc:'Move between pages the usual way, or open a private window when you want a separate context that doesn\u2019t stay in your regular browsing history.',
      labelNormal:'Normal', labelPrivate:'Private'
    },
    clean:{
      kicker:'Calmer browsing',
      title:'Built-in ad blocking, part of the experience.',
      desc:'HRLX Browser includes built-in ad blocking you can turn on or off whenever you like, for calmer browsing that stays focused on the content.',
      note:'It won\u2019t make every ad on the web disappear — but it gives you real control over the noise.',
      toggleLabel:'Ad blocking'
    },
    media:{
      kicker:'Media',
      title:'HRLX recognizes supported media, and gives you useful options.',
      desc:'When a page includes supported images or video, Browser offers quick actions for handling them — without turning the app into a download tool first and foremost.',
      chip1:'Save', chip2:'Download'
    },
    download:{
      kicker:'Downloads',
      title:'Download what you want, in the quality and place you choose.',
      desc:'Pick a quality when more than one option is available, and choose where files are saved. \u201cAsk Me Always\u201d lets you decide quality and destination each time, and your library keeps everything in one place.',
      qualityLabel:'Quality', destLabel:'Destination', destValue:'Downloads',
      askLabel:'Ask Me Always', libraryLabel:'Library'
    },
    fast:{
      kicker:'Fast download',
      title:'One download button. Always.',
      desc:'Fast Download is a preference you turn on in Settings — not a second button. HRLX picks the right method in the background, so you just press one download button, without needing to understand any technical details.',
      settingLabel:'Fast Download', buttonLabel:'Download', buttonNote:'One download action, always'
    },
    context:{
      kicker:'Quick actions',
      title:'Long-press, for quicker actions.',
      desc:'Long-pressing an image or video opens useful context actions — like saving or sharing — when available, without making it the center of the browsing experience.',
      item1:'Save Image', item2:'Save Video', item3:'Copy Link'
    },
    control:{
      kicker:'Control',
      title:'You decide, every step of the way.',
      desc:'From browsing mode to blocking, downloads, quality, and where things are saved — HRLX Browser gives you clear control over the details that matter.',
      c1:'Browsing mode', c2:'Blocking', c3:'Downloads', c4:'Quality', c5:'Storage destination'
    },
    devices:{
      kicker:'On iPhone and iPad',
      title:'The same experience, sized for your device.',
      desc:'Familiar browsing on iPhone, and more room for pages and downloads on iPad.'
    },
    cta:{
      desc:'Clearer browsing, with more control — no extra complexity.',
      primary:'Contact the HRLX team',
      secondary:'Discover HRLX'
    },
    footer:{
      tagline:'A focused browser, with clearer control and calmer browsing.',
      home:'Home', support:'Support', privacy:'Privacy', terms:'Terms',
      subs:'HRLX Subscriptions', haven:'HRLX Haven', browser:'HRLX Browser',
      copy:'© 2026 HRLX'
    }
  }
};

const root=document.documentElement;
let lang=localStorage.getItem('hrlx-lang')||'ar';

function applyLang(){
  const data=translations[lang];
  root.lang=lang;
  root.dir=data.dir;
  document.querySelectorAll('[data-i18n]').forEach(el=>{
    let value=data;
    for(const key of el.dataset.i18n.split('.')) value=value?.[key];
    if(value) el.textContent=value;
  });
  document.getElementById('btnAr').classList.toggle('active',lang==='ar');
  document.getElementById('btnEn').classList.toggle('active',lang==='en');
}

document.getElementById('btnAr').addEventListener('click',()=>{ lang='ar'; localStorage.setItem('hrlx-lang',lang); applyLang(); });
document.getElementById('btnEn').addEventListener('click',()=>{ lang='en'; localStorage.setItem('hrlx-lang',lang); applyLang(); });
applyLang();

const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
  if(entry.isIntersecting) entry.target.classList.add('in');
}),{ threshold:.12 });
document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));

const mobileMenu=document.getElementById('mobileMenu');
const hamburgerBtn=document.getElementById('hamburgerBtn');
const mobileMenuClose=document.getElementById('mobileMenuClose');
hamburgerBtn.addEventListener('click',()=>{ mobileMenu.classList.add('open'); hamburgerBtn.setAttribute('aria-expanded','true'); });
mobileMenuClose.addEventListener('click',()=>{ mobileMenu.classList.remove('open'); hamburgerBtn.setAttribute('aria-expanded','false'); });
mobileMenu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{ mobileMenu.classList.remove('open'); hamburgerBtn.setAttribute('aria-expanded','false'); }));
