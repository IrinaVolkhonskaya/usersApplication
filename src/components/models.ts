export interface IUser {
    id?: number | string
    first_name: string
    last_name: string
    birth_date: string
    gender: string
    job?: string
    biography?: string
    is_active?: boolean
}

export interface IUsers {
    items: IUser[]
    userId?: number
    loading?: boolean
    error?: string
}

export interface State {
    users: IUsers
}