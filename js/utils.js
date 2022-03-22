function removeHtmlNodes(parent) {
  while (parent.firstChild) {
    parent.removeChild(parent.firstChild)
  }
}

export { removeHtmlNodes }
