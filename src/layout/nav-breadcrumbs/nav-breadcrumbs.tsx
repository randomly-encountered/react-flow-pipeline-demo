import { Breadcrumb } from '@components/breadcrumb'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@layout/nav-breadcrumbs/nav-breadcrumbs.module.css'

export function NavigationBreadcrumbs() {
  return (
    <nav className={styles['container']}>
      <ul className={styles['breadcrumbs']}>
        <button className={styles['return-button']}>
          <Icon fontSize={20} icon='mdi:chevron-left' />
        </button>
        <Breadcrumb url='#'>Survey pipeline</Breadcrumb>
        <Icon className={styles['delimiter']} fontSize={20} icon='mdi:chevron-right' />
        <Breadcrumb isCurrent url='#'>Job summary (#1231243)</Breadcrumb>
      </ul>
    </nav>
  )
}
