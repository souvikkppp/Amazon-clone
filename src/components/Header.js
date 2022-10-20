import Image from "next/image";
import {
    MenuIcon,
    SearchIcon,
    ShoppingCartIcon
}  from "@heroicons/react/outline";

function Header(){
    return (
        <header>

        {/* top nav */}

            <div className="flex items-center flex-grow p-1 py-2 bg-amazon_blue">
             <div className="flex items-center flex-grow mt-2 sm:flex-grow-0">
                <Image
                    src="https://links.papareact.com/f90"
                    width={150}
                    height={40}
                    objectFit="contain"
                    className="cursor-pointer"
                />
             </div>

              {/* search bar */}

             <div className="items-center flex-grow hidden h-10 bg-yellow-400 rounded-md cursor-pointer sm:flex hover:bg-yellow-500">
                <input type="text" className="flex-grow flex-shrink w-6 h-full p-2 px-4 rounded-l-md focus:outline-none"/>
                <SearchIcon className="h-12 p-4"/>
             </div>

              {/* right side */}

             <div className="flex items-center mx-6 space-x-6 text-xs text-white whitespace-nowrap">
               <div className="link">
                 <p>Hello soovik kundu</p>
                 <p className="font-extrabold md:text-sm">Account & Lists</p>
               </div>
               <div className="link">
                  <p>Returns</p>
                  <p className="font-extrabold md:text-sm">& Orders</p>
               </div>
               <div className="relative flex items-center link">
                  <span className="absolute top-0 right-0 w-4 h-4 font-bold text-center text-black bg-yellow-400 rounded-full md:right-10">0</span>
                  <ShoppingCartIcon 
                    className="h-10"
                  />
                  <p className="hidden font-extrabold md:inline md:text-sm mt-7">Busket</p>
               </div>
             </div>
            </div>

        {/* bottom nav */}
            <div className="flex items-center p-2 pl-6 space-x-3 text-center text-white bg-amazon_blue-light">
              <p className="flex items-center link">
               <MenuIcon className="h-6 mr-1"/>
                All
              </p>
              <p className="link">Best Sellers</p>
              <p className="link">Today's Deals</p>
              <p className="link">Mobiles</p>
              <p className="link">Customer Service</p>
              <p className="hidden link lg:inline-flex">Electronics</p>

              <div className="hidden pl-16 space-x-6 lg:inline-flex">
                <p className="hidden link lg:inline-flex">Prime</p>
                <p className="hidden link lg:inline-flex">Buy Again</p>
                <p className="hidden link lg:inline-flex">Health & Personal</p>
              </div>
              
            </div>
        </header>
    )
}

export default Header;