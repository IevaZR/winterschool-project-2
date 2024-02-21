export function parseMenuExpression(menuExpression) {
    // Women -> Tops -> Jackets
    const parts = menuExpression.split('->')
    return parts.map((item) => item.trim())
}

