import React, { Component } from 'react';
import 'isomorphic-fetch';
import MovieReviews from './MovieReviews'

const NYT_API_KEY = 'l5AuTG5kF3dpufyJFc1kFoYA888i9Zcr';
const Base_URL = 'https://api.nytimes.com/svc/movies/v2/reviews/search.json?'
            + `api-key=${NYT_API_KEY}&query=`;

// Code SearchableMovieReviewsContainer Here

class SearchableMovieReviewsContainer extends Component {
    state = {
        searchTerm: "",
        reviews: []
    }

    handleSubmit = (event) => {
          event.preventDefault()

          fetch(Base_URL.concat(this.state.searchTerm))
            .then(resp => resp.json())
            .then(data => this.setState({reviews: data.results}))
    }

    handleChange = (event) => [
         this.setState({
            searchTerm: event.target.value
         })
    ]

    render(){
        return(
            <div className="searchable-movie-reviews">
                <form onSubmit={this.handleSubmit}>
                    <label htmlFor="search-input">Search Moview Reviews:</label>
                    <input id="search-input" type="text" onChange={this.handleChange} />
                    <input type="submit" value="Submit" />
                </form>
                {typeof this.state.reviews === 'object' && this.state.reviews.length > 0 && <h2>Search Result:</h2>}
                <MovieReviews reviews={this.state.reviews} />
            </div>
        )
    }
}

export default SearchableMovieReviewsContainer