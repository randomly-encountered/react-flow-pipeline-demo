import '@xyflow/react/dist/base.css'
import { useEffect, useState } from 'react'
import {
  type EdgeTypes,
  type Node,
  type NodeChange,
  type NodeTypes,
  ReactFlow,
  applyNodeChanges,
  useNodesState,
} from '@xyflow/react'
import { EXAMPLE_NODES, ActionNode, DataNode, SourceNode } from '@nodes/index'
import { CustomEdge, EXAMPLE_EDGES } from '@edges/index'
import { ErrorsList } from '@layout/errors-list'
import type { ActionNodeData, NodeData, NodeError, SourceDataNode } from '@core/nodes/types'
import styles from '@layout/pipeline-viewport/pipeline-viewport.module.css'

const edgeTypes: EdgeTypes = {
  customEdge: CustomEdge,
}

const nodeTypes: NodeTypes = {
  actionNode: ActionNode,
  dataNode: DataNode,
  sourceNode: SourceNode,
}

export function PipelineViewport() {
  const [nodes, setNodes, onNodesChange] = useNodesState(EXAMPLE_NODES)
  const [selectedNode, setSelectedNode] = useState<Node<SourceDataNode | NodeData | ActionNodeData>>()
  const nodeError = selectedNode?.data?.error

  const handleNodesChange = (changes: NodeChange[]) => {
    onNodesChange(changes)
    setNodes((oldNodes) => applyNodeChanges(changes, oldNodes))
  }

  useEffect(() => {
    const selectedNode = nodes.find(({ selected }) => selected) as Node<SourceDataNode | NodeData | ActionNodeData>

    if (!selectedNode) {
      setSelectedNode(undefined)
      return
    }

    setSelectedNode(selectedNode)
  }, [nodes])

  return (
    <div className={styles['viewport-wrapper']}>
      <div className={`${styles['viewport-card']} ${styles['viewport']}`}>
        <ReactFlow
          edgeTypes={edgeTypes}
          edges={EXAMPLE_EDGES}
          fitView
          nodeTypes={nodeTypes}
          nodes={nodes}
          proOptions={{ hideAttribution: true }}
          onNodesChange={handleNodesChange}
        />
      </div>
      {!!nodeError
      && (
        <div className={`${styles['viewport-card']} ${styles['error-list']}`}>
          <ErrorsList error={nodeError as NodeError} />
        </div>
      )}
    </div>
  )
}
