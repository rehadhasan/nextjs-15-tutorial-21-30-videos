export default async function MyBlog() {
    await new Promise(resolve => {
        setTimeout(()=>{
            resolve("Intentional Delay")
        }, 2000)
    });
    return <h1>My Blog</h1>
}