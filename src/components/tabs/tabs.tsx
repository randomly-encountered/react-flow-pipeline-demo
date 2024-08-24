import { type TabProps } from '@components/tab/tab'
import styles from '@components/tabs/tabs.module.css'
import { type JSXElementConstructor, type ReactNode, useState } from 'react'

type FunctionTypeChildren = (props: FunctionTypeProps) => JSX.Element
type NonFunctionTypeChildren = Exclude<ReactNode, () => JSXElementConstructor<unknown>>
interface FunctionTypeProps {
  onSelect: (value: TabProps['value']) => void
  activeTab?: TabProps['value']
}

export function Tabs({ children }: { children: FunctionTypeChildren | NonFunctionTypeChildren }) {
  const [activeTab, setActiveTab] = useState<TabProps['value']>()
  const handleSelect = (value: TabProps['value']) => {
    setActiveTab(value)
  }

  return (
    <ul className={styles['tabs']}>
      {hasFunctionChildren(children)
        ? children({ onSelect: handleSelect, activeTab })
        : children}
    </ul>
  )
}

function hasFunctionChildren(
  children: FunctionTypeChildren | NonFunctionTypeChildren,
): children is FunctionTypeChildren {
  return children instanceof Function
}
