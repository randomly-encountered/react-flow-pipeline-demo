import { ReactFlowProvider } from '@xyflow/react'
import { MOCK_JOB_DATA } from '@core/constants'
import { JobDetailsPanel } from '@components/job-details'
import { Pipeline } from '@layout/pipeline/pipeline'
import styles from '@layout/view-content/view-content.module.css'

/**
 * Main content to be rendered within the application shell
 */
export function ViewContent() {
  return (
    <ReactFlowProvider>
      <section className={styles['view-content']}>
        <JobDetailsPanel {...MOCK_JOB_DATA} />
        <Pipeline />
      </section>
    </ReactFlowProvider>
  )
}
