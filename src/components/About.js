import React  from 'react'

export default function About(props) {

//  const [Mystyle,newstyle]=useState({
//     color:'black',
//     backgroundColor:'white',
//     height:'70px'
//  });

 
let Mystyle={
  color:props.mode==='dark'?'white':"#0d7083",
  backgroundColor:props.mode==='dark'?'#0d7083':"white",
  border:"1px solid",
  borderColor:props.mode==='dark'?'white':"#0d7083"

}


  return (
   <>
 
<div className="accordion my-2" id="accordionExample" style={Mystyle}>
<h1 className ="container my-2">About Us</h1>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={Mystyle}>
      <strong>  Analyse Your Text </strong> 
      </button>
    </h2>
    <div id="collapseOne"className="accordion-collapse collapse show" data-bs-parent="#accordionExample" style={Mystyle}>
      <div className="accordion-body">
      Textutils give you a way to analyse your text quicky and efficiently.Be it word,character count  or convert text into UpperCase or LowerCase or Clear text or Copy Text.
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={Mystyle}>
     <strong> Free to use </strong> 
      </button>
    </h2>
    <div id="collapseTwo"className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={Mystyle}>
      <div className="accordion-body">
       Textutils is a free character count tools that provides instant character count and word count statistics for a given text
       .Textutils reports the number of words and characters.thus  it is siutable for writing text with word/character limit. 
      </div>
    </div>
  </div>
  <div className="accordion-item">
    <h2 className="accordion-header">
      <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={Mystyle}>
       <strong>  Browser Compatible</strong>
      </button>
    </h2>
    <div id="collapseThree"className="accordion-collapse collapse" data-bs-parent="#accordionExample" style={Mystyle}>
      <div className="accordion-body">
        This word counter software works in any web browser such as chrome,firefox,Internet Explore,Safari,Opera,It suits to count characters in facebook,blog,excel document,pdf document,essays,etc.
      </div>
    </div>
  </div>
</div>

   </>
  )
}
