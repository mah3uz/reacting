import { StarIcon } from "@heroicons/react/24/solid"

const Card = ({ title, description, country, price, img, stats, openSpot }) => {
  // const { title, description, country, price, img, stats, openSpot } = props.item
  let badgeText

  if (openSpot === 0) {
    badgeText = "SOLD OUT"
  } else if (openSpot < 5) {
    badgeText = "STOCK LOW"
  }

  return (
    <article className="rounded-lg shadow-lg mx-auto relative max-w-sm">
      <img className="w-full h-auto" src={img} alt="Super Duper Illustration" />
      {badgeText && (
        <span className="absolute right-4 top-4 bg-gray-600 text-white rounded-md p-1 pl-4 pr-4 font-semibold">
          {badgeText}
        </span>
      )}
      <div className="p-7 my-auto pb-10 ">
        <h1 className="text-2xl font-semibold text-gray-800">{title}</h1>
        <p className="flex items-center gap-2 text-base text-gray-400 mt-2">
          <StarIcon className="w-4 h-4 text-amber-300" />
          {stats.rating}
          <small>({stats.reviewCount})</small> · {country}
        </p>
        <p className="mb-4 text-gray-600">{description}</p>
        <p className="font-medium">
          From ${price} / <small>person</small>
        </p>
      </div>
    </article>
  )
}

export default Card
