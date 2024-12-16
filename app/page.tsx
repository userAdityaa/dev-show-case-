import { Button } from "@/components/ui/button";
import Image from "next/image";
import { MailOpen } from "lucide-react"
import { FeatureSection, LandingPage } from "./pages";

export default function Home() {
  return (
    <div className="bg-[#151619]">
      <LandingPage/>
      <FeatureSection/>
    </div>
  );
}
