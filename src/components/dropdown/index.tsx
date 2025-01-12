'use client'
import { ChevronDown, ChevronUp } from 'lucide-react'
import './styles.css'
import { FC, useMemo, useReducer, useState } from 'react'

type Option = {
  id: string
  label: string
}

interface Props {
  options: Option[]
  onChange?: (id: string) => void
  title?: string
  defaultOptionID?: string
  minWidth?: string
}

export const Dropdown: FC<Props> = ({
  options,
  title,
  defaultOptionID,
  onChange,
  minWidth = 80,
}) => {
  const [isOpen, toggleOpen] = useReducer((prev) => !prev, false)
  const [selectedOptionID, setSelectedOptionID] = useState<string>(
    defaultOptionID || options[0].id,
  )

  const selectedOptionLabel = useMemo(() => {
    return options.find(({ id }) => id === selectedOptionID)?.label
  }, [options, selectedOptionID])

  const handleSelect = (id: string) => {
    setSelectedOptionID(id)
    onChange?.(id)
  }

  return (
    <div
      className="dropdown__wrapper"
      style={{ minWidth }}
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
        <p className="w-full">{selectedOptionLabel}</p>

        {isOpen ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
      </div>

      {isOpen && (
        <div
          className="dropdown__menu"
          role="listbox"
          aria-label={`Select`}
          style={{ minWidth }}
        >
          {title && <p className="dropdown__menu__title">{title}</p>}
          <ul className="dropdown__menu__list">
            {options.map(({ id, label }) => {
              const isSelected = selectedOptionID === id
              const onClick = () => handleSelect(id)

              return (
                <li
                  onClick={onClick}
                  key={id}
                  className={`dropdown__menu__list__option ${isSelected && 'selected'}`}
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
