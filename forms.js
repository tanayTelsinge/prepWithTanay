const WA = '918208523051';

function openWhatsApp(message) {
  const encoded = encodeURIComponent(message);
  window.open(`https://wa.me/${WA}?text=${encoded}`, '_blank');
}

function getRadioValue(name) {
  const el = document.querySelector(`input[name="${name}"]:checked`);
  return el ? el.value : 'Not selected';
}

function val(id) {
  const el = document.getElementById(id);
  return el && el.value.trim() ? el.value.trim() : 'Not provided';
}

function isPaid(checkboxId) {
  const el = document.getElementById(checkboxId);
  if (!el || !el.checked) {
    alert('Please confirm you have completed the payment before submitting.');
    return false;
  }
  return true;
}

// ===== TAB NAVIGATION =====
function showTab(name) {
  document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`tab-${name}`).classList.add('active');
  event.currentTarget.classList.add('active');
}

// ===== RESUME FORM =====
function submitResume() {
  const service = getRadioValue('resumeService');
  if (service === 'Not selected') { alert('Please select a service.'); return; }
  if (val('resumeName') === 'Not provided') { alert('Please enter your name.'); return; }
  if (!isPaid('resumePaid')) return;

  const msg =
`Hi Tanay! I have booked *${service}* and completed the payment.

Here are my details:

👤 *Name:* ${val('resumeName')}
🎓 *Background:* ${val('resumeBackground')}
💼 *Experience:* ${val('resumeExp')}
🎯 *Target Job Type:* ${val('resumeTarget')}
⚙️ *Tech Stack:* ${val('resumeStack')}
📌 *Target Role:* ${val('resumeRole')}
🛠️ *Projects/Experience:* ${val('resumeProjects')}
🔍 *Focus Areas:* ${val('resumeFocus')}

_(Attaching payment screenshot & resume PDF shortly)_`;

  openWhatsApp(msg);
}

// ===== LINKEDIN FORM =====
function submitLinkedin() {
  const service = getRadioValue('linkedinService');
  if (service === 'Not selected') { alert('Please select a service.'); return; }
  if (val('linkedinName') === 'Not provided') { alert('Please enter your name.'); return; }
  if (!isPaid('linkedinPaid')) return;

  const msg =
`Hi Tanay! I have booked *${service}* and completed the payment.

Here are my details:

👤 *Name:* ${val('linkedinName')}
💼 *Experience:* ${val('linkedinExp')}
🔗 *LinkedIn URL:* ${val('linkedinUrl')}
📝 *Current Headline:* ${val('linkedinHeadline')}
🎯 *Target Role:* ${val('linkedinRole')}
⚠️ *What's missing/weak:* ${val('linkedinWeak')}
🔍 *Focus Areas:* ${val('linkedinFocus')}

_(Attaching payment screenshot shortly)_`;

  openWhatsApp(msg);
}

// ===== MOCK INTERVIEW FORM =====
function submitMock() {
  const type = getRadioValue('mockType');
  if (type === 'Not selected') { alert('Please select an interview type.'); return; }
  if (val('mockName') === 'Not provided') { alert('Please enter your name.'); return; }
  const booked = document.getElementById('mockBooked');
  if (!booked || !booked.checked) { alert('Please confirm you have booked your slot on Calendly.'); return; }
  if (!isPaid('mockPaid')) return;

  const msg =
`Hi Tanay! I have booked *${type}*, confirmed my Calendly slot and completed the payment.

Here are my details:

👤 *Name:* ${val('mockName')}
💼 *Experience:* ${val('mockExp')}
🏢 *Target Company:* ${val('mockCompany')}
📋 *Previous Experience:* ${val('mockPrevious')}
✅ *Comfortable with:* ${val('mockComfort')}
🎯 *Focus on:* ${val('mockFocus')}
📝 *Additional Notes:* ${val('mockNotes')}

_(Attaching payment screenshot & resume PDF shortly)_`;

  openWhatsApp(msg);
}

// ===== CAREER GUIDANCE FORM =====
function submitGuidance() {
  const service = getRadioValue('guidanceService');
  if (service === 'Not selected') { alert('Please select a service.'); return; }
  if (val('guidanceName') === 'Not provided') { alert('Please enter your name.'); return; }
  const booked = document.getElementById('guidanceBooked');
  if (!booked || !booked.checked) { alert('Please confirm you have booked your slot on Calendly.'); return; }
  if (!isPaid('guidancePaid')) return;

  const msg =
`Hi Tanay! I have booked *${service}*, confirmed my Calendly slot and completed the payment.

Here are my details:

👤 *Name:* ${val('guidanceName')}
🎓 *Background:* ${val('guidanceBackground')}
📊 *Job Search Status:* ${val('guidanceStatus')}
🎯 *Target Job Type:* ${val('guidanceTarget')}
⚙️ *Skills Known:* ${val('guidanceSkills')}
⚠️ *Biggest Challenge:* ${val('guidanceChallenge')}
💡 *Expected Outcome:* ${val('guidanceExpect')}

_(Attaching payment screenshot shortly)_`;

  openWhatsApp(msg);
}

// Open tab from URL hash
window.addEventListener('DOMContentLoaded', () => {
  const hash = window.location.hash.replace('#', '');
  const validTabs = ['resume', 'linkedin', 'mock', 'guidance'];
  if (validTabs.includes(hash)) {
    document.querySelectorAll('.form-panel').forEach(p => p.classList.remove('active'));
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.getElementById(`tab-${hash}`).classList.add('active');
    const idx = validTabs.indexOf(hash);
    document.querySelectorAll('.tab')[idx].classList.add('active');
  }
});
