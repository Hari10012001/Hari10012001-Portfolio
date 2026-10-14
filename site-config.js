/*
 * site-config.js — the ONE place to add real project links.
 *
 * How it works:
 *   - Leave a value as "" and that button is simply not shown on the project card
 *     (if both are empty the card shows no link row at all).
 *   - Paste a real URL and the button appears on the next deploy.
 *
 * Rules enforced by index.html (invalid values are ignored and the button is not shown):
 *   - Must be https://
 *   - GITHUB_URL_* must be a repository: https://github.com/<owner>/<repo>
 *     (a profile page such as https://github.com/Hari10012001 is rejected on purpose)
 *
 * Only add a URL after you have opened it and confirmed it is the right project.
 * For local testing with fake URLs, see dev/site-config.dummy.js (never deploy that file as site-config.js).
 */
window.SITE_CONFIG = {
  isTestData: false,
  projectLinks: {
    // HealthConnect
    GITHUB_URL_HEALTHCONNECT: "",
    LIVE_DEMO_URL_HEALTHCONNECT: "",

    // Expense Analyzer
    GITHUB_URL_EXPENSE_ANALYZER: "",
    LIVE_DEMO_URL_EXPENSE_ANALYZER: "",

    // JobNet
    GITHUB_URL_JOBNET: "",
    LIVE_DEMO_URL_JOBNET: "",

    // Unit Conversion Portal (earlier project)
    GITHUB_URL_UNIT_CONVERTER: "",
    LIVE_DEMO_URL_UNIT_CONVERTER: ""
  }
};
