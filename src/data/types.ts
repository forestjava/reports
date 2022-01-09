export type RoleType = {
  id?: string
  name?: string
  relations?: { id: string, name: string }[]
}

export type ReportType = {
  id?: string 
  name?: string
  link?: string
  relations?: { id: string, name: string }[]
}