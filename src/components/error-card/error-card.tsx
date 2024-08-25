import { DataSource } from '@core/nodes/data'
import type { NodeError } from '@core/nodes/types'
import rdsIcon from '@assets/rds-logo.png'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@components/error-card/error-card.module.css'
import { MouseEvent } from 'react'

export function ErrorCard(props: NodeError) {
  const { source, target, message } = props

  const handleFixAction = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    window.alert(`Error details:\n${JSON.stringify(props)}`)
  }

  return (
    <div className={styles['error-card']}>
      {getErrorCardIcon(target)}
      <h3 className={styles['title']}>
        Export of '
        <em>{source}</em>
        {`' to ${target} failed`}
      </h3>
      <p className={styles['message']}>{message}</p>
      <div className={styles['actions']}>
        <a href='#' onClick={handleFixAction}>Fix now</a>
      </div>
    </div>
  )
}

function getErrorCardIcon(dataSource: DataSource) {
  return {
    [DataSource.AMAZON_RDS]: () => <img alt='data source' className={styles['icon']} src={rdsIcon} />,
    [DataSource.GOOGLE_DRIVE]: () => <Icon className={styles['icon']} fontSize={20} icon='logos:google-drive' />,
  }[dataSource]()
}
