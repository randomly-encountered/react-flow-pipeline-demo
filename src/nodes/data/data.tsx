import cx from 'classnames'
import { Icon } from '@iconify/react/dist/iconify.js'
import { Handle, Node, type NodeProps, Position } from '@xyflow/react'
import styles from '@nodes/data/data.module.css'
import handleStyles from '@nodes/handle.module.css'
import type { DataNode } from '@nodes/types'

export function DataNode({ data }: NodeProps<Node<DataNode>>) {
  const className = cx([styles['data-node'], data.isCombined && styles['combined']])
  const targetHandleClassName = cx([handleStyles['handle'], handleStyles['target']])
  const sourceHandleClassName = cx([handleStyles['handle'], handleStyles['source']])

  return (
    <>
      {!data.isInput && <Handle className={targetHandleClassName} position={Position.Left} type='target' />}
      <figure className={className}>
        <Icon fontSize={20} icon='lucide:layers' />
        <figcaption className={styles['label']}>{data.label}</figcaption>
        <figcaption className={styles['rule-count']}>
          {data.ruleCount}
          {' '}
          rules applied
        </figcaption>
      </figure>
      <Handle className={sourceHandleClassName} position={Position.Right} type='source' />
    </>
  )
}
