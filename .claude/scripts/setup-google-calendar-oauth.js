#!/usr/bin/env node
/**
 * Google Calendar OAuth Setup
 *
 * This script sets up OAuth authentication for Google Calendar API
 * and stores credentials for use by the calendar skill.
 */

const fs = require('fs');
const path = require('path');
const readline = require('readline');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.claude', 'google-calendar-token.json');
const CREDENTIALS_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.claude', 'google-calendar-credentials.json');

/**
 * Create an OAuth2 client with the given credentials
 */
function authorize(credentials) {
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  return new OAuth2Client(client_id, client_secret, redirect_uris[0]);
}

/**
 * Get new token via OAuth flow
 */
async function getNewToken(oAuth2Client) {
  const authUrl = oAuth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES,
  });

  console.log('Authorize this app by visiting this url:', authUrl);

  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
  });

  return new Promise((resolve) => {
    rl.question('Enter the code from that page here: ', (code) => {
      rl.close();
      oAuth2Client.getToken(code, (err, token) => {
        if (err) {
          console.error('Error retrieving access token', err);
          process.exit(1);
        }
        oAuth2Client.setCredentials(token);
        fs.writeFileSync(TOKEN_PATH, JSON.stringify(token, null, 2));
        console.log(`✓ Token saved to ${TOKEN_PATH}`);
        resolve(oAuth2Client);
      });
    });
  });
}

/**
 * Load saved token or request new one
 */
async function getAuthenticatedClient() {
  if (!fs.existsSync(CREDENTIALS_PATH)) {
    console.error(`Error: Google Calendar credentials not found at ${CREDENTIALS_PATH}`);
    console.error('Please download your OAuth 2.0 credentials from Google Cloud Console');
    console.error('and save them to:', CREDENTIALS_PATH);
    process.exit(1);
  }

  const content = fs.readFileSync(CREDENTIALS_PATH);
  const credentials = JSON.parse(content);
  const oAuth2Client = authorize(credentials);

  if (fs.existsSync(TOKEN_PATH)) {
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);
    console.log(`✓ Using saved token from ${TOKEN_PATH}`);
    return oAuth2Client;
  } else {
    return await getNewToken(oAuth2Client);
  }
}

/**
 * List upcoming events
 */
async function listUpcomingEvents(auth) {
  const calendar = google.calendar({ version: 'v3', auth });

  const res = await calendar.events.list({
    calendarId: 'primary',
    timeMin: new Date().toISOString(),
    maxResults: 10,
    singleEvents: true,
    orderBy: 'startTime',
  });

  const events = res.data.items;
  if (events.length) {
    console.log('\nUpcoming events:');
    events.forEach((event) => {
      const start = event.start.dateTime || event.start.date;
      console.log(`${start} - ${event.summary}`);
    });
  } else {
    console.log('No upcoming events found.');
  }
}

/**
 * Main
 */
async function main() {
  try {
    console.log('🔐 Google Calendar OAuth Setup\n');
    const auth = await getAuthenticatedClient();
    console.log('\n✓ Successfully authenticated with Google Calendar');
    await listUpcomingEvents(auth);
  } catch (error) {
    console.error('Error:', error);
    process.exit(1);
  }
}

main();