type TOptions = {
  rootMargin?: string,
  root?: Element,
  threshold?: number|number[]
}
type TCallback = (e: IntersectionObserverEntry[]) => void

const createDOMRect = ({
  x = 0,
  y = 0,
  top = 0,
  right = 0,
  bottom = 0,
  left = 0,
  width = 0,
  height = 0
}: Partial<DOMRect> = {}) =>
  <DOMRect>{
    x,
    y,
    top,
    right,
    bottom,
    left,
    width,
    height
  }

const createIntersectionObserverEntry = (
  target: Element,
  root: Element | Document | null
): IntersectionObserverEntry => {
  const rootElement = root as Element
  const rootBounds = rootElement?.getBoundingClientRect() ?? null
  const boundingClientRect = target.getBoundingClientRect()
  const intersectionRatio = boundingClientRect.width * boundingClientRect.height > 0 ? 1 : 0
  const intersectionRect = <DOMRectReadOnly>createDOMRect()
  const isIntersecting = intersectionRatio > 0
  const time = performance.now()

  return {
    boundingClientRect,
    intersectionRatio,
    intersectionRect,
    isIntersecting,
    rootBounds,
    target,
    time
  }
}

export class IntersectionObserverMock {
  public readonly root: null | Element | Document
  public readonly rootMargin: string
  public readonly thresholds: ReadonlyArray<number>
  private readonly callback: TCallback
  private readonly entries: IntersectionObserverEntry[] = []

  constructor (callback: TCallback, options?: TOptions) {
    this.callback = callback
    this.root = options?.root ?? null
    this.rootMargin = options?.rootMargin ?? '0px'
    this.thresholds = options?.threshold instanceof Array ? options.threshold : [options?.threshold ?? 0]
  }

  observe (target: Element) {
    const entry = createIntersectionObserverEntry(target, this.root)
    this.entries.push(entry)
    this.callback(this.entries)
  }

  unobserve (target: Element) {
    const index = this.entries.findIndex(entry => entry.target === target)
    if (index !== -1) {
      this.entries.splice(index, 1)
    }
  }

  disconnect () {
    this.entries.length = 0
  }

  takeRecords (): IntersectionObserverEntry[] {
    return this.entries.splice(0)
  }

  // if you prefer...
  $simulateIntersection (target: Element, root: null | Element | Document) {
    const entry = createIntersectionObserverEntry(target, root ?? this.root)
    this.callback([entry])
  }
}
