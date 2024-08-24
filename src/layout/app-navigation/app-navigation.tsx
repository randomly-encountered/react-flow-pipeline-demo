import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@layout/app-navigation/app-navigation.module.css'

export function AppNavigation() {
  return (
    <div className={styles['navigation-panel']}>
      <nav className={styles['app-nav']}>
        <button className={styles['home-button']}>
          <Icon fontSize={24} icon='mdi:home-outline' />
        </button>
        <button className={styles['survey-button']}>
          <Icon fontSize={20} icon='mdi:folder-outline' />
          Survey
        </button>
      </nav>
      <ul className={styles['app-action-list']}>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='mdi:magnify-outline' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='mdi:bell-outline' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='mdi:settings-outline' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='mdi:question-mark-circle-outline' />
          </button>
        </li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20}icon='mdi:rocket-outline' />
          </button>
        </li>
        <li><button className={styles['user-profile-button']} /></li>
        <li>
          <button className={styles['app-action-item']}>
            <Icon fontSize={20} icon='mdi:apps' />
          </button>
        </li>
      </ul>

    </div>
  )
}
