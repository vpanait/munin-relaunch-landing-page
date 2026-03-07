# Munin AI Landing Page

## What technologies are used for this project?

This project is built with:

- Vite
- TypeScript
- React
- shadcn-ui
- Tailwind CSS

## Analytics (Google Analytics 4)

The site tracks **page views** and **button clicks** (CTAs) when a GA4 measurement ID is configured.

### Setup

1. Create a [Google Analytics 4 property](https://analytics.google.com/) and get your **Measurement ID** (format: `G-XXXXXXXXXX`).
2. Copy `.env.example` to `.env` and set:
   ```bash
   VITE_GA_MEASUREMENT_ID=G-XXXXXXXXXX
   ```
3. Restart the dev server. In production, set the same variable in your hosting environment.

### What is tracked

- **Page views** – Every route change (home, `/privacy-policy`, `/terms-of-service`, etc.).
- **CTA clicks** – Subscribe, Sign in, See pricing, Go Professional, Contact us, with a location (e.g. `hero`, `header`, `pricing_Essentials`).

In GA4 you can see visits under **Reports → Engagement** and custom events under **Reports → Engagement → Events** (look for the `click` event with `event_category: CTA`).

### Marketing campaigns and UTM parameters

For your upcoming campaign, add UTM parameters to your links so you can see which campaign, source, and medium drive visits and clicks. GA4 records these automatically.

**Example campaign URL:**

```
https://yoursite.com/?utm_source=linkedin&utm_medium=cpc&utm_campaign=munin_relaunch_2025
```

**Useful parameters:**

| Parameter   | Purpose                          | Example        |
|------------|-----------------------------------|----------------|
| `utm_source`  | Where the traffic comes from      | `linkedin`, `google`, `newsletter` |
| `utm_medium`  | Marketing medium                  | `cpc`, `email`, `social` |
| `utm_campaign`| Campaign name                     | `munin_relaunch_2025` |
| `utm_content` | Variant (e.g. ad or link)         | `banner_a`, `cta_blue` |
| `utm_term`    | Paid search keyword (optional)     | `advisor meeting tool` |

In GA4: **Reports → User acquisition** (or **Traffic acquisition**) to see sessions by source/medium/campaign.

