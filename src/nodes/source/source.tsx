import cx from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Handle, Node, type NodeProps, Position } from '@xyflow/react'
import styles from '@nodes/source/source.module.css'
import handleStyles from '@nodes/handle.module.css'
import type { SourceDataNode } from '@nodes/types'
import { getJobErrorIcon } from '@components/job-errors/job-error'

export function SourceNode({ data }: NodeProps<Node<SourceDataNode>>) {
  const className = cx([styles['source-node'], data.hasError && styles['error']])
  const targetHandleClassName = cx([handleStyles['handle'], handleStyles['target']])
  const hasError = !!data.errors?.length

  return (
    <>
      <figure className={className}>
        {getJobErrorIcon(data.source)}
        {hasError && <Icon className={styles['error-badge']} fontSize={20} icon='ion:alert-sharp' />}
      </figure>
      {data.asTarget && <Handle className={targetHandleClassName} position={Position.Left} type='target' />}
    </>
  )
}
