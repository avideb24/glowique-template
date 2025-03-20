import Banner from "@/components/page-comp/home/banner";
import Deals from "@/components/page-comp/home/deals";
import Categories from "@/components/page-comp/home/categories";
import Marqee from "@/components/page-comp/home/marqee";
import ServiceBenefits from "@/components/page-comp/home/service-benefits";
import Collections from "@/components/reusuable/collections";
import { allProducts } from "@/utils/allProducts";
import About from "@/components/page-comp/home/about";
import Hero from "@/components/page-comp/home/hero";
import { metadataConfig } from "@/config/metadataConfig";
import Testimonial from "@/components/reusuable/testimonials";

export const metadata = metadataConfig.home;


const HomePage = () => {

  const products = allProducts();

  return (
    <div>

      {/* banner */}
      <Banner />
      <Marqee />


      {/* daily collection */}
      <div className="section-padding !pb-0">
        <Collections title={"Your Daily Go-Tos"} products={products} />
      </div>

      {/* categories */}
      <div className="section-padding">
        <Categories />
      </div>

      {/* deals */}
      <div className="section-padding !pt-0">
        <Deals />
      </div>

      {/* featured products */}
      <div>
        <Collections title={"Featured Products"} products={products} filter={true} button={true} />
      </div>

      {/* about section */}
      <div className="section-padding !pb-0">
        <About />
      </div>

      {/* testimonial */}
      <div className="section-padding">
        <Testimonial />
      </div>

      {/* hero section */}
      <div>
        <Hero />
      </div>

      {/* services section */}
      <div className="section-padding">
        <ServiceBenefits />
      </div>

    </div>
  );
};

export default HomePage;