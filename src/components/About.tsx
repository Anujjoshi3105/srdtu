export default function About() {
  return (
    <section className="mx-6 lg:mx-12 flex flex-col gap-8">
      <div
        id="about"
        className="section lg:w-1/3 sm:w-1/2 w-full justify-start">
        <h2 className="relative lg:text-5xl text-4xl font-extrabold my-6 text-primary">
          <span className="absolute inset-[-2px] text-foreground opacity-90">
            About
          </span>
          About
        </h2>
        <p className="lg:text-xl text-lg leading-7 tracking-wider text-justify">
          The community within the Society of Robotics at Delhi Technological
          University is a group of students and individuals who share a common
          interest in robotics and technology. They collaborate, network, and
          participate in events and activities to learn and grow in the field of
          robotics. This community is inclusive, supportive, and fosters a sense
          of camaraderie among its members
        </p>
        <div className="flex md:gap-16 gap-8 my-8 w-full justify-around font-bold">
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl md:text-5xl">200+</div>
            <div className="text-lg md:text-2xl">Members</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl md:text-5xl">5+</div>
            <div className="text-lg md:text-2xl">Projects</div>
          </div>
          <div className="flex flex-col justify-center items-center">
            <div className="text-3xl md:text-5xl">5+</div>
            <div className="text-lg md:text-2xl">Projects</div>
          </div>
        </div>
      </div>
      <div
        id="ready"
        className="section ready lg:w-1/3 sm:w-1/2 w-full justify-end ml-auto">
        <h2 className="relative lg:text-5xl text-4xl font-extrabold my-6 text-primary">
          <span className="absolute inset-[-2px] text-foreground opacity-90">
            Get Ready
          </span>
          Get Ready
        </h2>
        <p className="lg:text-xl text-lg leading-8 tracking-wider text-justify">
          Ready to dive into the world of robotics? Join our community to gain
          hands-on experience, network with peers, and participate in exciting
          projects and events! Ready to dive into the world of robotics? Join
          our community to gain hands-on experience, network with peers, and
          participate in exciting projects and events!
        </p>
      </div>
    </section>
  );
}
