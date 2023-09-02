/**
 * Normalizes a hexadecimal color code into an array of normalized RGB values
 */
export const normalizeColor = (hexCode: number) => {
  return [
    ((hexCode >> 16) & 255) / 255,
    ((hexCode >> 8) & 255) / 255,
    (255 & hexCode) / 255
  ]
}

export const getRandomNumberUp = (to: number) => Math.floor(Math.random() * to)

export function getMajorLength({ messages }: { messages: string[] }) {
  let majorLength = 0

  for (const message of messages) {
    const { length } = message

    majorLength = length > majorLength ? length : majorLength
  }

  return majorLength
}

export const getParsedCSSVariableDuration = ({
  variableName
}: {
  variableName: string
}): number => {
  const rawVariable = getComputedStyle(
    document.documentElement
  ).getPropertyValue(variableName)

  if (!rawVariable) {
    throw new Error(`CSS variable name "${variableName}" does not exists!`)
  }

  if (!rawVariable.endsWith('s')) {
    throw new Error(
      `Given variable "${variableName}" does not have a value in seconds (Given Value: ${rawVariable})`
    )
  }

  const parsedSeconds = parseFloat(rawVariable)

  if (isNaN(parsedSeconds)) {
    throw new Error(`Cannot convert "${variableName}" to number`)
  }

  return parsedSeconds * 1000
}
