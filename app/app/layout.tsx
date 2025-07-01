export const metadata = {
  title: "NoweWear",
  description: "NoweWear - Stylish Printify Shop",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
