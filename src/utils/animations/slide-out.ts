import anime from 'animejs'
import { environment } from '~/environment'

export const SLIDE_OUT_DURATION = environment.animations.slideOut?.duration || environment.animations.duration

export const slideOut = (targets: HTMLElement, end: string, duration: number = SLIDE_OUT_DURATION) => {
  anime({
    targets,
    left: ['0px', end],
    easing: 'easeInOutQuad',
    duration
  })
}
