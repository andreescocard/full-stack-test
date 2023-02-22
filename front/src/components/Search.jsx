import { Grid } from '@ui5/webcomponents-react';
import { Button } from '@ui5/webcomponents-react';
import { Input } from '@ui5/webcomponents-react';

const Search = () => {
    return (
        <Grid position="Center" className="gridSearch">
             <div
                data-layout-indent="XL1 L1 M1 S0"
                data-layout-span="XL12 L12 M12 S12"
            >
                <h3 className="m-0 text-center">Search</h3>
            </div>
            <div
                data-layout-indent="XL1 L1 M1 S0"
                data-layout-span="XL12 L12 M12 S12"
            >
                <p className="text-center">Search below your desired movie</p>
            </div>
            <div
                data-layout-span="XL6 L6 M6 S12"
            >
                
            <Input
              className="w-100"
            onChange={function noRefCheck(){}}
            onInput={function noRefCheck(){}}
            onSuggestionItemPreview={function noRefCheck(){}}
            onSuggestionItemSelect={function noRefCheck(){}}
            />
            </div>
            <div
                data-layout-span="XL3 L3 M3 S6"
                className="m-auto"
            >
               <Button
                design="Emphasized"
                icon="search"
                iconEnd
                onClick={function noRefCheck(){}}
                style={{}}
                >
                Search
                </Button>
            </div>
            <div
                data-layout-span="XL3 L3 M3 S6"
                className="m-auto"
            >
                <Button
                design="Emphasized"
                icon="refresh"
                iconEnd
                onClick={function noRefCheck(){}}
                style={{}}
                >
                Reset
                </Button>
            </div>
            </Grid>
    )
  }
  
  export default Search
  