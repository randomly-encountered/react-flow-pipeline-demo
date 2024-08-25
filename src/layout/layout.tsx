import { AppNavigation } from '@layout/app-navigation'
import { Breadcrumbs } from '@components/breadcrumbs'
import styles from '@layout/layout.module.css'
import { Toolbar } from '@layout/toolbar/toolbar'
import { ViewContent } from '@layout/view-content'

/**
 * Top-level layout construction of the application, including its shell.
 */
export function Layout() {
  return (
    <main className={styles['app-layout']}>
      <AppNavigation />
      <Breadcrumbs />
      <Toolbar />
      <ViewContent />
    </main>
  )
}
