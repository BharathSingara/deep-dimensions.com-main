const fetch = require('node-fetch');

(async () => {
    try {
        // Testing new URL provided by user (Attempt 4)
        const publicUrl = "https://script.google.com/macros/s/AKfycbzXp91yGf_XXt9RCACzCHyb8e0PLjNCKVJSWXewVRprEe70X495dex-6tqW9SrvfnE/exec";

        console.log("Testing URL:", publicUrl);

        const response = await fetch(publicUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                name: "Test User",
                email: "test@example.com",
                phone: "1234567890",
                company: "Test Corp",
                projectType: "Web Development",
                challenge: "Testing API connection"
            })
        });

        const text = await response.text();
        console.log("Status:", response.status);
        try {
            const data = JSON.parse(text);
            console.log("Response:", JSON.stringify(data, null, 2));
        } catch (e) {
            console.log("Response (Text):", text.substring(0, 500)); // Log first 500 chars if not JSON
        }

    } catch (error) {
        console.error("Error:", error);
    }
})();
