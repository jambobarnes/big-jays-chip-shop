import { SingleCategory } from "../../lib/types/CategoryProps"

const CategoryHeader = ({ name, description, id }: SingleCategory) => {
  return (
    <>
      <div className="mb-6">
        <div className="mb-4 md:flex md:items-center md:justify-between" id={id}>
        <h2 className="text-4xl font-extrabold tracking-tight text-chip-red">{name}</h2>
        <p className="text-lg text-chip-grey md:block">
          {description}
        </p>
      </div>
        <hr />
      </div>
    </>
  )
}

export default CategoryHeader