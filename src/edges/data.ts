import { MarkerType, type Edge } from '@xyflow/react'

const commonProps = {
  markerEnd: {
    color: 'var(--color-brand-2)',
    type: MarkerType.ArrowClosed,
    width: 32,
    height: 32,
  },
  deletable: false,
  focusable: false,
  selectable: false,
}

export const EXAMPLE_EDGES: Edge[] = [
  {
    id: '1-4',
    ...commonProps,
    selectable: false,
    source: '1',
    target: '4',
    type: 'customEdge',
  },
  { id: '2-4', ...commonProps, source: '2', target: '4', type: 'customEdge' },
  { id: '2-5', ...commonProps, source: '2', target: '5', type: 'customEdge' },
  { id: '3-5', ...commonProps, source: '3', target: '5', type: 'customEdge' },
  { id: '4-6', ...commonProps, source: '4', target: '7', type: 'customEdge' },
  { id: '5-7', ...commonProps, source: '5', target: '8', type: 'customEdge' },
  { id: '6-9', ...commonProps, source: '6', target: '9', type: 'customEdge' },
  { id: '7-6', ...commonProps, source: '7', target: '6', type: 'customEdge' },
  { id: '7-10', ...commonProps, source: '7', target: '10', type: 'customEdge' },
  { id: '8-12', ...commonProps, source: '8', target: '12', type: 'customEdge' },
  { id: '9-11', ...commonProps, source: '9', target: '11', type: 'customEdge' },
]
