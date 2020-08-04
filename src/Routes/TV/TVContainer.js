import React, { Component } from "react";
import TVPresenter from "./TVPresenter";
import { tvAPI } from "../../api";

class TVContainer extends Component {
    state = {
        topRated: null,
        popular: null,
        airingToday: null,
        loading: true,
        error: null
    };

    async componentWillMount() {
        try {
            const {
                data: {results:topRated}
            } = await tvAPI.topRated();
            const {
                data: {results:popular}
            } = await tvAPI.popular();
            const {
                data: {results:airingToday}
            } =await tvAPI.airingToday();
            
            this.setState({
                topRated, popular, airingToday
            })
        } 
        catch {
            this.setState({
                error: "Can't find TV information."
            })
        } 
        finally {
            this.setState({
                loading: false
            })
        }
    }

    render() {
        const { topRated, popular, airingToday, loading, error } = this.state;
        return (
            <TVPresenter
                topRated={topRated}
                popular={popular}
                airingToday={airingToday}
                loading={loading}
                error={error}
            />
        );
    }
}

export default TVContainer;