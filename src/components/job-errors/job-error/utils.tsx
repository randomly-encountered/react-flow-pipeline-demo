import { Icon } from '@iconify/react/dist/iconify.js'
import { DataSource } from '@nodes/data'
import rdsIcon from '@assets/rds-logo.png'
import styles from '@components/job-errors/job-error/job-error.module.css'

export function getJobErrorIcon(dataSource?: DataSource) {
  const iconMap = {
    [DataSource.AMAZON_RDS]: () => (
      <img alt='data source' className={styles['icon']} src={rdsIcon} />
    ),
    [DataSource.GOOGLE_DRIVE]: () => (
      <Icon
        className={styles['icon']}
        fontSize={20}
        icon='logos:google-drive'
      />
    ),
  }

  return (dataSource && dataSource in iconMap)
    ? iconMap[dataSource]()
    : (
        <Icon
          className={styles['icon']}
          fontSize={20}
          icon='mdi:folder-network-outline'
        />
      )
}
