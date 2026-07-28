import Header from "@/app/components/layout/header";
import Footer from "@/app/components/layout/footer";
import type { WrapperProps } from "@/app/types";

export default function Wrapper({ children }: WrapperProps) {
  return (
    <>
      <Header />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}