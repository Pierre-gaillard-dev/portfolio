const scrollToAnchor = (anchorId: string): void => {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  } else {
    console.warn(`Element with ID ${anchorId} not found.`)
  }
}

export default scrollToAnchor
