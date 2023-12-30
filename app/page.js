"use client"
import Image from "next/image";
import imageSatu from "../public/image_1.png"
import imageDua from "../public/image_2.png"
import imageTiga from "../public/image_3.png"
import imageEmpat from "../public/image_4.png"
import imageLima from "../public/image_5.png"

const Page = () => {
    return (
        <>
        {/* hero section start */}
            <div id="home" className="bg-slate-200 flex h-full lg:h-screen">
                <div className="block w-full space-y-3 px-5 mt-16 mb-32 text-base lg:px-32 lg:scale-125 lg:mt-40 lg:ml-40">
                    <p>Hallo, 😃...</p>

                    <h1 className="text-2xl font-bold">Frontend <span className="bg-orange-200 transform rotate-3">Web</span></h1>

                    <p className="text-orange-500 text-sm">INTRODUCTION</p>

                    <p>saya Asep Supriatna seorang programmer dengan pengalaman 2 tahun, <br /> keahlian saya diantaranya HTML, css,
                        JS, React dan Next.
                    </p><br />

                    <a href="#pageDua" className="bg-orange-200 shadow-lg hover:bg-orange-300 p-1">Learn More &#129063;</a>
                </div>
            </div>
        {/* hero section end */}

        {/* service section start */}
            <div id="pageDua" className="bg-white flex flex-wrap items-center pt-16 pb-16 lg:px-32">
                <div className="w-full px-5 space-y-3">
                    <h1 className="mx-auto font-bold text-2xl mb-8">My Services</h1>
                    <p>Berikut adalah beberapa jasa saya diantaranya:</p>

                    <div className="lg:grid xl:grid-cols-3 text-black lg:grid-flow-row lg:gap-12 text-center flex flex-col text-xl">
                        <div className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full">Web Developer</div>
                        <div className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full">Prompt</div>
                        <div className="lg:p-20 mt-3 bg-slate-300 lg:transform lg:hover:rotate-2 w-full lg:rounded-full">UI/UX</div>
                    </div>
                </div>
            </div>
        {/* service section end */}

        {/* portfolio section start*/}
            <div className="bg-white flex flex-wrap items-center pb-16 pt-32 text-base lg:px-32 font-semibold">
                <div className="w-full px-5">
                    <h1 className="text-2xl font-bold mb-8">My Collection</h1>

                    <p className="mb-6">berikut adalah daftar foto yang di ganerate menggunakan Stable Diffusion</p>

                    <div className="flex flex-wrap px-16 mt-16">
                        <div className="bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-16 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
                            <Image 
                                src={imageSatu}
                                width={200}
                                className="w-full rounded-lg mb-5"
                            />

                            <p>A graceful woman is one who carries herself with poise and elegance.</p>
                        </div>
                        <div className="bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-16 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
                            <Image 
                                src={imageDua}
                                width={200}
                                className="w-full rounded-lg mb-5"
                            />

                            <p>An agile black cat on the asphalt adds a touch of playfulness to the surroundings.</p>
                        </div>
                        <div className="bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-16 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
                            <Image 
                                src={imageTiga}
                                width={200}
                                className="w-full rounded-lg mb-5"
                            />

                            <p>A woman gracefully holds an umbrella, her silhouette dancing against the rain.</p>
                        </div>
                        <div className="bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-16 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
                            <Image 
                                src={imageEmpat}
                                width={200}
                                className="w-full rounded-lg mb-5"
                            />

                            <p>A woman with piercing blue eyes elegantly holds an umbrella, a vision of grace in the rain.</p>
                        </div>
                        <div className="bg-orange-200 mt-8 w-full text-base lg:text-lg space-y-2 p-16 rounded-lg shadow-lg lg:w-2/4 lg:scale-75">
                            <Image 
                                src={imageLima}
                                width={200}
                                className="w-full rounded-lg mb-5"
                            />

                            <p>A cowboy thief, clad in rugged attire, deftly maneuvers through the shadows with a larcenous intent.</p>
                        </div>

                        
                    </div>
                </div>
            </div>
        {/* portfolio section end */}

        {/* contact start */}
            <div className="bg-slate-200 pt-16 pb-32 flex justify-center items-center flex-col space-y-20">
                <h1 className="text-lg font-semibold bg-orange-200 p-2 transform -rotate-2 hover:rotate-0">Contact</h1>

                <div className="space-x-10">
                    <a href="mailto:asep93339@gmail.com" className="bg-slate-100 p-4 hover:bg-slate-300">Email</a>
                    <a href="https://www.instagram.com/sepsupriatnaa/" target="_blank" className="bg-slate-100 p-4 hover:bg-slate-300">Instagram</a>
                    <a href="https://wa.me/6285872256552"target="_blank" className="bg-slate-100 p-4 hover:bg-slate-300">WhatsApp</a>
                </div>
            </div>
        {/* contact end */}
        </>
    );
}

export default Page;
