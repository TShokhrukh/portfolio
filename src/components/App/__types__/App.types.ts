import type { TCareersList, TExperienceList, TProjectsList, TSkillsList } from '~/types'
import type { IAppViewModel } from './App.model.types'

export interface IAppProps {
  viewModel: IAppViewModel
}

export interface IAppContext {
  projects: TProjectsList,
  skills: TSkillsList,
  experience: TExperienceList,
  careers: TCareersList
}
