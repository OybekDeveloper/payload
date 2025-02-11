import React from 'react'
import './styles.css'
import Image from 'next/image'
import Link from 'next/link'

interface CategoryType {
  id: number
  name: string
  desc: string
  url: string
}
export default async function HomePage() {
  const categories = await fetch('http://localhost:3000/api/categories')
  const { docs: categoriesData } = await categories.json()
  console.log(categoriesData)

  return (
    <div className="home">
      <h4 className="">Categories</h4>
      <div className="content">
        {categoriesData?.map((ct: CategoryType, idx: number) => (
          <Link href={`/${ct?.id}`} key={idx} className="">
            <Image
              style={{
                maxWidth: '300px',
                maxHeight: '300px',
                width: '100%',
                height: '100%',
                objectFit: 'cover',
              }}
              width={100}
              alt="Photo"
              height={100}
              src={`http://localhost:3000${ct?.url}`}
            />
            <h6>{ct?.name}</h6>
            <p>{ct?.desc}</p>
          </Link>
        ))}
      </div>
    </div>
  )
}
