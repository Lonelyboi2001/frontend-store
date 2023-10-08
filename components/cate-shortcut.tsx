import Image from "next/image";
import Akko1 from '@/public/Moon.webp';
import Akko2 from '@/public/Akko.webp';
import Akko3 from '@/public/Skyloong.webp';
import Monbanner from '@/public/brown.webp';
import Monbanner2 from '@/public/Zoom.webp';
import Monbanner3 from '@/public/tools.webp';

const CateShort = () => {
    return ( 
    <section className=" w-full max-w-7xl mx-auto flex gap-10 justify-center items-center overflow-x-scroll">
        <a href="/category/280f4b59-b6bc-4b34-bc15-a13a960de780" className="cate-item flex flex-col justify-center items-center"> 
            <Image src={Akko1} className="rounded-full w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Akko</div>
        </a>
        <a href="category/88467a8f-e8c6-4fb2-871a-3a59f34e1f60" className="cate-item flex flex-col justify-center items-center"> 
            <Image src={Akko2} className="rounded-full w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Moonsgeek</div>
        </a>
        <a href="category/c6e9868e-d342-4dfa-b3e1-ff863c54dc81" className="cate-item flex flex-col justify-center"> 
            <Image src={Akko3} className="rounded-full  w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Logitech</div>
        </a>
        <a href="category/f14a0bee-ea75-4086-8bd2-78e9a5f328f8" className="cate-item flex flex-col justify-center"> 
            <Image src={Monbanner} className="rounded-full  w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Zoom</div>
        </a>
        <a href="category/fc51ab00-1bd1-4b3e-8e3a-5cca29aebf45" className="cate-item flex flex-col justify-center"> 
            <Image src={Monbanner2} className="rounded-full  w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Skyloong</div>
        </a>
        <a href="category/c363e7f9-27d4-4d0a-a55f-aa903eebc680" className="cate-item flex flex-col justify-center"> 
            <Image src={Monbanner3} className="rounded-full  w-16 h-16 object-cover hover:rotate-45 hover:transition-all transition-all" alt="cate" />
            <div className="text-center mt-2">Tools</div>
        </a>
    </section>
     );
}
 
export default CateShort;