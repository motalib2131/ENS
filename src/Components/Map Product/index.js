import React, { useState } from 'react'
import './MapProduct.css'

function MapProduct() {

    const [popup, setpopup] = useState(false)
    const [seletedProduct, setseletedProduct] = useState('');
    const [product1, setproduct1] = useState(false);
    const [product2, setproduct2] = useState(false);
    const [product3, setproduct3] = useState(false);
    const [product4, setproduct4] = useState(false);
    const [product5, setproduct5] = useState('')
    const [product6, setproduct6] = useState('')
    const [product7, setproduct7] = useState('')
    const [product8, setproduct8] = useState('')
    const [InpClear, setInpClear] = useState('')

    const productSelect = (event) => {
        setseletedProduct(event.target.value);
        console.log();
    }

    const Input_clear = () => {
        setseletedProduct(" ")
    }


    return (
        <div>
            <h2 className='map_top_heading'>Interactive Map Of <strong >Current Live </strong><span className='map_top_heading_span'>Products</span> </h2>
            <div className='map_product_content'>
                <div className='checkbox_container'>
                    <h2 className='checkbox_heading'>Pega Module & Live Tools</h2>
                    <div className='filter_heading'>
                        <div>Select a Product</div>
                        <button className='filter_btn' onClick={Input_clear}>Clear</button>
                    </div>
                    <div className='input_type_product_container'>
                        <input type='text' placeholder='Filter' onClick={() => setpopup(!popup)} className='input_type_product' id='checkbox_data' value={seletedProduct} />
                        <div className={popup ? "checkbox_popup" : "checkbox_content"} onChange={productSelect}>
                            <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' value='Product 1' onClick={() => setproduct1(!product1)} />
                                <label id='p1' >Product 1</label>
                            </div>
                            <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' value='Product 2' onClick={() => setproduct2(!product2)} />
                                <label>Product 2</label>
                            </div>
                            <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' value='Product 3' onClick={() => setproduct3(!product3)} />
                                <label>Product 3</label>
                            </div>
                            <div className='checkbox_inputdata'>
                            <input type='checkbox' className='checkbox_input' value='Product 4' onClick={() => setproduct4(!product4)} />
                                <label>Product 4</label>
                            </div>
                            <div className='checkbox_inputdata'>
                                <input type='checkbox' className='checkbox_input' value='Product 5' />
                                <label>Product 5</label>
                            </div>
                            <div className='checkbox_inputdata'>
                                <input type='checkbox' className='checkbox_input' value='Product 6' />
                                <label>Product 6</label>
                            </div>
                            <div className='checkbox_inputdata'>
                                <input type='checkbox' className='checkbox_input' value='Product 7' />
                                <label>Product 7</label>
                            </div>
                            <div className='checkbox_inputdata'>
                                <input type='checkbox' className='checkbox_input' value='Product 8' />
                                <label>Product 8</label>
                            </div>
                            <div className='checkbox_inputdata'>
                                <input type='checkbox' className='checkbox_input' value='Product 9' />
                                <label>Product 9</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='map_container'>
                    <h2 className='map_heading'>Pega Module & Live Tools</h2>
                    {/* <img src='./Image/Rectangle-733.png' className='product_map' /> */}
                    {seletedProduct ? " " : <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d15249822.21961233!2d82.75252935!3d21.068622799999996!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1681720854265!5m2!1sen!2sin" height="510" className='product_map' ></iframe>}

                    {product1 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d224346.54004933927!2d77.04417327638082!3d28.527252738589127!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390cfd5b347eb62d%3A0x52c2b7494e204dce!2sNew%20Delhi%2C%20Delhi!5e0!3m2!1sen!2sin!4v1681725144076!5m2!1sen!2sin" height="510" className='product_map '></iframe> }

                    {product2 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1233681.948777628!2d80.0960105937682!3d26.50989528851381!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399c4770b127c46f%3A0x1778302a9fbe7b41!2sKanpur%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681729855017!5m2!1sen!2sin" height="510" className='product_map'></iframe> }

                    {product3 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d227822.6037160886!2d80.7777006491205!3d26.848596483705858!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399bfd991f32b16b%3A0x93ccba8909978be7!2sLucknow%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681726291468!5m2!1sen!2sin" height="510" className='product_map'></iframe> }

                    {product4 && <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d113579.79425693677!2d77.89761121861304!3d27.17615042448289!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39740d857c2f41d9%3A0x784aef38a9523b42!2sAgra%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1681729977197!5m2!1sen!2sin" height="510" className='product_map'></iframe> }
                </div>
            </div>
        </div>
    )
}

export default MapProduct