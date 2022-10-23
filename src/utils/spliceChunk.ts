export const spliceChunk = (array: any[], chunkSize: number) => {
    const result = []
    while(array.length > 0) {
        const chunk = array.splice(0, chunkSize)
        result.push(chunk)
    }
    return result
}
