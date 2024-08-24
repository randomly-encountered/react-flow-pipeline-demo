import { type PropsWithChildren } from 'react'
import styles from '@components/job-attribute/job-attribute.module.css'

interface JobAttributeProps {
  label: string
}

export function JobAttribute({ children, label }: PropsWithChildren<JobAttributeProps>) {
  return (
    <div className={styles['attribute']}>
      <dt className={styles['attribute-name']}>{label}</dt>
      <dd className={styles['attribute-value']}>{children}</dd>
    </div>
  )
}
