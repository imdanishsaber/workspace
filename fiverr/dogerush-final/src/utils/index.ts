export const trimToDecimalPlaces = (
    value: string | number,
    places = 1,
    toLocaleString = false,
): string | number => {
    if (!value) return ''

    let _value

    if (!+places) {
        _value = parseInt(value.toString())
    } else {
        _value = parseFloat(value.toString())
            .toFixed(places)
            .replace(/^0+(\d)|(\d)0+$/gm, '$1$2')
    }

    if (toLocaleString) {
        _value = parseFloat(_value.toString()).toLocaleString()
    }

    return _value
}

export const percentage = (value: number, of: number, decimals: number) => {
    return trimToDecimalPlaces((value * 100) / of, decimals)
}

export const returnToZeroString = (value: number | string) => {
    if (!value) return '0.0'

    return value
}
