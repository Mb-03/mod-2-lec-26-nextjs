import SubHeader from "@/components/SubHeader";
import "../globals.css";

export default function AuthLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <SubHeader />
        {children}
      </body>
    </html>
  );
}
