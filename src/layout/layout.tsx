import { AppNavigation } from '@layout/app-navigation'
import { NavigationBreadcrumbs } from '@layout/nav-breadcrumbs'
import styles from '@layout/layout.module.css'
import { Toolbar } from '@layout/toolbar/toolbar'
import { ViewContent } from '@layout/view-content'

export function Layout() {
  return (
    <main className={styles['app-layout']}>
      <AppNavigation />
      <NavigationBreadcrumbs />
      <Toolbar />
      <ViewContent />
    </main>
  )
}
