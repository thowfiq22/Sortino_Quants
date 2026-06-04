# Google Sheets + Email Lead Integration Guide

This guide explains how to set up Google Sheets and Google Apps Script to collect callback request leads directly from your static Sortino Quants website.

---

## Step 1: Create a Google Spreadsheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new blank spreadsheet.
2. Rename the spreadsheet to something like `Sortino Quants Leads`.
3. In the first row (Row 1), create the following columns in exactly this order:

| A | B | C | D | E | F | G |
| :--- | :--- | :--- | :--- | :--- | :--- | :--- |
| **Date** | **First Name** | **Last Name** | **Email** | **Phone** | **Interest** | **Message** |

---

## Step 2: Add Google Apps Script

1. In your Google Sheet menu bar, click on **Extensions** -> **Apps Script**.
2. Delete any default code in the editor (`myFunction`).
3. Copy and paste the following Google Apps Script:

```javascript
/**
 * Post handler for receiving lead submissions.
 * Appends lead data to the spreadsheet and fires email notifications.
 */
function doPost(e) {
  try {
    // Get the active spreadsheet sheet
    var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
    
    // Parse raw text postData payload
    var data = JSON.parse(e.postData.contents);
    
    // Server-side validation check
    if (!data.firstName || !data.lastName || !data.email || !data.phone) {
      return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": "Missing required fields" }))
                           .setMimeType(ContentService.MimeType.JSON);
    }
    
    // Format timestamp
    var timestamp = new Date();
    
    // Append lead record to Sheet columns: Date, First Name, Last Name, Email, Phone, Interest, Message
    sheet.appendRow([
      timestamp,
      data.firstName,
      data.lastName,
      data.email,
      data.phone,
      data.interest,
      data.message || ""
    ]);
    
    // Send email alert to sortinoquants@gmail.com
    MailApp.sendEmail({
      to: "sortinoquants@gmail.com",
      subject: "New Sortino Quants Lead: " + data.firstName + " " + data.lastName,
      htmlBody: "<h3>New Lead Submission Details:</h3>" +
                "<b>Name:</b> " + data.firstName + " " + data.lastName + "<br>" +
                "<b>Email:</b> " + data.email + "<br>" +
                "<b>Phone:</b> " + data.phone + "<br>" +
                "<b>Interest:</b> " + data.interest + "<br>" +
                "<b>Message:</b> " + (data.message || "N/A") + "<br><br>" +
                "<p>This lead has been saved automatically to your Google Sheet: " + 
                SpreadsheetApp.getActiveSpreadsheet().getUrl() + "</p>"
    });
    
    // Return success response
    return ContentService.createTextOutput(JSON.stringify({ "success": true }))
                         .setMimeType(ContentService.MimeType.JSON);
                         
  } catch(error) {
    console.error("Script Error: " + error.toString());
    return ContentService.createTextOutput(JSON.stringify({ "success": false, "error": error.toString() }))
                         .setMimeType(ContentService.MimeType.JSON);
  }
}
```

4. Click the **Save** floppy disk icon in the toolbar.

---

## Step 3: Deploy as a Web App

1. Click on the blue **Deploy** button in the top right corner, then select **New deployment**.
2. Click the gear icon next to "Select type" and choose **Web app**.
3. Fill in the configuration details:
   - **Description**: `Sortino Quants Web Callback Endpoint`
   - **Execute as**: `Me (your-google-email@gmail.com)` *(Important: This allows the script to write to your sheet and send emails on your behalf)*.
   - **Who has access**: `Anyone` *(Important: This allows the contact form on the website to post leads without needing authorization)*.
4. Click **Deploy**.
5. Google will prompt you to **Authorize Access**. Click "Authorize Access", sign in with your Google account, click "Advanced", and click "Go to Untitled project (unsafe)" or similar, then click **Allow**.
6. Once the deployment finishes, copy the **Web app URL** provided. It will look like:
   `https://script.google.com/macros/s/AKfycbz.../exec`

---

## Step 4: Configure the Website Endpoint

To link the contact form to your new Google Sheets script:

1. Create a `.env.local` file (or update your environment configuration in Vercel/cPanel hosting).
2. Add the copied Web app URL as an environment variable:
   ```env
   NEXT_PUBLIC_GOOGLE_SHEETS_URL="https://script.google.com/macros/s/AKfycbz.../exec"
   ```
3. Re-run `npm run build` to compile the static site with the production endpoint.

Now, all forms submissions will immediately post to your Google Sheet and send email notifications to `sortinoquants@gmail.com` in real-time.
