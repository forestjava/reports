import { ReportType, RoleType } from "./types";

const BACKEND_API_ROUTE = import.meta.env.VITE_BACKEND_API_ROUTE_INSTEAD!;

const request = async (query: string, variables: any, transform: (o: any) => any) => { /* TODO typize it stronger */
  return fetch(BACKEND_API_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'x-hasura-admin-secret': import.meta.env.VITE_ADMIN_SECRET!
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
    .then(response => response.json())
    .then(json => transform(json))
}

export const EmergencyAPI = {

  BACKEND_API_ROUTE,

  countReports(filters: { search: string }) {
    return async () => request(
      `
      query ($where: reports_bool_exp!) {
        reports_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }
      `,
      {
        where: filters.search == '' ? {} : { name: { _like: `%${filters.search}%`}},
      },
      response => response.data.reports_aggregate.aggregate.count
    )  
  },

  getReports(filters: { search: string, currentPage: number, limit: number }) {
    return async () => request(
      `
      query ($where: reports_bool_exp!, $limit: Int!, $offset: Int!) {
        reports(where: $where, limit: $limit, offset: $offset) {
          id
          name
        }
      }
      `,
      {
        where: filters.search == '' ? {} : { name: { _like: `%${filters.search}%`}},
        limit: filters.limit,
        offset: filters.currentPage * filters.limit,
      },
      response => response.data.reports
    )  
  },

  getReport(id: string) {
    return async () => request(
      `
      query ($id: uuid!) {
        reports_by_pk(id: $id) {
          id
          name
          link
        }
      }
      `,
      { id },
      response => response.data.reports_by_pk
    )
  },

  saveReport() {
    return async (item: ReportType) => request(
      `
      mutation ($id: uuid!, $link: String!, $name: String!) {
        update_reports_by_pk(pk_columns: {id: $id}, _set: {link: $link, name: $name}) {
          id
        }
      }
      `,
      { id: item.id, name: item.name, link: item.link },
      response => response.data.reports_by_pk
    )
  },  

  addReport() {
    return async (item: ReportType) => request(
      `
      mutation ($link: String!, $name: String!) {
        insert_reports_one(object: {link: $link, name: $name}) {
          id
        }
      }
      `,
      { name: item.name, link: item.link },
      response => response.data.reports_by_pk
    )
  },  

  delReport() {
    return async (id: string) => request(
      `
      mutation ($id: uuid!) {
        delete_reports_by_pk(id: $id) {
          link
          name
        }
      }
      `,
      { id },
      response => response.data.delete_reports_by_pk
    )
  },

  countRoles(filters: { search: string }) {
    return async () => request(
      `
      query ($where: roles_bool_exp!) {
        roles_aggregate(where: $where) {
          aggregate {
            count
          }
        }
      }
      `,
      {
        where: filters.search == '' ? {} : { name: { _like: `%${filters.search}%`}},
      },
      response => response.data.roles_aggregate.aggregate.count
    )  
  },

  getRoles(filters: { search: string, currentPage: number, limit: number }) {
    return async () => request(
      `
      query ($where: roles_bool_exp!, $limit: Int!, $offset: Int!) {
        roles(where: $where, limit: $limit, offset: $offset) {
          id
          name
        }
      }
      `,
      {
        where: filters.search == '' ? {} : { name: { _like: `%${filters.search}%`}},
        limit: filters.limit,
        offset: filters.currentPage * filters.limit,
      },
      response => response.data.roles
    )  
  },

  getRole(id: string) {
    return async () => request(
      `
      query ($id: uuid!) {
        roles_by_pk(id: $id) {
          id
          name
        }
      }
      `,
      { id },
      response => response.data.roles_by_pk
    )
  },

  saveRole() {
    return async (item: RoleType) => request(
      `
      mutation ($id: uuid!, $name: String!) {
        update_roles_by_pk(pk_columns: {id: $id}, _set: {name: $name}) {
          id
        }
      }
      `,
      { id: item.id, name: item.name },
      response => response.data.update_roles_by_pk
    )
  },  

  addRole() {
    return async (item: RoleType) => request(
      `
      mutation ($name: String!) {
        insert_roles_one(object: {name: $name}) {
          id
        }
      }
      `,
      { name: item.name },
      response => response.data.insert_roles_one
    )
  },  

  delRole() {
    return async (id: string) => request(
      `
      mutation ($id: uuid!) {
        delete_roles_by_pk(id: $id) {
          name
        }
      }
      `,
      { id },
      response => response.data.delete_roles_by_pk
    )
  },

}
