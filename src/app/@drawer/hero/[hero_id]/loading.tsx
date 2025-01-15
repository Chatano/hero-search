export default function LoadingHero() {
  return (
    <div className="hero__wrapper w-full">
      {/* image */}
      <div className="skeleton hero__thumbnail" />

      {/* name */}
      <div className="skeleton hero__name mb-6 h-6 w-40" />

      {/* modified at */}
      <div className="skeleton hero__modified h-4 w-20" />

      {/* bio */}
      <div className="skeleton hero__bio h-28 w-full" />

      {/* metrics */}
      <ul className="hero__metrics">
        {Array.from({ length: 4 }).map((_, idx) => (
          <li key={idx} className="skeleton h-4 w-40" />
        ))}
      </ul>

      {/* urls */}
      <div className="skeleton mb-2 h-4 w-12 self-start" />
      <ul className="hero__urls">
        {Array.from({ length: 2 }).map((_, idx) => (
          <li key={idx} className="skeleton hero__urls__link h-4 w-20" />
        ))}
      </ul>

      {/* fav button */}
      <div className="skeleton mt-auto h-12 w-full rounded-lg" />
    </div>
  )
}
