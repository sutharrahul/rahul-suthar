import { MouseEvent, useState } from 'react'

function useResume() {
    const [isLoading, setIsLoading] = useState(true)

    const imageUrl =
        'https://drive.google.com/uc?export=view&id=12hoAsHOmpt9OeifCjefaozHCvPrpIaE8'

    const onLoadingComplete = () => {
        setIsLoading(false)
    }

    const download = (e: MouseEvent<HTMLButtonElement>) => {
        e.stopPropagation()
        window.open(
            'https://drive.google.com/file/d/1MrGOz9wfxH4qaN02FRLts6oEM1Vi3Jzg/view',
        )
    }

    return { download, onLoadingComplete, isLoading, imageUrl }
}

export default useResume
