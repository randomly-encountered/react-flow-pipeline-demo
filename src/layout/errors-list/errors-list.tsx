import { ErrorCard } from '@components/error-card'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@layout/errors-list/errors-list.module.css'
import type { NodeError } from '@nodes/types'

export function ErrorsList({ errors }: { errors: NodeError[] }) {
  if (!errors.length) return null

  return (
    <div className={styles['errors-list']}>
      <h2 className={styles['title']}>
        <Icon className={styles['icon']} fontSize={20} icon='mdi:cancel-circle-outline' />
        Errors List
      </h2>
      {errors.map(ErrorCard)}
    </div>
  )
}
