import React from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link';
const data={
  "chicken":[
      {
          item_name : "biryani",
          item_half_price:200,
          item_full_price:400
      },
      {
          item_name: "handi chicken",
          item_half_price:100,
          item_full_price:250   
      }
  ],
  "paneer":[
    {
      item_name:'paneer masala',
      item_half_price:150,
      item_full_price:200
    }
  ]
}
const slug1 = () => {
    const json = [
        { name: "roshan", age: 40, id: 1 },
        { name: "karan", age: 60, id: 2 }
    ];
    const router = useRouter({});
       return (
        <div>
          
          <ul>
            {json.map((sl)=>{
             <li key={sl.id}><Link href={`/blog/${sl.name}/${sl.age}`}>login</Link></li>
            })}
          </ul>
            <h2>this is home page</h2>
           <ul> {
            data.chicken.map((name,index)=>{
              return <li key={index}>item name -{name.item_name} item half price- {name.item_half_price} item full price -{name.item_full_price} rs</li>
            })
            }
            </ul>
            <Link href={`/blog/${json[0].age}/${json[0].id}`}>slug 1page</Link>
            <Link href={`/blog/${json[1].age}/${json[1].id}`}>slug  2 page</Link>
            <Link href={`/blog/${json[1].name}/${json[1].id}`}>slug 3 page3</Link>
            <ul>
              {data.paneer.map((paneer,index)=>{
                return <li key={index}><Link href={`/blog${paneer.item_name}/${paneer.item_full_price}/${paneer.item_half_price}`}>item-name{paneer.item_name}half{paneer.item_half_price}price-{paneer.item_full_price}</Link></li>
              })}
            </ul>
            <ul>
              {data.paneer.map((paneer,index)=>{
                return <li key={index}><Link href={`/blog${paneer.item_name}/${paneer.item_full_price}/${paneer.item_half_price}`}>item-name{paneer.item_name}half{paneer.item_half_price}price-{paneer.item_full_price}</Link></li>
              })}
            </ul>
        </div>
    )
}

export default slug1
