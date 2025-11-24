// Interactive Hero Robot - Two-way Conversation
class HeroRobot {
    constructor() {
        this.scene = null;
        this.camera = null;
        this.renderer = null;
        this.robot = null;
        this.isListening = false;
        this.conversationStep = 0;
        this.userInfo = {
            name: '',
            interest: '',
            email: '',
            phone: ''
        };
        
        // Energetic and warm conversation messages
        this.messages = [
            "👋 Hey there! Welcome to Deep Dimensions! I'm so excited to meet you!",
            "What should I call you? I'd love to know your name! 😊",
            "Awesome to meet you, {name}! 🎉 I'm your AI guide here!",
            "So {name}, what brings you here today? I can help with:\n• AI Solutions 🤖\n• Data Consultancy 📊\n• Cybersecurity 🔒\n• Software Development 💻\n• Cloud Solutions ☁️\n• Automation ⚙️",
            "That's fantastic! I love talking about {interest}! 💡",
            "Want me to explain how we can help you with {interest}? Just click on me or type below! ⬇️",
            "Before I share more, can I grab your email? I promise to send you something valuable! 📧",
            "Perfect! And your phone number? (We'll only call with amazing opportunities!) 📱",
            "🎉 Awesome! Our team will reach out soon! Want to explore our services while you wait?"
        ];
        
        this.responses = {
            greeting: [
                "Hello! 👋",
                "Hi there! 😊",
                "Hey! Nice to see you! 🎉",
                "Welcome! 🌟"
            ],
            excitement: [
                "That's awesome! 🚀",
                "Love it! ⭐",
                "Fantastic! 💫",
                "Amazing choice! ✨"
            ],
            thinking: [
                "Hmm, let me think... 🤔",
                "Interesting! 💭",
                "Oh, I see! 👀",
                "Got it! 👍"
            ]
        };
        
        this.init();
    }
    
    init() {
        this.create3DRobot();
        this.createConversationUI();
        this.startConversation();
        this.setupEventListeners();
    }
    
    create3DRobot() {
        const container = document.getElementById('hero-robot');
        if (!container || typeof THREE === 'undefined') return;
        
        // Scene setup
        this.scene = new THREE.Scene();
        this.camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
        this.camera.position.z = 10;
        
        this.renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
        this.renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
        this.renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
        this.renderer.setClearColor(0x000000, 0);
        container.appendChild(this.renderer.domElement);
        
        // Create robot group
        this.robot = new THREE.Group();
        this.scene.add(this.robot);
        
        // Robot body (larger)
        const bodyGeometry = new THREE.CylinderGeometry(0.8, 1, 2, 32);
        const bodyMaterial = new THREE.MeshPhongMaterial({
            color: 0x00f0ff,
            emissive: 0x003344,
            shininess: 100
        });
        const body = new THREE.Mesh(bodyGeometry, bodyMaterial);
        body.position.y = 0;
        this.robot.add(body);
        
        // Robot head (larger)
        const headGeometry = new THREE.BoxGeometry(1.5, 1.5, 1.5);
        const headMaterial = new THREE.MeshPhongMaterial({
            color: 0x3a10e5,
            emissive: 0x1a0862,
            shininess: 100
        });
        const head = new THREE.Mesh(headGeometry, headMaterial);
        head.position.y = 1.8;
        this.robot.add(head);
        this.robotHead = head;
        
        // Eyes (bigger)
        const eyeGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const eyeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff });
        
        const leftEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        leftEye.position.set(-0.35, 0.3, 0.76);
        head.add(leftEye);
        this.leftEye = leftEye;
        
        const rightEye = new THREE.Mesh(eyeGeometry, eyeMaterial);
        rightEye.position.set(0.35, 0.3, 0.76);
        head.add(rightEye);
        this.rightEye = rightEye;
        
        // Pupils
        const pupilGeometry = new THREE.SphereGeometry(0.1, 16, 16);
        const pupilMaterial = new THREE.MeshBasicMaterial({ color: 0x000000 });
        
        const leftPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        leftPupil.position.set(0, 0, 0.15);
        leftEye.add(leftPupil);
        
        const rightPupil = new THREE.Mesh(pupilGeometry, pupilMaterial);
        rightPupil.position.set(0, 0, 0.15);
        rightEye.add(rightPupil);
        
        // Smile
        const smileCurve = new THREE.EllipseCurve(
            0, 0,
            0.4, 0.3,
            Math.PI, Math.PI * 2,
            false,
            0
        );
        const smilePoints = smileCurve.getPoints(50);
        const smileGeometry = new THREE.BufferGeometry().setFromPoints(smilePoints);
        const smileMaterial = new THREE.LineBasicMaterial({ color: 0xffffff, linewidth: 3 });
        const smile = new THREE.Line(smileGeometry, smileMaterial);
        smile.position.set(0, -0.2, 0.76);
        head.add(smile);
        
        // Antenna with glowing tip
        const antennaGeometry = new THREE.CylinderGeometry(0.05, 0.05, 0.8, 16);
        const antennaMaterial = new THREE.MeshPhongMaterial({ color: 0x00f0ff });
        const antenna = new THREE.Mesh(antennaGeometry, antennaMaterial);
        antenna.position.set(0, 1.2, 0);
        head.add(antenna);
        
        const bulbGeometry = new THREE.SphereGeometry(0.15, 32, 32);
        const bulbMaterial = new THREE.MeshBasicMaterial({ 
            color: 0xff3366,
            emissive: 0xff3366
        });
        const bulb = new THREE.Mesh(bulbGeometry, bulbMaterial);
        bulb.position.set(0, 1.6, 0);
        head.add(bulb);
        this.bulb = bulb;
        
        // Arms
        const armGeometry = new THREE.CylinderGeometry(0.15, 0.15, 1.5, 16);
        const armMaterial = new THREE.MeshPhongMaterial({ color: 0x3a10e5 });
        
        const leftArm = new THREE.Mesh(armGeometry, armMaterial);
        leftArm.position.set(-1.1, 0, 0);
        leftArm.rotation.z = Math.PI / 6;
        this.robot.add(leftArm);
        this.leftArm = leftArm;
        
        const rightArm = new THREE.Mesh(armGeometry, armMaterial);
        rightArm.position.set(1.1, 0, 0);
        rightArm.rotation.z = -Math.PI / 6;
        this.robot.add(rightArm);
        this.rightArm = rightArm;
        
        // Hands (spheres)
        const handGeometry = new THREE.SphereGeometry(0.2, 32, 32);
        const handMaterial = new THREE.MeshPhongMaterial({ color: 0x00f0ff });
        
        const leftHand = new THREE.Mesh(handGeometry, handMaterial);
        leftHand.position.y = -0.85;
        leftArm.add(leftHand);
        
        const rightHand = new THREE.Mesh(handGeometry, handMaterial);
        rightHand.position.y = -0.85;
        rightArm.add(rightHand);
        
        // Lighting
        const ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
        this.scene.add(ambientLight);
        
        const pointLight1 = new THREE.PointLight(0x00f0ff, 2, 100);
        pointLight1.position.set(5, 5, 5);
        this.scene.add(pointLight1);
        
        const pointLight2 = new THREE.PointLight(0x3a10e5, 1.5, 100);
        pointLight2.position.set(-5, -5, 5);
        this.scene.add(pointLight2);
        
        const spotLight = new THREE.SpotLight(0xffffff, 1);
        spotLight.position.set(0, 10, 10);
        this.scene.add(spotLight);
        
        // Mouse interaction
        this.setupMouseInteraction(container);
        
        // Start animation
        this.animate();
        
        // Make robot clickable
        this.renderer.domElement.style.cursor = 'pointer';
        this.renderer.domElement.addEventListener('click', () => this.onRobotClick());
    }
    
    setupMouseInteraction(container) {
        let mouseX = 0;
        let mouseY = 0;
        
        container.addEventListener('mousemove', (event) => {
            const rect = container.getBoundingClientRect();
            mouseX = ((event.clientX - rect.left) / rect.width) * 2 - 1;
            mouseY = -((event.clientY - rect.top) / rect.height) * 2 + 1;
            
            // Robot follows mouse
            if (this.robotHead) {
                this.robotHead.rotation.y = mouseX * 0.3;
                this.robotHead.rotation.x = mouseY * 0.2;
            }
        });
    }
    
    animate() {
        requestAnimationFrame(() => this.animate());
        
        if (!this.robot) return;
        
        const time = Date.now() * 0.001;
        
        // Gentle floating
        this.robot.position.y = Math.sin(time * 0.5) * 0.3;
        
        // Breathing effect
        const breathScale = 1 + Math.sin(time * 2) * 0.05;
        if (this.robot.children[0]) {
            this.robot.children[0].scale.y = breathScale;
        }
        
        // Antenna light pulse
        if (this.bulb) {
            const pulse = Math.sin(time * 3) * 0.5 + 0.5;
            this.bulb.material.emissiveIntensity = pulse;
        }
        
        // Wave arms when talking
        if (this.isListening) {
            this.leftArm.rotation.z = Math.PI / 6 + Math.sin(time * 4) * 0.2;
            this.rightArm.rotation.z = -Math.PI / 6 - Math.sin(time * 4) * 0.2;
        }
        
        this.renderer.render(this.scene, this.camera);
    }
    
    createConversationUI() {
        // Minimal input container is now in HTML
        // No need to create fixed bottom chat interface
    }
    
    setupEventListeners() {
        const input = document.getElementById('heroVoiceInput');
        const sendBtn = document.getElementById('heroVoiceSend');
        
        if (input && sendBtn) {
            sendBtn.addEventListener('click', () => this.handleUserInput());
            input.addEventListener('keypress', (e) => {
                if (e.key === 'Enter') this.handleUserInput();
            });
        }
        
        // Resize handler
        window.addEventListener('resize', () => this.onWindowResize());
    }
    
    onWindowResize() {
        if (!this.camera || !this.renderer) return;
        
        this.camera.aspect = window.innerWidth / window.innerHeight;
        this.camera.updateProjectionMatrix();
        this.renderer.setSize(window.innerWidth, window.innerHeight * 0.7);
    }
    
    showMinimalInput() {
        const inputContainer = document.getElementById('minimalInput');
        if (inputContainer) {
            inputContainer.style.display = 'flex';
            setTimeout(() => {
                document.getElementById('heroVoiceInput')?.focus();
            }, 300);
        }
    }
    
    hideMinimalInput() {
        const inputContainer = document.getElementById('minimalInput');
        if (inputContainer) {
            inputContainer.style.display = 'none';
        }
    }
    
    startConversation() {
        setTimeout(() => {
            this.robotSpeak(this.messages[0]);
            setTimeout(() => {
                this.robotSpeak(this.messages[1]);
                this.conversationStep = 1;
                this.showMinimalInput(); // Show input when asking for name
            }, 3500);
        }, 1500);
    }
    
    robotSpeak(message) {
        this.isListening = true;
        
        // Update speech bubble
        const speechBubble = document.getElementById('robotSpeech');
        if (speechBubble) {
            const robotMessage = speechBubble.querySelector('.robot-message');
            robotMessage.innerHTML = message;
            
            // Animate bubble
            speechBubble.style.animation = 'none';
            setTimeout(() => {
                speechBubble.style.animation = 'floatBubble 3s ease-in-out infinite';
            }, 10);
        }
        
        // Text-to-speech with premium quality settings
        this.speak(message);
        
        setTimeout(() => {
            this.isListening = false;
        }, 2000);
    }
    
    showUserResponse(message) {
        const userBubble = document.getElementById('userResponseBubble');
        if (userBubble) {
            userBubble.textContent = message;
            userBubble.style.display = 'block';
            
            // Auto-hide after animation
            setTimeout(() => {
                userBubble.style.display = 'none';
            }, 3000);
        }
    }
    
    handleUserInput() {
        const input = document.getElementById('heroVoiceInput');
        if (!input) return;
        
        const message = input.value.trim();
        if (!message) return;
        
        // Show user's response briefly
        this.showUserResponse(message);
        input.value = '';
        
        // Hide input temporarily while robot responds
        this.hideMinimalInput();
        
        this.processUserMessage(message);
    }
    
    processUserMessage(message) {
        const lowerMessage = message.toLowerCase();
        
        switch(this.conversationStep) {
            case 1: // Asking for name
                this.userInfo.name = message;
                this.conversationStep = 2;
                setTimeout(() => {
                    this.robotSpeak(this.messages[2].replace('{name}', this.userInfo.name));
                    setTimeout(() => {
                        this.robotSpeak(this.messages[3].replace('{name}', this.userInfo.name));
                        this.conversationStep = 3;
                        this.showMinimalInput(); // Show input for next question
                    }, 3000);
                }, 1500);
                break;
                
            case 3: // Asking about interest
                this.userInfo.interest = message;
                this.conversationStep = 4;
                setTimeout(() => {
                    const excitement = this.responses.excitement[Math.floor(Math.random() * this.responses.excitement.length)];
                    this.robotSpeak(excitement);
                    setTimeout(() => {
                        this.robotSpeak(this.messages[4].replace('{interest}', this.userInfo.interest));
                        setTimeout(() => {
                            this.robotSpeak(this.messages[5].replace('{interest}', this.userInfo.interest));
                            this.conversationStep = 5;
                            this.showMinimalInput();
                        }, 3000);
                    }, 2000);
                }, 1500);
                break;
                
            case 5: // Asking for email
                if (this.validateEmail(message)) {
                    this.userInfo.email = message;
                    this.conversationStep = 6;
                    setTimeout(() => {
                        this.robotSpeak(this.messages[6]);
                        this.conversationStep = 7;
                        this.showMinimalInput();
                    }, 1500);
                } else {
                    setTimeout(() => {
                        this.robotSpeak("Oops! That doesn't look like a valid email. Mind trying again? 😊");
                        this.showMinimalInput();
                    }, 1500);
                }
                break;
                
            case 7: // Asking for phone
                this.userInfo.phone = message;
                this.conversationStep = 8;
                setTimeout(() => {
                    this.robotSpeak(this.messages[8]);
                    this.saveUserData();
                }, 1500);
                break;
                
            default:
                // General conversation
                this.handleGeneralConversation(lowerMessage);
                this.showMinimalInput();
        }
    }
    
    handleGeneralConversation(message) {
        if (message.includes('yes') || message.includes('sure') || message.includes('okay')) {
            this.robotSpeak("Fantastic! Let me share more details with you! 🎉");
            setTimeout(() => {
                this.explainServices();
            }, 2000);
        } else if (message.includes('hi') || message.includes('hello')) {
            const greeting = this.responses.greeting[Math.floor(Math.random() * this.responses.greeting.length)];
            this.robotSpeak(greeting);
        } else {
            const thinking = this.responses.thinking[Math.floor(Math.random() * this.responses.thinking.length)];
            this.robotSpeak(thinking);
        }
    }
    
    explainServices() {
        const servicesInfo = `
            <strong>🚀 Here's how we can help:</strong><br><br>
            <strong>AI Solutions:</strong> Smart automation & insights<br>
            <strong>Data Consultancy:</strong> Turn data into gold<br>
            <strong>Cybersecurity:</strong> Keep you safe & secure<br>
            <strong>Software Dev:</strong> Custom solutions that wow<br>
            <strong>Cloud:</strong> Scale without limits<br>
            <strong>Automation:</strong> Work smarter, not harder
        `;
        this.robotSpeak(servicesInfo);
    }
    
    onRobotClick() {
        this.robotSpeak("Hey! Thanks for clicking! 😄 What can I help you with?");
        this.showMinimalInput();
    }
    
    speak(text) {
        if ('speechSynthesis' in window) {
            // Cancel any ongoing speech
            window.speechSynthesis.cancel();
            
            const cleanText = text.replace(/<[^>]*>/g, '').replace(/&nbsp;/g, ' ').replace(/[🎉😊💡✨🚀⭐💫👋🤔💭👀👍📊🔒💻☁️⚙️🤖📧📱🌟]/g, '');
            const utterance = new SpeechSynthesisUtterance(cleanText);
            
            // Premium voice settings for energetic and warm tone
            utterance.rate = 1.05;  // Slightly faster for energy
            utterance.pitch = 1.15; // Higher pitch for warmth
            utterance.volume = 0.85; // Clear and audible
            utterance.lang = 'en-US';
            
            // Try to use a premium voice if available
            const voices = window.speechSynthesis.getVoices();
            const premiumVoice = voices.find(voice => 
                voice.name.includes('Samantha') || 
                voice.name.includes('Google US English') ||
                voice.name.includes('Microsoft Zira') ||
                voice.lang === 'en-US'
            );
            
            if (premiumVoice) {
                utterance.voice = premiumVoice;
            }
            
            window.speechSynthesis.speak(utterance);
        }
    }
    
    validateEmail(email) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }
    
    async saveUserData() {
        try {
            const scriptURL = 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE';
            const formData = new FormData();
            Object.keys(this.userInfo).forEach(key => {
                formData.append(key, this.userInfo[key]);
            });
            formData.append('timestamp', new Date().toISOString());
            formData.append('source', 'Hero Robot');
            
            await fetch(scriptURL, {
                method: 'POST',
                body: formData
            });
            
            console.log('User data saved:', this.userInfo);
        } catch (error) {
            console.error('Error saving data:', error);
        }
        
        // Save to localStorage as backup
        const leads = JSON.parse(localStorage.getItem('hero_robot_leads') || '[]');
        leads.push({
            ...this.userInfo,
            timestamp: new Date().toISOString()
        });
        localStorage.setItem('hero_robot_leads', JSON.stringify(leads));
    }
}

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        new HeroRobot();
    });
} else {
    new HeroRobot();
}
