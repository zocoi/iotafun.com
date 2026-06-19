import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy Policy — iota.fun" },
      {
        name: "description",
        content:
          "Privacy Policy for iota.fun games including Solitaire: Classic Angel Dates and Pac vs Ghosts.",
      },
      { property: "og:title", content: "Privacy Policy — iota.fun" },
      {
        property: "og:description",
        content:
          "Privacy Policy for iota.fun games including Solitaire: Classic Angel Dates and Pac vs Ghosts.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "https://iotafun.com/privacy" },
    ],
    links: [{ rel: "canonical", href: "https://iotafun.com/privacy" }],
  }),
  component: PrivacyPage,
});

function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background text-foreground overflow-x-hidden flex flex-col">
      <Nav />

      <main className="flex-1">
        <section className="relative isolate overflow-hidden bg-gradient-hero border-b border-border">
          <div className="absolute inset-0 grid-overlay opacity-40" aria-hidden />
          <div className="relative mx-auto max-w-3xl px-6 pt-16 pb-12">
            <Link
              to="/"
              className="inline-flex items-center gap-2 font-mono text-xs text-muted-foreground hover:text-foreground transition mb-8"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              Back to home
            </Link>

            <div className="font-mono text-xs text-accent uppercase tracking-widest mb-3">
              // Legal
            </div>
            <h1 className="font-display font-bold text-4xl md:text-5xl tracking-tight">
              Privacy <span className="text-gradient-arcade">Policy</span>
            </h1>
          </div>
        </section>

        <section className="mx-auto max-w-3xl px-6 py-16">
          <div className="rounded-3xl bg-gradient-card border border-border/70 p-6 md:p-10 shadow-arcade">
            <p className="font-mono text-xs text-muted-foreground mb-10">
              Last Updated: June 11, 2026
            </p>

            <div className="flex flex-col gap-10">
              <PolicySection
                heading="Introduction"
                text="This Privacy Policy describes how iota.fun collects, uses, and protects your information when you play our games. By using our games, you agree to the collection and use of information in accordance with this policy."
              />

              <PolicySection
                heading="Information We Collect"
                text="We collect information that you provide directly to us, such as your player name. We also collect gameplay data including your progress, unlocked skins, and moments to provide and improve the game experience. Additionally, our advertising partners may collect device identifiers and usage data to serve personalized ads."
              />

              <PolicySection
                heading="How We Use Your Information"
                text="We use the information we collect to operate and maintain our games, personalize your experience, provide customer support, send updates and notifications, and analyze usage trends to improve our services."
              />

              <PolicySection
                heading="Third-Party Services"
                text="We use third-party services for advertising and analytics. These services may collect and process data according to their own privacy policies. We encourage you to review the privacy policies of our advertising and analytics partners."
              />

              <PolicySection
                heading="Data Security"
                text="We take reasonable measures to help protect your information from loss, theft, misuse, and unauthorized access. However, no method of transmission over the Internet or electronic storage is completely secure."
              />

              <PolicySection
                heading="Children's Privacy"
                text="Our games are not intended for children under the age of 13. We do not knowingly collect personal information from children under 13. If you believe we have collected information from a child under 13, please contact us so we can take appropriate action."
              />

              <PolicySection
                heading="Changes to This Policy"
                text="We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy in our games or through other appropriate communication channels. Your continued use of our games after changes constitutes acceptance of the updated policy."
              />

              <PolicySection
                heading="Contact Us"
                text="If you have any questions or concerns about this Privacy Policy, please contact us at hi@iota.fun."
              />
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}

function PolicySection({ heading, text }: { heading: string; text: string }) {
  return (
    <section>
      <h2 className="font-display font-semibold text-lg text-neon-cyan mb-2">{heading}</h2>
      <p className="text-muted-foreground leading-relaxed">{text}</p>
    </section>
  );
}
