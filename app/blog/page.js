import Link from "next/link";

const Blog = () => {
  return (
    <div className="m-0 flex h-screen flex-col pt-24 dark:bg-transparent lg:pt-28">
      <ul className="space-y-3 text-xl font-medium text-blue-700 dark:text-blue-400 lg:space-y-5">
        <li>
          <Link
            className="block h-40 w-full space-y-3 overflow-hidden rounded-sm bg-secondary px-4 py-2 shadow-sm outline-offset-1 dark:bg-slate-600 lg:px-48"
            href="/blog/blog-one"
          >
            <h1 className="hover:underline hover:opacity-80">
              Mengeksplorasi Keuntungan Penggunaan Kecerdasan Buatan (AI) di Era
              Modern
            </h1>
            <p className="text-base font-normal text-black dark:text-white">
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
            className="block h-40 w-full space-y-3 overflow-hidden rounded-sm bg-secondary px-4 py-2 shadow-sm outline-offset-1 dark:bg-slate-600 lg:px-48"
            href={"/blog/blog-two"}
          >
            <h1 className="hover:underline hover:opacity-80">
              Tantangan dan Dampak Negatif Penggunaan Kecerdasan Buatan (AI)
            </h1>

            <p className="no text-base font-normal text-black dark:text-white">
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
