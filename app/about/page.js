import React from 'react';

function DeskripsiAbout({aboutProps}) {
    return (
        <p>{aboutProps}</p>
    )
}

const About = () => {
    const isiAbout = `Asep Supriatna adalah seorang pengembang web berpengalaman yang telah berhasil menerapkan berbagai keterampilan dalam berbagai proyek. Dengan keahlian dalam HTML, CSS, JavaScript, Next.js, dan React, Asep dapat merancang dan mengembangkan aplikasi web yang inovatif dan responsif. Dedikasinya terhadap pemrograman web terlihat melalui hasil kerjanya yang berkualitas dan solusi yang kreatif.

    Kontak:
    
    Email: asep93339@gmail.com
    Dengan keahlian teknis dan pengalaman praktis, Asep Supriatna siap untuk menjalankan proyek pengembangan web dengan fokus pada kualitas dan solusi yang efisien. Jangan ragu untuk menghubungi melalui email untuk diskusi lebih lanjut atau proyek potensial.`;

    return (
        <div className="h-screen bg-slate-200 w-full p-5 space-y-10">
            <div className='flex items-center flex-wrap lg:flex lg:flex-nowrap'>
                <h1 className="text-2xl font-semibold bg-orange-200 p-2 transform -rotate-2
                hover:rotate-0 mt-8 lg:mt-24 lg:mr-20 lg:text-4xl lg:ml-20">About</h1>

                <div className='mt-10 lg:pr-60 lg:text-xl lg:mt-24'>
                    <DeskripsiAbout aboutProps={isiAbout} />
                </div>
            </div> 
        </div>
    );
}

export default About;
