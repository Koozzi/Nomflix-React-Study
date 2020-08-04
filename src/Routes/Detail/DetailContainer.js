import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";

class DetailContainer extends Component {
    state = {
        result: null,
        error: null,
        loading: true
    };

    async componentDidMount() {
        const {
            match : {
                params: {id}
            },
            history: {push}
        } = this.props;
        
        const parseID = parseInt(id);
        if(isNaN(parseID)){
            return push("/");
        }
    }

    render() {
        console.log(this.props);
        const { result, error, loading } = this.state;
        return (
            <DetailPresenter 
                result={result} 
                error={error} 
                loading={loading}
            />
        );
    }
}

export default DetailContainer;