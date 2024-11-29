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
    <div className="mx-auto flex h-screen w-full max-w-screen-xl items-center space-y-10 px-5">
      <div className="fade-in flex flex-wrap items-center dark:text-white lg:flex lg:flex-nowrap">
        <h1
          data-aos="zoom-in-up"
          className="mt-8 -rotate-2 transform bg-third p-2 text-2xl font-semibold
                hover:rotate-0 dark:text-slate-900 lg:ml-20 lg:mr-20 lg:mt-24 lg:text-4xl"
        >
          About
        </h1>

        <div
          data-aos="zoom-in-up"
          className="mt-10 lg:mt-24 lg:pr-60 lg:text-xl"
        >
          <DeskripsiAbout aboutProps={isiAbout} />
        </div>
      </div>
    </div>
  );
};

export default About;
