import { useState } from "react";
import "./newProduct.css";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [stock, setStock] = useState(false);
  const [file, setFile] = useState(null);

  const fileHandler = () => {};

  const titleHandler = (event) => {
    setTitle(event.target.value);
  };
  const priceHandler = (event) => {
    setPrice(event.target.value);
  };
  const sizeHandler = (event) => {
    setSize(event.target.value.split(","));
  };
  const categoryHandler = (event) => {
    setCategories(event.target.value.split(","));
  };
  const colorHandler = (event) => {
    setColor(event.target.value.split(","));
  };
  const descriptionHandler = (event) => {
    setDescription(event.target.value);
  };
  const stockHandler = (event) => {
    setStock(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
  };

  console.log(size, color, categories, title, description, stock, price);
  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" />
        </div>
        <div className="addProductItem">
          <label>Title</label>
          <input
            type="text"
            placeholder="Apple Airpods"
            onChange={titleHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Price</label>
          <input type="Number" placeholder="0.0$" onChange={priceHandler} />
        </div>

        <div className="addProductItem">
          <label>Categories</label>
          <input
            type="text"
            placeholder="jeans,skirts"
            onChange={categoryHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Size</label>
          <input type="text" placeholder="XL,X,M,S" onChange={sizeHandler} />
        </div>
        <div className="addProductItem">
          <label>Color</label>
          <input
            type="text"
            placeholder="Yellow,Black,White"
            onChange={colorHandler}
          />
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <select onChange={stockHandler}>
            <option value="true">True</option>
            <option value="false">False</option>
          </select>
        </div>
        <div className="addProductItem">
          <label>Description</label>
          <textarea
            id="description"
            onChange={descriptionHandler}
            required
            rows="5"
          ></textarea>
        </div>
        <button className="addProductButton" onClick={submitHandler}>
          Create
        </button>
      </form>
    </div>
  );
}
