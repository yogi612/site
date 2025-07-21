import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Loan & Financial Services in Pune | Finonest Pune",
  description:
    "Get the best loan offers, financial products, and expert advice in Pune. Finonest is your trusted partner for home loans, business loans, credit cards, and more in Pune. Compare, apply, and get approved fast!",
  keywords: [
    "Pune loans",
    "Pune financial services",
    "home loan Pune",
    "business loan Pune",
    "credit card Pune",
    "Finonest Pune",
    "best loan offers Pune",
    "compare loans Pune",
    "apply loan Pune",
    "finance company Pune"
  ],
  openGraph: {
    title: "Best Loan & Financial Services in Pune | Finonest Pune",
    description:
      "Get the best loan offers, financial products, and expert advice in Pune. Finonest is your trusted partner for home loans, business loans, credit cards, and more in Pune.",
    url: "https://finonest.com/pune",
    type: "website",
    images: [
      {
        url: "/abstract-sme-growth.png",
        width: 1200,
        height: 630,
        alt: "Finonest Pune Loans and Finance"
      }
    ]
  }
};

export default function PunePage() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Loans & Financial Services in Pune</h1>
      <p className="mb-6">
        Welcome to Finonest Pune! We offer the best loan and financial solutions tailored for Pune residents and businesses. Whether you need a home loan, business loan, or credit card, our experts are here to help you compare, apply, and get approved quickly.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Home Loans in Pune</li>
        <li>Business Loans in Pune</li>
        <li>Personal Loans in Pune</li>
        <li>Credit Cards & Financial Products</li>
        <li>Expert Financial Advice</li>
      </ul>
      <p>
        <strong>Why choose Finonest in Pune?</strong> We partner with top banks and NBFCs, offer transparent comparisons, and provide end-to-end support for all your financial needs in Pune.
      </p>
    </main>
  );
}
