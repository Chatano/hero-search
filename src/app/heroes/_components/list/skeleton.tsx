export const HeroesListSkeleton = () => {
  return (
    <>
      {/* filters */}
      <div className="skeleton mt-6 h-6 w-36" />

      {/* cards */}
      <ul className="heroes__results">
        {Array.from({ length: 20 }).map((_, idx) => (
          <li className="skeleton min-h-[310px] w-full" key={idx} />
        ))}
      </ul>
    </>
  )
}
