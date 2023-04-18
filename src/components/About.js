import React,{useState} from 'react'

export default function About() {
    const [myStyle,setMyStyle] = useState( {
        color:'black',
        backgroundColor: 'white',
        borderRadius: '20px'
    
    })
  
  return (
    <div className='container ' style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion " id="accordionExample">

    
            <div className="accordion-item" style={myStyle} >
                <h2 className="accordion-header" id="headingOne">
                <button className="accordion-button" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                   <b>Analyse Your Text</b> 
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>Textutils gives you a way to analyze your text quickly and efficently.It let you to count word, count charecters or reading time required.It has both light and dark mode for better compartable.</strong>
                </div>
                </div>
            </div>
            
            <div className="accordion-item " style={myStyle} >
                <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                <b>Free To Use</b> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>TextUtils is a free charecter counter tool that provided instant charecter count and word count statics for a given text. TextUtils reports the number of words and charecter. Thus it is suitable for writing text with word / charecter limit</strong>
                </div>
                </div>
            </div>
            <div className="accordion-item" style={myStyle} >
                <h2 className="accordion-header" id="headingThree">
                <button className="accordion-button collapsed" style={myStyle} type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                 <b>Any Browser Compatible</b>
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                <div className="accordion-body">
                    <strong>This word counter software works in any web browser such as Chrome , Firefox ,Internet Explorer ,Safari,Opera etc.</strong>
                </div>
                </div>
            </div>
        </div>
        <div className="container my-3">
        {/* <button onClick={toggleStyle} type="button" className="btn btn-primary">{btnText}</button> */}
        </div>
    </div>
  )
}
