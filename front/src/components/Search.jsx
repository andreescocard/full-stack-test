import { Grid } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Input } from '@ui5/webcomponents-react';
import { useDispatch, useSelector } from "react-redux";
import { fetchMovies, clearMovies } from '../redux/slice/movie';

import { useState, useRef } from 'react';

const Search = () => {

const dispatch = useDispatch();

const [movie, setMovie] = useState('');

const handleChange = (event) => {
setMovie(event.target.value);
};

const clearInput = (event) => {
setMovie("");
};

const handleKeyUp = (event) => {
    console.log(input.value)
    setMovie(input.value);
if (event.key === 'Enter') {
    submitButton.click()
}
}

const submitButtonRef = useRef();
const submitButton = submitButtonRef.current;

const inputRef = useRef();
const input = inputRef.current;

return (
<Grid position="Center" className="gridSearch">

    <div data-layout-indent="XL1 L1 M1 S0" data-layout-span="XL12 L12 M12 S12">
        <h3 className="m-0 text-center">Search</h3>
    </div>

    <div data-layout-indent="XL1 L1 M1 S0" data-layout-span="XL12 L12 M12 S12">
        <p className="text-center">Search below your desired movie</p>
    </div>

    <div data-layout-span="XL6 L6 M6 S12">
        <Input 
        className="w-100" 
        id="movie" 
        name="movie" 
        onKeyUp={handleKeyUp} 
        onChange={handleChange} 
        ref={inputRef}
        value={movie}
        onInput={function noRefCheck(){}} 
        onSuggestionItemPreview={function noRefCheck(){}}
        onSuggestionItemSelect={function noRefCheck(){}} />
    </div>

    <div data-layout-span="XL3 L3 M3 S6" className="m-auto">
        <Button 
            id="search" 
            design="Emphasized" 
            icon="search" 
            iconEnd 
            onClick={()=> dispatch(fetchMovies(movie))}
            style={{}}
            ref={submitButtonRef}
        >
            Search
        </Button>
    </div>

    <div data-layout-span="XL3 L3 M3 S6" className="m-auto">
        <Button design="Emphasized" icon="refresh" iconEnd onClick={()=> dispatch(clearMovies()) && clearInput()}
            style={{}}
            >
            Reset
        </Button>
    </div>
</Grid>
)
}

export default Search