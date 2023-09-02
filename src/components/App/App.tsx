import React, { useEffect, useState, FC } from 'react'
import { observer } from 'mobx-react'
import { setDefaultOptions } from 'date-fns'
import { ru } from 'date-fns/locale'
import { TranslationsProvider } from '@eo-locale/react'
import { Header } from '~/components/Header'
import { Footer } from '~/components/Footer'
import { AppPreview } from './Preview'
import { AppExperience } from './Experience'
import { AppAboutMe } from './AboutMe'
import { AppProjects } from './Projects'
import { AppSkills } from './Skills'
import { AppCareer } from './Career'
import { cnApp, links, careers, experience, projects, skills } from './App.const'
import { Context } from './libs/context'
import type { IAppProps, IAppContext } from './__types__'

import './App.scss'

export const App: FC<IAppProps> = observer(
  function AppView ({ viewModel }) {
    const [data] = useState<IAppContext>({
      careers,
      experience,
      projects,
      skills
    })
    useEffect(() => {
      document.documentElement.setAttribute('lang', viewModel.locales.current)
      setDefaultOptions({ locale: ru, weekStartsOn: 1 })
    }, [viewModel.locales.current])

    return (
      <TranslationsProvider language={viewModel.locales.current} locales={viewModel.locales.locales}
        onError={viewModel.locales.onLocaleError}>
        <Context.Provider value={data}>
          <div className={cnApp()}>
            <Header viewModel={viewModel.header} className={cnApp('Header')} links={links} activeLink='#preview' />
            <main>
              <AppPreview />
              <AppExperience />
              <AppAboutMe />
              <AppProjects />
              <AppSkills />
              <AppCareer />
            </main>
            <Footer />
          </div>
        </Context.Provider>
      </TranslationsProvider>
    )
  }
)

export default App
