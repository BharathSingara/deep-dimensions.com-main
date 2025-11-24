const fs = require('fs');
const path = require('path');

const envContent = `NEXT_PUBLIC_GOOGLE_SHEETS_URL=https://script.google.com/macros/s/AKfycbzXp91yGf_XXt9RCACzCHyb8e0PLjNCKVJSWXewVRprEe70X495dex-6tqW9SrvfnE/exec`;

const filePath = path.join(process.cwd(), '.env.local');

try {
    fs.writeFileSync(filePath, envContent, { encoding: 'utf8' });
    console.log("Successfully wrote .env.local with UTF-8 encoding.");
} catch (error) {
    console.error("Error writing .env.local:", error);
}
