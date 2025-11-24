// AI Chatbot with 3D Robot and Google Sheets Integration

class ChatbotAssistant {
    constructor() {
        this.conversationHistory = [];
        this.userInfo = {
            name: '',
            email: '',
            phone: '',
            company: '',
            problem: '',
            preferredDate: '',
            preferredTime: ''
        };
        this.currentStep = 'greeting';
        this.isOpen = false;
        
        this.init();
    }
    
    init() {
        this.createChatbotUI();
        this.attachEventListeners();
        this.initRobot3D();
        
        // Don't auto-open - hero robot handles initial interaction
        // User can click chatbot toggle button to open manually
    }
    
    createChatbotUI() {
        const chatbotHTML = `
            <div class="chatbot-container" id="chatbotContainer">
                <button class="chatbot-toggle" id="chatbotToggle">
                    <i class="fas fa-robot"></i>
                </button>
                
                <div class="chatbot-window" id="chatbotWindow">
                    <div class="chatbot-header">
                        <div class="chatbot-header-content">
                            <div class="robot-avatar" id="robotAvatar"></div>
                            <div>
                                <h3>AI Assistant</h3>
                                <p class="status">Online</p>
                            </div>
                        </div>
                        <button class="chatbot-close" id="chatbotClose">
                            <i class="fas fa-times"></i>
                        </button>
                    </div>
                    
                    <div class="chatbot-messages" id="chatbotMessages">
                        <div class="typing-indicator" id="typingIndicator">
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    
                    <div class="chatbot-input-area">
                        <input 
                            type="text" 
                            id="chatbotInput" 
                            placeholder="Type your message..."
                            autocomplete="off"
                        />
                        <button id="chatbotSend">
                            <i class="fas fa-paper-plane"></i>
                        </button>
                    </div>
                </div>
            </div>
        `;
        
        document.body.insertAdjacentHTML('beforeend', chatbotHTML);
    }
    
    attachEventListeners() {
        const toggle = document.getElementById('chatbotToggle');
        const close = document.getElementById('chatbotClose');
        const send = document.getElementById('chatbotSend');
        const input = document.getElementById('chatbotInput');
        
        toggle.addEventListener('click', () => this.toggleChatbot());
        close.addEventListener('click', () => this.closeChatbot());
        send.addEventListener('click', () => this.handleSendMessage());
        input.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.handleSendMessage();
        });
    }
    
    initRobot3D() {
        const container = document.getElementById('robotAvatar');
        if (!container || typeof THREE === 'undefined') return;
        
        const scene = new THREE.Scene();
        const camera = new THREE.PerspectiveCamera(75, 1, 0.1, 1000);
        camera.position.z = 2;
        
        const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        renderer.setSize(50, 50);
        renderer.setClearColor(0x000000, 0);
        container.appendChild(renderer.domElement);
        
        // Create simple robot head
        const headGeometry = new THREE.BoxGeometry(0.8, 0.8, 0.8);
        const headMaterial = new THREE.MeshPhongMaterial({ 
            color: 0x00f0ff,
            emissive: 0x003344
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        scene.add(head);
        
        // Eyes
        const eyeGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.2, 0.15, 0.41);
        head.add(leftEye);
        
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.2, 0.15, 0.41);
        head.add(rightEye);
        
        // Antenna
        const antennaGeometry = new THREE.CylinderGeometry(0.02, 0.02, 0.3, 8);
        const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0x00f0ff });
        const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna.position.set(0, 0.55, 0);
        head.add(antenna);
        
        const bulbGeometry = new THREE.SphereGeometry(0.08, 16, 16);
        const bulbMaterial = new THREE.MeshBasicMaterial({ color: 0xff0000 });
        const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
        bulb.position.set(0, 0.7, 0);
        head.add(bulb);
        
        // Lighting
        const light = new THREE.PointLight(0xffffff, 1, 100);
        light.position.set(0, 2, 2);
        scene.add(light);
        
        const ambientLight = new THREE.AmbientLight(0x404040);
        scene.add(ambientLight);
        
        // Animation
        let time = 0;
        const animate = () => {
            requestAnimationFrame(animate);
            time += 0.05;
            
            head.rotation.y = Math.sin(time * 0.5) * 0.2;
            bulb.material.emissive = new THREE.Color(
                Math.sin(time * 2) * 0.5 + 0.5, 
                0, 
                0
            );
            
            renderer.render(scene, camera);
        };
        animate();
    }
    
    toggleChatbot() {
        this.isOpen ? this.closeChatbot() : this.openChatbot();
    }
    
    openChatbot() {
        const window = document.getElementById('chatbotWindow');
        window.classList.add('open');
        this.isOpen = true;
    }
    
    closeChatbot() {
        const window = document.getElementById('chatbotWindow');
        window.classList.remove('open');
        this.isOpen = false;
    }
    
    handleSendMessage() {
        const input = document.getElementById('chatbotInput');
        const message = input.value.trim();
        
        if (!message) return;
        
        this.addUserMessage(message);
        input.value = '';
        
        this.processUserInput(message);
    }
    
    addUserMessage(message) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const messageDiv = document.createElement('div');
        messageDiv.className = 'chat-message user-message';
        messageDiv.innerHTML = `<div class="message-content">${this.escapeHtml(message)}</div>`;
        messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }
    
    sendBotMessage(message, delay = 1000) {
        const messagesContainer = document.getElementById('chatbotMessages');
        const typingIndicator = document.getElementById('typingIndicator');
        
        typingIndicator.style.display = 'flex';
        this.scrollToBottom();
        
        setTimeout(() => {
            typingIndicator.style.display = 'none';
            
            const messageDiv = document.createElement('div');
            messageDiv.className = 'chat-message bot-message';
            messageDiv.innerHTML = `<div class="message-content">${message}</div>`;
            messagesContainer.appendChild(messageDiv);
            this.scrollToBottom();
            
            // Text-to-speech
            this.speak(message);
        }, delay);
    }
    
    processUserInput(message) {
        const lowerMessage = message.toLowerCase();
        
        switch(this.currentStep) {
            case 'greeting':
                this.userInfo.name = message;
                this.currentStep = 'email';
                this.sendBotMessage(`Nice to meet you, ${message}! 😊 Could you please share your email address?`);
                break;
                
            case 'email':
                if (this.validateEmail(message)) {
                    this.userInfo.email = message;
                    this.currentStep = 'phone';
                    this.sendBotMessage("Great! What's your phone number?");
                } else {
                    this.sendBotMessage("Please enter a valid email address.");
                }
                break;
                
            case 'phone':
                this.userInfo.phone = message;
                this.currentStep = 'company';
                this.sendBotMessage("Which company do you represent?");
                break;
                
            case 'company':
                this.userInfo.company = message;
                this.currentStep = 'problem';
                this.sendBotMessage("What challenge or problem can we help you solve? 🤔");
                break;
                
            case 'problem':
                this.userInfo.problem = message;
                this.currentStep = 'services';
                this.explainServices();
                break;
                
            case 'services':
                this.currentStep = 'meeting';
                this.sendBotMessage("Would you like to schedule a meeting with our team? (Yes/No)");
                break;
                
            case 'meeting':
                if (lowerMessage.includes('yes') || lowerMessage.includes('sure') || lowerMessage.includes('ok')) {
                    this.currentStep = 'date';
                    this.sendBotMessage("Perfect! What date works best for you? (e.g., 2025-12-15)");
                } else {
                    this.currentStep = 'complete';
                    this.saveToGoogleSheets();
                }
                break;
                
            case 'date':
                this.userInfo.preferredDate = message;
                this.currentStep = 'time';
                this.sendBotMessage("What time would you prefer? (e.g., 2:00 PM)");
                break;
                
            case 'time':
                this.userInfo.preferredTime = message;
                this.currentStep = 'complete';
                this.saveToGoogleSheets();
                break;
        }
    }
    
    explainServices() {
        const servicesMessage = `
            <strong>🚀 Our Services:</strong><br><br>
            
            <strong>1. AI Solutions</strong> 🤖<br>
            Automate processes and gain insights with artificial intelligence.<br><br>
            
            <strong>2. Data Consultancy</strong> 📊<br>
            Turn your data into actionable insights.<br><br>
            
            <strong>3. Cybersecurity</strong> 🔒<br>
            Protect your digital assets with advanced security solutions.<br><br>
            
            <strong>4. Software Development</strong> 💻<br>
            Custom software solutions tailored to your needs.<br><br>
            
            <strong>5. Cloud Solutions</strong> ☁️<br>
            Scalable and flexible cloud infrastructure.<br><br>
            
            <strong>6. Automation</strong> ⚙️<br>
            Streamline operations with intelligent automation.<br><br>
            
            Which service interests you most?
        `;
        
        this.sendBotMessage(servicesMessage, 1500);
    }
    
    async saveToGoogleSheets() {
        this.sendBotMessage("📝 Saving your information...", 500);
        
        try {
            // Google Sheets Web App URL - You need to deploy a Google Apps Script
            const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
            
            const formData = new FormData();
            Object.keys(this.userInfo).forEach(key => {
                formData.append(key, this.userInfo[key]);
            });
            formData.append('timestamp', new Date().toISOString());
            
            const response = await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });
            
            if (response.ok) {
                this.sendBotMessage(`
                    ✅ Thank you, ${this.userInfo.name}! Your information has been saved.<br><br>
                    Our team will contact you soon at ${this.userInfo.email}.<br><br>
                    Have a great day! 🎉
                `, 1000);
            } else {
                throw new Error('Failed to save');
            }
        } catch (error) {
            console.error('Error saving to Google Sheets:', error);
            this.sendBotMessage(`
                ✅ Thank you, ${this.userInfo.name}! We've received your information.<br><br>
                Our team will contact you at ${this.userInfo.email}.<br><br>
                <em>(Data saved locally - Google Sheets integration pending)</em>
            `, 1000);
            
            // Fallback: save to localStorage
            this.saveToLocalStorage();
        }
    }
    
    saveToLocalStorage() {
        const leads = JSON.parse(localStorage.getItem('chatbot_leads') || '[]');
        leads.push({
            ...this.userInfo,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('chatbot_leads', JSON.stringify(leads));
        console.log('Lead saved to localStorage:', this.userInfo);
    }
    
    speak(text) {
        if ('speechSynthesis' in window) {
            // Remove HTML tags for speech
            const cleanText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            utterance.rate = 1;
            utterance.pitch = 1;
            utterance.volume = 0.5;
            window.speechSynthesis.speak(utterance);
        }
    }
    
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }
    
    scrollToBottom() {
        const messagesContainer = document.getElementById('chatbotMessages');
        messagesContainer.scrollTop = messagesContainer.scrollHeight;
    }
}

// Initialize chatbot when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new ChatbotAssistant();
    });
} else {
    new ChatbotAssistant();
}
