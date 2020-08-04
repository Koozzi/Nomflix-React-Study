import React, { Component } from 'react';
import HomePresenter from "./HomePresenter";
import { movieAPI } from "../../api";

class HomeContainer extends Component {
    state = {
        nowPlaying: null,
        upcoming: null,
        popular: null,
        error: null,
        loading: true
    };

    async componentWillMount() {
        try {
            const { 
                data: { results: nowPlaying }
            } = await movieAPI.nowPlaying(); // 이거 끝날 때까지 (성공X) 다음 코드 실행하지 마
            
            const {
                data : {results: upcoming}
            } = await movieAPI.upcoming();

            const {
                data: { results: popular }
            } = await movieAPI.popular();

            this.setState({
                nowPlaying: nowPlaying,
                upcoming: upcoming,
                popular: popular
            })
        } catch {
            this.setState({
                error: "Can't find movies information."
            })
        } finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { nowPlaying, upcoming, popular, error, loading } = this.state;
        return( 
            <HomePresenter 
                nowPlaying={nowPlaying}
                upcoming={upcoming}
                popular={popular}
                error={error} 
                loading={loading}
            /> 
        )       
    }
}

export default HomeContainer;