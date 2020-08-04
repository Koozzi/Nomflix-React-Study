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

    handleSubmit = (event) => {
        event.preventDefault();
        const { searchTerm } = this.state;
        if(searchTerm !== ""){
            this.searchByTerm();
        }
    }

    updateTerm = (event) => {
        const {
            target: { value }
        } = event;
        console.log(value);
        this.setState({
            searchTerm: value
        })
    }

    searchByTerm = async() => {
        const { searchTerm } = this.state;
        this.setState({ loading: true });
        try {
            const {
                data: { results:movieResults }
            } = await movieAPI.search(searchTerm);
            
            const {
                data: { results:tvResults }
            } = await tvAPI.search(searchTerm);
            
            this.setState({ movieResults, tvResults });
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
                error={error}
                searchTerm={searchTerm}
                loading={loading}
                handleSubmit={this.handleSubmit}
                updateTerm={this.updateTerm}
            />
        );
    }
}

export default SearchContainer;