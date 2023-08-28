/**
 * Normalizes a hexadecimal color code into an array of normalized RGB values
 */
export const normalizeColor = (hexCode: number) => {
  return [(hexCode >> 16 & 255) / 255, (hexCode >> 8 & 255) / 255, (255 & hexCode) / 255]
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
