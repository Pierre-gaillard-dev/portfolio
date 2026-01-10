const scrollToAnchor = (anchorId: string): void => {
  const element = document.getElementById(anchorId)
  if (element) {
    element.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }
}

export default scrollToAnchor
