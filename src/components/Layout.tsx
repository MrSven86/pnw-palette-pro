import { ReactNode } from "react";
import { Header } from "./Header";
import { Footer } from "./Footer";

interface LayoutProps {
  children: ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div className="min-h-screen flex flex-col">
      {/* Blue accent bar */}
      <div className="fixed top-0 left-0 right-0 h-1 bg-secondary z-[60]" />
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
}
