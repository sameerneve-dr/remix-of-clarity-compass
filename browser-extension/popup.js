// PriXplainer Chrome Extension
// API endpoint for the website scan function
const API_URL = 'https://gijcgculokmkbjlxstxx.supabase.co/functions/v1/website-scan';

let currentDomain = '';
let scanResult = null;

// DOM Elements
const idleState = document.getElementById('idle-state');
const scanningState = document.getElementById('scanning-state');
const errorState = document.getElementById('error-state');
const resultsState = document.getElementById('results-state');
const currentDomainEl = document.getElementById('current-domain');
const scanBtn = document.getElementById('scan-btn');
const retryBtn = document.getElementById('retry-btn');
const scanAnotherBtn = document.getElementById('scan-another-btn');
const copyBtn = document.getElementById('copy-btn');
const scanningText = document.getElementById('scanning-text');
const errorMessage = document.getElementById('error-message');

// Initialize popup
document.addEventListener('DOMContentLoaded', async () => {
  try {
    // Get the current tab's URL
    const [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
    if (tab && tab.url) {
      const url = new URL(tab.url);
      currentDomain = url.hostname;
      currentDomainEl.textContent = currentDomain;
    } else {
      currentDomainEl.textContent = 'Unable to detect';
      scanBtn.disabled = true;
    }
  } catch (error) {
    console.error('Error getting current tab:', error);
    currentDomainEl.textContent = 'Unable to detect';
    scanBtn.disabled = true;
  }
});

// Event listeners
scanBtn.addEventListener('click', () => performScan());
retryBtn.addEventListener('click', () => performScan());
scanAnotherBtn.addEventListener('click', () => showState('idle'));
copyBtn.addEventListener('click', () => copyReport());

// Toggle expandable section
window.toggleExpandable = function() {
  const section = document.getElementById('confidence-section');
  section.classList.toggle('open');
};

// Show different states
function showState(state) {
  idleState.style.display = state === 'idle' ? 'block' : 'none';
  scanningState.style.display = state === 'scanning' ? 'block' : 'none';
  errorState.style.display = state === 'error' ? 'block' : 'none';
  resultsState.classList.toggle('visible', state === 'results');
}

// Perform the scan
async function performScan() {
  if (!currentDomain) return;

  showState('scanning');
  
  const messages = [
    'Analyzing privacy practices...',
    'Checking data collection policies...',
    'Scanning for dark patterns...',
    'Evaluating tracking technologies...',
    'Assessing digital footprint...',
    'Generating risk assessment...'
  ];

  let messageIndex = 0;
  const messageInterval = setInterval(() => {
    messageIndex = (messageIndex + 1) % messages.length;
    scanningText.textContent = messages[messageIndex];
  }, 2000);

  try {
    const response = await fetch(API_URL, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ url: currentDomain }),
    });

    clearInterval(messageInterval);

    if (!response.ok) {
      const errorData = await response.json().catch(() => ({}));
      throw new Error(errorData.error || `Request failed with status ${response.status}`);
    }

    scanResult = await response.json();
    displayResults(scanResult);
    showState('results');
  } catch (error) {
    clearInterval(messageInterval);
    console.error('Scan error:', error);
    errorMessage.textContent = error.message || 'Failed to scan website. Please try again.';
    showState('error');
  }
}

// Display scan results
function displayResults(result) {
  // Domain
  document.getElementById('result-domain').textContent = result.domain;

  // Trust Score
  const trustScoreEl = document.getElementById('trust-score');
  trustScoreEl.innerHTML = `${result.score}<span>/100</span>`;
  trustScoreEl.className = 'score-value';
  if (result.score >= 70) {
    trustScoreEl.classList.add('high');
  } else if (result.score >= 40) {
    trustScoreEl.classList.add('medium');
  } else {
    trustScoreEl.classList.add('low');
  }

  // Risk Badge
  const riskBadge = document.getElementById('risk-badge');
  riskBadge.textContent = `${result.risk_level} Risk`;
  riskBadge.className = 'risk-badge ' + result.risk_level.toLowerCase();

  // Summary
  document.getElementById('summary').textContent = result.summary;

  // Immediate Risks
  const risksList = document.getElementById('risks-list');
  risksList.innerHTML = '';
  if (result.immediate_risks && result.immediate_risks.length > 0) {
    result.immediate_risks.forEach(risk => {
      const riskItem = document.createElement('div');
      riskItem.className = 'risk-item';
      const icon = getSeverityIcon(risk.severity);
      riskItem.innerHTML = `
        <span class="risk-icon">${icon}</span>
        <span>${risk.text}</span>
      `;
      risksList.appendChild(riskItem);
    });
    document.getElementById('risks-section').style.display = 'block';
  } else {
    document.getElementById('risks-section').style.display = 'none';
  }

  // Dark Patterns
  const darkPatternsSection = document.getElementById('dark-patterns-section');
  const darkPatternsList = document.getElementById('dark-patterns-list');
  darkPatternsList.innerHTML = '';
  
  if (result.dark_patterns && result.dark_patterns.detected && result.dark_patterns.items.length > 0) {
    result.dark_patterns.items.forEach(pattern => {
      const patternItem = document.createElement('div');
      patternItem.className = 'dark-pattern-item';
      patternItem.innerHTML = `
        <div class="dark-pattern-type">${pattern.type}</div>
        <div class="dark-pattern-evidence">${pattern.evidence}</div>
      `;
      darkPatternsList.appendChild(patternItem);
    });
    darkPatternsSection.style.display = 'block';
  } else {
    darkPatternsList.innerHTML = `
      <div class="no-dark-patterns">
        <span>✅</span>
        <span>No obvious dark patterns detected</span>
      </div>
    `;
    darkPatternsSection.style.display = 'block';
  }

  // Digital Footprint
  const footprintSection = document.getElementById('footprint-section');
  const footprintChips = document.getElementById('footprint-chips');
  const footprintDetails = document.getElementById('footprint-details');
  const footprintNoteText = document.getElementById('footprint-note-text');

  footprintChips.innerHTML = '';
  footprintDetails.innerHTML = '';

  if (result.digital_footprint) {
    // Chips
    if (result.digital_footprint.chips && result.digital_footprint.chips.length > 0) {
      result.digital_footprint.chips.forEach(chip => {
        const chipEl = document.createElement('span');
        chipEl.className = 'chip';
        chipEl.textContent = chip;
        footprintChips.appendChild(chipEl);
      });
    }

    // Details
    if (result.digital_footprint.details && result.digital_footprint.details.length > 0) {
      result.digital_footprint.details.forEach(detail => {
        const detailEl = document.createElement('div');
        detailEl.className = 'footprint-detail';
        detailEl.innerHTML = `
          <div class="footprint-label">${detail.label}</div>
          <div class="footprint-text">${detail.text}</div>
        `;
        footprintDetails.appendChild(detailEl);
      });
    }

    // Note
    if (result.digital_footprint.note) {
      footprintNoteText.textContent = result.digital_footprint.note;
      document.getElementById('footprint-note').style.display = 'flex';
    } else {
      document.getElementById('footprint-note').style.display = 'none';
    }

    footprintSection.style.display = 'block';
  } else {
    footprintSection.style.display = 'none';
  }

  // What You Can Do (Actions)
  const actionsSection = document.getElementById('actions-section');
  const actionsList = document.getElementById('actions-list');
  actionsList.innerHTML = '';

  if (result.actions && result.actions.length > 0) {
    result.actions.forEach(action => {
      const actionCard = document.createElement('div');
      actionCard.className = 'action-card';
      actionCard.innerHTML = `
        <div class="action-title">${action.title}</div>
        <div class="action-text">${action.text}</div>
      `;
      actionsList.appendChild(actionCard);
    });
    actionsSection.style.display = 'block';
  } else {
    actionsSection.style.display = 'none';
  }

  // Confidence
  const confidenceBadge = document.getElementById('confidence-badge');
  confidenceBadge.textContent = result.confidence;
  confidenceBadge.className = 'confidence-badge ' + (result.confidence || 'medium').toLowerCase();
}

// Get icon based on severity
function getSeverityIcon(severity) {
  switch (severity) {
    case 'red': return '🔴';
    case 'yellow': return '🟡';
    case 'green': return '🟢';
    default: return '⚪';
  }
}

// Copy report to clipboard
async function copyReport() {
  if (!scanResult) return;

  const digitalFootprintSection = scanResult.digital_footprint ? `
Digital Footprint:
Data Types: ${scanResult.digital_footprint.chips.join(', ')}
${scanResult.digital_footprint.details.map(d => `• ${d.label}: ${d.text}`).join('\n')}

Note: ${scanResult.digital_footprint.note}
` : '';

  const report = `
PriXplainer Privacy Report
===========================
Website: ${scanResult.domain}
Trust Score: ${scanResult.score}/100
Risk Level: ${scanResult.risk_level}
Confidence: ${scanResult.confidence}

Summary:
${scanResult.summary}

Immediate Risks:
${scanResult.immediate_risks.map(r => `${getSeverityIcon(r.severity)} ${r.text}`).join('\n')}

${scanResult.dark_patterns.detected ? `Dark Patterns Detected:
${scanResult.dark_patterns.items.map(p => `• ${p.type}: ${p.evidence}`).join('\n')}` : 'No Dark Patterns Detected ✅'}
${digitalFootprintSection}
Recommended Actions:
${scanResult.actions.map(a => `• ${a.title}: ${a.text}`).join('\n')}

---
Generated by PriXplainer - https://consenterra.lovable.app
  `.trim();

  try {
    await navigator.clipboard.writeText(report);
    const originalText = copyBtn.innerHTML;
    copyBtn.innerHTML = '✅ Copied!';
    setTimeout(() => {
      copyBtn.innerHTML = originalText;
    }, 2000);
  } catch (error) {
    console.error('Failed to copy:', error);
  }
}
