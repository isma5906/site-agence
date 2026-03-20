import "./globals.css";

export const metadata = {
  title: "Site Ilan",
  description: "Vitrine de services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}