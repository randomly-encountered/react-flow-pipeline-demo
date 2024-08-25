import { DataSource } from '@nodes/data'

export interface NodeData extends Record<string, unknown> {
  label: string
}

export interface ActionNodeData extends NodeData {
  icon: string
}

export interface DataNode extends NodeData {
  isInput?: boolean
  isCombined?: boolean
  ruleCount: number
}

export interface SourceDataNode extends Record<string, unknown> {
  asTarget?: boolean
  hasError?: boolean
  icon: string
  error?: NodeError
}

export interface NodeError {
  source: string
  target: DataSource
  message: string
}
