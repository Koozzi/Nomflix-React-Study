import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Section from "../../Components/Section";
import Loader from "../../Components/Loader";
import Message from "../../Components/Message";
import Poster from "../../Components/Poster";

const Container = styled.div`
    padding: 0px 20px;
`;

const TVPresenter = ({topRated,popular,airingToday,loading,error}) => loading ? <Loader /> :
    <Container>
        {topRated && topRated.length > 0 && (
        <Section title="Top Rated Shows">
            {topRated.map(show => (
            <Poster 
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
            />
            ))}
        </Section>)}

        {popular && popular.length > 0 && (
        <Section title="Top Rated Shows">
            {popular.map(show => (
            <Poster 
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
            />
            ))}
        </Section>)}

        {airingToday && airingToday.length > 0 && (
        <Section title="Top Rated Shows">
            {airingToday.map(show => (
            <Poster 
                key={show.id}
                id={show.id}
                imageUrl={show.poster_path}
                title={show.original_name}
                rating={show.vote_average}
                year={show.first_air_date.substring(0, 4)}
            />
            ))}
        </Section>)}
        {error && <Message color="#d63031" text={error}/>}
    </Container>;

TVPresenter.propTypes = {
    topRated: propTypes.array,
    popular: propTypes.array,
    airingToday: propTypes.array,
    loading: propTypes.bool.isRequired,
    error: propTypes.string
}

export default TVPresenter;