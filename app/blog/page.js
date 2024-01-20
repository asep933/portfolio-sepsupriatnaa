import Link from "next/link";

const Blog = () => {
  return (
    <div className="dark:bg-slate-300 h-screen m-0 flex flex-col pt-16 lg:pt-28">
      <ul className="space-y-3 text-xl text-blue-700 font-medium lg:space-y-5">
        <li>
          <Link
            className="bg-slate-100 block h-40 py-2 px-5 overflow-hidden space-y-3 rounded-sm w-full outline-offset-1 shadow-sm"
            href="/blog/blog-one"
          >
            <h1 className="hover:underline hover:opacity-80">
              Mengeksplorasi Keuntungan Penggunaan Kecerdasan Buatan (AI) di Era
              Modern
            </h1>
            <p className="font-normal text-base text-black no">
              Kecerdasan Buatan (AI) telah menjadi elemen integral dalam
              transformasi digital di berbagai sektor. Dengan kemampuannya untuk
              memproses data besar, memahami pola kompleks, dan membuat
              keputusan cerdas, penggunaan AI memberikan sejumlah keuntungan
              signifikan. Artikel ini akan membahas beberapa keuntungan utama
              penggunaan AI di berbagai bidang.
            </p>
          </Link>
        </li>
        <li>
          <Link
            className="bg-slate-100 block h-40 py-2 px-5 overflow-hidden space-y-3 rounded-sm w-full outline-offset-1 shadow-sm"
            href={"/blog/blog-two"}
          >
            <h1 className="hover:underline hover:opacity-80">
              Tantangan dan Dampak Negatif Penggunaan Kecerdasan Buatan (AI)
            </h1>

            <p className="font-normal text-base text-black no">
              Meskipun Kecerdasan Buatan (AI) memberikan banyak keuntungan,
              penting untuk mengakui bahwa ada juga dampak negatif yang perlu
              diperhatikan. Artikel ini akan membahas beberapa tantangan dan
              dampak negatif yang dapat timbul dari penggunaan AI di berbagai
              bidang.
            </p>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Blog;
