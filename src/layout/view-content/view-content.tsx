import { MOCK_JOB_DATA } from '@core/constants'
import { JobDetailsPanel } from '@layout/job-details-panel'
import { PipelineViewport } from '@layout/pipeline-viewport/pipeline-viewport'
import styles from '@layout/view-content/view-content.module.css'
import { ReactFlowProvider } from '@xyflow/react'

export function ViewContent() {
  return (
    <ReactFlowProvider>
      <section className={styles['view-content']}>
        <JobDetailsPanel {...MOCK_JOB_DATA} />
        <PipelineViewport />
      </section>
    </ReactFlowProvider>
  )
}
