export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

function getRandomInt(count: number) {
  return Math.floor(Math.random() * count);
}

export default function ProductDetailsLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const random = getRandomInt(2);
  if(random === 1){
    throw new Error("Error Loading Product")
  }

  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
