import { useCallback, useEffect, useRef, useState } from "react"

 const PasswordGen = () => {
    const [length,setLength]=useState(3)
    const[password,setPassword]=useState('')
    const[isCharInclude,setIsCharInclude]=useState(false)
    const[isNumInclude,setIsNumInclude]=useState(false)
    const [isCopied,setIsCopied]=useState(false)
    console.log(isCharInclude,isNumInclude);
  
 useEffect(()=>{
    passwordGen()
    setIsCopied(false)
 },[length,isCharInclude,isNumInclude])


    const passwordGen=useCallback(()=>{
        let pass=""
        let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
        if(isNumInclude) str +="0123456789"
        if(isCharInclude) str +="!@#$%^&*()+="
     
        for(let i=1;i<=length;i++){
         const randomIndex =Math.floor(Math.random() *str.length) // str.length is limit to produce after * 
         pass +=str.charAt(randomIndex)
         
        }
        console.log(pass);
        setPassword(pass)
    },[length,isCharInclude,isNumInclude]) //ONLY RECREATE A FUCTION ANYONE OF THIS DEPENDECY GETS CHANGED OTHERWISE IT RETURNS OLD EXECUTED VALUE FROM CACHE


 const passwordRef=useRef() //  TO HILIGHT WHILE COPYING
const copying=()=>{
    setIsCopied((true))
    window.navigator.clipboard.writeText(password)
    passwordRef.current.select()
    console.log(passwordRef.current.value)
   
}



  return (
    <div className="">
        <h1 className="font-bold text-center p-3 italic text-2xl">Password Generator</h1>
        <div className=" border p-10">
           <input type="text" readOnly value={password} ref={passwordRef}/> <button onClick={copying} className="bg-black text-white px-2 py-1 cursor-pointer">Copy</button> {isCopied &&(<small className="text-green-600">Copied</small>)} <br />
           <label htmlFor="length">Length</label> <input type="range" name="" id="length" max={20} value={length} onChange={(e)=>setLength(e.target.value)}/>{length} <br />
           <label className="mr-1" htmlFor="char">Characters</label><input className="" id="char" type="checkbox" onChange={()=>setIsCharInclude((prev)=> !prev)} /> <br />
           <label className="mr-1" htmlFor="num">Numbers</label><input className="" id="num" type="checkbox" onChange={()=>setIsNumInclude((prev)=> !prev)} />
        </div>

    </div>
  )
}
 
export default PasswordGen