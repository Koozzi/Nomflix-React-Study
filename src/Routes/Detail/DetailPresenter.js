import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";

const DetailPresenter = ({
    result,
    loading,
    error
}) => null

DetailPresenter.propTypes = {
    result: propTypes.object,
    loading: propTypes.bool.isRequired,
    error: propTypes.string
}

export default DetailPresenter;