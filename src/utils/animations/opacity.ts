import anime from 'animejs'
import { environment } from '~/environment'

export const OPACITY_DURATION = environment.animations.opacity?.duration || environment.animations.duration

export const opacity = (targets: HTMLElement, opacity: number[], duration: number = OPACITY_DURATION) => {
  anime({
    targets,
    opacity,
    easing: 'easeInOutQuad',
    duration
  })
}
