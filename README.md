# Techno Vista 2026 — redesigned React website

## Run locally
1. Extract the ZIP and open this folder in VS Code.
2. Open Terminal > New Terminal.
3. Run `npm.cmd install` in PowerShell (or `npm install` in Command Prompt).
4. Run `npm.cmd run dev` (or `npm run dev` in Command Prompt).
5. Open the local URL shown by Vite.

## College logo
The supplied logo is saved at `public/images/college-logo.png` and configured in `src/config.js`.

## Update event/contact information
Edit `src/config.js`. The countdown currently uses 9:00 AM IST on 26 November 2026 as a placeholder start time; change `eventDateISO` if the actual start time differs.

## Connect registration to Google Sheets
1. Create a Google Sheet in the Google account that should own the registrations.
2. In the Sheet, choose Extensions > Apps Script.
3. Replace the editor contents with `google-apps-script/Code.gs`; save.
4. In Apps Script choose Deploy > New deployment > Web app.
5. Set Execute as: Me. Choose access according to your institution's policy (the website needs a publicly reachable endpoint for public registration).
6. Deploy and authorize. Copy the Web app URL ending in `/exec`.
7. Paste it into `appsScriptUrl` in `src/config.js`.
8. Save, run `npm run build`, and redeploy the updated project to Vercel.

The browser currently sends a `no-cors` POST, so it cannot read a success/failure response. Submit a test registration and verify that the row appears in the Google Sheet before announcing registration publicly. Protect the Sheet and restrict editor access to the organizing team.

## Google Forms (optional second route)
Create a Google Form with matching fields and paste its public responder URL into `googleFormUrl` in `src/config.js`. The Google Forms button is optional; it will prompt the visitor if no URL is configured.

## Deploy to Vercel
Push this project to GitHub, import the repository into Vercel, set build command `npm run build` and output directory `dist`, then deploy. When you update the project, commit and push the changes to GitHub; Vercel will redeploy.
