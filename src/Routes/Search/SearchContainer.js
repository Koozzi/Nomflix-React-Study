import React, { Component } from "react";
import SearchPresenter from "./SearchPresenter";

class SearchContainer extends Component {
    state = {
        movieResults: null,
        tvResults: null,
        searchTerm: "",
        loading: false,
        error: null
    };

    render() {
        const { movieResults, tvResults, searchTerm, loading, error } = this.state;
        return (
            <SearchPresenter
                movieResults={movieResults}
                tvResults={tvResults}
                searchTerm={searchTerm}
                loading={loading}
                error={error}
            />
        );
    }
}

export default SearchContainer;