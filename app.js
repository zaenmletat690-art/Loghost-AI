const promptBox=document.getElementById('prompt');
const chat=document.getElementById('chat');
const welcome=document.getElementById('welcome');
const send=document.getElementById('send');
const photoInput=document.getElementById('photoInput');
function addBubble(text,kind,label){const el=document.createElement('div');el.className='bubble '+kind;if(label){const sm=document.createElement('small');sm.textContent=label;el.appendChild(sm)}el.appendChild(document.createTextNode(text));chat.appendChild(el);el.scrollIntoView({behavior:'smooth',block:'end'});}
function submit(){const value=promptBox.value.trim();if(!value)return;welcome.style.display='none';addBubble(value,'user','أنت');promptBox.value='';addBubble('وصلني سؤالك! هذه نسخة تجريبية من الواجهة، ومحرك الذكاء الاصطناعي لم يُربط بعد. في الخطوة التالية سنضيف نموذجاً فعلياً للإجابة وشرح الحل خطوة بخطوة.','assistant','LØGHØST AI');}
send.addEventListener('click',submit);
promptBox.addEventListener('keydown',e=>{if(e.key==='Enter'&&!e.shiftKey){e.preventDefault();submit()}});
document.querySelectorAll('.subject').forEach(b=>b.addEventListener('click',()=>{promptBox.value='ساعدني في مادة '+b.dataset.subject+': ';promptBox.focus()}));
document.getElementById('newChat').addEventListener('click',()=>{chat.innerHTML='';welcome.style.display='block';promptBox.value='';});
photoInput.addEventListener('change',()=>{if(photoInput.files&&photoInput.files[0]){welcome.style.display='none';addBubble('تم اختيار صورة: '+photoInput.files[0].name,'user','مرفق');addBubble('رفع الصور ظاهر في هذه النسخة، لكن قراءة الصور وحلّها ستُضاف بعد ربط محرك الذكاء الاصطناعي.','assistant','LØGHØST AI');}});
if('serviceWorker' in navigator){window.addEventListener('load',()=>navigator.serviceWorker.register('./sw.js').catch(()=>{}));}
