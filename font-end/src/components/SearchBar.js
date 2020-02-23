import React from 'react';
import { Form, Input, Button, FormGroup } from "reactstrap";

const SearchBar = ({handleSearch, handleChange}) => {
    return (
        <Form onSubmit={handleSearch}>
            <FormGroup>
            <div className="row justify-content-center">
                <div className="col-4">
                <Input
                    placeholder="Search for..."
                    onChange={handleChange}
                    name='search'
                    type="search"
                />
                </div>
                <div>
                <Button>
                    Search
                </Button>
                </div>
            </div>
            </FormGroup>
        </Form>
    )
}

export default SearchBar;