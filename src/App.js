import { useEffect, useState } from "react";
import axios from "axios";
import { BrowserRouter, Route, Switch } from "react-router-dom";

// Components
import Images from "./components/Images";
import Pagination from "./components/Pagination";
import Login from "./components/Login";

//Styles
import "./App.css";

function App() {
  const [token, settoken] = useState(null);

  const [images, setImages] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setcurrentPage] = useState(1);
  const [imagesPerPage] = useState(5);

  const fetchImages = async () => {
    setLoading(true);
    try {
      const resp = await axios.get(
        "https://jsonplaceholder.typicode.com/photos"
      );
      setImages(resp.data);
      setLoading(false);
    } catch (err) {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);
  const pageChangeHandle = (curr) => {
    setcurrentPage((prev) => curr.selected + 1);
  };
  const indexOfLastImage = currentPage * imagesPerPage;
  const indexOfFirstImage = indexOfLastImage - imagesPerPage;
  const currentImages = images.slice(indexOfFirstImage, indexOfLastImage);
  const pagesNumber = Math.ceil(images.length / imagesPerPage);

  if (!token) {
    return <Login settoken={settoken} />;
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/">
            <button
              onClick={() => {
                localStorage.removeItem("user");
                settoken(null);
              }}
              className="logout"
            >
              Sign out
            </button>
            <h1>Image Viewer App</h1>
            <Images loading={loading} images={currentImages} />
            <Pagination
              pagesNumber={pagesNumber}
              pageRange={2}
              paginationRange={1}
              pageChangeHandle={pageChangeHandle}
            />
          </Route>
          <Route>
            <h1>404 Not Found</h1>
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
