export type bootstrapComponentType = {
    id: number,
    icon: string,
    title: string,
    text: string,
}

export type ChildrenType = {
    children?: React.ReactNode,
} & bootstrapComponentType
