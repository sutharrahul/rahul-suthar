import { MouseEvent, useState } from 'react'

function useResume() {
    const [isLoading, setIsLoading] = useState(true)

    const imageUrl = process.env.RESUME_THUMBNAIL_URL || ''

    const onLoadingComplete = () => {
        setIsLoading(false)
    }

    const download = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        window.open(process.env.RESUME_URL)
    }

    return { download, onLoadingComplete, isLoading, imageUrl }
}

export default useResume
