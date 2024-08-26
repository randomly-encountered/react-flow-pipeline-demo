import { Handle, Node, Position, type NodeProps } from '@xyflow/react'
import type { ActionNodeData } from '@nodes/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@nodes/action/action.module.css'
import handleStyles from '@nodes/handle.module.css'
import cx from 'classnames'

export function ActionNode({ data }: NodeProps<Node<ActionNodeData>>) {
  const targetHandleClassName = cx([handleStyles['handle'], handleStyles['target']])
  const sourceHandleClassName = cx([handleStyles['handle'], handleStyles['source']])

  return (
    <>
      <Handle className={targetHandleClassName} position={Position.Left} type='target' />
      <figure className={styles['action-node']}>
        <Icon icon={data.icon} />
        {data.label}
      </figure>
      <Handle className={sourceHandleClassName} position={Position.Right} type='source' />
    </>
  )
}
