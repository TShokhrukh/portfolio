import anime from 'animejs'
import { environment } from '~/environment'

export const SLIDE_IN_DURATION = environment.animations.slideIn?.duration || environment.animations.duration

export const slideIn = (targets: HTMLElement, start: string, duration: number = SLIDE_IN_DURATION) => {
  anime({
    targets,
    left: [start, '0px'],
    easing: 'easeInOutQuad',
    duration
  })
}
