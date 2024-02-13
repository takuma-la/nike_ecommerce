import Link from "next/link";
import React from "react";
const ProductCard = () => {
    return (
        <Link
        href="/product/1"
        className="transform overflow-hidden bg-white duration-200 hover:scale-105 cursor-pointer"
        >
            <div className="p-4 text-black/[0.9]">
                <img className="w-full" src="/product-1.webp" alt="Product Image" />
                <h2 className="text-lg font-medium">Product Name</h2>
                <div className="flex items-center text-black/[0.5]">
                    <p className="text-base  font-medium line-through">
                        $250.00
                    </p>
                    <p className="ml-auto text-base font-medium text-green-500">
                        10% off
                    </p>
                </div>
            </div>
        </Link>
    );
};

export default ProductCard;