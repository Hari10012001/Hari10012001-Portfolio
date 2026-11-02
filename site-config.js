/*
 * site-config.js — Verified Project URLs & Configuration
 *
 * Rules:
 *   - Must be https://
 *   - GITHUB_URL_* must be a valid repository: https://github.com/<owner>/<repo>
 *   - LIVE_DEMO_URL_* must be an active public deployment (Render, Railway, Vercel, Netlify)
 *   - If no live deployment exists, leave string empty ("") — NEVER use fake Live Demo links.
 */
window.SITE_CONFIG = {
  isTestData: false,
  projectLinks: {
    // 01: Smart Blood Bank Management System (Verified Open-Source Repository)
    GITHUB_URL_BLOOD_BANK: "https://github.com/Hari10012001/blood-bank-donor-emergency-request-management-system",
    LIVE_DEMO_URL_BLOOD_BANK: "",

    // 02: DonationDesk (Verified Open-Source Repository)
    GITHUB_URL_DONATIONDESK: "https://github.com/Hari10012001/DonationDesk",
    LIVE_DEMO_URL_DONATIONDESK: "",

    // 03: WarrantyWise (Verified Active Deployment on Render)
    GITHUB_URL_WARRANTYWISE: "https://github.com/Hari10012001/WarrantyWise-",
    LIVE_DEMO_URL_WARRANTYWISE: "https://warrantywise-tg3t.onrender.com",

    // 04: FoundIt (Verified Open-Source Repository)
    GITHUB_URL_FOUNDIT: "https://github.com/Hari10012001/FoundIt-Lost-and-Found-Asset-Tracking-Platform",
    LIVE_DEMO_URL_FOUNDIT: "",

    // 05: AI-Powered Expense Analyzer (Verified Open-Source Repository)
    GITHUB_URL_EXPENSE_ANALYZER: "https://github.com/Hari10012001/AI-Powered-Expense-Analyzer",
    LIVE_DEMO_URL_EXPENSE_ANALYZER: "",

    // 06: RideRent (Verified Open-Source Repository)
    GITHUB_URL_RIDE_RENT: "https://github.com/Hari10012001/RideRent",
    LIVE_DEMO_URL_RIDE_RENT: ""
  }
};
