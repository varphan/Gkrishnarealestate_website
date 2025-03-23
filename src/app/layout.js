import "../styles/globals.css";
export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <title>G Krishna Real Estate Edits</title>
        <meta name="description" content="Professional real estate edits for American clients." />
      </head>
      <body className="bg-gray-100 text-gray-900">
        {children}
      </body>
    </html>
  );
}
