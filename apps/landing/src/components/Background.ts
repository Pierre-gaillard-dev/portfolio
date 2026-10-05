import { seededRandom } from '../utils/seededRandom'

const density = 1 / 10000 // (px²)
const spawnDuration = 10000 // ms

const stars: Element[] = []

const container = document.querySelector('.background')
if (!container) console.error('no background found')

const resetBg = () => {
  if (!container) return
  stars.forEach((star) => star.remove())
  container.innerHTML = ''
}

const renderStars = () => {
  if (!container) return
  resetBg()

  const dimensions = container.getBoundingClientRect()
  const amount = dimensions.width * dimensions.height * density

  for (let i = 0; i < amount; i++) {
    const star = document.createElement('div')
    star.setAttribute('class', 'bg-star')
    star.setAttribute('aria-hidden', 'true')
    star.style.top = `${seededRandom(i + 1) * 100}%`
    star.style.left = `${seededRandom(i * 2) * 100}%`
    star.style.opacity = `${seededRandom(i * 4) * 0.4 + 0.3}`
    star.style.width = `${seededRandom(i * 5) * 3}px`
    star.style.height = star.style.width
    star.style.animationDelay = `${(i / amount) * spawnDuration}ms`

    container.appendChild(star)
  }
}

renderStars()
