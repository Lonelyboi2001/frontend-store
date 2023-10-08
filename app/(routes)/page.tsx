import getBillboard from "@/actions/get-billboard";
import getCategories from "@/actions/get-categories";
import getProducts from "@/actions/get-products";
import CateShort from "@/components/cate-shortcut";
import MainNav from "@/components/main-nav";
import ProductList from "@/components/product-list";
import Slider from "@/components/slider";
import Container from "@/components/ui/container";
import Image from "next/image";

export const revalidate = 0;

const HomePage = async () => {
    const products = await getProducts({ isFeatured: true})

    const categories = await getCategories()

    const billboard = await getBillboard("7ef49848-70b1-47e7-ad8b-bd3b6754b479");
    
    return ( 
        <Container>
            <div className="space-y-10 pb-10">
                <Slider />
                <CateShort />
                <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
                    <ProductList title="Featured Products" items={products} />
                </div>
            </div>
        </Container>
     );
}
 
export default HomePage;