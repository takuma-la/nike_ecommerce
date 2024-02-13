// import Image from "next/image";
import React from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
// import { updateCart, removeFromCart } from "@/store/cartSlice";
// import { useDispatch } from "react-redux";
const CartItem = () => {
    // const p = data.attributes;

    // const dispatch = useDispatch();

    // const updateCartItem = (e, key) => {
    //     let payload = {
    //         key,
    //         val: key === "quantity" ? parseInt(e.target.value) : e.target.value,
    //         id: data.id,
    //     };
    //     dispatch(updateCart(payload));
    // };

    return (
        <div className="flex py-5 gap-3 md:gap-5 border-b">
            {/* IMAGE START */}
            <div className="shrink-0 aspect-square w-[50px] md:w-[120px]">
                {/* <Image
                    src={p.thumbnail.data.attributes.url}
                    alt={p.name}
                    width={120}
                    height={120}
                /> */}
                <img src="product-1.webp" alt="" />
            </div>
            {/* IMAGE END */}

            <div className="w-full flex flex-col">
                <div className="flex flex-col md:flex-row justify-between">
                    {/* PRODUCT TITLE */}Jordan Retro 6 G
                    <div className="text-lg md:text-2xl font-semibold text-black/[0.8]">
                        {/* {p.name} */}
                    </div>

                    {/* PRODUCT SUBTITLE */}
                    <div className="text-sm md:text-md font-medium text-black/[0.5] block md:hidden">
                        {/* {p.subtitle} */}
                    </div>

                    {/* PRODUCT PRICE */}
                    <div className="text-sm md:text-md font-bold text-black/[0.5] mt-2">
                        {/* MRP : &#8377;{p.price} */}MRP : $250.00
                    </div>
                </div>

                {/* PRODUCT SUBTITLE */}
                <div className="text-md font-medium text-black/[0.5] hidden md:block">
                    {/* {p.subtitle} */}Men&apos;s Golf Shoes
                </div>

                <div className="flex items-center justify-between mt-4">
                    <div className="flex items-center gap-2 md:gap-10 text-black/[0.5] text-sm md:text-md">
                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Size:</div>
                            {/* <select
                                className="hover:text-black"
                                onChange={(e) =>
                                    updateCartItem(e, "selectedSize")
                                }
                            >
                                {p.size.data.map((item, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={item.size}
                                            disabled={
                                                !item.enabled ? true : false
                                            }
                                            selected={
                                                data.selectedSize === item.size
                                            }
                                        >
                                            {item.size}
                                        </option>
                                    );
                                })}
                            </select> */}
                            <select className="hover:text-black">
                                <option value="1">US 6</option>
                                <option value="2">US 6.5</option>
                                <option value="3">US 7</option>
                                <option value="4">US 7.5</option>
                                <option value="5">US 8</option>
                                <option value="6">US 8.5</option>
                                <option value="7">US 9</option>
                                <option value="8">US 9.5</option>
                                <option value="9">US 10</option>
                                <option value="10">US 10.5</option>
                                <option value="11">US 11</option>
                                <option value="12">US 12</option>
                            </select>
                        </div>

                        <div className="flex items-center gap-1">
                            <div className="font-semibold">Quantity:</div>
                            {/* <select
                                className="hover:text-black"
                                onChange={(e) => updateCartItem(e, "quantity")}
                            >
                                {Array.from(
                                    { length: 10 },
                                    (_, i) => i + 1
                                ).map((q, i) => {
                                    return (
                                        <option
                                            key={i}
                                            value={q}
                                            selected={data.quantity === q}
                                        >
                                            {q}
                                        </option>
                                    );
                                })}
                            </select> */}
                            <select className="hover:text-black">
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>
                            </select>
                        </div>
                    </div>
                    <RiDeleteBin6Line
                        // onClick={() =>
                        //     dispatch(removeFromCart({ id: data.id }))
                        // }
                        className="cursor-pointer text-black/[0.5] hover:text-black text-[16px] md:text-[20px]"
                    />
                </div>
            </div>
        </div>
    );
};

export default CartItem