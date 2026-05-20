import Link from "next/link";
import Navbar from "../components/Navbar";
import { RetroCard } from "../components/RetroCard";

export const metadata = {
  title: "Privacy Policy — RenterClarify",
  description:
    "RenterClarify's privacy policy: what data we collect, how we use it, cookies, and third-party services including Google Analytics and Anthropic.",
};

const headingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  textTransform: "uppercase",
  letterSpacing: "0.05em",
};

const subheadingStyle = {
  fontFamily:    "var(--font-oswald), Impact, sans-serif",
  fontWeight:    "700",
  fontSize:      "0.85rem",
  letterSpacing: "0.06em",
  textTransform: "uppercase",
  color:         "var(--retro-navy)",
  marginBottom:  "0.4rem",
};

const bodyStyle = {
  fontFamily: "Georgia, serif",
  fontSize:   "0.88rem",
  lineHeight: "1.7",
  color:      "var(--retro-ink)",
  margin:     0,
};

const linkStyle = {
  color:          "var(--retro-navy)",
  fontWeight:     "700",
  textDecoration: "underline",
};

const codeStyle = {
  fontFamily:  "monospace",
  fontSize:    "0.82rem",
  background:  "rgba(0,40,104,0.07)",
  border:      "1px solid rgba(0,40,104,0.15)",
  borderRadius:"2px",
  padding:     "0.1rem 0.35rem",
};

export default function PrivacyPolicyPage() {
  return (
    <div style={{ minHeight: "100vh", background: "var(--retro-cream)" }}>
      <Navbar />

      {/* Navy banner */}
      <div style={{
        background:   "var(--retro-navy)",
        borderBottom: "3px solid var(--retro-gold)",
        padding:      "clamp(2rem, 5vw, 3.5rem) 1.5rem",
        textAlign:    "center",
      }}>
        <span className="retro-stamp retro-stamp-gold" style={{ marginBottom: "1rem", display: "inline-block" }}>
          Legal
        </span>
        <h1 style={{ ...headingStyle, fontSize: "clamp(2rem, 5vw, 3.2rem)", color: "var(--retro-cream)", marginBottom: "0.4rem" }}>
          Privacy Policy
        </h1>
        <p style={{ fontFamily: "Georgia, serif", fontSize: "0.85rem", color: "var(--retro-cream)", opacity: 0.6, margin: 0 }}>
          Last updated: May 14, 2026
        </p>
      </div>

      <main style={{ background: "var(--retro-cream)" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", padding: "clamp(1.5rem, 4vw, 3rem) 1.5rem", display: "flex", flexDirection: "column", gap: "1.25rem" }}>

          {/* Intro */}
          <p style={{ ...bodyStyle, fontSize: "0.92rem", lineHeight: "1.75" }}>
            RenterClarify (&ldquo;we&rdquo;, &ldquo;us&rdquo;, or &ldquo;our&rdquo;) operates renterclarify.com. This Privacy Policy explains what information we collect when you visit or use our site, how we use that information, and the choices available to you. We are committed to handling your information with transparency and care.
          </p>

          {/* 1. Information We Collect */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.25rem" }}>1. Information We Collect</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                <div>
                  <p style={subheadingStyle}>IP Addresses (Rate Limiting)</p>
                  <p style={bodyStyle}>
                    When you use the full lease analysis feature, we temporarily record your IP address in server memory solely to enforce a daily usage limit (3 analyses per IP address per day). This data is never written to a database or persistent storage, is not linked to any personal profile, and is cleared automatically when the server restarts or the 24-hour window expires.
                  </p>
                </div>

                <div>
                  <p style={subheadingStyle}>Analytics Data (PostHog)</p>
                  <p style={bodyStyle}>
                    We use PostHog to understand how visitors interact with RenterClarify — for example, which pages are visited most, how long users spend on the site, and what devices or browsers are used. PostHog may collect your IP address (which is anonymized before storage), browser type, device type, and approximate geographic location (city-level). This data is aggregated and anonymized and is used solely to improve the site.
                  </p>
                </div>

                <div>
                  <p style={subheadingStyle}>Lease Text You Submit</p>
                  <p style={bodyStyle}>
                    When you paste a lease clause or upload a lease PDF for analysis, the text you submit is transmitted to the Anthropic API to generate the plain-English breakdown you see on screen. We do not store this text on our servers after the API response is returned. Submitted lease text is not linked to any identity, account, or IP address. We recommend against submitting lease documents containing highly sensitive personal information such as your Social Security Number or bank account details.
                  </p>
                </div>

                <div>
                  <p style={subheadingStyle}>No Account or Registration Data</p>
                  <p style={bodyStyle}>
                    RenterClarify does not require an account, email address, or any registration to use the site. We do not collect names, email addresses, passwords, or any other personally identifying information.
                  </p>
                </div>

              </div>
            </div>
          </RetroCard>

          {/* 2. How We Use Information */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1rem" }}>2. How We Use Information</h2>
              <p style={{ ...bodyStyle, marginBottom: "0.75rem" }}>We use the limited information we collect for the following purposes:</p>
              <div style={{ display: "flex", flexDirection: "column", gap: "0.5rem" }}>
                {[
                  "To improve the website — analytics data helps us understand which content is most useful and where the user experience can be improved.",
                  "To enforce rate limits — IP addresses are used only to prevent abuse of the AI analysis API by limiting the number of full lease analyses per day.",
                  "To process lease analysis requests — lease text you submit is transmitted to the Anthropic API to generate the analysis displayed on screen and is not retained afterward.",
                ].map((item) => (
                  <div key={item} style={{ display: "flex", alignItems: "flex-start", gap: "0.6rem" }}>
                    <span className="retro-stamp" style={{ fontSize: "0.6rem", padding: "0.1rem 0.4rem", flexShrink: 0, marginTop: "0.1rem" }}>✓</span>
                    <span style={bodyStyle}>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </RetroCard>

          {/* 3. Cookies */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.25rem" }}>3. Cookies</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                <div>
                  <p style={subheadingStyle}>Analytics Cookies</p>
                  <p style={bodyStyle}>
                    PostHog sets first-party cookies in your browser (such as <code style={codeStyle}>ph_</code>) to track sessions and distinguish returning visitors. These cookies typically expire after 1 year. You can opt out of analytics tracking by configuring your browser to block cookies or by using a browser extension that blocks tracking scripts.
                  </p>
                </div>

                <div>
                  <p style={subheadingStyle}>No Advertising Cookies</p>
                  <p style={bodyStyle}>
                    RenterClarify does not currently use any advertising networks, retargeting pixels, or social media tracking cookies. We do not serve ads and do not track users across other websites for advertising purposes.
                  </p>
                </div>

              </div>
            </div>
          </RetroCard>

          {/* 4. Third-Party Services */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "1.25rem" }}>4. Third-Party Services</h2>
              <div style={{ display: "flex", flexDirection: "column", gap: "1.1rem" }}>

                <div>
                  <p style={subheadingStyle}>PostHog</p>
                  <p style={bodyStyle}>
                    We use PostHog to collect anonymized usage statistics. PostHog&apos;s use of data is governed by the{" "}
                    <a href="https://posthog.com/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>PostHog Privacy Policy</a>.
                  </p>
                </div>

                <div>
                  <p style={subheadingStyle}>Anthropic API</p>
                  <p style={bodyStyle}>
                    Lease text submitted for analysis is sent to the Anthropic API, which powers our AI analysis features. Anthropic processes this data solely to generate the analysis response. Anthropic&apos;s data handling is governed by{" "}
                    <a href="https://www.anthropic.com/legal/privacy" target="_blank" rel="noopener noreferrer" style={linkStyle}>Anthropic&apos;s Privacy Policy</a>.
                  </p>
                </div>

              </div>
            </div>
          </RetroCard>

          {/* 5. Data Sharing and Sales */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>5. Data Sharing and Sales</h2>
              <p style={bodyStyle}>
                We do not sell, rent, or trade any data — including analytics data, IP addresses, or submitted lease text — to third parties for any commercial purpose. Data is shared only with the third-party services described in Section 4 (PostHog and Anthropic) as strictly necessary to operate the site. We do not share data with data brokers, advertisers, or any other third parties.
              </p>
            </div>
          </RetroCard>

          {/* 6. Data Retention */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>6. Data Retention</h2>
              <p style={bodyStyle}>
                IP addresses used for rate limiting are held in server memory only and are cleared on server restart or after the 24-hour rate-limit window expires — whichever comes first. Lease text submitted for analysis is not retained by us after the API response is returned. PostHog retains anonymized usage data according to your PostHog project&apos;s data retention settings.
              </p>
            </div>
          </RetroCard>

          {/* 7. Children's Privacy */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>7. Children&apos;s Privacy</h2>
              <p style={bodyStyle}>
                RenterClarify is not directed to children under the age of 13. We do not knowingly collect any personal information from children. If you believe a child has submitted personal information through our site, please contact us at the email below and we will take steps to remove it.
              </p>
            </div>
          </RetroCard>

          {/* 8. Contact */}
          <RetroCard accent="gold">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>8. Contact Us</h2>
              <p style={bodyStyle}>
                If you have questions, concerns, or requests regarding this Privacy Policy or how your data is handled, please contact us at:{" "}
                <a href="mailto:privacy@renterclarify.com" style={linkStyle}>privacy@renterclarify.com</a>.
                {" "}We aim to respond to all privacy inquiries within 5 business days.
              </p>
            </div>
          </RetroCard>

          {/* 9. Changes */}
          <RetroCard accent="navy">
            <div style={{ padding: "1.75rem" }}>
              <h2 className="retro-section-heading" style={{ marginBottom: "0.75rem" }}>9. Changes to This Policy</h2>
              <p style={bodyStyle}>
                We may update this Privacy Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons. When we do, we will revise the &ldquo;Last Updated&rdquo; date at the top of this page. We encourage you to review this policy periodically. Your continued use of RenterClarify after any changes are posted constitutes acceptance of the updated policy.
              </p>
            </div>
          </RetroCard>

          {/* Disclaimer */}
          <div style={{ borderLeft: "6px solid var(--retro-gold)", background: "var(--retro-cream)", padding: "0.9rem 1.1rem", borderRadius: "2px" }}>
            <p style={{ ...bodyStyle, fontSize: "0.82rem", opacity: 0.75 }}>
              This Privacy Policy is provided for informational purposes. RenterClarify is not a law firm and this document does not constitute legal advice. If you have specific legal questions about data privacy, please consult a qualified attorney.
            </p>
          </div>

        </div>
      </main>

      {/* Footer */}
      <footer style={{ background: "var(--retro-cream)", borderTop: "3px solid var(--retro-navy)", padding: "2rem 1.5rem" }}>
        <div style={{ maxWidth: "800px", margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: "1rem" }}>
          <Link href="/" style={{ fontFamily: "var(--font-oswald), Impact, sans-serif", fontSize: "1.2rem", fontWeight: "700", textTransform: "uppercase", letterSpacing: "0.06em", color: "var(--retro-navy)", textDecoration: "none" }}>
            Renter<span style={{ color: "var(--retro-gold)" }}>Clarify</span>
          </Link>
          <p style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.6, textAlign: "center", margin: 0 }}>
            Educational information only — not legal advice.
          </p>
          <div style={{ display: "flex", flexDirection: "column", alignItems: "flex-end", gap: "0.25rem" }}>
            <span style={{ fontFamily: "Georgia, serif", fontSize: "0.8rem", color: "var(--retro-ink)", opacity: 0.6 }}>&copy; {new Date().getFullYear()} RenterClarify</span>
            <Link href="/privacy-policy" style={{ fontFamily: "Georgia, serif", fontSize: "0.75rem", color: "var(--retro-navy)", opacity: 0.6, textDecoration: "none" }}>Privacy Policy</Link>
          </div>
        </div>
      </footer>
    </div>
  );
}
