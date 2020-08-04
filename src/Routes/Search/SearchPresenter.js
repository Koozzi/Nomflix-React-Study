import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const SearchPresenter = ({
    movieResults,
    tvResults,
    error,
    searchTerm,
    loading,
    handleSubmit
}) => null

SearchPresenter.propTypes = {
    movieResults: propTypes.array,
    tvResults: propTypes.array,
    error: propTypes.string,
    searchTerm: propTypes.string,
    loading: propTypes.bool.isRequired,
    handleSubmit: propTypes.func.isRequired
}

export default SearchPresenter;