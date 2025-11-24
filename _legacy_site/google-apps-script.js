/**
 * Google Apps Script for Chatbot Data Collection
 * 
 * SETUP INSTRUCTIONS:
 * 1. Open Google Sheets and create a new spreadsheet
 * 2. Name it "Deep Dimensions - Chatbot Leads"
 * 3. Go to Extensions > Apps Script
 * 4. Replace the default code with this script
 * 5. Click Deploy > New Deployment
 * 6. Choose "Web app" as deployment type
 * 7. Set "Execute as" to "Me"
 * 8. Set "Who has access" to "Anyone"
 * 9. Click "Deploy" and copy the Web App URL
 * 10. Paste the URL in chatbot.js where it says 'YOUR_GOOGLE_APPS_SCRIPT_URL_HERE'
 */

function doPost(e) {
  try {
    const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Create headers if sheet is empty
    if (sheet.getLastRow() === 0) {
      sheet.appendRow([
        'Timestamp',
        'Name',
        'Email',
        'Phone',
        'Company',
        'Problem/Challenge',
        'Preferred Date',
        'Preferred Time',
        'Status'
      ]);
      
      // Format header row
      const headerRange = sheet.getRange(1, 1, 1, 9);
      headerRange.setFontWeight('bold');
      headerRange.setBackground('#4285f4');
      headerRange.setFontColor('#ffffff');
    }
    
    // Get form data
    const timestamp = new Date();
    const name = e.parameter.name || '';
    const email = e.parameter.email || '';
    const phone = e.parameter.phone || '';
    const company = e.parameter.company || '';
    const problem = e.parameter.problem || '';
    const preferredDate = e.parameter.preferredDate || '';
    const preferredTime = e.parameter.preferredTime || '';
    const status = 'New Lead';
    
    // Append data to sheet
    sheet.appendRow([
      timestamp,
      name,
      email,
      phone,
      company,
      problem,
      preferredDate,
      preferredTime,
      status
    ]);
    
    // Auto-resize columns
    sheet.autoResizeColumns(1, 9);
    
    // Send email notification (optional)
    sendEmailNotification(name, email, phone, company, problem);
    
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success', 'row': sheet.getLastRow() }))
      .setMimeType(ContentService.MimeType.JSON);
      
  } catch (error) {
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}

function doGet(e) {
  return ContentService.createTextOutput('Chatbot API is running!');
}

function sendEmailNotification(name, email, phone, company, problem) {
  try {
    const recipient = 'bharath@deep-dimension.com'; // Replace with your email
    const subject = '🤖 New Lead from Website Chatbot';
    const body = `
New lead captured from website chatbot:

Name: ${name}
Email: ${email}
Phone: ${phone}
Company: ${company}
Problem/Challenge: ${problem}

Timestamp: ${new Date().toLocaleString()}

Please follow up with this lead as soon as possible.

---
Automated message from Deep Dimensions Chatbot
    `;
    
    MailApp.sendEmail(recipient, subject, body);
  } catch (error) {
    console.log('Email notification failed:', error);
  }
}

// Function to get all leads (optional - for admin dashboard)
function getAllLeads() {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const data = sheet.getDataRange().getValues();
  return data;
}

// Function to update lead status (optional)
function updateLeadStatus(row, newStatus) {
  const sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  sheet.getRange(row, 9).setValue(newStatus);
}
