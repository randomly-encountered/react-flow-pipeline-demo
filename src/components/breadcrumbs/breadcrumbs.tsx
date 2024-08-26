import { Icon } from '@iconify/react/dist/iconify.js'
import { Breadcrumb } from '@components/breadcrumbs/breadcrumb'
import styles from '@components/breadcrumbs/breadcrumbs.module.css'

export function Breadcrumbs() {
  return (
    <nav className={styles['container']}>
      <ul className={styles['breadcrumbs']}>
        <button className={styles['return-button']}>
          <Icon fontSize={16} icon='lucide:chevron-left' />
        </button>
        <Breadcrumb url='#'>Survey pipeline</Breadcrumb>
        <Icon className={styles['delimiter']} fontSize={16} icon='lucide:chevron-right' />
        <Breadcrumb isCurrent url='#'>Job summary (#1231243)</Breadcrumb>
      </ul>
    </nav>
  )
}
