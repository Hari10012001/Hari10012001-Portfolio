/*
 * site-config.js — Verified Project URLs & Configuration
 *
 * Rules:
 *   - Must be https://
 *   - GITHUB_URL_* must be an accessible public repository: https://github.com/<owner>/<repo>
 *   - LIVE_DEMO_URL_* must be an active, verified public deployment (Render, Railway, Vercel, Netlify)
 *   - Private codebases and offline deployments remain empty ("") and are presented honestly with Case Study / Architecture actions.
 */
window.SITE_CONFIG = {
  isTestData: false,
  projectLinks: {
    // 01: Smart Blood Bank Management System (Internal private repo; Live Demo verified HTTP 200)
    GITHUB_URL_BLOOD_BANK: "",
    LIVE_DEMO_URL_BLOOD_BANK: "https://bloodbank-management.onrender.com/check_availability",

    // 02: DonationDesk (Internal private repo; deployment offline)
    GITHUB_URL_DONATIONDESK: "",
    LIVE_DEMO_URL_DONATIONDESK: "",

    // 03: WarrantyWise (Public repo HTTP 200; Live Demo verified HTTP 200)
    GITHUB_URL_WARRANTYWISE: "https://github.com/Hari10012001/WarrantyWise-",
    LIVE_DEMO_URL_WARRANTYWISE: "https://warrantywise-tg3t.onrender.com",

    // 04: AI-Powered Expense Analyzer (Public repo HTTP 200; deployment offline)
    GITHUB_URL_EXPENSE_ANALYZER: "https://github.com/Hari10012001/AI-Powered-Expense-Analyzer",
    LIVE_DEMO_URL_EXPENSE_ANALYZER: "",

    // 05: FoundIt (Public repo HTTP 200; deployment offline)
    GITHUB_URL_FOUNDIT: "https://github.com/Hari10012001/FoundIt-Lost-and-Found-Asset-Tracking-Platform",
    LIVE_DEMO_URL_FOUNDIT: "",

    // 06: RideRent (Internal private repo; deployment offline)
    GITHUB_URL_RIDE_RENT: "",
    LIVE_DEMO_URL_RIDE_RENT: ""
  }
};
