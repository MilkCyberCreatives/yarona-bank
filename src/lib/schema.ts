export const orgSchema = {
  "@context": "https://schema.org",
  "@type": "BankOrCreditUnion",
  name: "YA-RONA Co-operative Bank SA",
  alternateName: ["YARONA-CFI", "YA-RONA Cooperative Financial Institution"],
  url: process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000",
  logo: "/logo.svg",
  slogan: "A Bank by the People, for the People",
  address: { "@type": "PostalAddress", addressCountry: "ZA" },
  areaServed: "ZA",
  contactPoint: [{
    "@type": "ContactPoint",
    telephone: "+27-83-684-1715",
    contactType: "customer service",
    areaServed: "ZA",
    availableLanguage: ["en", "zu", "xh", "af", "nso"]
  }],
  brand: { "@type": "Brand", name: "YA-RONA" }
};

export const navSchema = {
  "@context": "https://schema.org",
  "@type": "SiteNavigationElement",
  name: ["Home", "About", "Services", "CSI", "Tenders", "Careers", "Resources", "Contact"],
  url: ["/", "/about", "/#services", "/#csi", "/#tenders", "/#careers", "/#resources", "/#contact"]
};

export const faqSchema = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: [
    {
      "@type": "Question",
      name: "How do I open an account at YA-RONA Co-operative Bank SA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "You can start online from this page by clicking Apply/Join, or visit a branch/agent with your ID and proof of address. The once-off joining fee is R50."
      }
    },
    {
      "@type": "Question",
      name: "Who can join YA-RONA?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Individuals, stockvels, social clubs, spaza shops, and small businesses across South Africa."
      }
    },
    {
      "@type": "Question",
      name: "Do you offer loans?",
      acceptedAnswer: {
        "@type": "Answer",
        text: "Yes. We provide responsible personal and business loan facilities to members, subject to affordability and credit policies."
      }
    }
  ]
};
