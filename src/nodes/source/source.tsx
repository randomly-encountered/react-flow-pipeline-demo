import cx from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Handle, Node, type NodeProps, Position } from '@xyflow/react'
import styles from '@nodes/source/source.module.css'
import type { SourceDataNode } from '@nodes/types'
import { getErrorCardIcon } from '@components/job-errors/job-error'

export function SourceNode({ data }: NodeProps<Node<SourceDataNode>>) {
  const className = cx([styles['source-node'], data.hasError && styles['error']])
  const hasError = !!data.errors?.length

  return (
    <>
      <figure className={className}>
        {getErrorCardIcon(data.source)}
        {hasError && <Icon className={styles['error-badge']} fontSize={20} icon='ion:alert-sharp' />}
      </figure>
      {data.asTarget && <Handle position={Position.Left} type='target' />}
    </>
  )
}
