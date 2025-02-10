import Link from "next/link";

export default function F1() {
    return (
        <div>
            <h1>F1 Page</h1>
            <div>
                <Link href={"/f1/f2"}>F2</Link>
                <Link href={"/f3"}>F3</Link>
                <Link href={"/f5"}>F5</Link>
            </div>
        </div>
    )
}