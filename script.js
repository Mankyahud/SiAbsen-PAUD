/* =========================================================
   KONFIGURASI SIPAUD — isi bagian ini, tidak perlu ubah kode lain
   ========================================================= */
const SIPAUD_CONFIG = {
  waNumber: '6285174360195',
  waText: 'Halo SiPaud, saya ingin bertanya tentang penggunaan SiPaud untuk sekolah PAUD.',

  // Tempel link Google Form / Google Sheets / PDF di sini (kosongkan = tombol nonaktif)
  links: {
    formAbsenGuru: '',    // Google Form absensi guru
    formAbsenMurid: '',   // Google Form absensi murid
    rekapPdfBulanan: ''   // Folder/link PDF rekap bulanan (Google Drive)
  }
};

(function(){
  /* ---------- Menu mobile ---------- */
  const menu=document.querySelector('.menu-btn');
  const nav=document.querySelector('.nav-links');
  if(menu&&nav) menu.addEventListener('click',()=>nav.classList.toggle('open'));
  document.querySelectorAll('.nav-links a').forEach(a=>a.addEventListener('click',()=>nav&&nav.classList.remove('open')));

  /* ---------- WhatsApp ---------- */
  const waUrl='https://wa.me/'+SIPAUD_CONFIG.waNumber+'?text='+encodeURIComponent(SIPAUD_CONFIG.waText);
  document.querySelectorAll('[data-wa]').forEach(a=>{a.href=waUrl;a.target='_blank';a.rel='noopener';});
  const fab=document.createElement('a');
  fab.className='wa-float';fab.href=waUrl;fab.target='_blank';fab.rel='noopener';
  fab.setAttribute('aria-label','Hubungi SiPaud via WhatsApp');
  fab.innerHTML='<span class="wa-ico">💬</span><span class="wa-text">WhatsApp</span>';
  document.body.appendChild(fab);

  /* ---------- Tombol link (Google Form / PDF) ---------- */
  document.querySelectorAll('[data-link]').forEach(el=>{
    const url=SIPAUD_CONFIG.links[el.dataset.link];
    if(url){el.href=url;el.target='_blank';el.rel='noopener';}
    else{el.classList.add('disabled');el.removeAttribute('href');el.setAttribute('aria-disabled','true');el.title='Link belum diisi di script.js';}
  });
})();
