import Image from "next/image";

interface Social {
  name: string;
  link: string;
  icon: React.ReactNode;
}

interface Member {
  name: string;
  year: string;
  image: string;
  socials: Social[];
}

const TeamItem = ({ member }: { member: Member }) => {
  return (
    <div className="w-[90vw] lg:w-[20vw] md:w-[40vw] h-[350px] relative group">
      <div className="w-[90vw] lg:w-[20vw] md:w-[40vw] h-full bg-primary opacity-50 absolute translate-x-2 translate-y-2 group-hover:translate-x-1 group-hover:translate-y-1 transition-all duration-150"></div>
      <figure className="w-[90vw] lg:w-[20vw] md:w-[40vw] h-[350px] relative transition-all duration-500 overflow-hidden group">
        <Image
          src={member.image}
          alt={member.name}
          width={1200}
          height={1200}
          className="w-full h-full object-cover group-hover:brightness-75 group-hover:scale-[1.2] absolute transition-all duration-1000"
        />
        <figcaption className="absolute bottom-[20px] left-5 group-hover:bottom-[60px] transition-all duration-700 w-full">
          <div className="flex after:content-[''] after:h-[1px] after:bg-opacity-50 after:w-[20%] after:bg-foreground after:absolute after:bottom-[-8px] group-hover:after:w-[90%] after:transition-all after:duration-1000">
            <p className="font-bold md:text-2xl text-xl">{member.name}</p>
          </div>
          <div className="flex absolute mt-5 w-full">
            <p>{member.year}</p>
            <ul className="flex justify-center gap-3 m-auto">
              {member.socials.map((social, index) => (
                <li key={index}>
                  <a
                    href={social.link}
                    target="_blank"
                    className="hover:text-primary">
                    <span className="sr-only">{social.name}</span>
                    {social.icon}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </figcaption>
      </figure>
    </div>
  );
};

export default TeamItem;
