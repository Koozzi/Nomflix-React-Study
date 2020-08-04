import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";

const Container = styled.div`
    padding: 0px 20px;
`;

const Form = styled.form`
    margin-bottom: 50px;
    width: 100%;
`;

const Input = styled.input`
    all: unset;
    font-size: 28px;
    width: 100%;
`;

const SearchPresenter = ({
    movieResults,
    tvResults,
    error,
    searchTerm,
    loading,
    handleSubmit,
    updateTerm
}) => (
<Container>
    <Form onSubmit={handleSubmit}>
        <Input 
            placeholder="Search Movies or TV Shows ..." 
            value={searchTerm}
            onChange={updateTerm}
        />
    </Form>
    {loading ? (
        <Loader />
    ) : (
    <>
        {movieResults && movieResults.length > 0 && (
            <Section title="Movie Results">
                {movieResults.map(movie => (
                    <span key={movie.id}>{movie.title}</span>
                ))}
            </Section>
        )}
        {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
                {tvResults.map(show => (
                    <span key={show.id}>{show.name}</span>
                ))}
            </Section>
        )}
    </>)}
</Container>);


SearchPresenter.propTypes = {
    movieResults: propTypes.array,
    tvResults: propTypes.array,
    error: propTypes.string,
    searchTerm: propTypes.string,
    loading: propTypes.bool.isRequired,
    handleSubmit: propTypes.func.isRequired,
    updateTerm: propTypes.func.isRequired
}

export default SearchPresenter;