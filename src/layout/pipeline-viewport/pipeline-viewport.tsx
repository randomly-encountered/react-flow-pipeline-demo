import '@xyflow/react/dist/base.css'
import { useEffect, useState } from 'react'
import {
  type EdgeTypes,
  type Node,
  type NodeChange,
  type NodeTypes,
  ReactFlow,
  ReactFlowState,
  applyNodeChanges,
  useNodesState,
  useReactFlow,
  useStore,
} from '@xyflow/react'
import { EXAMPLE_NODES, ActionNode, DataNode, SourceNode } from '@nodes/index'
import { CustomEdge, EXAMPLE_EDGES } from '@edges/index'
import { ErrorsList } from '@layout/errors-list'
import type { ActionNodeData, NodeData, SourceDataNode } from '@core/nodes/types'
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
  const { fitView } = useReactFlow()
  const [nodes, setNodes, onNodesChange] = useNodesState(EXAMPLE_NODES)
  const [selectedNode, setSelectedNode] = useState<Node<SourceDataNode | NodeData | ActionNodeData>>()
  const nodeErrors = selectedNode?.data?.errors as SourceDataNode['errors']
  const hasErrors = !!nodeErrors?.length
  const viewportWidth = useStore(viewportWidthSelector)
  const viewportHeight = useStore(viewportHeightSelector)

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
  }, [nodes, fitView])

  useEffect(() => {
    if (!selectedNode) return

    requestAnimationFrame(() => {
      fitView({ nodes: [selectedNode], duration: 1000, maxZoom: 1 })
    })
  }, [selectedNode, viewportHeight, viewportWidth, fitView])

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
      {hasErrors
      && (
        <div className={`${styles['error-list']}`}>
          <ErrorsList errors={nodeErrors} />
        </div>
      )}
    </div>
  )
}

function viewportWidthSelector(state: ReactFlowState) {
  return state.width
}

function viewportHeightSelector(state: ReactFlowState) {
  return state.height
}
