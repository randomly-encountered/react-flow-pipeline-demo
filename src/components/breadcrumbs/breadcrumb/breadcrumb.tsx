import cx from 'classnames'
import { type PropsWithChildren } from 'react'
import styles from '@components/breadcrumbs/breadcrumb/breadcrumb.module.css'
interface BreadcrumbProps {
  isCurrent?: boolean
  url: string
}

export function Breadcrumb({ children, isCurrent, url }: PropsWithChildren<BreadcrumbProps>) {
  const className = cx(styles['breadcrumb'], isCurrent && styles['current'])

  return (
    <li className={className}>
      {isCurrent
        ? children
        : <a href={url}>{children}</a>}
    </li>
  )
}
