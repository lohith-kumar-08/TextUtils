import React,{useState} from 'react'

export default function TextForm(props) {

    
   

    const uppercase = () => {
        let upper=text.toUpperCase();
        setText(upper);
       props.showalert("success","Uppercase is Enabled")
       props.clearalert()
    }
    const lowercase = () => {
        let lower=text.toLowerCase();
        setText(lower)
       props.showalert("success","Lowercase is Enabled")
        props.clearalert()
    }
    const cleartext=()=>{
        setText("")
        props.showalert("success","Text is Cleared")
        props.clearalert()
    }
    const handleonchange=(event)=>{
        setText(event.target.value);
    }
    const copy=()=>{
      navigator.clipboard.writeText(text);
      props.showalert("success","copied the text");
      props.clearalert()
    }

    const [text,setText]=useState("");

  return (
    <>
   <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
   <h1>{props.header}</h1>
  <div className="mb-3">
    <textarea className="form-control" value={text} style={{backgroundColor:props.mode==='dark'?'#0d7083':'white',color:props.mode==='dark'?'white':'gray'}} onChange={handleonchange} id="myBox" rows="8" placeholder='enter the text' ></textarea>
    </div>
    <button className="btn btn-primary mx-1 my-1" onClick={uppercase} disabled={text.length===0}>Convert to uppercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={lowercase} disabled={text.length===0}>Convert to lowercase</button>
    <button className="btn btn-primary mx-1 my-1" onClick={cleartext} disabled={text.length===0}>ClearText</button>
    <button className="btn btn-primary mx-1 my-1" onClick={copy} disabled={text.length===0}>Copy Text</button>
   </div>
   <div className="container" style={{color:props.mode==='dark'?'white':'grey'}}>
    <h2 >Your Text Summary</h2>
    <p>{text.split(/\s/).filter((element)=>{return element.length!==0}).length} words and {text.length} letters</p>
   
    <p>{0.008*text.split(" ").filter((element)=>{return element.length!==0}).length} Minutes read</p>
    <h2>Preview</h2>
    <p>{text.length>0?text:"Nothing to preview"}</p>
   </div>
    
    </>
   
  )
}
