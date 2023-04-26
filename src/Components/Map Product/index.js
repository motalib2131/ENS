import axios from "axios";
import React, { useEffect, useState } from "react";
import "./MapProduct.css";
import locations from "./products";
import { HiOutlineX } from "react-icons/hi";

function MapProduct() {
    const [popup, setpopup] = useState(false);
    const [seletedProduct, setseletedProduct] = useState();
    const [checked, setchecked] = useState()
    const [country, setcountry] = useState([])
    const [cntrystate, setcntrystate] = useState([])
    const [popupstates, setpopupstates] = useState(false);
    const [selectedCountry, setselectedCountry] = useState('');

    const productSelect = (event) => {
        setseletedProduct(event.target.value);
        console.log();
    };

    const Input_clear = () => {
        setseletedProduct(" ")
        setchecked(" ")
    };

    const input_check = (event) => {
        setchecked(event.target.value);
    }

    function handlecountry() {
        axios("https://api.webroot.net.in/countries.php").then(response => { setcountry(response.data) })
    }
    useEffect(() => {
        handlecountry();
    }, [])

    function handlestate(event) {
        let c = event.target.value;
        axios.get("https://api.webroot.net.in/states.php?isoname=" + c).then(response => {
            setcntrystate(response.data);
        });
        setselectedCountry(event.target.options[event.target.selectedIndex].text);
        setpopupstates(true);
    }

    function handlecross() {
        setpopupstates(false)
    }



    return (
        <div>
            <h2 className="map_top_heading">
                Interactive Map Of <strong>Current Live </strong>
                <span className="map_top_heading_span">Products</span>
            </h2>
            <div className="map_product_content">
                <div className="checkbox_container">
                    <h2 className="checkbox_heading">Pega Module & Live Tools</h2>

                    <div className="filter_heading">
                        <div>Select a Product</div>
                        <button className="filter_btn" onClick={Input_clear}>
                            Clear
                        </button>
                    </div>
                    <div className="input_type_product_container">
                        <select className='input_type_product' onChange={handlestate}>
                            <option>Select a Region</option>
                            {country.map((item, key) =>
                                <>
                                    <option value={item.isoname} id={key}>{item.cname}</option>
                                </>
                            )}
                        </select>


                        <div
                            className={popup ? "checkbox_popup" : "checkbox_content"}
                            onChange={productSelect}
                        >
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr1"
                                    value="Product 1"
                                    onClick={input_check}
                                    checked={checked === 'Product 1'}
                                />
                                <label id="p1">Product 1</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr2"
                                    value="Product 2"
                                    onClick={input_check}
                                    checked={checked === 'Product 2'}
                                />
                                <label>Product 2</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr3"
                                    value="Product 3"
                                    onClick={input_check}
                                    checked={checked === 'Product 3'}
                                />
                                <label>Product 3</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr4"
                                    value="Product 4"
                                    onClick={input_check}
                                    checked={checked === 'Product 4'}
                                />
                                <label>Product 4</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr5"
                                    value="Product 5"
                                    onClick={input_check}
                                    checked={checked === 'Product 5'}
                                />
                                <label>Product 5</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr6"
                                    value="Product 6"
                                    onClick={input_check}
                                    checked={checked === 'Product 6'}
                                />
                                <label>Product 6</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr7"
                                    value="Product 7"
                                    onClick={input_check}
                                    checked={checked === 'Product 7'}
                                />
                                <label>Product 7</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr8"
                                    value="Product 8"
                                    onClick={input_check}
                                    checked={checked === 'Product 8'}
                                />
                                <label>Product 8</label>
                            </div>
                            <div className="checkbox_inputdata">
                                <input
                                    type="checkbox"
                                    className="checkbox_input"
                                    id="pr9"
                                    value="Product 9"
                                    onClick={input_check}
                                    checked={checked === 'Product 9'}
                                />
                                <label>Product 9</label>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="map_container" id="map1">
                    <h2 className="map_heading">Pega Module & Live Tools</h2>

                    {locations.map((item, index) => {
                        if (
                            seletedProduct === " " ||
                            seletedProduct === null ||
                            seletedProduct === undefined
                        ) {
                            return <div>{item.product0}</div>;
                        } else if (seletedProduct === "Product 1") {
                            return <div>{item.product1}</div>;
                        } else if (seletedProduct === "Product 2") {
                            return <div>{item.product2}</div>;
                        } else if (seletedProduct === "Product 3") {
                            return <div>{item.product3}</div>;
                        } else if (seletedProduct === "Product 4") {
                            return <div>{item.product4}</div>;
                        } else if (seletedProduct === "Product 5") {
                            return <div>{item.product5}</div>;
                        } else if (seletedProduct === "Product 6") {
                            return <div>{item.product6}</div>;
                        } else if (seletedProduct === "Product 7") {
                            return <div>{item.product7}</div>;
                        } else if (seletedProduct === "Product 8") {
                            return <div>{item.product8}</div>;
                        } else if (seletedProduct === "Product 9") {
                            return <div>{item.product9}</div>;
                        }
                    })}

                    <div className={popupstates ? 'statepopup' : 'hidepopup'}>
                        <h3 className="state_popup_heading">CHOOSE YOUR REGION</h3>
                        <h3 className="cntry_popup_heading">{selectedCountry}</h3>
                        {cntrystate.length != 0 && <ul className="state_ul_list">
                            {cntrystate.map((statedata, key) =>
                                <>
                                    <li id={key} className="state_list">{statedata.sname}</li>
                                </>
                            )}
                            <HiOutlineX className="cross_icons" onClick={handlecross} />
                        </ul>}

                    </div>
                </div>

            </div>
        </div>
    );
}

export default MapProduct;

