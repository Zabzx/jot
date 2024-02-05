export type Note = {
    title: string,
    content: string,
    _id: string
}

export type Todo = {
    task: string,
    _id: string,
    deadline: Date | string
    completed: boolean,
    dateCompleted: Date | string,
    date: Date
}