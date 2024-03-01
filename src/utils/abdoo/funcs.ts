export function ran_int(min: number, max: number): number {
    const le_min = Math.ceil(min)
    const le_max = Math.floor(max)

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (le_max - le_min)) + min
}

export function set_p_text(
    element: HTMLParagraphElement,
    le_text: string,
    new_line = true,
) {
    if (new_line === true) element.innerHTML = `<br/>${le_text}`
    else element.innerHTML = le_text
}
