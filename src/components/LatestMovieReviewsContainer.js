import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'l5AuTG5kF3dpufyJFc1kFoYA888i9Zcr';
const URL = 'https://api.nytimes.com/svc/movies/v2/reviews/all.json?'
            + `api-key=${NYT_API_KEY}`;

// Code LatestMovieReviewsContainer Here

class LatestMovieReviewsContainer extends Component {
    constructor() {
        super()
        this.state = {
            reviews: []
        }
    }

    fetchReviews = () => {
        fetch(URL)
        .then(resp => resp.json())
        .then(reviews => this.setState({
            reviews: reviews.results
        }))
    }

    componentDidMount(){
        this.fetchReviews()
    }

    render(){
        return(
            <div className="latest-movie-reviews">
                <h1>Latest Reviews</h1>
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }

}

export default LatestMovieReviewsContainer
