import anime from 'animejs'
import { environment } from '~/environment'

export const FADE_OUT_DURATION = environment.animations.fadeOut?.duration || environment.animations.duration

export const fadeOut = (targets: HTMLElement, duration: number = FADE_OUT_DURATION) => {
  anime({
    targets,
    opacity: [1, 0],
    translateY: ['0px', '20px'],
    easing: 'easeOutExpo',
    duration,
    delay: 300
  })
}
