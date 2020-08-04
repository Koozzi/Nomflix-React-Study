import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";
import { movieAPI, tvAPI } from "../../api";

class SearchContainer extends Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    handleSubmit = () => {
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        try {
            const {
                data: {results:movieResults}
            } = await movieAPI.search(searchTerm);
            const {
                data: {results:showResults}
            } = await tvAPI.search(searchTerm);
            
            this.setState({ loading: true });
        }
        catch {
            this.setState({ errer: "Can't find result" });
        }
        finally {
            this.setState({ loading: false });
        }
    }

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
                handleSubmit={this.handleSubmit}
            />
        );
    }
}

export default SearchContainer;