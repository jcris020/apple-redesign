import React from 'react'
import Link from "next/link";
import { selectBasketItems, selectBasketTotal } from '../redux/basketSlice';
import { useSelector } from "react-redux";
import { ShoppingBagIcon } from '@heroicons/react/24/outline';

function Basket() {
    const items = useSelector(selectBasketItems);
    const basketTotal = useSelector(selectBasketTotal);

    // If no items in shopping cart do not display ShoppingBagIcon
    if (items.length === 0) {
        return null;
    }

    return (
        <Link href="/checkout">
            <div className="fixed bottom-10 right-10 z-50 flex h-16 w-16 cursor-pointer items-center 
            justify-center rounded-full bg-gray-300">
                {/* If there are items in shopping cart display number of items in shopping cart */}
                {items.length > 0 && (
                    <span className="absolute -right-2 -top-2 z-50 flex h-7 w-7 items-center 
                    justify-center rounded-full bg-gradient-to-r from-pink-500 to-violet-500 
                    text-[10px] text-white">
                        {items.length}
                    </span>
                )}
                <ShoppingBagIcon className="headerIcon h-8 w-8" />
            </div>
        </Link>
    )
}

export default Basket
