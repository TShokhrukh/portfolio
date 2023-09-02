import anime from 'animejs'
import { environment } from '~/environment'

export const FADE_IN_DURATION = environment.animations.fadeIn?.duration || environment.animations.duration

export const fadeIn = (targets: HTMLElement, duration: number = FADE_IN_DURATION) => {
  anime({
    targets,
    opacity: [0, 1],
    translateY: ['20px', '0px'],
    easing: 'easeOutExpo',
    duration,
    delay: 300
  })
}
