import React, { useState } from "react";
import Searchbar from "./Components/Searchbar/Searchbar";
import axios from "axios";
import key from "./helpers/Pixaby/pixaby";
import ImageGallery from "./Components/ImageGallery/ImageGallery";
import Button from "./Components/Button/Button";
import LoaderApp from "./helpers/Loader/Loader";

const App = () => {
  const [query, setQuery] = useState("");
  const [pics, setPics] = useState([]);
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [search, setSearch] = useState("");

  const updateParams = () => {
    if (pics.length) {
      setPics((pics.length = 0));
    }
    setCurrentPage(1);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    updateParams();
    if (query) {
      getPics(currentPage);
    }
    setQuery("");
  };

  const inputChange = (e) => {
    if (!e.target.value) {
      setPics([]);
    }
    setCurrentPage(1);
    setQuery(e.target.value);
    setSearch(e.target.value);
  };

  const getPics = async (page) => {
    setLoader(true);
    try {
      const response = await axios.get(
        `https://pixabay.com/api/?q=${search}&page=${page}&key=${key}&image_type=photo&orientation=horizontal&per_page=12`
      );
      setPics([...pics, ...response.data.hits]);
    } catch (error) {
      setError(error);
    } finally {
      setLoader(false);
    }
  };

  const changeCurrentPage = () => {
    const newPage = currentPage + 1;
    setCurrentPage(newPage);
    getPics(newPage);
  };

  return (
    <div className="App">
      <Searchbar onSubmit={onSubmit} query={query} inputChange={inputChange} />
      
      {error && <p>Something went wrong! :( </p>}
      {!!pics.length && !error && <ImageGallery pics={pics} />}
      {loader && <LoaderApp />}
      {!!pics.length && !error && <Button onClick={changeCurrentPage} />}
    </div>
  );
};

export default App;
