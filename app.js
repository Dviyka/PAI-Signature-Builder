/* ════════════════════════════════════════════
   PNG assets (base64)
════════════════════════════════════════════ */
const LOGO_PNG   = 'data:image/png;base64,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';
const VECTOR_PNG = 'data:image/png;base64,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';

/* ════════════════════════════════════════════
   State
════════════════════════════════════════════ */
const pageMode = document.body.dataset.mode === 'inner' ? 'inner' : 'public';
let photoDataUrl = null;
const COMPANY_NAME = 'PAI Defence';
const ACCESS_PASSWORD_HASH = '662603275e69349c9f51a786ce24e99eef127bb973b9d54c4bce1799a3da5d0a';
const AUTH_SESSION_KEY = 'pai_signature_auth_ok';
const PHOTO_MIN_SIZE = 180;
const PHOTO_OUTPUT_SIZE = 360;
const PHOTO_MAX_BYTES = 50 * 1024;
const PHOTO_START_QUALITY = 0.86;
const PHOTO_MIN_QUALITY = 0.5;

/* ════════════════════════════════════════════
   Helpers
════════════════════════════════════════════ */
const $ = id => document.getElementById(id);
const v = id => ($( id) ? $(id).value.trim() : '');
const on = (id, eventName, handler) => {
  const element = $(id);
  if (element) element.addEventListener(eventName, handler);
};
function esc(s) {
  return String(s)
    .replace(/&/g,'&amp;').replace(/</g,'&lt;')
    .replace(/>/g,'&gt;').replace(/"/g,'&quot;');
}
function hasScheme(value) {
  return /^[a-zA-Z][a-zA-Z\d+\-.]*:/.test(value);
}
function toHttpUrl(rawValue, allowBare = false) {
  const raw = String(rawValue || '').trim();
  if (!raw) return '';
  const candidate = allowBare && !hasScheme(raw) ? `https://${raw}` : raw;
  try {
    const parsed = new URL(candidate);
    if (parsed.protocol !== 'http:' && parsed.protocol !== 'https:') return '';
    return parsed.href;
  } catch {
    return '';
  }
}
function normalizeWebsite(rawValue) {
  const raw = String(rawValue || '').trim();
  const href = toHttpUrl(raw, true);
  const label = raw.replace(/^https?:\/\//i, '').replace(/\/$/, '');
  return { href, label };
}
function sanitizeEmail(emailValue) {
  const email = String(emailValue || '').trim();
  if (!email) return '';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return '';
  return email;
}
function sanitizeTel(phoneValue) {
  const cleaned = String(phoneValue || '').trim().replace(/[^+\d]/g, '').replace(/(?!^)\+/g, '');
  return cleaned;
}
function toMailtoHref(emailValue) {
  const email = sanitizeEmail(emailValue);
  return email ? `mailto:${email}` : '';
}
function toTelHref(phoneValue) {
  const phone = sanitizeTel(phoneValue);
  return phone ? `tel:${phone}` : '';
}
function dataUrlSizeBytes(dataUrl) {
  const base64 = String(dataUrl || '').split(',')[1] || '';
  return Math.floor((base64.length * 3) / 4);
}
function setPhotoUploadState(isUploaded) {
  const title = $('pub-photo-title');
  const subtitle = $('pub-photo-subtitle');
  const thumb = $('pub-photo-thumb');
  if (!title || !subtitle || !thumb) return;

  if (isUploaded) {
    title.textContent = 'Замінити фото';
    subtitle.textContent = 'Перетягни або клікни · мін. 180×180px';
    thumb.style.display = 'none';
    return;
  }

  title.textContent = 'Додати фото';
  subtitle.textContent = 'Перетягни або клікни · мін. 180×180px';
  thumb.style.display = 'none';
}
function compressToJpegDataUrl(img) {
  const canvas = document.createElement('canvas');
  canvas.width = PHOTO_OUTPUT_SIZE;
  canvas.height = PHOTO_OUTPUT_SIZE;
  const ctx = canvas.getContext('2d');
  const side = Math.min(img.width, img.height);
  const sx = (img.width - side) / 2;
  const sy = (img.height - side) / 2;
  ctx.drawImage(img, sx, sy, side, side, 0, 0, PHOTO_OUTPUT_SIZE, PHOTO_OUTPUT_SIZE);

  let quality = PHOTO_START_QUALITY;
  let dataUrl = canvas.toDataURL('image/jpeg', quality);
  while (dataUrlSizeBytes(dataUrl) > PHOTO_MAX_BYTES && quality > PHOTO_MIN_QUALITY) {
    quality = Math.max(PHOTO_MIN_QUALITY, quality - 0.08);
    dataUrl = canvas.toDataURL('image/jpeg', quality);
    if (quality === PHOTO_MIN_QUALITY) break;
  }
  return dataUrl;
}
function stripHtml(html) {
  const tmp = document.createElement('div');
  tmp.innerHTML = html;
  return tmp.innerText || tmp.textContent || '';
}

async function copyHtmlToClipboard(html) {
  const plainText = stripHtml(html);

  if (navigator.clipboard && window.ClipboardItem) {
    try {
      const item = new ClipboardItem({
        'text/html': new Blob([html], { type: 'text/html' }),
        'text/plain': new Blob([plainText], { type: 'text/plain' })
      });
      await navigator.clipboard.write([item]);
      return true;
    } catch {}
  }

  const zone = $('copy-zone');
  zone.innerHTML = html;
  await new Promise(r => setTimeout(r, 80));

  const range = document.createRange();
  range.selectNodeContents(zone);
  const sel = window.getSelection();
  sel.removeAllRanges();
  sel.addRange(range);

  const copied = document.execCommand('copy');
  sel.removeAllRanges();
  zone.innerHTML = '';
  return copied;
}

function unlockApp() {
  const overlay = $('auth-overlay');
  overlay.style.display = 'none';
  document.body.classList.remove('auth-locked');
}

async function sha256Hex(text) {
  const encoded = new TextEncoder().encode(text);
  const digest = await crypto.subtle.digest('SHA-256', encoded);
  const bytes = Array.from(new Uint8Array(digest));
  return bytes.map(b => b.toString(16).padStart(2, '0')).join('');
}

function initAuthGate() {
  const overlay = $('auth-overlay');
  const form = $('auth-form');
  const input = $('auth-password');
  const error = $('auth-error');
  document.body.classList.add('auth-locked');

  if (sessionStorage.getItem(AUTH_SESSION_KEY) === '1') {
    unlockApp();
    return;
  }

  overlay.style.display = 'flex';
  input.focus();

  form.addEventListener('submit', async e => {
    e.preventDefault();
    if (!window.crypto?.subtle) {
      error.textContent = 'Ваш браузер не підтримує перевірку пароля';
      return;
    }

    const inputHash = await sha256Hex(input.value);
    if (inputHash === ACCESS_PASSWORD_HASH) {
      sessionStorage.setItem(AUTH_SESSION_KEY, '1');
      error.textContent = '';
      unlockApp();
      input.value = '';
      return;
    }
    error.textContent = 'Невірний пароль';
    input.select();
  });
}

/* ════════════════════════════════════════════
   Photo upload
════════════════════════════════════════════ */
function handlePhotoFile(file) {
  if (!file || !file.type.startsWith('image/')) return;
  const reader = new FileReader();
  reader.onload = ev => {
    const img = new Image();
    img.onload = () => {
      if (img.width < PHOTO_MIN_SIZE || img.height < PHOTO_MIN_SIZE) {
        alert(`Фото замале. Мінімум ${PHOTO_MIN_SIZE}×${PHOTO_MIN_SIZE}px.`);
        return;
      }
      photoDataUrl = compressToJpegDataUrl(img);
      const thumb = $('pub-photo-thumb');
      thumb.src = photoDataUrl;
      setPhotoUploadState(true);
      renderPreview();
    };
    img.src = ev.target.result;
  };
  reader.readAsDataURL(file);
}

on('pub-photo-file', 'change', e => {
  handlePhotoFile(e.target.files[0]);
});

const dropZone = $('photo-drop');
if (dropZone) {
  dropZone.addEventListener('dragover', e => {
    e.preventDefault();
    dropZone.classList.add('dragover');
  });
  dropZone.addEventListener('dragleave', () => dropZone.classList.remove('dragover'));
  dropZone.addEventListener('drop', e => {
    e.preventDefault();
    dropZone.classList.remove('dragover');
    handlePhotoFile(e.dataTransfer.files[0]);
  });
}

on('url-toggle-btn', 'click', () => {
  const field = $('url-field');
  if (!field) return;
  field.style.display = field.style.display === 'none' ? '' : 'none';
});

/* ════════════════════════════════════════════
   Live preview
════════════════════════════════════════════ */
document.querySelectorAll('input').forEach(el => el.addEventListener('input', renderPreview));

on('pub-photo', 'input', () => {
  if (v('pub-photo')) {
    photoDataUrl = null;
    setPhotoUploadState(true);
  } else {
    setPhotoUploadState(false);
  }
});

function renderPreview() {
  $('preview-box').innerHTML = pageMode === 'public' ? buildPublicPreview() : buildInnerPreview();
}

function buildPublicPreview() {
  const name     = v('pub-name')     || 'Імʼя';
  const company  = COMPANY_NAME;
  const position = v('pub-position') || 'Посада';
  const email    = v('pub-email')    || 'email@company.com';
  const phone    = v('pub-phone')    || '+000 000 000';
  const website  = v('pub-website')  || 'website.com';
  const photoUrl = photoDataUrl || toHttpUrl(v('pub-photo'));
  const linkedin = toHttpUrl(v('pub-linkedin'));
  const instagram= toHttpUrl(v('pub-instagram'));
  const facebook = toHttpUrl(v('pub-facebook'));
  const { href: websiteHref, label: websiteLabel } = normalizeWebsite(website);
  const emailHref = toMailtoHref(email);
  const phoneHref = toTelHref(phone);

  const photo = photoUrl
    ? `<img src="${esc(photoUrl)}" class="sig-photo" alt="${esc(name)}">`
    : `<div class="sig-photo-placeholder">Фото</div>`;

  const socialHtml = `
    ${linkedin  ? `<a href="${esc(linkedin)}"  target="_blank" rel="noopener">linkedin</a>`  : ''}
    ${instagram ? `<a href="${esc(instagram)}" target="_blank" rel="noopener">instagram</a>` : ''}
    ${facebook  ? `<a href="${esc(facebook)}"  target="_blank" rel="noopener">facebook</a>`  : ''}
  `;

  return `
  <div class="sig-wrap">
    <div class="sig-public">
      ${photo}
      <div class="sig-text">
        <div class="sig-name-block">
          <div class="sig-name-row">
            <span>${esc(name)}</span>
            <span>| ${esc(company)}</span>
          </div>
          <div class="sig-position">${esc(position)}</div>
        </div>
        <div class="sig-contacts">
          <div class="sig-personal">
            <div class="sig-links">
              <a href="${esc(emailHref || '#')}">${esc(email)}</a>
              <a href="${esc(phoneHref || '#')}">${esc(phone)}</a>
            </div>
            <div class="sig-logo">
              <img src="${LOGO_PNG}" alt="PAI Defence" style="height:40px;width:158px;display:block;">
            </div>
          </div>
          <div class="sig-company-col">
            <a href="${esc(websiteHref || '#')}" target="_blank" rel="noopener">${esc(websiteLabel || website)}</a>
            <div class="sig-social-col">${socialHtml}</div>
          </div>
        </div>
      </div>
    </div>
  </div>`;
}

function buildInnerPreview() {
  const name     = v('inn-name')     || 'Імʼя';
  const company  = COMPANY_NAME;
  const position = v('inn-position') || 'Посада';
  const email    = v('inn-email')    || 'email@company.com';
  const emailHref = toMailtoHref(email);

  return `
  <div class="sig-wrap">
    <div class="sig-inner">
      <div class="sig-vector">
        <img src="${VECTOR_PNG}" alt="PAI">
      </div>
      <div class="sig-inner-text">
        <div class="sig-name-row">
          <span>${esc(name)}</span>
          <span>| ${esc(company)}</span>
        </div>
        <div class="sig-inner-contacts">
          <span>${esc(position)}</span>
          <a href="${esc(emailHref || '#')}">${esc(email)}</a>
        </div>
      </div>
    </div>
  </div>`;
}

/* ════════════════════════════════════════════
   Email HTML generation (table-based, email-safe)
════════════════════════════════════════════ */
function generatePublicHtml() {
  const name     = v('pub-name')     || '';
  const company  = COMPANY_NAME;
  const position = v('pub-position') || '';
  const email    = v('pub-email')    || '';
  const phone    = v('pub-phone')    || '';
  const website  = v('pub-website')  || '';
  const linkedin = toHttpUrl(v('pub-linkedin'));
  const instagram= toHttpUrl(v('pub-instagram'));
  const facebook = toHttpUrl(v('pub-facebook'));
  const photoUrl = photoDataUrl || toHttpUrl(v('pub-photo'));
  const { href: websiteHref, label: websiteLabel } = normalizeWebsite(website);
  const emailHref = toMailtoHref(email);
  const phoneHref = toTelHref(phone);

  const photoCell = photoUrl
    ? `<td style="padding-right:16px;vertical-align:top;"><img src="${esc(photoUrl)}" width="140" height="140" style="display:block;border-radius:1px;width:140px;height:140px;object-fit:cover;" alt="${esc(name)}"></td>`
    : `<td style="padding-right:16px;vertical-align:top;"><div style="display:inline-block;width:140px;height:140px;background:#d9d9d9;border-radius:1px;"></div></td>`;

  const socialRows = [];
  if (linkedin)  socialRows.push(`<tr><td style="padding-top:4px;"><a href="${esc(linkedin)}"  style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">linkedin</a></td></tr>`);
  if (instagram) socialRows.push(`<tr><td style="padding-top:4px;"><a href="${esc(instagram)}" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">instagram</a></td></tr>`);
  if (facebook)  socialRows.push(`<tr><td style="padding-top:4px;"><a href="${esc(facebook)}"  style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">facebook</a></td></tr>`);

  const logoImg = `<img src="${LOGO_PNG}" width="158" height="40" alt="PAI Defence" style="display:block;width:158px;height:40px;">`;

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
  <tr>
    ${photoCell}
    <td style="vertical-align:middle;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding-bottom:8px;line-height:1;">
            <span style="font-family:Arial,Helvetica;font-size:20px;font-weight:600;text-transform:uppercase;letter-spacing:-0.8px;color:#000000;">${esc(name)}&nbsp;|&nbsp;${esc(company)}</span>
          </td>
        </tr>
        <tr>
          <td style="padding-bottom:10px;">
            <span style="font-family:'Courier New',Courier,monospace;font-size:14px;color:#000000;letter-spacing:-0.4px;line-height:1;">${esc(position)}</span>
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="vertical-align:top;padding-right:40px;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                    <tr><td><a href="${esc(emailHref || '#')}" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">${esc(email)}</a></td></tr>
                    <tr><td style="padding-top:4px;"><a href="${esc(phoneHref || '#')}" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">${esc(phone)}</a></td></tr>
                    <tr><td style="padding-top:16px;">${logoImg}</td></tr>
                  </table>
                </td>
                <td style="vertical-align:top;">
                  <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
                    <tr><td><a href="${esc(websiteHref || '#')}" style="font-family:'Courier New',Courier,monospace;font-size:12px;color:#000000;text-decoration:underline;letter-spacing:-0.3px;line-height:16px;display:block;">${esc(websiteLabel || website)}</a></td></tr>
                    ${socialRows.join('\n                    ')}
                  </table>
                </td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

function generateInnerHtml() {
  const name     = v('inn-name')     || '';
  const company  = COMPANY_NAME;
  const position = v('inn-position') || '';
  const email    = v('inn-email')    || '';
  const emailHref = toMailtoHref(email);

  const vectorImg = `<img src="${VECTOR_PNG}" width="97" height="48" alt="PAI" style="display:block;width:97px;height:48px;">`;

  return `<table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
  <tr>
    <td style="padding-right:16px;vertical-align:middle;">${vectorImg}</td>
    <td style="vertical-align:top;">
      <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
        <tr>
          <td style="padding-bottom:12px;line-height:1;">
            <span style="font-family:Arial,Helvetica;font-size:24px;font-weight:600;text-transform:uppercase;letter-spacing:-1.2px;color:#000000;">${esc(name)}&nbsp;|&nbsp;${esc(company)}</span>
          </td>
        </tr>
        <tr>
          <td>
            <table cellpadding="0" cellspacing="0" border="0" style="border-collapse:collapse;">
              <tr>
                <td style="padding-right:32px;"><span style="font-family:'Courier New',Courier,monospace;font-size:14px;color:#000000;letter-spacing:-0.8px;line-height:24px;">${esc(position)}</span></td>
                <td><a href="${esc(emailHref || '#')}" style="font-family:'Courier New',Courier,monospace;font-size:14px;color:#000000;text-decoration:underline;letter-spacing:-0.8px;line-height:24px;">${esc(email)}</a></td>
              </tr>
            </table>
          </td>
        </tr>
      </table>
    </td>
  </tr>
</table>`;
}

/* ════════════════════════════════════════════
   Copy button — select rendered HTML (зберігає форматування в Gmail)
════════════════════════════════════════════ */
$('copy-btn').addEventListener('click', async () => {
  const btn = $('copy-btn');
  btn.disabled = true;
  const html = pageMode === 'public' ? generatePublicHtml() : generateInnerHtml();
  const copied = await copyHtmlToClipboard(html);

  try {
    if (!copied) throw new Error('Copy failed');
    btn.classList.add('success');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg> Скопійовано — вставляй в Gmail!`;
  } catch {
    btn.innerHTML = `Натисни Ctrl+C`;
  }

  setTimeout(() => {
    btn.disabled = false;
    btn.classList.remove('success');
    btn.innerHTML = `<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="9" y="9" width="13" height="13" rx="2"/><path d="M5 15H4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h9a2 2 0 0 1 2 2v1"/></svg> Скопіювати підпис`;
  }, 3000);
});

/* ════════════════════════════════════════════
   Init
════════════════════════════════════════════ */
renderPreview();
setPhotoUploadState(false);
initAuthGate();
