import { Handle, Node, Position, type NodeProps } from '@xyflow/react'
import type { ActionNodeData } from '@nodes/types'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@nodes/action/action.module.css'

export function ActionNode({ data }: NodeProps<Node<ActionNodeData>>) {
  return (
    <>
      <Handle position={Position.Left} type='target' />
      <div className={styles['action-node']}>
        <Icon icon={data.icon} />
        {data.label}
      </div>
      <Handle position={Position.Right} type='source' />
    </>
  )
}
