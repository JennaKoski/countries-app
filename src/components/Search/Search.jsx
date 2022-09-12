import { search } from "../../features/countries/countriesSlice";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import { useDispatch } from "react-redux";

const Search = () => {
  const dispatch = useDispatch();

  const searchCountries = (e) => {
    dispatch(search(e.target.value));
  };

  return (
    <InputGroup className="mb-3" style={{ width: "70%" }}>
      <InputGroup.Text id="inputGroup-sizing-default">Search</InputGroup.Text>
      <Form.Control
        onChange={searchCountries}
        aria-label="Default"
        aria-describedby="inputGroup-sizing-default"
      />
    </InputGroup>
  );
};

export default Search;
