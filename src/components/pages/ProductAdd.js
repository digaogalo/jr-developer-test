import React, { useState } from "react";
import Book from "../../components/product-attributes/Book"
import DVD from "../../components/product-attributes/DVD"
import Furniture from "../../components/product-attributes/Furniture"
import { Link, useNavigate } from "react-router-dom"

export default function ProductAdd() {
    let notificationElement = {}
    const [formData, setFormData] = useState({
        sku: "",
        name: "",
        price: "",
        productType: "",
        size: "",
        height: "",
        width: "",
        length: "",
        weight: "",
        notification: "",
    })

    const [formDataResponse, setFormDataResponse] = useState ({})

    const navigate = useNavigate()

    function handleChange(e) {
       const {name, value, type, checked} = e.target
       setFormData((prevData) => {
        return {
            ...prevData,
            [name]: type === "checkbox" ? checked : value, 
        }
       }) 
    }

    function handleInvalid(e) {
        const {name, value, type, checked, customValidity} = e.target
        setFormData((prevData) => {
         return {
             ...prevData,
             [name]: type === "checkbox" ? checked : value, 
         }
        }) 
     }

     function handleOnInput(e) {
        const {name, value, type, checked, customValidity} = e.target
        setFormData((prevData) => {
         return {
             ...prevData,
             [name]: type === "checkbox" ? checked : value, 
             [customValidity]: ""
         }
        }) 
     }

     function hanndleSubmit(e) {
        e.preventDefault()

        const myHeaders = new Headers()
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded")

        const urlencoded = new URLSearchParams()
        urlencoded.append("sku", formData.sku)
        urlencoded.append("name", formData.name)
        urlencoded.append("price", formData.price)
        urlencoded.append("productType", formData.productType)
        urlencoded.append("height", formData.height)
        urlencoded.append("width", formData.width)
        urlencoded.append("lenght", formData.lenght)
        urlencoded.append("size", formData.size)
        urlencoded.append("weight", formData.weight)

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: urlencoded,
            redirect: "follow",
        }

        async function handleFormData() {
            try {
              const response = await fetch("https://scandiweb.ipublishinghouse.com/create", requestOptions);
              const result = await response.json();
            
              setFormDataResponse(result);
          
              if ("success_message" in result) {
                navigate("/");
              } else {
                console.log(notificationElement, "SKU already exists");
              }
            } catch (error) {
              console.log("error", error);
            }
          }
          
          handleFormData();
          
     }

     return(
        <div className="App">
            <div className="container">
               <div className="row">
                    <form 
                    action="#"
                    id="product-form"
                    method="post"
                    onSubmit={hanndleSubmit}
                    >
                    <div className="fixed-header">
                        <div className="row">
                            <div className="col-md-7">
                                <h1>
                                    <b>Porduct Add</b>
                                </h1>
                            </div>
                            <div className="col-md-2">
                                <button
                                id="save-button"
                                type="submit"
                                className="btn btn-sucess btn=sm"
                                >
                                Save
                                </button>
                            </div>
                            <div className="col-sm-3">
                                <Link
                                 to="/"
                                 id="cancel_button"
                                 className="btn btn-danger btn=sm"
                                >
                                 Cancel
                                </Link>
                            </div>
                        </div>
                        <hr />
                    </div>

                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="sku">SKU</label>
                            </div>
                            <div className="col-md-5">
                               <input 
                               type="text"
                               id="sku"
                               name="sku"
                               onChange={hanndleChange}
                               value={formData.sku}
                               className="form-control"
                               required
                               />
                            </div>
                            <div className="col-sm-6">
                                <div className="text-danger" role="alert">
                                    {formDataResponse.error_message}
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="name">Name</label>
                            </div>
                            <div className="col-md-5">
                               <input 
                               type="text"
                               id="name"
                               name="name"
                               onChange={handleChange}
                               value={formData.name}
                               className="form-control"
                               required
                               />
                            </div>
                            <div className="col-sm-6"></div>
                        </div>
                        <br />
                        <div className="row">
                            <div className="col-md-1">
                                <label htmlFor="sku">SKU</label>
                            </div>
                            <div className="col-md-5">
                               <input 
                               type="text"
                               id="sku"
                               name="sku"
                               onChange={hanndleSubmit}
                               value={formData.sku}
                               className="form-control"
                               required
                               />
                            </div>
                            <div className="col-sm-6">
                                <div className="text-danger" role="alert">
                                    {formDataResponse.error_message}
                                </div>
                            </div>
                        </div>

                    </form>
                </div> 
            </div>
        </div>
     )
}