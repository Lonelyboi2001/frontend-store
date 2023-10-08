import Image from "next/image";
import logoImg from '../public/logo.png'

const Footer = () => {
    return ( 
        <footer className="bg-white border-t footer">
            <div className="mx-auto max-w-screen-xl space-y-8 px-4 py-16 sm:px-6 lg:space-y-16 lg:px-8">
                <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div>
                        <div className="text-teal-600">
                            <Image src={logoImg} alt="logo" width={80} height={80} />
                        </div>

                        <p className="mt-4 max-w-xs text-gray-500">
                        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Esse non
                        cupiditate quae nam molestias.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:col-span-2 lg:grid-cols-4">
                        <div>
                        <p className="font-medium text-gray-900">Services</p>
                        </div>

                        <div>
                        <p className="font-medium text-gray-900">Company</p>
                        </div>

                        <div>
                        <p className="font-medium text-gray-900">Helpful Links</p>
                        </div>

                        <div>
                        <p className="font-medium text-gray-900">Legal</p>
                        </div>
                    </div>
                </div>

                <p className="text-xs text-center text-gray-500">
                    &copy; 2022. NGHIENKEYBOARD. All rights reserved.
                </p>
            </div>
        </footer>
     );
}
 
export default Footer;