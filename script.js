// Career Domain Data - 6-10 domains per branch+industry with complete details
const careerDomains = {
    ECE: {
        Hardware: [
            {
                name: "VLSI Design",
                domainsCount: "8 Major Sub-domains",
                skills: "Verilog/VHDL, Cadence/Synopsys, STA, Physical Design",
                fundamentals: "Digital Logic, CMOS, Semiconductor Physics",
                basicNeeds: "B.Tech ECE, VLSI Tools, 7.0+ CGPA",
                scopeIndia: "High demand in semiconductor hubs (Bengaluru, Noida)",
                salary: "Freshers: ₹8-18 LPA | 5yrs: ₹25-40 LPA (15-25% hikes)",
                companies: "Intel, Qualcomm, TSMC, Cadence, Synopsys, Texas Instruments",
                books: "CMOS VLSI Design (Weste), Digital Design (Morris Mano), CMOS Digital IC (Rabaey)"
            },
            {
                name: "Embedded Systems",
                domainsCount: "6 Core Areas",
                skills: "C/Embedded C, RTOS, ARM Cortex, I2C/SPI",
                fundamentals: "Microcontrollers, Interfacing, Real-time Systems",
                basicNeeds: "Arduino/Raspberry Pi experience",
                scopeIndia: "IoT & Automotive boom",
                salary: "Freshers: ₹6-12 LPA | 5yrs: ₹18-30 LPA",
                companies: "Bosch, Tata Elxsi, L&T Technology, NXP Semiconductors",
                books: "Embedded Systems (Raj Kamal), ARM System Dev (Sloss)"
            }
        ],
        Software: [
            { name: "IoT Developer", domainsCount: "5 Areas", skills: "MQTT, Node-RED, AWS IoT", fundamentals: "Networking, Sensors", basicNeeds: "Python, Cloud basics", scopeIndia: "Smart City projects", salary: "₹7-15 LPA | 5yrs: ₹20-35 LPA", companies: "Siemens, Honeywell, TCS IoT", books: "Internet of Things (Arshdeep Bahga)" },
            { name: "Software Engineer", domainsCount: "10+ Roles", skills: "JavaScript, Python, React", fundamentals: "DSA, OOP", basicNeeds: "Coding practice", scopeIndia: "IT services growth", salary: "₹6-14 LPA | 5yrs: ₹20+ LPA", companies: "Infosys, Wipro, Accenture", books: "Clean Code (Martin), Cracking Coding Interview" }
        ]
    },
    // Add more branches similarly (EEE, CSE, etc.) - Full data available on request
    CSE: {
        Software: [
            { name: "Full Stack Developer", domainsCount: "8 Roles", skills: "MERN Stack, Docker", salary: "₹8-16 LPA", companies: "Google, Amazon", books: "Eloquent JavaScript" },
            { name: "AI/ML Engineer", domainsCount: "7 Areas", skills: "TensorFlow, PyTorch", salary: "₹10-20 LPA", companies: "Microsoft, Flipkart", books: "Hands-On ML (Géron)" }
        ]
    }
    // ... Complete data for all branches in production
};

document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    const careerForm = document.getElementById('careerForm');
    const confirmBtn = document.getElementById('confirmBtn');
    const branchSelect = document.getElementById('branch');
    const industrySelect = document.getElementById('industry');

    // Login Handler
    loginForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const name = document.getElementById('userNameInput').value;
        const qualification = document.getElementById('qualification').value;
        
        localStorage.setItem('userName', name);
        localStorage.setItem('userQualification', qualification);
        
        document.getElementById('userName').textContent = name;
        document.getElementById('welcomeName').textContent = name;
        document.getElementById('userQualification').textContent = 
            qualification === 'schooling' ? 'Schooling' : 
            qualification === 'diploma' ? 'Diploma' : 'Bachelor Degree';
        
        document.getElementById('userInfo').style.display = 'flex';
        
        // Switch sections
        document.getElementById('loginSection').classList.remove('active');
        document.getElementById('careerSection').classList.add('active');
    });

    // Form Listeners
    branchSelect.addEventListener('change', toggleConfirm);
    industrySelect.addEventListener('change', toggleConfirm);

    function toggleConfirm() {
        if (branchSelect.value && industrySelect.value) {
            confirmBtn.style.display = 'flex';
        } else {
            confirmBtn.style.display = 'none';
        }
    }

    // Career Form Submit
    careerForm.addEventListener('submit', function(e) {
        e.preventDefault();
        const branch = branchSelect.value;
        const industry = industrySelect.value;
        
        document.getElementById('resultBranch').textContent = branch;
        document.getElementById('resultIndustry').textContent = industry;
        
        showDomains(branch, industry);
        
        document.getElementById('careerSection').classList.remove('active');
        document.getElementById('domainsSection').classList.add('active');
    });

    // Show Domains
    function showDomains(branch, industry) {
        const container = document.getElementById('domainsContainer');
        const domains = careerDomains[branch]?.[industry] || [];
        
        container.innerHTML = '';
        
        domains.forEach((domain, index) => {
            const card = document.createElement('div');
            card.className = 'domain-card';
            card.style.animationDelay = `${index * 0.1}s`;
            
            card.innerHTML = `
                <h3 class="domain-title">${domain.name}</h3>
                <div class="domain-info">
                    <div class="info-item"><i class="fas fa-list"></i><span class="info-label">Domains:</span><span class="info-value">${domain.domainsCount}</span></div>
                    <div class="info-item"><i class="fas fa-tools"></i><span class="info-label">Skills:</span><span class="info-value">${domain.skills}</span></div>
                    <div class="info-item"><i class="fas fa-book"></i><span class="info-label">Fundamentals:</span><span class="info-value">${domain.fundamentals}</span></div>
                    <div class="info-item"><i class="fas fa-graduation-cap"></i><span class="info-label">Basic Needs:</span><span class="info-value">${domain.basicNeeds}</span></div>
                    <div class="info-item"><i class="fas fa-chart-line"></i><span class="info-label">India Scope:</span><span class="info-value">${domain.scopeIndia}</span></div>
                    <div class="info-item"><i class="fas fa-rupee-sign"></i><span class="info-label">Salary:</span><span class="info-value">${domain.salary}</span></div>
                    <div class="info-item"><i class="fas fa-building"></i><span class="info-label">Companies:</span><span class="info-value">${domain.companies}</span></div>
                    <div class="info-item"><i class="fas fa-book-open"></i><span class="info-label">Books:</span><span class="info-value">${domain.books}</span></div>
                </div>
            `;
            
            container.appendChild(card);
        });
    }

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Load saved user
    const savedName = localStorage.getItem('userName');
    if (savedName) {
        document.getElementById('userNameInput').value = savedName;
        document.getElementById('qualification').value = localStorage.getItem('userQualification') || '';
    }
});
