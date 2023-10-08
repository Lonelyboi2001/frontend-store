import Link from "next/link";
import Container from "./ui/container";
import MainNav from "./main-nav";
import getCategories from "@/actions/get-categories";
import NavbarAction from "./navbar-actions";
import Image from "next/image";
import logoImg from '../public/logo.png';

export const revalidate = 0;

const Navbar = async () => {
    const categories = await getCategories();

    return ( 
       <div className="sticky bg-red-800 z-50 top-0">
            <Container >
                <div className="relative px-4 sm:px-6 lg:px-8 flex h-16 items-center justify-between">
                    <Link href="/" className="ml-4 flex lg:ml-0 gap-x-2">
                        <Image src={logoImg} alt="logo" width={60} height={60} />
                    </Link>
                    <MainNav data={categories} />
                    <NavbarAction />
                </div>
            </Container>
       </div>
     );
}
 
export default Navbar;