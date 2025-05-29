// import { useState } from "react";

// interface Props{
//     items:string[];
//     heading:string;
//     onSelectItem:(item:string) => void;
// }
// function ListGroup({items,heading, onSelectItem}:Props) {
//   //Hook
//   const [selectedIndex, setSelectedIndex] = useState(-1);

//   return (
//     <>
//       <h1>{heading}</h1>
//       {items.length === 0 && <p>No item is found.</p>}
//       <ul className="list-group">
//         {items.map((items, index) => (
//           <li
//             className={
//               selectedIndex === index
//                 ? "list-group-item active"
//                 : "list-group-item "
//             }
//             key={items}
//             onClick={() => {
//               setSelectedIndex(index);
//               onSelectItem(items);
//             }}
//           >
//             {items}
//           </li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default ListGroup;


// import ListGroup from "./components/ListGroup";

// function App(){
//   let items = ["New York", "Addis Ababa", "Nairobi", "Abuja", "Cairo", "Paris"];
//   const handleSelectItem = (item:string) =>{
//     console.log(item);
//   }

//   return <div><ListGroup items={items} heading="Cities" onSelectItem={handleSelectItem}></ListGroup></div>
// };

// export default App;