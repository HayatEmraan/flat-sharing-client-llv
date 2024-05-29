import Dropdown from "@/components/shared/common/navbar/dropdown";
import Navbar from "@/components/shared/common/navbar/navbar";
import Footer from "@/components/shared/footer/footer";
import NewsLetter from "@/components/shared/newsletter/newsletter";
import { ReactNode } from "react";

export default function ClientLayout({ children }: { children: ReactNode }) {
  return (
    <>
      <Navbar />
      <Dropdown></Dropdown>
      <div className="pb-28">{children}</div>
      <div className="px-[2%] md:px-[6%] bg-card-dark border border-card-dark">
        <NewsLetter />
        <div className="mt-20">
          <Footer />
        </div>
      </div>
    </>
  );
}
