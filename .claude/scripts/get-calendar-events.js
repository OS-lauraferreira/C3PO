#!/usr/bin/env node
/**
 * Get Calendar Events via Google Calendar API
 *
 * Usage: node get-calendar-events.js [days]
 * - days: number of days to look ahead (default: 1)
 */

const fs = require('fs');
const path = require('path');
const { google } = require('googleapis');
const { OAuth2Client } = require('google-auth-library');

const SCOPES = ['https://www.googleapis.com/auth/calendar.readonly'];
const TOKEN_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.claude', 'google-calendar-token.json');
const CREDENTIALS_PATH = path.join(process.env.USERPROFILE || process.env.HOME, '.claude', 'google-calendar-credentials.json');

function authorize(credentials) {
  const { client_id, client_secret, redirect_uris } = credentials.installed;
  return new OAuth2Client(client_id, client_secret, redirect_uris[0]);
}

async function getCalendarEvents(days = 1) {
  try {
    if (!fs.existsSync(CREDENTIALS_PATH)) {
      console.error('Error: Google Calendar credentials not found');
      process.exit(1);
    }

    if (!fs.existsSync(TOKEN_PATH)) {
      console.error('Error: Google Calendar token not found. Run setup-google-calendar-oauth.js first');
      process.exit(1);
    }

    const credentials = JSON.parse(fs.readFileSync(CREDENTIALS_PATH));
    const oAuth2Client = authorize(credentials);
    const token = JSON.parse(fs.readFileSync(TOKEN_PATH));
    oAuth2Client.setCredentials(token);

    const calendar = google.calendar({ version: 'v3', auth: oAuth2Client });

    const now = new Date();
    const later = new Date(now.getTime() + days * 24 * 60 * 60 * 1000);

    const res = await calendar.events.list({
      calendarId: 'primary',
      timeMin: now.toISOString(),
      timeMax: later.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      showDeleted: false,
    });

    const events = res.data.items || [];

    // Parse and format events
    const formatted = events.map(event => {
      const start = new Date(event.start.dateTime || event.start.date);
      const end = new Date(event.end.dateTime || event.end.date);
      return {
        summary: event.summary,
        start: start.toISOString(),
        end: end.toISOString(),
        startTime: start.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        endTime: end.toLocaleTimeString('en-US', { hour: '2-digit', minute: '2-digit' }),
        location: event.location || 'No location',
        status: event.organizer?.email === 'user@example.com' ? 'Accepted' : (event.attendees?.find(a => a.self)?.responseStatus || 'accepted'),
        responseStatus: event.attendees?.find(a => a.self)?.responseStatus,
      };
    });

    console.log(JSON.stringify(formatted, null, 2));
  } catch (error) {
    console.error('Error fetching calendar events:', error.message);
    process.exit(1);
  }
}

const days = parseInt(process.argv[2]) || 1;
getCalendarEvents(days);