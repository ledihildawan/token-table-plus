import { useRef, useEffect } from "react"

export { SITE_TITLE } from "@/constants"

export function useDocumentTitle(title: string | null) {
  const prevTitle = useRef<string>(document.title)

  useEffect(() => {
    if (!title) {
      return
    }

    if (document.title !== title) {
      document.title = title
    }

    return () => {
      prevTitle.current = document.title
    }
  }, [title])
}
