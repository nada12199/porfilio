import React, { useState } from 'react'
import { useTranslation } from 'react-i18next'
import '../../i18n'
const ImageCarousel = ({ images }) => {
  const { t, i18n } = useTranslation()

  const [currentIndex, setCurrentIndex] = useState(1)

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1,
    )
  }

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1,
    )
  }

  return (
    <div className="carousel-container">
      <div className="carousel">
        <div className="carousel-slide">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`image-container ${
                index === currentIndex ? 'active' : ''
              }`}
            >
              <img
                src={image.img}
                alt={image.title}
                className="carousel-image"
              />
              <div className="image-title">{t(image.title)}</div>
            </div>
          ))}
        </div>
      </div>
      <button className="prev" onClick={goToPrevSlide}>
        ❮
      </button>
      <button className="next" onClick={goToNextSlide}>
        ❯
      </button>
    </div>
  )
}

export default ImageCarousel
