import styles from '@layout/errors-list/errors-list.module.css'
import type { NodeError } from '@nodes/types'

export function ErrorsList({ error }: { error?: NodeError }) {
  if (!error) return null

  return (
    <div className={styles['errors-list']}>
      <h3>Errors List</h3>
    </div>
  )
}
