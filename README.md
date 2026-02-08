# Willow & Sage Wedding Website

A rustic wedding website featuring an RSVP system backed by Cloudflare D1 and an AI Assistant powered by Google Gemini.

## 🚀 Deployment Checklist

Follow these steps to deploy your application to Cloudflare Pages.

### 1. Prerequisites
Ensure you have Node.js installed and the Cloudflare Wrangler CLI.
```bash
npm install -g wrangler
npm install
```

### 2. Login to Cloudflare
```bash
npx wrangler login
```

### 3. Set up the Database (D1)
Create the database in your Cloudflare account.
```bash
npx wrangler d1 create brink-wedding-db
```
**Important:** Copy the `database_id` output from this command and update your `wrangler.toml` file where it says `database_id = "PLACEHOLDER_DB_ID"`.

### 4. Initialize the Database Schema
Apply the SQL schema to create the guests table.
```bash
# For Local Development
npx wrangler d1 execute brink-wedding-db --local --file=./schema.sql

# For Production (Run this after you deploy, or now if the DB is created)
npx wrangler d1 execute brink-wedding-db --remote --file=./schema.sql
```

### 5. Configure Secrets (Gemini API Key)
You must set your Google Gemini API Key as a secret so it is available to the backend functions.
```bash
npx wrangler pages secret put GEMINI_API_KEY
```
When prompted, paste your actual API key (starts with `AIza...`).

### 6. Deploy to Cloudflare Pages
Deploy the application.
```bash
npx wrangler pages deploy .
```

## 🛠 Local Development
To run the project locally with full support for the backend functions and database:

```bash
npx wrangler pages dev .
```

## 📂 Project Structure
- **/components**: React UI components (Hero, RSVP, Chat).
- **/functions**: Serverless backend (API) running on Cloudflare Workers.
- **/services**: Frontend services to communicate with the API.
- **schema.sql**: Database structure.
- **wrangler.toml**: Cloudflare configuration.
