import Link from "next/link";

type ArticleProps = {
    params: {
        articleId: string;
    },
    searchParams: {
        lang?: "en" | "fr" | "es"
    }
}

export default function NewsArticle({ params, searchParams }: ArticleProps) {
    const { articleId } = params;
    const {lang = "en"} = searchParams;
    return(
        <>
            <h1>News Article {articleId}</h1>
            <p>Reading in {lang}</p>

            <div>
                <Link href={`/articles/${articleId}?lang=en`}>English</Link>
                <Link href={`/articles/${articleId}?lang=fr`}>French</Link>
                <Link href={`/articles/${articleId}?lang=es`}>Spanish</Link>
            </div>
        </>
    )
}