import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@layout/app-navigation/app-navigation.module.css'

export function AppNavigation() {
  return (
    <div className={styles['navigation-panel']}>
      <nav className={styles['app-nav']}>
        <button className={styles['home-button']}>
          <Icon fontSize={20} icon='lucide:home' />
        </button>
        <button className={styles['survey-button']}>
          <Icon fontSize={20} icon='lucide:folder-closed' />
          Survey
        </button>
      </nav>
      <ul className={styles['app-action-list']}>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='lucide:search' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='lucide:bell' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='lucide:settings' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='lucide:circle-help' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='lucide:rocket' />
          </button>
        </li>
        <li><button className={styles['user-profile-button']} /></li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='lucide:grip' />
          </button>
        </li>
      </ul>

    </div>
  )
}
