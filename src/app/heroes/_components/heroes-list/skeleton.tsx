export const HeroesListSkeleton = () => {
  return (
    <>
      {/* filters */}
      <div className="skeleton mb-1 mt-6 h-7 w-40" />

      {/* cards */}
      <ul className="heroes__results">
        {Array.from({ length: 20 }).map((_, idx) => (
          <li className="skeleton min-h-[350px] w-full" key={idx} />
        ))}
      </ul>
    </>
  )
}
