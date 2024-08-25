import { BaseEdge, type EdgeProps, getBezierPath } from '@xyflow/react'
import styles from '@edges/custom-edge/custom-edge.module.css'

export function CustomEdge({ sourceX, sourceY, sourcePosition, targetX, targetY, targetPosition, ...props }: EdgeProps) {
  const [edgePath] = getBezierPath({
    sourceX: sourceX + 4,
    sourceY,
    sourcePosition,
    targetX: targetX - 4,
    targetY,
    targetPosition,
  })

  return (
    <>
      <BaseEdge
        {...props}
        className={styles['custom-edge']}
        markerStart='url(#arrowclosed'
        path={edgePath}
      />
    </>
  )
}
