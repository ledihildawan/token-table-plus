import Skeleton from "react-loading-skeleton"

export function generateLoadingProperties(value = 7) {
  const data: any = {}

  for (let i = 0; i < value - 1; i++) {
    const key = Math.random().toString(16).slice(2)
    const value = Math.random().toString(16).slice(2)

    data.id = value
    data[key] = value
  }

  return data
}

export function setupLoadingData(value = 7) {
  const data = []

  for (let i = 0; i < value; i++) {
    data.push(generateLoadingProperties(value))
  }

  return data
}

export function setupLoadingColums(labels?: string[]) {
  if (!labels) {
    return []
  }

  const data = []

  for (const label of labels) {
    data.push({
      label,
      renderCell: () => <Skeleton />,
    })
  }

  return data
}
