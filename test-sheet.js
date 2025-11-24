const fetch = require('node-fetch'); // Note: In newer node versions fetch is built-in, but requiring it just in case or relying on global
// If node-fetch is not available, we can use https module, but let's try global fetch first (Node 18+)

const GOOGLE_SHEETS_URL = "https://script.google.com/macros/s/AKfycbzXp91yGf_XXt9RCACzCHyb8e0PLjNCKVJSWXewVRprEe70X495dex-6tqW9SrvfnE/exec";

async function testSubmit() {
    const payload = {
        "Timestamp": new Date().toISOString(),
        "Name": "Test User",
        "Email": "test@example.com",
        "Phone": "1234567890",
        "Company": "Test Co",
        "Project Type": "Web Dev",
        "Challenge": "Testing API"
    };

    console.log("Sending payload:", JSON.stringify(payload, null, 2));

    try {
        // Try JSON first
        console.log("\n--- Attempt 1: JSON Payload ---");
        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
            redirect: "follow"
        });

        console.log("Status:", response.status);
        console.log("Status Text:", response.statusText);
        const text = await response.text();
        console.log("Response Body:", text.substring(0, 500)); // Preview first 500 chars

        if (text.includes("Google Drive - Page Not Found") || text.includes("Google Docs")) {
            console.log("WARNING: HTML response detected. Likely a permission issue or wrong URL.");
        }

    } catch (error) {
        console.error("Error during JSON submit:", error);
    }

    try {
        // Try Form Data (application/x-www-form-urlencoded)
        console.log("\n--- Attempt 2: URL Encoded Form Data ---");
        const params = new URLSearchParams();
        for (const key in payload) {
            params.append(key, payload[key]);
        }

        const response = await fetch(GOOGLE_SHEETS_URL, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
            redirect: "follow"
        });

        console.log("Status:", response.status);
        console.log("Status Text:", response.statusText);
        const text = await response.text();
        console.log("Response Body:", text.substring(0, 500));

    } catch (error) {
        console.error("Error during Form Data submit:", error);
    }
}

testSubmit();
