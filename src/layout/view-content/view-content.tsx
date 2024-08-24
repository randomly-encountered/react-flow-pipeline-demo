import { MOCK_JOB_DATA } from '@core/constants'
import { JobDetailsPanel } from '@layout/job-details-panel'
import styles from '@layout/view-content/view-content.module.css'

export function ViewContent() {
  return (
    <section className={styles['view-content']}>
      <JobDetailsPanel {...MOCK_JOB_DATA} />
    </section>
  )
}
