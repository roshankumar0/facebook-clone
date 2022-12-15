// import Image from "next/image"
// function Page({ posts }) {
//     return <div>
//         <table>
//             <thead>
//                 <tr>
//                     <th>AlbumId</th>
//                     <th>Id</th>
//                     <th>Title</th>
//                     <th>Url</th>
//                     <th>ThumbnailUrl</th>
//                 </tr>
//             </thead>
//             <tbody>
//                 {
//                     posts.map((data2) => {
//                         return (
//                             <tr key={data2.id}>
//                                 <td>{data2.albumId}</td>
//                                 <td>{data2.id}</td>
//                                 <td>{data2.title}</td>
//                                 <td>{data2.url}</td>
//                                 <td>{data2.thumbnailUrl}</td>
//                             </tr>
//                         )

//                     })
//                 }

//             </tbody>


//         </table>
//         {/* <Image src='https://cdn.shopify.com/s/files/1/0272/4770/6214/articles/when-do-puppies-start-walking.jpg?v=1593020034' height="250" width="250" alt="random-photos"></Image>
//         <h2>data {posts.slice(0, 5).map((da) => {
//             return <div key={da.id}>
//                 <li>{da.title}</li>
//             </div>
//         })} </h2> */}
//     </div>
// }

// export async function getStaticProps() {
//     const res = await fetch('https://jsonplaceholder.typicode.com/photos')
//     const posts = await res.json();
//     console.log(posts);

//     return {
//         props: {
//             posts,
//         },
//         // Next.js will attempt to re-generate the page:
//         // - When a request comes in
//         // - At most once every 10 seconds
//         revalidate: 10, // In seconds
//     }
// }

// export default Page