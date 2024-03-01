function ran_int(min: number, max: number): number {
    const le_min = Math.ceil(min)
    const le_max = Math.floor(max)

    // The maximum is exclusive and the minimum is inclusive
    return Math.floor(Math.random() * (le_max - le_min)) + min
}
