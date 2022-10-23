import React, { ReactNode } from 'react'

interface MapProps {
    items: any[],
    mapCallback: (item: any[], keyId: number) => ReactNode
}

export const Map: React.FC<MapProps> = ({items, mapCallback}) => {
    let keyId = 0

    return (
        <>
            {items.map(item => mapCallback(item, ++keyId))}
        </>
    )
}
