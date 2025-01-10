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
    <div
      className="dropdown__wrapper"
      onKeyDown={(e) => e.key === ' ' && toggleOpen()}
    >
      <div
        className="dropdown__trigger"
        onClick={toggleOpen}
        role="button"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        tabIndex={0}
      >
        <p>
          {`
            ${selectedOptions.length > 0 ? selectedOptions.length : 'All'}
            ${category}
          `}
        </p>
      </div>

      {isOpen && (
        <div
          className="dropdown__menu"
          role="listbox"
          aria-label={`Select ${category}`}
        >
          <ul className="dropdown__list">
            {options.map(({ id, label }) => {
              const isSelected = selectedOptions.includes(id)
              const onClick = () => onSelectOption(label)
              return (
                <li
                  onClick={onClick}
                  key={id}
                  className={`dropdown__list__option ${isSelected && 'selected'}`}
                  role="option"
                  aria-selected={isSelected}
                  tabIndex={0}
                  onKeyDown={(e) => e.key === 'Enter' && onClick()}
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
