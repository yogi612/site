import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Best Loan & Financial Services in Jaipur | Finonest Jaipur",
  description:
    "Get the best loan offers, financial products, and expert advice in Jaipur. Finonest is your trusted partner for home loans, business loans, credit cards, and more in Jaipur. Compare, apply, and get approved fast!",
  keywords: [
    "Jaipur loans",
    "Jaipur financial services",
    "home loan Jaipur",
    "business loan Jaipur",
    "credit card Jaipur",
    "Finonest Jaipur",
    "best loan offers Jaipur",
    "compare loans Jaipur",
    "apply loan Jaipur",
    "finance company Jaipur"
  ],
  openGraph: {
    title: "Best Loan & Financial Services in Jaipur | Finonest Jaipur",
    description:
      "Get the best loan offers, financial products, and expert advice in Jaipur. Finonest is your trusted partner for home loans, business loans, credit cards, and more in Jaipur.",
    url: "https://finonest.com/jaipur",
    type: "website",
    images: [
      {
        url: "/abstract-sme-growth.png",
        width: 1200,
        height: 630,
        alt: "Finonest Jaipur Loans and Finance"
      }
    ]
  }
};

export default function JaipurPage() {
  return (
    <main>
      <h1 className="text-4xl font-bold mb-4">Loans & Financial Services in Jaipur</h1>
      <p className="mb-6">
        Welcome to Finonest Jaipur! We offer the best loan and financial solutions tailored for Jaipur residents and businesses. Whether you need a home loan, business loan, or credit card, our experts are here to help you compare, apply, and get approved quickly.
      </p>
      <ul className="list-disc pl-6 mb-6">
        <li>Home Loans in Jaipur</li>
        <li>Business Loans in Jaipur</li>
        <li>Personal Loans in Jaipur</li>
        <li>Credit Cards & Financial Products</li>
        <li>Expert Financial Advice</li>
      </ul>
      <p>
        <strong>Why choose Finonest in Jaipur?</strong> We partner with top banks and NBFCs, offer transparent comparisons, and provide end-to-end support for all your financial needs in Jaipur.
      </p>
    </main>
  );
}
