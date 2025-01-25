"use client"

import {useRouter, redirect} from "next/navigation";

export default function OrderProductsPage() {
    const router = useRouter()

    const handleOrder = () => {
        console.log("Your Order Placed.")
        // router.push("/")
        redirect("/")
    }
    return (
        <>
            <h1>Orders Products</h1>
            <button onClick={handleOrder}>Place Order</button>
        </>
    )
}