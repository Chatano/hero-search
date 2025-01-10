'use client'
import './styles.css'
import { FC, useReducer, useState } from 'react'

type Option = {
  id: string
  label: string
}

interface Props {
  options: Option[]
  category: string
}

export const Dropdown: FC<Props> = ({ options, category }) => {
  const [isOpen, toggleOpen] = useReducer((prev) => !prev, false)
  const [selectedOptions, setSelectedOptions] = useState<string[]>([])

  const onSelectOption = (id: string) => {
    setSelectedOptions((prev) => {
      if (prev.includes(id)) return prev.filter((opt) => opt !== id)
      return [...prev, id]
    })
  }

  return (
    <div className="dropdown__wrapper">
      <div className="dropdown__trigger" onClick={toggleOpen}>
        <p>
          {`
            ${selectedOptions.length > 0 ? selectedOptions.length : 'All'}
            ${category}
          `}
        </p>
      </div>

      {isOpen && (
        <div className="dropdown__menu">
          <ul className="dropdown__list">
            {options.map(({ id, label }) => {
              const isSelected = selectedOptions.includes(id)
              return (
                <li
                  onClick={() => onSelectOption(label)}
                  key={id}
                  className={`dropdown__list__option ${isSelected && 'selected'}`}
                >
                  {label}
                </li>
              )
            })}
          </ul>
        </div>
      )}
    </div>
  )
}
