# SAP Business Data Cloud — Architecture Decision Framework

An interactive decision-support tool designed to help architects and data engineers navigate the complexities of modern data management. This framework evaluates six core architectural patterns and maps them directly to the **SAP Business Data Cloud (BDC)** ecosystem.

**Production URL:** [https://sap-bdc-project.vercel.app](https://sap-bdc-project.vercel.app)

## 🚀 Project Overview
The **Architecture Decision Framework** serves as a capstone project for SAP Business Data Cloud 2026. It provides a structured methodology to compare, evaluate, and select data management approaches based on specific organizational needs and technical constraints.

### Key Features
* **Six Architecture Profiles**: In-depth analysis of Data Warehouse, Data Lake, Data Lakehouse, Data Fabric, Data Mesh, and Composable Platforms.
* **Interactive Decision Wizard**: A 6-step diagnostic tool that scores and recommends the most suitable architecture based on data types, ownership structure, and governance maturity.
* **Architecture Radar**: A visual comparison tool built with Chart.js to evaluate capability profiles such as flexibility, scalability, and performance across different patterns.
* **SAP BDC Mapping**: Comprehensive mapping of theoretical architecture layers (Ingest, Storage, Process, Consume) to specific SAP components like **SAP Datasphere**, **SAP HANA**, and **SAP BW/4HANA**.

## 🏗️ Supported Architectures
The framework covers six primary data management approaches:

| Architecture | Primary Schema | Key SAP Components |
| :--- | :--- | :--- |
| **Data Warehouse** | Schema-on-write | SAP BW/4HANA, SAP HANA, SAP Datasphere |
| **Data Lake** | Schema-on-read | SAP Datasphere Object Store, Spark Compute |
| **Data Lakehouse** | Unified storage | SAP Databricks, Delta Sharing, SAP Datasphere |
| **Data Fabric** | Data virtualization | SAP Datasphere, SAP BTP, One Domain Model |
| **Data Mesh** | Domain ownership | SAP Datasphere Spaces, Federated Governance |
| **Composable Platform** | Modular APIs | Confluent, Collibra, DataRobot, SAP Databricks |

## 🛠️ Technical Stack
* **Frontend**: HTML5, CSS3 (Custom properties, Grid, Flexbox)
* **Typography**: Syne (Headers), DM Sans (Body), DM Mono (Technical data)
* **Data Visualization**: Chart.js
* **Animations**: Intersection Observer API for scroll-reveal effects
* **Deployment**: Vercel

## 📂 Repository Structure
```text
├── index.html   # Main application structure and sections
├── styles.css   # Modern dark-themed UI with custom color palettes
├── script.js    # Logic for Wizard, Radar Chart, and Data Rendering
└── README.md    # Project documentation
```

## 👨‍💻 Author
**Soumilya Roy**   

---
*Developed as a Capstone Project for SAP Certified - SAP Business Data Cloud · 2026*
