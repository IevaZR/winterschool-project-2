export function parseMenuExpression(menuExpression) {
    // Women -> Tops -> Jackets
    const parts = menuExpression.split('->')
    return parts.map((item) => item.trim())
}


export function priceStringToNumber(priceString) {
    //priceString: $77.00
    const numberString = priceString.replace('$', '')
    return Number(numberString)
}