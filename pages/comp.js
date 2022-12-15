// const items = {
//     "veg": [
//         {
//             "name": "Paneer Masala"
//         },
//         {
//             "name": "Daal Fry"
//         },
//         {
//             "name": "Kala Chana"
//         },
//         {
//             "name": "Kadhai Paneer"
//         },
//         {
//             "name": "Aalu matar"
//         }
//     ],
//     "non_veg": [],
//     "icecream": []
// }

// const items2 = {
//     "veg": {
//         "paneer": [
//             {
//                 "name": "Paneer Masala",
//                 "half": 100,
//                 "full": 180
//             },
//             {
//                 "name": "Kadhai Paneer",
//                 "full": 200
//             },
//         ],
//         "daal": [

//         ],
//         "sabji": []
//     },
//     "non_veg": {
//         "chicken": [],
//         "mutton": [],
//         "egg": []
//     },
//     "pizza": {
//         "veg": [],
//         "non_veg": [] 
//     }
// }



// <table>
// <tbody>
//     {
//         items2.veg.paneer.map((item) => {
//             return (
//                     <tr>
//                         <td>
//                             <img src={item.image} />
//                         </td>
//                         <td>
//                             {item.name}
//                         </td>
//                         <td>
//                             {item.half || 'NA'}
//                         </td>
//                         <td>
//                             {item.full}
//                         </td>
//                     </tr>
//                 )
//         })
//     }
// </tbody>
// </table>

// <table>
//     <tbody>
//         {
//             items2.veg.daal.map((item) => {
//                 return (
//                         <tr>
//                             <td>
//                                 <img src={item.image} />
//                             </td>
//                             <td>
//                                 {item.name}
//                             </td>
//                             <td>
//                                 {item.half || 'NA'}
//                             </td>
//                             <td>
//                                 {item.full}
//                             </td>
//                         </tr>
//                     )
//             })
//         }
//     </tbody>
// </table>



// function ItemCard(prps) {
//     return (

//         <table>
//             <thead>

//             </thead>
//             <tbody>
//                 {
//                     prps.data123.map((item) => {
//                         return (
//                                 <tr>
//                                     <td>
//                                         <img src={item.image} />
//                                     </td>
//                                     <td>
//                                         {item.name}
//                                     </td>
//                                     <td>
//                                         {item.half || 'NA'}
//                                     </td>
//                                     <td>
//                                         {item.full}
//                                     </td>
//                                 </tr>
//                             )
//                     })
//                 }
//             </tbody>
//         </table>
//     )
// }

// // <ItemCard data123={items2.veg.paneer} />
// // <ItemCard data123={items2.pizza} />
// // <ItemCard data123={items2.veg.daal} />