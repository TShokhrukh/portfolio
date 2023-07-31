/* global test, expect, describe */
import React from 'react'
import { render, screen } from '@testing-library/react'
import { ProjectCard } from '../ProjectCard'
import { IProject } from '../__types__'

describe('ProjectCard', () => {
  test('must return the component template', () => {
    const project: IProject = {
      id: '1',
      href: 'http://localhost:9000/project_card',
      desc: { en: 'project_card' },
      image: 'http://localhost:9000/image.png',
      name: 'project name',
      stack: ['TypeScript', 'JavaScript']
    }
    render(<ProjectCard project={project} data-testid='project_card' />)

    expect(screen.getByTestId('project_card')).toMatchSnapshot()
  })
})
