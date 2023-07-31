/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { LanguageWrapper } from '~/utils/jest/LanguageWrapper'
import { ProjectsList } from '../ProjectsList'
import type { IProject } from '../__types__'

describe('ProjectsList', () => {
  test('must return the component template', () => {
    const projects: IProject[] = [
      {
        id: '1',
        href: 'http://localhost:9000/project_card/1',
        desc: { en: 'project_card 1' },
        image: 'http://localhost:9000/image.png',
        name: 'project name 1',
        stack: ['JavaScript']
      },
      {
        id: '2',
        href: 'http://localhost:9000/project_card/2',
        desc: { en: 'project_card 2' },
        image: 'http://localhost:9000/image.png',
        name: 'project name 2',
        stack: ['TypeScript', 'JavaScript']
      }
    ]
    render(
      <LanguageWrapper>
        <ProjectsList projects={projects} data-testid='projects_list' />
      </LanguageWrapper>
    )

    expect(screen.getByTestId('projects_list')).toMatchSnapshot()
  })
})
