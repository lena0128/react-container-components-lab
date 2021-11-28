// Code MovieReviews Here

import React from 'react'

const review = ({ byline, headline, summary_short, link, multimedia }) => { 
  return(
      <div key={headline} className="review">
              <h2><a className="review-link" href={link.url}>{headline}</a></h2>
              <h4>Published By: {byline}</h4>
              <img src={multimedia.src} alt={headline} />
              <blockquote>{summary_short}</blockquote>
      </div>
  )
}

const MovieReviews = ({ reviews }) => {
    return(
        <div className="review-list">
                {reviews.map(review)}
        </div>
    )
}

MovieReviews.defaultProps = {
    reviews: []
}

export default MovieReviews