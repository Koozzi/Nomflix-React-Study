import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div``;

const ImageContainer = styled.div``;

const Image = styled.div``;

const Rating = styled.span``;

const Title = styled.span``;

const Year = styled.span``;

const Poster = ({id, imageUrl, title, rating, year, isMovie=false }) => (
    <Link to={isMovie ? `/movie/${id}` : `/show/${id}`}>
        <Container>
            <ImageContainer>
                <Image bgUrl={imageUrl} />
                <Rating>
                    <span role="img" aria-label="rating">
                        ⭐️ 
                    </span>
                    {rating}/10
                </Rating>
            </ImageContainer>
            <Title>{title}</Title>
            <br />
            <Year>{year}</Year>
        </Container>
    </Link>
)

Poster.propTypes = {
    id: propTypes.number.isRequired,
    imageUrl: propTypes.string,
    title: propTypes.string.isRequired,
    rating: propTypes.number,
    year: propTypes.string,
    isMovie: propTypes.bool
}

export default Poster;