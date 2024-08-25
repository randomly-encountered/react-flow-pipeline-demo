import { Icon } from '@iconify/react/dist/iconify.js'
import { Tab } from '@components/tab'
import { Tabs } from '@components/tabs'
import { MOCK_JOB_DATA } from '@core/constants'
import styles from '@layout/toolbar/toolbar.module.css'

/**
 * Contains the view-level tabs and contextual actions relevant to the tab content.
 */
export function Toolbar() {
  const handleRetry = () => {
    window.alert(`Job info \n${JSON.stringify(MOCK_JOB_DATA)}`)
  }

  return (
    <section className={styles['toolbar']}>
      <aside className={styles['toolbar-tabs']}>
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
      </aside>
      <aside className={styles['toolbar-actions']}>
        <button className={styles['secondary']}>
          <Icon fontSize={20} icon='mdi:download-outline' />
          <label className={styles['desktop-only']}>Download all outputs</label>
        </button>
        <button className={styles['primary']} onClick={handleRetry}>
          <Icon className={styles['mobile-only']} fontSize={20} icon='mdi:refresh' />
          <label className={styles['desktop-only']}>Retry job</label>
        </button>
      </aside>
    </section>
  )
}
