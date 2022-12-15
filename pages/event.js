// import React, {  useState } from 'react'

// export default function event(props) {
//     const [color, Setcolor] = useState(true)
//     const [user, setUser] = useState("");
//     const [pass, setPass] = useState('');
//     const [UserErorr, setUserError] = useState(false)
//     const subhandller = (e) => {
//         e.preventDefault()
//         alert("succeessful")

//     }
//     const email = (e) => {
//         console.log(e.target.value.length);
//         let name = e.target.value;
//         if (name.length < 6) {
//             setUserError(true)
//         }
//         else (
//             setUserError(false)
//         )
//     }
//     const paschange = (e) => {
//         let pass = e.target.value;
//         if (pass.length < 5) {
//             setUserError(true)
//         }
//         else {
//             setUserError(false)
//         }
//     }
//     // const [text, setText] = useState("set text here now")
//     // const onclick = () => {
//     //     let newText = text.toUpperCase();
//     //     setText(newText)
//     // }
//     // const onchange = (e) => {
//     //     setText(e.target.value)
//     // }
//     const [colors, setColor] = useState(true)
//     const [text, setText] = useState("")
//     const textArea = (value) => {
//         setText(value.target.value)
//     }
//     const uppercase = () => {
//         let newtext = text.toUpperCase();
//         setText(newtext)
//     }
//     const [container, setContainer] = useState({
//         color: "red",
//         background: "black"
//     })
//     const [set, setDark] = useState("enable dark mode")
//     const enable = () => {
//         if (container.color === "red") {
//             setContainer({
//                 color: "pink",
//                 background: "blue"
//             })
//             setDark("enable light mode")
//             document.body.style.backgroundColor = "blue"
//         }
//         else {
//             setContainer({
//                 background: "black",
//                 color: "red"
//             })
//             setDark('enable dark mode')
//             document.body.style.background = ""
//         }
//     }
//     const styles = {
//         color: "red",
//         background: "black",
//         fontSize: "30px",
//         display: "block",
//         width: "100%"
//     }

//     return (
//         <div>
//             <div className="alert alert-warning alert-dismissible fade show" role="alert">
//                 <p><strong>{props.alert.type}</strong> </p>: {props.alert.message}
//                 <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
//             </div>
//             <h4 style={{ color: (color) ? "purple" : "blue" }}>welcome to NextJs</h4>
//             <div style={{ background: (color) ? "red" : 'green', height: "200px", width: "200px", borderRadius: (color) ? "50%" : 0 }}></div>
//             <button style={{ width: "200px", height: "30px", border: "None", marginTop: "20px", background: (color) ? "blue" : "black", color: (color) ? "red" : "white" }} onClick={() => Setcolor(!color)}>round</button>
//             <form onSubmit={subhandller}>
//                 <input type="text" placeholder='email' onChange={email} />
//                 {UserErorr ? <span>not valid user</span> : ""}
//                 <input type="password" name="" id="" onChange={paschange} />
//                 {UserErorr ? <span>not valid password</span> : ""}
//                 <button type="submit">submit</button>
//                 <span></span>
//             </form>
//             {/* <textarea name="" id="" cols="30" rows="10" onChange={onchange} value={text}></textarea>
//             <button onClick={onclick}>UpperCase</button> */}
//             <h1>{text}</h1>
//             <h4 style={{ background: (colors) ? "green" : "" }}>{text.split(" ").length} words and  {text.length}</h4>
//             <textarea name="" id="" cols="30" rows="10" onChange={textArea} value={text}></textarea>
//             <button onClick={uppercase} style={{ background: "red", color: "white", padding: "30px" }}>change</button>
//             <div className="container" style={container}>
//                 <h2>change state</h2>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Reiciendis, sed!</p>
//             </div>
//             <textarea name="" id="" cols="30" rows="10">{props.heading}</textarea>
//             <button style={styles} onClick={enable}>{set}</button>
//         </div >
//     )
// }
