export const metadata = {
  title: "NoweWear",
  description: "Automatic product listing with Printify API",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
