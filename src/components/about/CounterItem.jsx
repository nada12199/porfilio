import React from 'react'

const CounterItem = ({ title, counter, measurement }) => {
  return (
    <div className="mb-20 sm:mb-0">
      <h2 className="text-3xl text-center mb-2">
        {counter} {measurement}
      </h2>
      <span className="font-general-regular block text-xl text-center text-ternary-dark dark:text-ternary-light">
        {title}
      </span>
    </div>
  )
}

export default CounterItem
