import SponsorItem from "@/components/Sponsor/SponsorItem";
import { FaCode, FaFirefoxBrowser, FaGithub } from "react-icons/fa6";
import { SiBmw, SiCodechef, SiHackerearth } from "react-icons/si";

export default function Marquee() {
  return (
    <div className="h-[50vh] text-center flex flex-col justify-center items-center">
      <div className="text-center mb-8">
        <h2 className="text-lg text-primary text-center tracking-wider">
          Sponsors
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">
          Past Collaborators
        </h2>
      </div>

      <div className="container mx-auto overflow-hidden w-[80%] md:w-[60%] hover:opacity-100 opacity-50">
        <SponsorItem
          icons={[
            SiHackerearth,
            FaFirefoxBrowser,
            SiBmw,
            FaGithub,
            SiCodechef,
            FaCode,
          ]}
        />
      </div>
    </div>
  );
}
