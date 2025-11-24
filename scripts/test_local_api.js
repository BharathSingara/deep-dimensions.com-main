const fetch = require('node-fetch');

(async () => {
    try {
        console.log("Testing Local API: http://localhost:3000/api/contact");

        const response = await fetch('http://localhost:3000/api/contact', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Local API Test",
                email: "local@test.com",
                phone: "9998887777",
                company: "Debug Inc",
                projectType: "Web Development",
                challenge: "Testing full flow"
            })
        });

        const text = await response.text();
        console.log("Status:", response.status);
        try {
            const data = JSON.parse(text);
            console.log("Response:", JSON.stringify(data, null, 2));
        } catch (e) {
            console.log("Response (Text):", text);
        }

    } catch (error) {
        console.error("Error:", error);
    }
})();
