import cx from 'classnames'
import { type PropsWithChildren } from 'react'
import styles from '@components/tab/tab.module.css'

export interface TabProps {
  isActive?: boolean
  value: string | number
  onSelect: (value: TabProps['value']) => void
}

export function Tab({ isActive, children, value, onSelect }: PropsWithChildren<TabProps>) {
  const className = cx(styles['tab'], isActive && styles['active'])

  const handleSelect = () => {
    onSelect(value)
  }

  return (
    <li>
      <button className={className} tabIndex={isActive ? -1 : 0} onClick={handleSelect}>
        {children}
      </button>
    </li>
  )
}
