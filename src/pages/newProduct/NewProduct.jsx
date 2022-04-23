import { useState } from "react";
import "./newProduct.css";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import app from "../../firebase";
import { useDispatch } from "react-redux";
import { addProduct } from "../../redux/apiCalls";

export default function NewProduct() {
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);
  const [description, setDescription] = useState("");
  const [categories, setCategories] = useState([]);
  const [size, setSize] = useState([]);
  const [color, setColor] = useState([]);
  const [stock, setStock] = useState(true);
  const [file, setFile] = useState(null);
  const dispatch = useDispatch();

  const fileHandler = (event) => {
    setFile(event.target.files[0]);
  };

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
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const product = {
            title,
            price,
            desc: description,
            size,
            color,
            inStock: stock,
            img: downloadURL,
            categories: categories,
          };
          addProduct(product, dispatch);
        });
      }
    );
  };

  return (
    <div className="newProduct">
      <h1 className="addProductTitle">New Product</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Image</label>
          <input type="file" id="file" onChange={fileHandler} />
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
            <option value="true">true</option>
            <option value="false">false</option>
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
