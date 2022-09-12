import { search } from "../../features/countries/countriesSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";
import Button from "react-bootstrap/esm/Button";

const Search = () => {
  const dispatch = useDispatch();

  const searchCountries = (e) => {
    dispatch(search(e.target.value));
  };

  const clearSearch = (e) => {
    dispatch(search(""));
    e.searchInput.value = "";
  };

  return (
    <InputGroup className="mb-3" style={{ width: "70%" }}>
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
      <Form.Control
        name="searchInput"
        onChange={searchCountries}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
      <Button onClick={clearSearch}>Clear</Button>
    </InputGroup>
  );
};

export default Search;
