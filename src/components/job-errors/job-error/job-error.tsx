import { MouseEvent } from 'react'
import type { NodeError } from '@core/nodes/types'
import styles from '@components/job-errors/job-error/job-error.module.css'
import { getJobErrorIcon } from '@components/job-errors/job-error'

export function JobError(props: NodeError) {
  const { source, target, message } = props

  const handleFixAction = (event: MouseEvent<HTMLAnchorElement>) => {
    event.preventDefault()

    window.alert(`Error details:\n${JSON.stringify(props)}`)
  }

  return (
    <div className={styles['job-error']}>
      {getJobErrorIcon(target)}
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
