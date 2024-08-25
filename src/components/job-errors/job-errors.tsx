import { Icon } from '@iconify/react/dist/iconify.js'
import { JobError } from '@components/job-errors/job-error'
import styles from '@components/job-errors/job-errors.module.css'
import type { NodeError } from '@nodes/types'

export function JobErrors({ errors }: { errors: NodeError[] }) {
  if (!errors.length) return null

  return (
    <div className={styles['job-errors']}>
      <h2 className={styles['title']}>
        <Icon className={styles['icon']} fontSize={20} icon='mdi:cancel-circle-outline' />
        Errors List
      </h2>
      {errors.map(JobError)}
    </div>
  )
}
