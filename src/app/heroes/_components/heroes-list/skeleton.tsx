export const HeroesListSkeleton = () => {
  return (
    <>
      {/* filters */}
      <div className="skeleton w-40 h-7 mt-6 mb-1" />

      {/* cards */}
      <ul className="heroes__results">
        {Array.from({ length: 20 }).map((_, idx) => (
          <li className="skeleton min-h-[350px] w-full" key={idx} />
        ))}
      </ul>
    </>
  )
}