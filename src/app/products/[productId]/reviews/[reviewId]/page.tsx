import {notFound} from "next/navigation";

type ProductReviewProps = {
    params: {
        productId: string;
        reviewId: string;
    }
}

function getRandomInt(count: number) {
    return Math.floor(Math.random() * count);
}

export default async function ProductReview({params}: ProductReviewProps) {
    const random = getRandomInt(2);
    if(random === 1){
        throw new Error("Error Loading Review")
    }

    const {productId, reviewId} = params;
    if(parseInt(reviewId) > 1000){
        return notFound()
    }
    return <h1>Review {reviewId} for Product {productId}</h1>
}