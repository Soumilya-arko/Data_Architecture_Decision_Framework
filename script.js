/* ═══════════════════════════════════════════════════
   DATA — COLOUR PALETTE
═══════════════════════════════════════════════════ */
const COLORS = {
  dw: { main: '#4f8ef7', dim: 'rgba(79,142,247,0.12)',  icon: '🏛️' },
  dl: { main: '#2dd4a0', dim: 'rgba(45,212,160,0.12)',  icon: '🌊' },
  lh: { main: '#f5a623', dim: 'rgba(245,166,35,0.12)',  icon: '🏠' },
  df: { main: '#a78bfa', dim: 'rgba(167,139,250,0.12)', icon: '🕸️' },
  dm: { main: '#f87171', dim: 'rgba(248,113,113,0.12)', icon: '🔗' },
  cp: { main: '#86efac', dim: 'rgba(134,239,172,0.12)', icon: '🧩' }
};

/* ═══════════════════════════════════════════════════
   DATA — SIX ARCHITECTURES
═══════════════════════════════════════════════════ */
const ARCHS = [
  {
    id: 'dw', num: '01', name: 'Data Warehouse', schema: 'Schema-on-write',
    tagline: 'Structured, consistent, BI-optimised analytics platform.',
    desc: 'Consolidates structured data from various sources with predefined schemas using ETL pipelines. The foundational approach for enterprise BI.',
    traits: [
      { k: 'Schema',           v: 'Schema-on-write',  level: 'high' },
      { k: 'Data types',       v: 'Structured only',  level: 'low'  },
      { k: 'Flexibility',      v: 'Low — rigid ETL',  level: 'low'  },
      { k: 'Query performance',v: 'Very high',        level: 'high' },
      { k: 'Scalability',      v: 'Moderate',         level: 'med'  },
      { k: 'Governance',       v: 'Strong',           level: 'high' },
      { k: 'Cost',             v: 'Higher upfront',   level: 'low'  },
      { k: 'Real-time',        v: 'Batch-oriented',   level: 'low'  }
    ],
    pros: ['Fast, consistent query performance', 'Strong enterprise governance', 'Proven at massive scale', 'Optimised BI tooling'],
    cons: ['No unstructured data support', 'Rigid schema — hard to change', 'Complex ETL pipelines', 'High upfront investment'],
    sap:  ['SAP BW/4HANA', 'SAP HANA', 'SAP Datasphere (DW layer)'],
    tags: ['ETL', 'OLAP', 'Star Schema', 'BI'],
    radar: [5, 2, 4, 5, 3, 4]
  },
  {
    id: 'dl', num: '02', name: 'Data Lake', schema: 'Schema-on-read',
    tagline: 'Raw, flexible storage for any data type at massive scale.',
    desc: 'Stores raw structured, semi-structured, and unstructured data in its original format. Flexible and cost-effective for big data scenarios.',
    traits: [
      { k: 'Schema',           v: 'Schema-on-read',   level: 'high' },
      { k: 'Data types',       v: 'All formats',      level: 'high' },
      { k: 'Flexibility',      v: 'Very high',        level: 'high' },
      { k: 'Query performance',v: 'Variable',         level: 'med'  },
      { k: 'Scalability',      v: 'Very high',        level: 'high' },
      { k: 'Governance',       v: 'Weak by default',  level: 'low'  },
      { k: 'Cost',             v: 'Low storage cost', level: 'high' },
      { k: 'Real-time',        v: 'Moderate',         level: 'med'  }
    ],
    pros: ['Stores any data type or format', 'Highly scalable with cloud storage', 'Very cost-effective', 'Flexible for exploration'],
    cons: ['Data quality risks without governance', 'Complex to query efficiently', 'Can become a "data swamp"', 'Requires discipline'],
    sap:  ['SAP Datasphere Object Store', 'Spark Compute Integration', 'SQL on Files'],
    tags: ['Object Store', 'Hadoop', 'ELT', 'Big Data'],
    radar: [2, 5, 3, 3, 5, 2]
  },
  {
    id: 'lh', num: '03', name: 'Data Lakehouse', schema: 'Unified storage',
    tagline: 'ACID transactions, open formats — the best of both worlds.',
    desc: 'Combines data lake flexibility and cost-effectiveness with data warehouse performance and governance. Built on open formats like Parquet and Delta Lake.',
    traits: [
      { k: 'Schema',           v: 'Flexible + enforced', level: 'high' },
      { k: 'Data types',       v: 'All formats',         level: 'high' },
      { k: 'Flexibility',      v: 'High',                level: 'high' },
      { k: 'Query performance',v: 'High',                level: 'high' },
      { k: 'Scalability',      v: 'Very high',           level: 'high' },
      { k: 'Governance',       v: 'Strong',              level: 'high' },
      { k: 'Cost',             v: 'Moderate',            level: 'med'  },
      { k: 'Real-time',        v: 'High',                level: 'high' }
    ],
    pros: ['ACID transaction guarantees', 'No data duplication needed', 'Open source formats (Parquet/Delta)', 'Handles structured + unstructured'],
    cons: ['Newer — less maturity', 'Complex architecture', 'Requires specialist expertise', 'Higher operational overhead'],
    sap:  ['SAP Databricks', 'Delta Sharing Protocol', 'SAP Datasphere', 'Delta Lake / Parquet'],
    tags: ['ACID', 'Delta Lake', 'Parquet', 'Apache Spark'],
    radar: [4, 5, 5, 4, 5, 5]
  },
  {
    id: 'df', num: '04', name: 'Data Fabric', schema: 'Data virtualisation',
    tagline: 'Unified access layer — connect data wherever it lives.',
    desc: 'A technical integration layer providing a single access point to data regardless of location. Manages data via metadata without necessarily moving it.',
    traits: [
      { k: 'Schema',           v: 'Virtualised access',  level: 'high' },
      { k: 'Data types',       v: 'All formats',         level: 'high' },
      { k: 'Flexibility',      v: 'High',                level: 'high' },
      { k: 'Query performance',v: 'Source-dependent',    level: 'med'  },
      { k: 'Scalability',      v: 'High',                level: 'high' },
      { k: 'Governance',       v: 'Metadata-driven',     level: 'high' },
      { k: 'Cost',             v: 'Avoids duplication',  level: 'high' },
      { k: 'Real-time',        v: 'Yes — native',        level: 'high' }
    ],
    pros: ['No data movement or duplication', 'Real-time access across silos', 'Rich metadata management', 'Connects on-prem + cloud'],
    cons: ['Performance depends on sources', 'Complex metadata governance', 'Latency at integration layer', 'Requires strong tooling'],
    sap:  ['SAP Datasphere', 'SAP BTP', 'One Domain Model (ODM)', 'Semantic Layer', 'SAP BW integration'],
    tags: ['Virtualisation', 'Metadata', 'Real-time', 'Integration'],
    radar: [3, 4, 5, 3, 4, 5]
  },
  {
    id: 'dm', num: '05', name: 'Data Mesh', schema: 'Domain ownership',
    tagline: 'Decentralised data products owned by business domains.',
    desc: 'Distributes data ownership and management to individual business domains. Each domain treats data as a product with clear ownership, standards, and quality guarantees.',
    traits: [
      { k: 'Schema',           v: 'Domain-managed',   level: 'med' },
      { k: 'Data types',       v: 'Domain-defined',   level: 'med' },
      { k: 'Flexibility',      v: 'Very high',        level: 'high' },
      { k: 'Query performance',v: 'Domain-specific',  level: 'med' },
      { k: 'Scalability',      v: 'Distributed',      level: 'high' },
      { k: 'Governance',       v: 'Federated',        level: 'med' },
      { k: 'Cost',             v: 'Distributed costs',level: 'med' },
      { k: 'Real-time',        v: 'Domain-driven',    level: 'med' }
    ],
    pros: ['Eliminates central bottlenecks', 'Domain expertise embedded', 'Faster delivery per team', 'Clear data product ownership'],
    cons: ['Coordination overhead between domains', 'Risk of inconsistency', 'Requires cultural transformation', 'Complex to standardise globally'],
    sap:  ['SAP Datasphere Spaces', 'Federated Governance', 'Parquet/Delta Lake sharing', 'Domain data products'],
    tags: ['Domain-Driven', 'Self-Service', 'Federated', 'Data Product'],
    radar: [3, 3, 4, 3, 4, 3]
  },
  {
    id: 'cp', num: '06', name: 'Composable Platform', schema: 'Modular APIs',
    tagline: 'Interchangeable modules — best-of-breed, no vendor lock-in.',
    desc: 'Built from independent, interchangeable modules connected via standardised APIs. Organisations select best-of-breed tools per use case and assemble custom data ecosystems.',
    traits: [
      { k: 'Schema',           v: 'Per module',        level: 'high' },
      { k: 'Data types',       v: 'Module-defined',    level: 'high' },
      { k: 'Flexibility',      v: 'Maximum',           level: 'high' },
      { k: 'Query performance',v: 'Module-specific',   level: 'med'  },
      { k: 'Scalability',      v: 'Module-specific',   level: 'high' },
      { k: 'Governance',       v: 'Per integration',   level: 'med'  },
      { k: 'Cost',             v: 'Variable',          level: 'med'  },
      { k: 'Real-time',        v: 'Module capability', level: 'high' }
    ],
    pros: ['Maximum flexibility & customisation', 'Reduced vendor lock-in', 'Best tool per use case', 'Rapid assembly of new solutions'],
    cons: ['Integration complexity', 'Governance fragmentation risk', 'Higher management overhead', 'Requires API expertise'],
    sap:  ['Confluent (streaming)', 'Collibra (catalog)', 'DataRobot (ML/AI)', 'Google Cloud', 'SAP Databricks', 'Partner APIs'],
    tags: ['Modular', 'API-first', 'Best-of-Breed', 'Interoperable'],
    radar: [4, 4, 5, 3, 5, 3]
  }
];

/* ═══════════════════════════════════════════════════
   DATA — DECISION WIZARD QUESTIONS
═══════════════════════════════════════════════════ */
const QUESTIONS = [
  {
    q: 'What type of data does your organisation primarily work with?',
    opts: [
      { t: 'Structured only',              d: 'Relational tables, transactional records, SQL databases', s: { dw:3,dl:0,lh:1,df:1,dm:1,cp:1 } },
      { t: 'Structured + semi-structured', d: 'JSON, XML, logs alongside relational tables',             s: { dw:1,dl:2,lh:3,df:2,dm:2,cp:2 } },
      { t: 'All types including unstructured', d: 'Text, images, video, raw files at scale',             s: { dw:0,dl:3,lh:3,df:2,dm:1,cp:2 } },
      { t: 'Varies across teams and domains',  d: 'Each business unit has different data needs',         s: { dw:0,dl:1,lh:1,df:2,dm:3,cp:3 } }
    ]
  },
  {
    q: 'How is your organisation structured around data ownership?',
    opts: [
      { t: 'Centralised IT team',             d: 'One team manages all data infrastructure end-to-end',  s: { dw:3,dl:2,lh:2,df:2,dm:0,cp:1 } },
      { t: 'Central platform, federated usage',d: 'Shared infrastructure with team self-service',        s: { dw:1,dl:1,lh:2,df:3,dm:2,cp:2 } },
      { t: 'Domain teams own their data',      d: 'Marketing, Finance, Sales manage independently',      s: { dw:0,dl:0,lh:1,df:1,dm:3,cp:2 } },
      { t: 'Mixed vendors and custom tools',   d: 'No single platform — best tool chosen per job',       s: { dw:0,dl:1,lh:1,df:2,dm:1,cp:3 } }
    ]
  },
  {
    q: 'What are your real-time analytics requirements?',
    opts: [
      { t: 'Batch processing is sufficient', d: 'Daily or periodic reports meet all our needs',           s: { dw:3,dl:2,lh:2,df:1,dm:1,cp:1 } },
      { t: 'Near real-time (minutes)',        d: 'Dashboards updated frequently throughout the day',       s: { dw:1,dl:1,lh:2,df:3,dm:2,cp:2 } },
      { t: 'Streaming / event-driven',        d: 'Live pipelines, IoT sensors, event processing',         s: { dw:0,dl:1,lh:2,df:3,dm:2,cp:3 } },
      { t: 'Mixed — batch and real-time',     d: 'Multiple pipelines with varying latency needs',         s: { dw:1,dl:2,lh:3,df:3,dm:2,cp:3 } }
    ]
  },
  {
    q: 'How important is avoiding vendor lock-in to your organisation?',
    opts: [
      { t: 'Not a concern',            d: 'We are happy with SAP-native tools end-to-end',          s: { dw:3,dl:2,lh:2,df:3,dm:2,cp:0 } },
      { t: 'Somewhat important',       d: 'Open formats preferred but not a hard requirement',      s: { dw:1,dl:3,lh:3,df:2,dm:2,cp:2 } },
      { t: 'Very important',           d: 'Open standards and data portability are required',       s: { dw:0,dl:2,lh:3,df:2,dm:2,cp:3 } },
      { t: 'Critical — multi-cloud strategy', d: 'Must integrate freely with any provider or tool', s: { dw:0,dl:1,lh:2,df:2,dm:2,cp:3 } }
    ]
  },
  {
    q: 'What is your current data governance maturity?',
    opts: [
      { t: 'High — strong central controls',   d: 'Data quality, lineage, and compliance enforced',    s: { dw:3,dl:0,lh:2,df:3,dm:1,cp:1 } },
      { t: 'Medium — some policies in place',  d: 'Basic cataloguing and access control exists',       s: { dw:2,dl:1,lh:2,df:2,dm:2,cp:2 } },
      { t: 'Low — governance is a challenge',  d: 'Ad hoc, inconsistent across teams and systems',    s: { dw:1,dl:0,lh:1,df:2,dm:2,cp:1 } },
      { t: 'Federated — domain-level governance', d: 'Each domain enforces its own standards',        s: { dw:0,dl:1,lh:2,df:2,dm:3,cp:2 } }
    ]
  },
  {
    q: 'What is the primary driver for this data initiative?',
    opts: [
      { t: 'Faster BI & executive reporting', d: 'Accelerate dashboards and executive analytics',    s: { dw:3,dl:0,lh:2,df:1,dm:1,cp:1 } },
      { t: 'Connect fragmented data silos',   d: 'Unify data across on-prem, cloud, and systems',   s: { dw:1,dl:1,lh:2,df:3,dm:2,cp:2 } },
      { t: 'AI / ML and advanced analytics',  d: 'Feature engineering, model training, predictions', s: { dw:0,dl:2,lh:3,df:2,dm:2,cp:3 } },
      { t: 'Domain autonomy and speed',       d: 'Each team ships data products independently',     s: { dw:0,dl:1,lh:1,df:2,dm:3,cp:2 } }
    ]
  }
];

/* ═══════════════════════════════════════════════════
   DATA — SAP BDC ARCHITECTURE LAYER DIAGRAMS
═══════════════════════════════════════════════════ */
const DIAG_LAYERS = [
  {
    id: 'dw', layers: [
      { l: 'Sources',   chips: ['SAP ERP', 'Non-SAP', 'Flat Files'] },
      { l: 'ETL',       chips: ['SAP BW/4HANA ETL'] },
      { l: 'Storage',   chips: ['SAP HANA In-Memory'] },
      { l: 'Analytics', chips: ['OLAP Queries', 'BW Queries'] }
    ]
  },
  {
    id: 'dl', layers: [
      { l: 'Ingest',   chips: ['Streaming', 'Batch', 'API'] },
      { l: 'Storage',  chips: ['Object Store', 'Raw Zone', 'Refined Zone'] },
      { l: 'Process',  chips: ['Spark Compute', 'SQL on Files'] },
      { l: 'Query',    chips: ['SAP Datasphere'] }
    ]
  },
  {
    id: 'lh', layers: [
      { l: 'Storage', chips: ['Delta Lake', 'Parquet Files', 'Open Format'] },
      { l: 'Engine',  chips: ['SAP Databricks', 'Apache Spark'] },
      { l: 'Share',   chips: ['Delta Sharing Protocol'] },
      { l: 'Govern',  chips: ['SAP Datasphere', 'ODM'] }
    ]
  },
  {
    id: 'df', layers: [
      { l: 'Sources',      chips: ['On-Prem', 'Cloud', 'Hybrid'] },
      { l: 'Fabric Layer', chips: ['SAP Datasphere', 'SAP BTP'] },
      { l: 'Semantics',    chips: ['One Domain Model', 'Metadata Mgmt'] },
      { l: 'Consume',      chips: ['Self-service', 'Real-time Access'] }
    ]
  },
  {
    id: 'dm', layers: [
      { l: 'Domains',  chips: ['Marketing', 'Finance', 'Sales', 'Logistics'] },
      { l: 'Products', chips: ['Data Products', 'SLAs', 'Ownership'] },
      { l: 'Platform', chips: ['Datasphere Spaces', 'Federated Gov'] },
      { l: 'Share',    chips: ['Delta/Parquet', 'Cross-domain APIs'] }
    ]
  },
  {
    id: 'cp', layers: [
      { l: 'Ingest',   chips: ['Confluent', 'Kafka Streams'] },
      { l: 'Catalog',  chips: ['Collibra', 'SAP Datasphere'] },
      { l: 'Process',  chips: ['SAP Databricks', 'DataRobot'] },
      { l: 'Cloud',    chips: ['Google Cloud', 'Partner APIs'] }
    ]
  }
];

/* ═══════════════════════════════════════════════════
   OVERVIEW CARDS
═══════════════════════════════════════════════════ */
function renderCards() {
  const grid = document.getElementById('archGrid');
  const levelClass = { high: 'pill-high', med: 'pill-med', low: 'pill-low' };

  grid.innerHTML = ARCHS.map(a => {
    const c = COLORS[a.id];
    return `
      <div class="arch-card reveal" id="card-${a.id}"
        style="--card-color:${c.main};--card-color-dim:${c.dim}"
        onclick="toggleCard('${a.id}')">
        <div class="card-top">
          <div class="card-icon">${c.icon}</div>
          <span class="card-num mono">${a.num}</span>
        </div>
        <div class="card-name">${a.name}</div>
        <div class="card-schema">${a.schema}</div>
        <div class="card-desc">${a.tagline}</div>
        <div class="card-tags">
          ${a.tags.map(t => `<span class="tag">${t}</span>`).join('')}
        </div>
        <div class="card-detail">
          <p style="font-size:13px;color:var(--text2);line-height:1.6;margin-bottom:14px">${a.desc}</p>
          <div class="detail-cols">
            <div>
              <p class="detail-heading">Key Characteristics</p>
              <ul class="trait-list">
                ${a.traits.map(t => `
                  <li>
                    <span>${t.k}</span>
                    <span class="trait-val">
                      <span class="pill ${levelClass[t.level]}">${t.v}</span>
                    </span>
                  </li>
                `).join('')}
              </ul>
            </div>
            <div>
              <p class="detail-heading">SAP BDC Components</p>
              <div class="sap-chips">
                ${a.sap.map(s => `<span class="sap-chip">${s}</span>`).join('')}
              </div>
              <div class="pro-con">
                <div class="pro-con-col pros">
                  <p class="detail-heading" style="margin-top:14px">Advantages</p>
                  <ul>${a.pros.map(p => `<li>${p}</li>`).join('')}</ul>
                </div>
                <div class="pro-con-col cons">
                  <p class="detail-heading" style="margin-top:14px">Limitations</p>
                  <ul>${a.cons.map(con => `<li>${con}</li>`).join('')}</ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;
  }).join('');
}

function toggleCard(id) {
  const card = document.getElementById('card-' + id);
  const wasExpanded = card.classList.contains('expanded');
  document.querySelectorAll('.arch-card').forEach(c => c.classList.remove('expanded'));
  if (!wasExpanded) card.classList.add('expanded');
}

/* ═══════════════════════════════════════════════════
   COMPARISON TABLE
═══════════════════════════════════════════════════ */
function renderTable() {
  const criteria = [
    { k: 'Schema approach',  idx: 0 },
    { k: 'Data types',       idx: 1 },
    { k: 'Flexibility',      idx: 2 },
    { k: 'Query performance',idx: 3 },
    { k: 'Scalability',      idx: 4 },
    { k: 'Governance',       idx: 5 },
    { k: 'Cost profile',     idx: 6 },
    { k: 'Real-time support',idx: 7 }
  ];
  const lc = { high: 'pill-high', med: 'pill-med', low: 'pill-low' };
  const table = document.getElementById('compareTable');

  table.innerHTML = `
    <thead>
      <tr>
        <th>Criterion</th>
        ${ARCHS.map(a => `<th style="color:${COLORS[a.id].main}">${a.name}</th>`).join('')}
      </tr>
    </thead>
    <tbody>
      ${criteria.map(c => `
        <tr>
          <td>${c.k}</td>
          ${ARCHS.map(a => {
            const trait = a.traits[c.idx];
            return `<td><span class="pill ${lc[trait.level]}">${trait.v}</span></td>`;
          }).join('')}
        </tr>
      `).join('')}
    </tbody>
  `;
}

/* ═══════════════════════════════════════════════════
   RADAR CHART
═══════════════════════════════════════════════════ */
const radarLabels = ['Flexibility', 'Data Variety', 'Performance', 'Scalability', 'Governance', 'AI/ML Readiness'];
let radarActive = new Set(ARCHS.map(a => a.id));
let radarChart = null;

function buildRadarDatasets() {
  return ARCHS.filter(a => radarActive.has(a.id)).map(a => ({
    label: a.name,
    data: a.radar,
    borderColor: COLORS[a.id].main,
    backgroundColor: COLORS[a.id].main + '22',
    borderWidth: 2,
    pointBackgroundColor: COLORS[a.id].main,
    pointRadius: 4
  }));
}

function renderRadar() {
  const controls = document.getElementById('radarControls');
  controls.innerHTML = ARCHS.map(a => `
    <button class="rc-btn on" id="rc-${a.id}"
      style="background:${COLORS[a.id].main};border-color:${COLORS[a.id].main};color:#000;font-weight:500"
      onclick="toggleRadar('${a.id}', this)">
      ${a.name}
    </button>
  `).join('');

  const ctx = document.getElementById('radarChart').getContext('2d');
  radarChart = new Chart(ctx, {
    type: 'radar',
    data: { labels: radarLabels, datasets: buildRadarDatasets() },
    options: {
      responsive: true,
      maintainAspectRatio: false,
      scales: {
        r: {
          min: 0,
          max: 5,
          ticks: {
            stepSize: 1,
            color: '#545e7e',
            font: { family: 'DM Mono', size: 10 },
            backdropColor: 'transparent'
          },
          grid:        { color: '#2a3350' },
          pointLabels: { color: '#8a94b2', font: { family: 'Syne', size: 12 } },
          angleLines:  { color: '#2a3350' }
        }
      },
      plugins: {
        legend: { display: false },
        tooltip: {
          backgroundColor: '#161b26',
          borderColor: '#2a3350',
          borderWidth: 1,
          titleColor: '#e8eaf4',
          bodyColor: '#8a94b2',
          titleFont: { family: 'Syne', weight: '600' },
          bodyFont:  { family: 'DM Mono', size: 12 }
        }
      }
    }
  });
}

function toggleRadar(id, btn) {
  if (radarActive.has(id)) {
    if (radarActive.size === 1) return; // keep at least one visible
    radarActive.delete(id);
    btn.classList.remove('on');
    btn.style.background   = 'transparent';
    btn.style.borderColor  = COLORS[id].main;
    btn.style.color        = COLORS[id].main;
  } else {
    radarActive.add(id);
    btn.classList.add('on');
    btn.style.background  = COLORS[id].main;
    btn.style.borderColor = COLORS[id].main;
    btn.style.color       = '#000';
  }
  radarChart.data.datasets = buildRadarDatasets();
  radarChart.update();
}

/* ═══════════════════════════════════════════════════
   DECISION WIZARD
═══════════════════════════════════════════════════ */
let wStep    = 0;
let wAnswers = [];
let wScores  = {};

function renderWizard() {
  const container = document.getElementById('wizSteps');
  container.innerHTML = QUESTIONS.map((q, i) => `
    <div class="step-panel ${i === 0 ? 'active' : ''}" id="ws${i}">
      <span class="step-num">Question ${i + 1} of ${QUESTIONS.length}</span>
      <p class="step-q">${q.q}</p>
      <div class="options">
        ${q.opts.map((o, j) => `
          <div class="opt ${wAnswers[i] === j ? 'active' : ''}" onclick="pickOpt(${i}, ${j}, this)">
            <div class="opt-t">${o.t}</div>
            <div class="opt-d">${o.d}</div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join('');
  updateWizUI();
}

function pickOpt(step, opt, el) {
  document.querySelectorAll(`#ws${step} .opt`).forEach(e => e.classList.remove('active'));
  el.classList.add('active');
  wAnswers[step] = opt;
}

function wizNext() {
  if (wStep < QUESTIONS.length) {
    if (wAnswers[wStep] === undefined) return; // no answer selected yet
    wStep++;
    if (wStep === QUESTIONS.length) { showResult(); return; }
  }
  updateWizUI();
}

function wizBack() {
  if (wStep > 0) {
    wStep--;
    document.getElementById('wizResult').style.display = 'none';
    document.getElementById('wizSteps').style.display  = '';
    updateWizUI();
  }
}

function updateWizUI() {
  document.querySelectorAll('.step-panel').forEach((p, i) => {
    p.classList.toggle('active', i === wStep);
  });

  const pct = Math.round((wStep / QUESTIONS.length) * 100);
  document.getElementById('wizProgress').style.width = pct + '%';
  document.getElementById('wizStepLabel').textContent =
    `Step ${Math.min(wStep + 1, QUESTIONS.length)} of ${QUESTIONS.length}`;

  document.getElementById('wizBack').style.visibility = wStep > 0 ? 'visible' : 'hidden';
  document.getElementById('wizNext').style.display    = wStep >= QUESTIONS.length ? 'none' : '';
}

function showResult() {
  // Tally scores
  wScores = { dw: 0, dl: 0, lh: 0, df: 0, dm: 0, cp: 0 };
  QUESTIONS.forEach((q, i) => {
    if (wAnswers[i] !== undefined) {
      const s = q.opts[wAnswers[i]].s;
      Object.keys(s).forEach(k => { wScores[k] += s[k]; });
    }
  });

  const sorted = Object.entries(wScores).sort((a, b) => b[1] - a[1]);
  const topId  = sorted[0][0];
  const top    = ARCHS.find(a => a.id === topId);
  const maxS   = sorted[0][1];
  const c      = COLORS[topId];

  // Hide steps, update nav
  document.getElementById('wizSteps').style.display = 'none';
  document.getElementById('wizNav').innerHTML = `
    <button class="wbtn wbtn-ghost" onclick="resetWizard()">← Start over</button>
    <span></span>
  `;

  // Render result
  document.getElementById('wizResult').style.display = 'block';
  document.getElementById('wizResult').innerHTML = `
    <div class="result-wrap">
      <div class="result-top" style="border-color:${c.main}40;background:${c.dim}">
        <div class="result-icon" style="background:${c.dim}">${COLORS[topId].icon}</div>
        <div>
          <div class="result-name">${top.name}</div>
          <div class="result-tag" style="color:${c.main}">${top.schema} · Recommended</div>
          <div class="result-desc">${top.desc}</div>
        </div>
      </div>

      <p class="scores-title">All architecture scores</p>
      <div class="score-rows">
        ${sorted.map(([id, score]) => {
          const a   = ARCHS.find(x => x.id === id);
          const pct = Math.round((score / maxS) * 100);
          return `
            <div class="score-row">
              <div class="score-name">
                <span class="score-dot" style="background:${COLORS[id].main}"></span>
                ${a.name}
              </div>
              <div class="score-track">
                <div class="score-bar" style="width:${pct}%;background:${COLORS[id].main}"></div>
              </div>
              <div class="score-num">${score}</div>
            </div>
          `;
        }).join('')}
      </div>

      <div class="sap-section">
        <p class="scores-title">Recommended SAP BDC Components</p>
        <div class="result-sap-chips">
          ${top.sap.map(s => `
            <span class="sap-chip" style="border-color:${c.main}40;color:${c.main}">${s}</span>
          `).join('')}
        </div>
      </div>
    </div>
  `;
}

function resetWizard() {
  wStep    = 0;
  wAnswers = [];
  wScores  = {};
  document.getElementById('wizResult').style.display = 'none';
  document.getElementById('wizSteps').style.display  = '';
  document.getElementById('wizNav').innerHTML = `
    <button class="wbtn wbtn-ghost" id="wizBack" onclick="wizBack()" style="visibility:hidden">← Back</button>
    <button class="wbtn wbtn-primary" id="wizNext" onclick="wizNext()">Next →</button>
  `;
  renderWizard();
}

/* ═══════════════════════════════════════════════════
   ARCHITECTURE MAPPING
═══════════════════════════════════════════════════ */
function renderMapping() {
  const grid = document.getElementById('mapGrid');
  grid.innerHTML = ARCHS.map(a => {
    const c      = COLORS[a.id];
    const layers = DIAG_LAYERS.find(d => d.id === a.id).layers;
    return `
      <div class="map-card reveal">
        <div class="map-card-top">
          <div class="map-icon" style="background:${c.dim}">${c.icon}</div>
          <div>
            <div class="map-name">${a.name}</div>
            <div class="map-schema" style="color:${c.main}">${a.schema}</div>
          </div>
        </div>
        <div class="arch-diagram">
          ${layers.map((layer, li) => `
            <div class="diagram-row">
              <span class="diagram-label">${layer.l}</span>
              <div class="diagram-chips">
                ${layer.chips.map(ch => `
                  <span class="d-chip"
                    style="background:${c.dim};color:${c.main};border-color:${c.main}40">
                    ${ch}
                  </span>
                `).join('')}
              </div>
              ${li < layers.length - 1 ? '<span class="d-arrow">↓</span>' : ''}
            </div>
          `).join('')}
        </div>
        <div style="display:flex;flex-wrap:wrap;gap:5px;margin-top:8px;padding-top:12px;border-top:1px solid var(--border)">
          ${a.sap.map(s => `<span class="sap-chip">${s}</span>`).join('')}
        </div>
      </div>
    `;
  }).join('');
}

/* ═══════════════════════════════════════════════════
   SCROLL REVEAL
═══════════════════════════════════════════════════ */
function initReveal() {
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
        const idx = Array.from(entry.target.parentElement.children).indexOf(entry.target);
        entry.target.style.transitionDelay = (idx * 60) + 'ms';
      }
    });
  }, { threshold: 0.1 });

  document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
}

/* ═══════════════════════════════════════════════════
   NAV ACTIVE STATE ON SCROLL
═══════════════════════════════════════════════════ */
function initNav() {
  const sectionIds = ['overview', 'comparison', 'radar-section', 'wizard', 'mapping'];
  const observer   = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        document.querySelectorAll('.nav-links a').forEach(a => {
          a.classList.toggle('active', a.getAttribute('href') === '#' + entry.target.id);
        });
      }
    });
  }, { threshold: 0.3 });

  sectionIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) observer.observe(el);
  });
}

/* ═══════════════════════════════════════════════════
   INIT — run after DOM is ready
═══════════════════════════════════════════════════ */
document.addEventListener('DOMContentLoaded', () => {
  renderCards();
  renderTable();
  renderWizard();
  renderMapping();
  renderRadar();
  initReveal();
  initNav();
  // Second pass for cards rendered dynamically
  setTimeout(initReveal, 100);
});
