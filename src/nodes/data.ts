import { type Node } from '@xyflow/react'

export enum DataSource {
  AMAZON_RDS = 'Amazon RDS',
  GOOGLE_DRIVE = 'Google Drive',
}

const commonProps = {
  draggable: false,
  deletable: false,
}

export const EXAMPLE_NODES: Node[] = [
  {
    ...commonProps,
    id: '1',
    type: 'dataNode',
    data: {
      isInput: true,
      label: 'Survey_2015',
      ruleCount: 10,
    },
    position: { x: 32, y: 32 },
  },
  {
    ...commonProps,
    id: '2',
    type: 'dataNode',
    data: {
      isInput: true,
      label: 'Survey_2016',
      ruleCount: 10,
    },
    position: { x: 32, y: 164 },
  },
  {
    ...commonProps,
    id: '3',
    type: 'dataNode',
    data: {
      isInput: true,
      label: 'Survey_2017',
      ruleCount: 10,
    },
    position: { x: 32, y: 296 },
  },
  {
    ...commonProps,
    id: '4',
    type: 'actionNode',
    data: {
      icon: 'material-symbols:combine-columns-sharp',
      label: 'Join',
    },
    position: { x: 214, y: 45.5 },
  },
  {
    ...commonProps,
    id: '5',
    type: 'actionNode',
    data: {
      icon: 'material-symbols:add-row-below',
      label: 'Append',
    },
    position: { x: 200, y: 310 },
  },
  {
    ...commonProps,
    id: '6',
    type: 'actionNode',
    data: {
      icon: 'material-symbols:pivot-table-chart-sharp',
      label: 'Pivot',
    },
    position: { x: 640, y: 45.5 },
  },
  {
    ...commonProps,
    id: '7',
    type: 'dataNode',
    data: {
      isCombined: true,
      label: 'Joineddataset',
      ruleCount: 10,
    },
    position: { x: 440, y: 32 },
  },
  {
    ...commonProps,
    id: '8',
    type: 'dataNode',
    data: {
      isCombined: true,
      label: 'Appenddataset',
      ruleCount: 10,
    },
    position: { x: 440, y: 296 },
  },
  {
    ...commonProps,
    id: '9',
    type: 'dataNode',
    data: {
      isCombined: true,
      label: 'Pivotdataset',
      ruleCount: 10,
    },
    position: { x: 848, y: 32 },
  },
  {
    ...commonProps,
    id: '10',
    type: 'sourceNode',
    data: {
      asTarget: true,
      hasError: true,
      icon: 'logos:google-drive',
      errors: [
        {
          source: 'Pivoted dataset',
          target: DataSource.AMAZON_RDS,
          message: 'Column data type does not match with your database.',
        },
      ],
    },
    position: { x: 660, y: 170.5 },
  },
  {
    ...commonProps,
    id: '11',
    type: 'sourceNode',
    data: {
      asTarget: true,
      icon: 'mdi:folder-network-outline',
    },
    position: { x: 996, y: 38.5 },
  },
  {
    ...commonProps,
    id: '12',
    type: 'sourceNode',
    data: {
      asTarget: true,
      icon: 'mdi:folder-network-outline',
    },
    position: { x: 660, y: 302.5 },
  },
  {
    ...commonProps,
    id: '13',
    type: 'sourceNode',
    data: { icon: 'mdi:folder-network-outline' },
    position: { x: -32, y: 38.5 },
  },
  {
    ...commonProps,
    id: '14',
    type: 'sourceNode',
    data: { icon: 'mdi:folder-network-outline' },
    position: { x: -32, y: 170.5 },
  },
  {
    ...commonProps,
    id: '15',
    type: 'sourceNode',
    data: { icon: 'logos:google-drive' },
    position: { x: -32, y: 302.5 },
  },
]
