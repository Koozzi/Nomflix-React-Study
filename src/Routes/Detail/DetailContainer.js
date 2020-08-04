import React, { Component } from "react";
import DetailPresenter from "./DetailPresenter";
import { movieAPI, tvAPI } from "../../api";


class DetailContainer extends Component {
    constructor(props){
        super(props);
        const {
            location: {pathname}
        } = props;
        this.state = {
            result: null,
            error: null,
            loading: true,
            isMovie: pathname.includes("/movie/")
        };
    }
    
    async componentDidMount() {
        const {
            match : {
                params: {id}
            },
            history: {push},
        } = this.props;

        const { isMovie } = this.state;
        const parseID = parseInt(id);

        if(isNaN(parseID)){
            return push("/");
        }

        let result = null;
        try{
            if(isMovie){
                ({ data: result } = await movieAPI.movieDetail(parseID));
            }else{
                const { data: result } = await tvAPI.tvDetail(parseID);
            }
        }
        catch{
            this.setState({error: "Can't find anything"});
        }
        finally{
            this.setState({ loading: false, result });
        }
    }

    render() {
        const { result, error, loading } = this.state;
        console.log(result);
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