export function getAllDescendants({ parent }: { parent: HTMLElement }): Element[] {
  const allDescendants = []

  if (!parent) {
    throw new Error('Element not found!')
  }

  const getChildren = (node: Element) => {
    for (const child of node.children) {
      getChildren(child)
      allDescendants.push(child)
    }
  }

  getChildren(parent)

  return allDescendants
}
