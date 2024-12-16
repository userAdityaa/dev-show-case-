import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MailOpen } from "lucide-react"
import { FooterSection, FeatureSection, LandingPage } from "./pages";

export default function Home() {
  return (
    <div className="bg-[#151619]">
      <LandingPage/>
      <FeatureSection/>
      <FooterSection/>
      {/* <CollabrationSection/> */}
    </div>
  );
}
