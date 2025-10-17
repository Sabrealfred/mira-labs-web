## Mira Labs Web Experience

Public-facing site for Mira Labs — a FINMA-licensed digital & traditional asset manager operating Luxembourg CSSF compartments and global representative offices.

### Tech Stack
- Next.js 15 (App Router)
- Tailwind CSS (utility classes via `globals.css`)
- TypeScript

### Local Development
```bash
npm install
npm run dev
# open http://localhost:3000
```

### Site Map
- `/` — Landing overview (mandates, capabilities, platform, research snippets)
- `/platform` — Infrastructure, banking/custody, execution, analytics
- `/strategies` — Programme catalogue (liquidity, yield, macro) + governance stack
- `/governance` — Regulatory posture, committees, reporting cadence
- `/team` — Leadership biographies and track record
- `/research` — Publications, data services, roadmap
- `/contact` — Secure institutional intake form

### Next Steps
- Wire the contact API to CRM/email automation
- Break page content into modular data sources or headless CMS
- Add analytics, SEO metadata, and portal authentication hooks
- Integrate Research portal feeds once backend is ready

### Deployment
Deploy via Vercel (`vercel --prod`) or connect the GitHub repo (`Sabrealfred/mira-labs-web`) in the Vercel dashboard.
