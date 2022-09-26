import { search } from "../../features/countries/countriesSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/esm/Button";

const Search = () => {
  const dispatch = useDispatch();

  const searchValue = useSelector((state) => state.countries.search);

  const searchCountries = (e) => {
    dispatch(search(e.target.value));
  };

  const clearSearch = () => {
    dispatch(search(""));
  };

  return (
    <InputGroup className="mb-3" style={{ width: "70%" }}>
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
      <Form.Control
        value={searchValue}
        onChange={searchCountries}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
      <Button onClick={clearSearch}>Clear</Button>
    </InputGroup>
  );
};

export default Search;
