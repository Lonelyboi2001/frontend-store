import getProducts from "@/actions/get-products";
import CateShort from "@/components/cate-shortcut";
import Hero from "@/components/hero";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import Container from "@/components/ui/container";
import Warranty from "@/components/warranty";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true})
    
    return ( 
        <Container>
            <div className="pb-10">
                <Slider />
                <CateShort />
                <Hero />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <Warranty />
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;