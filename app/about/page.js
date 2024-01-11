function DeskripsiAbout({ aboutProps }) {
  return <p>{aboutProps}</p>;
}

const About = () => {
  const isiAbout = `Asep Supriatna is an experienced web developer who has successfully applied various skills in various projects. With expertise in HTML, CSS, JavaScript, Next.js, and React.
    Asep can design and develop innovative and responsive web applications. His dedication to web programming is visible through his quality work and creative solutions.
    Contact:
    Email: asep93339@gmail.com 
    With technical expertise and practical experience, Asep Supriatna is ready to carry out web development projects with a focus on quality and efficient solutions. Feel free to reach out via email for further discussions or potential projects.`;

  return (
    <div className="dark:bg-slate-300 h-screen bg-slate-200 w-full pt-16 px-5 space-y-10">
      <div className="fade-in flex items-center flex-wrap lg:flex lg:flex-nowrap">
        <h1
          className="text-2xl font-semibold bg-orange-200 p-2 transform -rotate-2
                hover:rotate-0 mt-8 lg:mt-24 lg:mr-20 lg:text-4xl lg:ml-20"
        >
          About
        </h1>

        <div className="mt-10 lg:pr-60 lg:text-xl lg:mt-24">
          <DeskripsiAbout aboutProps={isiAbout} />
        </div>
      </div>
    </div>
  );
};

export default About;
