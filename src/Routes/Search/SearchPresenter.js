import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Loader from "../../Components/Loader";
import Section from "../../Components/Section";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

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
                <Poster 
                    key={movie.id}
                    id={movie.id}
                    imageUrl={movie.poster_path}
                    title={movie.original_title}
                    rating={movie.vote_average}
                    isMovie={true}
                    year={movie.release_date.substring(0, 4)}
                />
            ))}
            </Section>
    
        )}
        {tvResults && tvResults.length > 0 && (
            <Section title="TV Results">
            {tvResults.map(show => (
                <Poster 
                    key={show.id}
                    id={show.id}
                    imageUrl={show.poster_path}
                    title={show.original_name}
                    rating={show.vote_average}
                    year={show.first_air_date.substring(0, 4)}
                />                    
            ))}
            </Section>
        )}
    </>)}
    {error && <Message color="#d63031" text={error}/>}
    {tvResults && 
        movieResults && 
        tvResults.length === 0 && 
        movieResults.length === 0 && (
        <Message text="Nothing Found" color="#636e72"/>
    )}
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