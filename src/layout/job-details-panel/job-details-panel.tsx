import { JobAttribute } from '@components/job-attribute'
import styles from '@layout/job-details-panel/job-details-panel.module.css'

export interface JobDetails {
  pipelineName: string
  status: 'success' | 'failed' | 'pending'
  duration: string
  initiator: string
  storageUsed: string
  totalRowsProcessed: number
  startTime: string
  endTime: string
  interval: string
}

export function JobDetailsPanel(props: JobDetails) {
  return (
    <dl className={styles['job-details-panel']}>
      <JobAttribute label='Pipeline name'>{props.pipelineName}</JobAttribute>
      <JobAttribute label='Run by'>{props.initiator}</JobAttribute>
      <JobAttribute label='Start time'>{props.startTime}</JobAttribute>
      <JobAttribute label='Status'>{props.status}</JobAttribute>
      <JobAttribute label='Storage used'>{props.storageUsed}</JobAttribute>
      <JobAttribute label='End time'>{props.endTime}</JobAttribute>
      <JobAttribute label='Duration'>{props.duration}</JobAttribute>
      <JobAttribute label='Total rows processed'>{props.totalRowsProcessed}</JobAttribute>
      <JobAttribute label='Data interval'>{props.interval}</JobAttribute>
    </dl>
  )
}
