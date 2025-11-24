import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, company, projectType, challenge } = body;

        // Validate required fields
        if (!name || !email || !projectType) {
            return NextResponse.json(
                { error: "Missing required fields" },
                { status: 400 }
            );
        }

        const googleSheetsUrl = process.env.NEXT_PUBLIC_GOOGLE_SHEETS_URL;

        console.log("Attempting to submit form...");
        console.log("Environment Variable Check:", googleSheetsUrl ? "Loaded" : "Not Loaded");

        if (!googleSheetsUrl) {
            console.warn("Google Sheets URL not configured. Logging data:", body);
            // Simulate success for development
            return NextResponse.json(
                { message: "Form submitted successfully (Mock Mode - Env Var Missing)" },
                { status: 200 }
            );
        }

        // Send data to Google Apps Script Web App
        // Using URLSearchParams (application/x-www-form-urlencoded) as it's more reliable for GAS
        const params = new URLSearchParams();
        params.append("Timestamp", new Date().toISOString());
        params.append("Name", name);
        params.append("Email", email);
        params.append("Phone", phone || "");
        params.append("Company", company || "");
        params.append("Project Type", projectType);
        params.append("Challenge", challenge || "");

        const response = await fetch(googleSheetsUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded",
            },
            body: params.toString(),
        });

        if (!response.ok) {
            const text = await response.text();
            console.error(`Google Sheets API Error: ${response.status} ${response.statusText}`, text);
            throw new Error(`Failed to submit to Google Sheets: ${response.status} ${text}`);
        }

        // Google Apps Script often returns a redirect or HTML even on success if not configured to return JSON
        // We'll assume if we got here (status 200-299) it worked, but we can check the text if needed.
        const text = await response.text();
        console.log("Google Sheets Response:", text.substring(0, 200));

        return NextResponse.json(
            { message: "Form submitted successfully" },
            { status: 200 }
        );

    } catch (error) {
        console.error("Contact form error:", error);
        return NextResponse.json(
            { error: "Internal Server Error" },
            { status: 500 }
        );
    }
}
