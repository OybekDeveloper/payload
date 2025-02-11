import Link from 'next/link'
import Image from 'next/image'

export default async function Products({ params }: any) {
  const { id } = await params // URL'dan kelgan category ID
  const res = await fetch(`http://localhost:3000/api/products?where[category][equals]=${id}`)
  const { docs: productsData } = await res.json()
  console.log(productsData)

  return (
    <div>
      <h3>Products</h3>
      <div className="content">
        {productsData?.map((product: any, idx: number) => (
          <Link href={`/${product.id}`} key={idx} className="">
            <Image
              style={{
                maxWidth: '300px',
                maxHeight: '300px',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              width={100}
              height={100}
              alt="Photo"
              src={`http://localhost:3000${product?.url}`}
            />
            <h6>{product?.name}</h6>
            <p>{product?.description}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
