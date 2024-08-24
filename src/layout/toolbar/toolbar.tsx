import { Tab } from '@components/tab'
import { Tabs } from '@components/tabs'
import { Icon } from '@iconify/react/dist/iconify.js'
import styles from '@layout/toolbar/toolbar.module.css'

export function Toolbar() {
  return (
    <section className={styles['toolbar']}>
      <Tabs>
        {({ onSelect }) => {
          return (
            <>
              <Tab isActive value='overview' onSelect={onSelect}>Overview</Tab>
              <Tab value='stages' onSelect={onSelect}>Stages</Tab>
              <Tab value='output' onSelect={onSelect}>Output</Tab>
            </>
          )
        }}
      </Tabs>
      <aside className={styles['toolbar-actions']}>
        <button className={styles['secondary']}>
          <Icon fontSize={20} icon='mdi:download-outline' />
          Download all outputs
        </button>
        <button className={styles['primary']}>
          Retry job
        </button>
      </aside>
    </section>
  )
}
