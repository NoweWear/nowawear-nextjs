export const metadata = {
  title: "NoweWear",
  description: "Welcome to NoweWear custom apparel store!",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head />
      <body>{children}</body>
    </html>
  );
}
