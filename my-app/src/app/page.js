import Image from "next/image";
import search from "../../public/image1/agri.jpg";
import productimage from "../../public/productimage/watermelon.webp";
export default function Home() {
  return (
    <div>
      <div>
      <Image src={search} alt="agri"  className="w-full h-screen opacity-15 bg-"/>
     </div>
      <div className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 pl-3">
        <h1 className="text-6xl font-bold text-green-300">AnyaBazaar</h1>
        <h2 className="text-2xl font-bold text-green-320">Agriculture is our wisest pursuit, because it will in the end contribute most to real wealth, good morals, and happiness.</h2>
      </div>
      <div>
        <div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">

          title="Watermelon"
          price="@56"
          image="/productimage/watermelon.webp"
          description="Newly launched!"

        </div>
      </div>
      <div>
      </div>
    </div>
  </div>
  );
}
