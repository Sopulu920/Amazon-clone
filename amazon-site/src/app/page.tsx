import Banner from "@/component/homeComponent/banner";
import Product from "@/component/homeComponent/product";

export default function Home() {
  return (
    <>
      <div className="page">

        <div className="page1">
          <Banner />
        </div>

        <div className="page2">
          <Product />
        </div>

      </div>
    </>
  );
}
