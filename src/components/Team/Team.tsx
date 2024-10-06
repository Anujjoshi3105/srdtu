import TeamItem from "@/components/Team/TeamItem";
import {
  FaFacebook,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa6";

export default function Team() {
  const members = [
    {
      name: "Anuj Joshi",
      year: "General Secretary",
      image: "/anuj.jpg",
      socials: [
        {
          name: "Facebook",
          link: "https://facebook.com",
          icon: <FaFacebook />,
        },

        {
          name: "Twitter",
          link: "https://facebook.com",
          icon: <FaTwitter />,
        },
        {
          name: "Linkedin",
          link: "https://facebook.com",
          icon: <FaLinkedin />,
        },
        {
          name: "Instagram",
          link: "https://facebook.com",
          icon: <FaInstagram />,
        },
      ],
    },
  ];

  return (
    <div className="w-full text-center flex flex-col justify-center items-center">
      <div className="text-center my-8">
        <h2 className="text-lg text-primary text-center tracking-wider">
          The Core
        </h2>
        <h2 className="text-3xl md:text-4xl text-center font-bold">Our Team</h2>
      </div>
      <div className="flex flex-wrap gap-12 w-full justify-center">
        {members.map((member, index) => (
          <TeamItem key={index} member={member} />
        ))}
        {members.map((member, index) => (
          <TeamItem key={index} member={member} />
        ))}
        {members.map((member, index) => (
          <TeamItem key={index} member={member} />
        ))}
        {members.map((member, index) => (
          <TeamItem key={index} member={member} />
        ))}
      </div>
    </div>
  );
}
