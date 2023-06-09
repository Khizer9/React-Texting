import React from 'react'

export default function About(props) {

    let styles = {
        color: props.mode === 'dark' ? 'white' : 'black',
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
    }



  return (
    <div className='container' style={styles}>
        <h1 className='my-2'>About Us</h1>
        <div className="accordion" id="accordionExample">
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button" type="button" style={styles} data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                  <strong>Analyze your text </strong>  
                </button>
                </h2>
                <div id="collapseOne" className="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styles}>
                At TextingText, we understand the transformative potential of language. Our innovative text manipulation website empowers users to effortlessly manipulate, enhance, and transform their written content with ease.
                Harnessing the latest advancements in natural language processing and AI technology, TextingText offers an array of powerful features to elevate your text to new heights. Whether you're a writer, student, marketer, or simply someone seeking to express themselves creatively, TextingText has you covered.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={styles} data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                   <strong> Free to use </strong> 
                </button>
                </h2>
                <div id="collapseTwo" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styles}>
                TextingText is your go-to destination for free, powerful text manipulation tools. Unleash your creativity, enhance your writing, and explore the endless possibilities of language—all without breaking the bank.
                With TextingText, you have the freedom to transform your text in a variety of ways. Rewrite, rephrase, and restructure sentences effortlessly with our intuitive paraphrasing tool. Say goodbye to repetitive wording and hello to fresh, engaging content that captivates your readers.
                </div>
                </div>
            </div>
            <div className="accordion-item">
                <h2 className="accordion-header">
                <button className="accordion-button collapsed" type="button" style={styles} data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                   <strong> Browser compatible </strong> 
                </button>
                </h2>
                <div id="collapseThree" className="accordion-collapse collapse" data-bs-parent="#accordionExample">
                <div className="accordion-body" style={styles}>
                TextingText is a versatile text manipulation website designed to be compatible with a wide range of browsers. We understand that accessibility and convenience are paramount when it comes to harnessing the power of words. That's why we've ensured TextingText works seamlessly across popular browsers, including Chrome, Firefox, Safari, and Edge.
                No matter which browser you prefer, TextingText is ready to enhance your text manipulation experience. Whether you're using a desktop, laptop, or mobile device, our website adapts to your screen size and resolution, providing a responsive and user-friendly interface.
                With TextingText's browser compatibility, you can confidently access our robust suite of text manipulation tools from any device and browser combination. Rewrite, rephrase, and refine your content with ease, knowing that our website will work seamlessly with your preferred browsing environment.
                </div>
                </div>
            </div>
        </div>

    </div>
  )
}
