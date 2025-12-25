// DUO KITTU CAREER PATH – EXPANDED JavaScript with 4-6 domains per combination

// ----- Login handling (unchanged) -----
const loginForm = document.getElementById("login-form");
const loginSection = document.getElementById("login-section");
const mainSection = document.getElementById("main-section");
const welcomeUser = document.getElementById("welcome-user");

if (loginForm) {
  loginForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const nameInput = document.getElementById("fullName");
    
    const name = nameInput ? nameInput.value.trim() : "";
  
   
    }
    welcomeUser.textContent = "Hi " + name + ", let us design your career roadmap.";
    loginSection.classList.add("hidden");
    mainSection.classList.remove("hidden");
  });
}

// ----- EXPANDED Domain data with 4-6 options per branch/industry -----
const domainData = {
  Software: {
    CSE: [
      { name: "Full Stack Development", skills: ["React", "Node.js", "MongoDB", "AWS"], fundamentals: ["DSA", "OOP", "DBMS"], basicNeeds: "Git, deployment skills", scope: "Web/mobile apps boom", salary: "₹6-15 LPA", companies: "TCS, Infosys, Zoho", books: ["Clean Code", "Eloquent JavaScript"] },
      { name: "Data Science & Analytics", skills: ["Python", "Pandas", "Tableau", "ML"], fundamentals: ["Statistics", "SQL"], basicNeeds: "Math foundation", scope: "FinTech/E-commerce growth", salary: "₹8-18 LPA", companies: "Amazon, Flipkart", books: ["Python for Data Analysis", "Hands-On ML"] },
      { name: "DevOps & Cloud Engineering", skills: ["Docker", "Kubernetes", "AWS", "CI/CD"], fundamentals: ["Linux", "Networking"], basicNeeds: "Automation mindset", scope: "Cloud migration trend", salary: "₹7-16 LPA", companies: "Accenture, Cognizant", books: ["DevOps Handbook", "Kubernetes in Action"] },
      { name: "Mobile App Development", skills: ["Flutter", "React Native", "Firebase"], fundamentals: ["OOP", "APIs"], basicNeeds: "UI/UX basics", scope: "App economy expansion", salary: "₹5-14 LPA", companies: "Paytm, PhonePe", books: ["Flutter in Action", "Dart Apprentice"] },
      { name: "Backend Development", skills: ["Java Spring", "Python Django", "Microservices"], fundamentals: ["DSA", "Databases"], basicNeeds: "API design", scope: "Enterprise software", salary: "₹6-15 LPA", companies: "Wipro, HCL", books: ["Spring in Action", "Django for Professionals"] },
      { name: "Blockchain Developer", skills: ["Solidity", "Web3", "Ethereum"], fundamentals: ["Cryptography", "DSA"], basicNeeds: "Smart contracts", scope: "FinTech innovation", salary: "₹10-25 LPA", companies: "Polygon, CoinDCX", books: ["Mastering Ethereum", "Blockchain Basics"] }
    ],
    "AI & DS": [
      { name: "AI/ML Engineer", skills: ["TensorFlow", "PyTorch", "MLOps"], fundamentals: ["Linear Algebra", "Probability"], basicNeeds: "Model deployment", scope: "AI adoption surge", salary: "₹8-22 LPA", companies: "Google, Microsoft", books: ["Deep Learning", "Hands-On ML"] },
      { name: "Data Engineer", skills: ["Spark", "Kafka", "Airflow", "Snowflake"], fundamentals: ["SQL", "ETL"], basicNeeds: "Big data pipelines", scope: "Data infrastructure", salary: "₹9-20 LPA", companies: "Ola, Swiggy", books: ["Designing Data-Intensive Apps", "Spark Guide"] },
      { name: "NLP Specialist", skills: ["BERT", "Transformers", "LangChain"], fundamentals: ["Linguistics", "Deep Learning"], basicNeeds: "Text processing", scope: "Chatbots/Voice AI", salary: "₹12-28 LPA", companies: "Yellow.ai, Sarvam", books: ["Speech & Language Processing", "Transformers for NLP"] },
      { name: "Computer Vision Engineer", skills: ["OpenCV", "YOLO", "CNNs"], fundamentals: ["Image Processing", "DL"], basicNeeds: "GPU programming", scope: "Surveillance/Healthcare", salary: "₹10-25 LPA", companies: "NVIDIA, Staqu", books: ["Computer Vision", "Deep Learning for CV"] },
      { name: "Generative AI Specialist", skills: ["Stable Diffusion", "GPT", "Fine-tuning"], fundamentals: ["GANs", "Diffusion Models"], basicNeeds: "Prompt engineering", scope: "Content creation tools", salary: "₹15-35 LPA", companies: "RunwayML, Indian AI startups", books: ["Generative Deep Learning", "GANs in Action"] }
    ],
    ECE: [
      { name: "IoT Software Developer", skills: ["MQTT", "Node-RED", "AWS IoT"], fundamentals: ["Embedded C", "Networking"], basicNeeds: "Sensor integration", scope: "Smart cities", salary: "₹5-12 LPA", companies: "Siemens, Bosch", books: ["IoT Fundamentals", "Building IoT Projects"] },
      { name: "Firmware Engineer", skills: ["Embedded C", "FreeRTOS", "I2C/SPI"], fundamentals: ["Microcontrollers"], basicNeeds: "Hardware debugging", scope: "Consumer electronics", salary: "₹6-14 LPA", companies: "Texas Instruments", books: ["Embedded C", "Making Embedded Systems"] },
      { name: "Test Automation Engineer", skills: ["Selenium", "Appium", "Python"], fundamentals: ["Software Testing"], basicNeeds: "QA mindset", scope: "Product companies", salary: "₹5-13 LPA", companies: "Qualcomm, MediaTek", books: ["Lessons Learned in Testing", "Appium Testing"] },
      { name: "Cloud IoT Developer", skills: ["Azure IoT", "Edge Computing"], fundamentals: ["Cloud", "Embedded"], basicNeeds: "Hybrid systems", scope: "Industrial IoT", salary: "₹7-16 LPA", companies: "Honeywell, GE", books: ["Azure IoT Development", "Edge Computing"] },
      { name: "5G Software Developer", skills: ["5G Protocols", "Network Programming"], fundamentals: ["Telecom"], basicNeeds: "Packet analysis", scope: "Telecom revolution", salary: "₹8-20 LPA", companies: "Ericsson, Nokia", books: ["5G NR", "LTE in a Nutshell"] }
    ],
    EEE: [
      { name: "SCADA Software Engineer", skills: ["PLC Programming", "HMI"], fundamentals: ["Control Systems"], basicNeeds: "Industrial protocols", scope: "Automation industry", salary: "₹5-12 LPA", companies: "Siemens, Schneider", books: ["PLC Programming", "SCADA Systems"] },
      { name: "Smart Grid Developer", skills: ["Grid Protocols", "IoT"], fundamentals: ["Power Systems"], basicNeeds: "Energy domain", scope: "Renewable energy", salary: "₹6-14 LPA", companies: "NTPC, PGCIL", books: ["Smart Grid", "Power System Protection"] },
      { name: "EV Software Developer", skills: ["CAN Protocol", "AUTOSAR"], fundamentals: ["Automotive"], basicNeeds: "Vehicle electronics", scope: "EV boom", salary: "₹7-18 LPA", companies: "Tata Motors", books: ["Automotive Ethernet", "AUTOSAR Guide"] }
    ],
    IT: [
      { name: "Cloud Engineer", skills: ["AWS", "Terraform", "Serverless"], fundamentals: ["Networking"], basicNeeds: "Infrastructure as code", scope: "Digital transformation", salary: "₹6-15 LPA", companies: "Deloitte, Capgemini", books: ["AWS Certified Solutions", "Terraform Best Practices"] },
      { name: "Cybersecurity Analyst", skills: ["SIEM", "IDS/IPS", "Firewall"], fundamentals: ["Networking"], basicNeeds: "Threat hunting", scope: "Data protection laws", salary: "₹5-14 LPA", companies: "EY, KPMG", books: ["Blue Team Handbook", "Hacking Exposed"] },
      { name: "Network Automation Engineer", skills: ["Python Netmiko", "Ansible"], fundamentals: ["Networking"], basicNeeds: "Scripting skills", scope: "SDN trend", salary: "₹7-16 LPA", companies: "Cisco, Juniper", books: ["Network Programmability", "Ansible for DevOps"] },
      { name: "SRE (Site Reliability)", skills: ["Prometheus", "Grafana", "SLOs"], fundamentals: ["Linux"], basicNeeds: "On-call experience", scope: "High availability systems", salary: "₹8-20 LPA", companies: "Flipkart, Paytm", books: ["Site Reliability Engineering", "Observability Engineering"] },
      { name: "API Gateway Specialist", skills: ["Kong", "Apigee", "OAuth"], fundamentals: ["Microservices"], basicNeeds: "API security", scope: "API economy", salary: "₹6-15 LPA", companies: "MuleSoft partners", books: ["API Design Patterns", "Microservices Patterns"] }
    ],
    "CYBER SECURITY": [
      { name: "Penetration Tester", skills: ["Metasploit", "Burp Suite", "Nmap"], fundamentals: ["Networking"], basicNeeds: "Ethical hacking mindset", scope: "Compliance requirements", salary: "₹6-18 LPA", companies: "PwC, Deloitte", books: ["Web Hacking", "Metasploit Toolkit"] },
      { name: "SOC Analyst", skills: ["Splunk", "ELK Stack", "Threat Intel"], fundamentals: ["Log analysis"], basicNeeds: "24x7 monitoring", scope: "Security operations", salary: "₹5-12 LPA", companies: "SOCs in banks", books: ["Blue Team Field Manual", "Splunk Certified"] },
      { name: "Application Security", skills: ["SAST", "DAST", "OWASP"], fundamentals: ["Secure coding"], basicNeeds: "Code review skills", scope: "DevSecOps trend", salary: "₹7-16 LPA", companies: "Synopsys, Veracode", books: ["OWASP Testing Guide", "Secure Coding"] },
      { name: "Cloud Security Engineer", skills: ["CASB", "CSPM", "Cloud IAM"], fundamentals: ["Cloud"], basicNeeds: "Multi-cloud experience", scope: "Cloud security gaps", salary: "₹8-22 LPA", companies: "Palo Alto, Zscaler", books: ["Cloud Security Handbook", "AWS Security Specialty"] }
    ],
    CIVIL: [
      { name: "BIM Software Engineer", skills: ["Revit", "Navisworks", "BIM 360"], fundamentals: ["Civil Engineering"], basicNeeds: "3D modeling", scope: "Digital construction", salary: "₹4-10 LPA", companies: "AECOM, Bentley", books: ["BIM Handbook", "Revit Architecture"] },
      { name: "GIS Developer", skills: ["ArcGIS", "QGIS", "Python"], fundamentals: ["Surveying"], basicNeeds: "Spatial analysis", scope: "Smart cities", salary: "₹5-12 LPA", companies: "Esri partners", books: ["GIS Fundamentals", "Python Geospatial"] }
    ],
    MECHANICAL: [
      { name: "CAD/CAM Developer", skills: ["SolidWorks API", "ANSYS"], fundamentals: ["Mechanical Design"], basicNeeds: "CAD automation", scope: "Industry 4.0", salary: "₹4-11 LPA", companies: "Siemens PLM", books: ["SolidWorks API Guide", "ANSYS Workbench"] }
    ]
  },

  Hardware: {
    ECE: [
      { name: "VLSI Design Engineer", skills: ["Verilog", "UVM", "Cadence"], fundamentals: ["Digital Logic", "CMOS"], basicNeeds: "RTL design", scope: "Semiconductor boom", salary: "₹8-20 LPA", companies: "Intel, Qualcomm", books: ["CMOS VLSI Design", "Digital Design Mano"] },
      { name: "Embedded Hardware", skills: ["PCB Design", "Altium", "FPGA"], fundamentals: ["Analog/Digital"], basicNeeds: "Schematic capture", scope: "IoT/EV growth", salary: "₹5-14 LPA", companies: "Bosch, Tata Elxsi", books: ["Art of Electronics", "PCB Design Guide"] },
      { name: "RF/Microwave Engineer", skills: ["HFSS", "ADS", "Antenna Design"], fundamentals: ["EM Theory"], basicNeeds: "5G knowledge", scope: "Telecom expansion", salary: "₹7-18 LPA", companies: "Nokia, Ericsson", books: ["RF Microelectronics", "Antenna Theory"] },
      { name: "ASIC Verification", skills: ["SystemVerilog", "UVM", "Coverage"], fundamentals: ["Verification"], basicNeeds: "Testbench dev", scope: "Chip design surge", salary: "₹10-25 LPA", companies: "Synopsys, Mentor", books: ["SystemVerilog for Verification", "UVM Cookbook"] },
      { name: "FPGA Engineer", skills: ["Vivado", "VHDL", "High-Level Synthesis"], fundamentals: ["Digital Design"], basicNeeds: "Timing closure", scope: "Prototyping/AI", salary: "₹8-22 LPA", companies: "Xilinx, AMD", books: ["FPGA Prototyping", "VHDL by Example"] },
      { name: "Analog Design", skills: ["SPICE", "Layout", "Cadence Virtuoso"], fundamentals: ["Analog Circuits"], basicNeeds: "Noise analysis", scope: "Mixed-signal ICs", salary: "₹12-30 LPA", companies: "Texas Instruments", books: ["CMOS Analog Design", "Design of Analog CMOS"] }
    ],
    EEE: [
      { name: "Power Electronics", skills: ["MATLAB", "IGBT", "Inverters"], fundamentals: ["Power Systems"], basicNeeds: "Converter design", scope: "EV/Solar boom", salary: "₹6-15 LPA", companies: "ABB, Siemens", books: ["Power Electronics Bimbhra", "Fundamentals of Power"] },
      { name: "Control Systems Engineer", skills: ["PID", "PLC", "DCS"], fundamentals: ["Control Theory"], basicNeeds: "Stability analysis", scope: "Industrial automation", salary: "₹5-13 LPA", companies: "Honeywell, Rockwell", books: ["Modern Control Engineering", "Control Systems Nagrath"] },
      { name: "Renewable Energy Systems", skills: ["Solar PV", "Wind Turbines", "MPPT"], fundamentals: ["Power Electronics"], basicNeeds: "Grid integration", scope: "Green energy push", salary: "₹6-16 LPA", companies: "Adani Green, ReNew", books: ["Renewable Energy Systems", "Solar Energy"] },
      { name: "EV Battery Systems", skills: ["BMS", "Battery Chemistry", "Thermal Mgmt"], fundamentals: ["Electrochemistry"], basicNeeds: "Safety systems", scope: "Electric mobility", salary: "₹8-20 LPA", companies: "Tata Chemicals", books: ["Battery Systems Engineering", "EV Battery Design"] },
      { name: "High Voltage Engineering", skills: ["Insulation", "Testing", "Substations"], fundamentals: ["HV Systems"], basicNeeds: "Safety protocols", scope: "Power grid expansion", salary: "₹7-18 LPA", companies: "PGCIL, BHEL", books: ["High Voltage Engineering", "Extra High Voltage"] }
    ],
    MECHANICAL: [
      { name: "Mechatronics Engineer", skills: ["Robotics", "PLC", "Sensors"], fundamentals: ["Kinematics"], basicNeeds: "Interdisciplinary skills", scope: "Automation/robotics", salary: "₹5-12 LPA", companies: "Fanuc, ABB Robotics", books: ["Mechatronics", "Industrial Robotics"] },
      { name: "Automotive Design", skills: ["CATIA", "Chassis Design", "NVH"], fundamentals: ["Vehicle Dynamics"], basicNeeds: "Crash analysis", scope: "Auto sector growth", salary: "₹6-15 LPA", companies: "Mahindra, Tata Motors", books: ["Automobile Engineering", "Vehicle Dynamics"] },
      { name: "Additive Manufacturing", skills: ["3D Printing", "SLS", "Topology Optimization"], fundamentals: ["Materials Science"], basicNeeds: "AM processes", scope: "Industry 4.0", salary: "₹7-16 LPA", companies: "EOS, Stratasys", books: ["Additive Manufacturing", "3D Printing Tech"] },
      { name: "Thermal Systems Engineer", skills: ["ANSYS Fluent", "HVAC", "Heat Transfer"], fundamentals: ["Thermodynamics"], basicNeeds: "CFD simulation", scope: "HVAC/EV cooling", salary: "₹5-14 LPA", companies: "Blue Star, Voltas", books: ["Heat Transfer", "Thermal Engineering"] },
      { name: "Product Design Engineer", skills: ["SolidWorks", "DFM", "Prototyping"], fundamentals: ["Design Principles"], basicNeeds: "Manufacturing knowledge", scope: "Consumer products", salary: "₹4-12 LPA", companies: "Godrej, Whirlpool", books: ["Product Design", "Mechanical Design Khurmi"] }
    ],
    CIVIL: [
      { name: "Structural Engineer", skills: ["STAAD Pro", "ETABS", "Seismic Design"], fundamentals: ["RCC Design"], basicNeeds: "IS codes knowledge", scope: "Infrastructure boom", salary: "₹4-11 LPA", companies: "L&T, HCC", books: ["RCC Design", "Steel Structures"] },
      { name: "Geotechnical Engineer", skills: ["PLAXIS", "Pile Foundation", "Soil Testing"], fundamentals: ["Soil Mechanics"], basicNeeds: "Site investigation", scope: "Metro/tunnel projects", salary: "₹5-12 LPA", companies: "Gammon India", books: ["Soil Mechanics", "Foundation Engineering"] },
      { name: "Transportation Engineer", skills: ["MXRoads", "Traffic Engineering"], fundamentals: ["Highway Design"], basicNeeds: "IRC standards", scope: "Road infrastructure", salary: "₹4-10 LPA", companies: "NHAI contractors", books: ["Highway Engineering", "Traffic Engineering"] },
      { name: "Construction Manager", skills: ["Primavera", "MS Project", "Estimation"], fundamentals: ["Project Management"], basicNeeds: "Site execution", scope: "Real estate growth", salary: "₹6-15 LPA", companies: "Shapoorji Pallonji", books: ["Construction Management", "CPM Scheduling"] }
    ]
  }
};

// ----- Career form handling (unchanged) -----
const careerForm = document.getElementById("career-form");
const resultSection = document.getElementById("result-section");
const domainsContainer = document.getElementById("domains-container");

if (careerForm) {
  careerForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const degree = document.getElementById("degree").value;
    const branch = document.getElementById("branch").value;
    const industry = document.getElementById("industry").value;
    if (!degree || !branch || !industry) {
      alert("Please select degree, branch and industry.");
      return;
    }
    const industryData = domainData[industry];
    let domains = industryData && industryData[branch];
    if (!domains && industryData) {
      const keys = Object.keys(industryData);
      if (keys.length > 0) domains = industryData[keys[0]];
    }
    renderDomains(domains, branch, industry);
    resultSection.classList.remove("hidden");
  });
}

// ----- Render domain cards (unchanged) -----
function renderDomains(domains, branch, industry) {
  domainsContainer.innerHTML = "";
  if (!domains || domains.length === 0) {
    const p = document.createElement("p");
    p.textContent = "No domains configured yet for this combination.";
    domainsContainer.appendChild(p);
    return;
  }
  domains.forEach(function (d, index) {
    const card = document.createElement("div");
    card.className = "domain-card";
    card.innerHTML = 
      '<span class="domain-tag">Option ' + (index + 1) + '</span>' +
      '<div class="domain-title">' + d.name + '</div>' +
      '<p class="domain-item"><span class="domain-label">Branch:</span> ' + branch + ' | <span class="domain-label">Industry:</span> ' + industry + '</p>' +
      '<p class="domain-item"><span class="domain-label"># Domains:</span> ' + domains.length + ' total options</p>' +
      '<p class="domain-item"><span class="domain-label">Key Skills:</span> ' + d.skills.join(", ") + '</p>' +
      '<p class="domain-item"><span class="domain-label">Fundamentals:</span> ' + d.fundamentals.join(", ") + '</p>' +
      '<p class="domain-item"><span class="domain-label">Basic Needs:</span> ' + d.basicNeeds + '</p>' +
      '<p class="domain-item"><span class="domain-label">India Scope:</span> ' + d.scope + '</p>' +
      '<p class="domain-item"><span class="domain-label">Salary:</span> ' + d.salary + '</p>' +
      '<p class="domain-item"><span class="domain-label">Companies:</span> ' + d.companies + '</p>' +
      '<p class="domain-item"><span class="domain-label">Books:</span> ' + d.books.join("; ") + '</p>';
    domainsContainer.appendChild(card);
  });
}

// ----- Footer year -----
const yearSpan = document.getElementById("year");

if (yearSpan) yearSpan.textContent = new Date().getFullYear();

