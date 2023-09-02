interface IAnimation {
  duration?: number
}
interface IAnimations {
  slideIn?: IAnimation,
  slideOut?: IAnimation,
  fadeIn?: IAnimation,
  fadeOut?: IAnimation,
  opacity?: IAnimation,
  drawer?: IAnimation,
  duration: number
}

interface IContact {
  [K: string]: string
}

interface IEnvironment {
  animations: IAnimations,
  contacts: IContact
}

export const environment: IEnvironment = {
  animations: {
    drawer: {
      duration: 400
    },
    // default animation duration
    duration: 600
  },
  contacts: {
    git: process.env.CONTACT_GITHUB,
    telegram: process.env.CONTACT_TELEGRAM
  }
}
