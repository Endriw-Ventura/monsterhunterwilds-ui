export type Monster = {
    id: number
    name: string
    description: string
    elements: string[]
    ailments: string[]
    weaknesses: string[]
    habitats: string[]
    size: string
    img: string
    icon: string
    drops: {
        lowrank: string[]
        highrank: string[]
        masterrank: string[]
    }
    species: string
}
