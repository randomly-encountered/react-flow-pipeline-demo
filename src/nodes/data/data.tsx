import cx from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Handle, Node, type NodeProps, Position } from '@xyflow/react'
import styles from '@nodes/data/data.module.css'
import type { DataNode } from '@nodes/types'

export function DataNode({ data }: NodeProps<Node<DataNode>>) {
  const className = cx([styles['data-node'], data.isCombined && styles['combined']])

  return (
    <>
      {!data.isInput && <Handle position={Position.Left} type='target' />}
      <div className={className}>
        <Icon fontSize={24} icon='ion:layers-sharp' />
        <caption className={styles['label']}>{data.label}</caption>
        <caption className={styles['rule-count']}>
          {data.ruleCount}
          {' '}
          rules applied
        </caption>
      </div>
      <Handle position={Position.Right} type='source' />
    </>
  )
}
