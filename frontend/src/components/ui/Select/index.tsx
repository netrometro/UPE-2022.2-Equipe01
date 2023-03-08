import { SelectHTMLAttributes } from 'react'
import { BiChevronDown } from 'react-icons/bi'

import styles from './styles.module.scss'

type SelectProps = SelectHTMLAttributes<HTMLSelectElement> & {
  options: string[]
}

export function Select({ options, ...rest }: SelectProps) {
  return (
    <div className="relative">
      <select className={styles.select}
        {...rest}
      >
        {options.map((option) => (
          <option key={option} value={option}>
            {option}
          </option>
        ))}
      </select>
    </div>
  )
}
