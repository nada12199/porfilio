import React from 'react'

const StarRating = ({ rating }) => {
  // Calculate the number of full, half, and empty stars
  const fullStars = Math.floor(rating)
  const halfStar = rating % 1 !== 0
  const emptyStars = 5 - fullStars - (halfStar ? 1 : 0)

  // Create arrays to render the stars
  const fullStarsArray = Array(fullStars).fill(0)
  const emptyStarsArray = Array(emptyStars).fill(0)

  return (
    <div className="flex space-x-0.5">
      {fullStarsArray.map((_, index) => (
        <svg
          key={`full-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-yellow-500 w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            clipRule="evenodd"
          />
        </svg>
      ))}
      {halfStar && (
        <svg
          key="half"
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-yellow-500 w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            clipRule="evenodd"
          />
        </svg>
      )}
      {emptyStarsArray.map((_, index) => (
        <svg
          key={`empty-${index}`}
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          className="text-gray w-5 h-5"
        >
          <path
            fillRule="evenodd"
            d="M12 17.27l6.18 3.73-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
            clipRule="evenodd"
          />
        </svg>
      ))}
    </div>
  )
}

export default StarRating
