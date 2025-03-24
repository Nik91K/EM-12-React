export type commentType = {
    id: number,
    author: string,
    text: string,
    date: string,
}

export type ChildrenType = {
    children?: React.ReactNode,
} & commentType

// export type PostComment = {
//     author: string, 
//     text: string, 
//     date: string,
// }
