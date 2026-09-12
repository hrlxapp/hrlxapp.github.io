/*
  HRLX Haven — isolated page script.
  Static, calm accent by design (no color-cycling animation).
*/
const translations={
  ar:{
    dir:'rtl',
    nav:{ back:'HRLX ›', story:'القصة', privacy:'الخصوصية', support:'الدعم', products:'المنتجات', psSubs:'الاشتراكات', psHaven:'Haven', psBrowser:'Browser' },
    hero:{
      eyebrow:'HRLX Haven',
      title:'مساحة خاصة، لما يخصّك وحدك.',
      desc:'يمنح HRLX Haven صورك وفيديوهاتك وملفاتك مكانًا مشفّرًا خاصًا بها، منظّمًا ضمن مجموعات يسهل الوصول إليها — بعيدًا عن مساحتك اليومية.',
      primary:'استكشف الفكرة',
      secondary:'تعرّف على HRLX',
      visualCaption:'مساحة واحدة، لكل أنواع المحتوى الخاص بك.'
    },
    story:{
      kicker:'الفكرة',
      title:'مكان خاص لما لا تريد مزجه بمساحتك اليومية.',
      body:'بدلًا من إخفاء المحتوى داخل مكتبة الصور أو الملفات المعتادة، يمنحه Haven مساحته الخاصة والمشفّرة — منظَّمة ضمن مجموعات، ومتاحة فقط لك.'
    },
    content:{
      kicker:'أبعد من الصور',
      title:'مساحة واحدة لكل أنواع المحتوى الخاص بك.',
      desc:'صور، فيديوهات، وملفات — تجتمع في المكان نفسه، دون الحاجة إلى تطبيقات أو خزائن منفصلة.',
      tPhoto:'صور', tVideo:'فيديو', tFile:'ملفات'
    },
    organize:{
      kicker:'التنظيم',
      title:'كل شيء في مكانه، وسهل الوصول إليه.',
      desc:'رتّب محتواك ضمن مجموعات تناسبك، وابحث للوصول إلى ما تريده خلال ثوانٍ.',
      search:'ابحث في Haven',
      c1:'عائلة', c2:'مستندات', c3:'لحظات', c4:'أخرى'
    },
    flow:{
      kicker:'كيف يعمل',
      title:'من مكتبتك، إلى مساحتك الخاصة.',
      desc:'استورد المحتوى من الصور أو الملفات، اعرضه داخل Haven، وشاركه فقط عندما تقرر ذلك.',
      t1:'استيراد', d1:'أضِف صورًا وفيديوهات وملفات من مكتبتك المعتادة بخطوات بسيطة.',
      t2:'عرض', d2:'افتح واستعرض محتواك داخل Haven مباشرة، بواجهة هادئة وواضحة.',
      t3:'مشاركة عند الحاجة', d3:'التصدير والمشاركة خطوة تقوم بها أنت — لا تحدث تلقائيًا أبدًا.'
    },
    privacy:{
      kicker:'الخصوصية والتحكم',
      title:'وصول لك وحدك، وتحكم كامل في محتواك.',
      t1:'دخول بهويتك أنت', d1:'يفتح Haven عبر معرّف الوجه أو البصمة أو رمز جهازك — نفس هوية الدخول لجهازك.',
      t2:'محتوى مشفّر دائمًا', d2:'يبقى كل ما تحفظه في Haven مشفّرًا أثناء التخزين، بمعزل عن مساحتك المعتادة.',
      t3:'حذف يمكن التراجع عنه', d3:'ما تحذفه ينتقل أولًا إلى المهملات، ويمكن استعادته قبل الحذف النهائي.'
    },
    storage:{
      kicker:'التخزين',
      title:'مكان الحفظ، بقرارك.',
      desc:'يمكن حفظ محتوى Haven مباشرة على جهازك، أو ضمن مساحة مرتبطة بـ iCloud. ميزات الاستمرارية والمزامنة الكاملة بين الأجهزة ما تزال قيد التطوير المستمر.',
      p1:'على جهازك', p2:'iCloud'
    },
    devices:{
      kicker:'على iPhone وiPad',
      title:'نفس الخصوصية، بمساحة تناسب جهازك.',
      desc:'تجربة مألوفة على iPhone، ومساحة أوسع لاستعراض مجموعاتك على iPad.'
    },
    cta:{
      desc:'مساحتك الخاصة، بجانب مساحتك اليومية — لا داخلها.',
      primary:'تواصل مع فريق HRLX',
      secondary:'استكشف HRLX'
    },
    footer:{
      tagline:'مساحة خاصة ومشفّرة لمحتواك الشخصي.',
      home:'الرئيسية', support:'الدعم', privacy:'الخصوصية', terms:'الشروط',
      subs:'HRLX Subscriptions', haven:'HRLX Haven', browser:'HRLX Browser',
      copy:'© 2026 HRLX'
    }
  },
  en:{
    dir:'ltr',
    nav:{ back:'‹ HRLX', story:'Story', privacy:'Privacy', support:'Support', products:'Products', psSubs:'Subscriptions', psHaven:'Haven', psBrowser:'Browser' },
    hero:{
      eyebrow:'HRLX Haven',
      title:'A private space, for what belongs only to you.',
      desc:'HRLX Haven gives your photos, videos, and files an encrypted space of their own, organized into easy-to-find collections — kept apart from your everyday space.',
      primary:'Explore the idea',
      secondary:'Discover HRLX',
      visualCaption:'One space, for every kind of personal content.'
    },
    story:{
      kicker:'The idea',
      title:'A private place for the things you don\u2019t want mixed into your everyday space.',
      body:'Instead of hiding content inside your regular photo or file library, Haven gives it its own encrypted space — organized into collections, and accessible only to you.'
    },
    content:{
      kicker:'Beyond photos',
      title:'One space for every kind of personal content.',
      desc:'Photos, videos, and files — together in one place, without separate apps or vaults.',
      tPhoto:'Photos', tVideo:'Video', tFile:'Files'
    },
    organize:{
      kicker:'Organization',
      title:'Everything in its place, and easy to find.',
      desc:'Arrange your content into collections that make sense to you, and search to find what you need in seconds.',
      search:'Search Haven',
      c1:'Family', c2:'Documents', c3:'Moments', c4:'Other'
    },
    flow:{
      kicker:'How it works',
      title:'From your library, to your private space.',
      desc:'Import from Photos or Files, view it inside Haven, and share it only when you choose to.',
      t1:'Import', d1:'Add photos, videos, and files from your everyday library in a few simple steps.',
      t2:'View', d2:'Open and browse your content directly inside Haven, in a calm, clear view.',
      t3:'Share, when you choose', d3:'Exporting and sharing is something you choose to do — it never happens automatically.'
    },
    privacy:{
      kicker:'Privacy & control',
      title:'Access only for you, and full control over your content.',
      t1:'Unlocked by you', d1:'Haven unlocks with Face ID, Touch ID, or your device passcode — the same identity that protects your device.',
      t2:'Always encrypted', d2:'Everything you keep in Haven stays encrypted while stored, kept apart from your everyday space.',
      t3:'Deletion you can undo', d3:'What you delete moves to Trash first, and can be restored before it\u2019s gone for good.'
    },
    storage:{
      kicker:'Storage',
      title:'Where it\u2019s kept, is your call.',
      desc:'Haven content can be kept directly on your device, or within an iCloud-oriented space. Full cross-device continuity and sync are still being refined.',
      p1:'On your device', p2:'iCloud'
    },
    devices:{
      kicker:'On iPhone and iPad',
      title:'The same privacy, sized for your device.',
      desc:'A familiar experience on iPhone, and more room to browse your collections on iPad.'
    },
    cta:{
      desc:'Your private space, alongside your everyday one — not inside it.',
      primary:'Contact the HRLX team',
      secondary:'Discover HRLX'
    },
    footer:{
      tagline:'A private, encrypted space for your personal content.',
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
