import { ReportType, RoleType } from "./types";

const BACKEND_API_ROUTE = import.meta.env.VITE_BACKEND_API_ROUTE;

const request = async (query: string, variables: any, transform: (o: any) => any) => { /* TODO typize it stronger */
  return fetch(BACKEND_API_ROUTE, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
    .then(response => response.json())
    .then(json => transform(json))
}

export const LegalAPI = {

  BACKEND_API_ROUTE,

  countReports(filters: { search: string }) {
    return async () => request(
      `
      query($filter: ReportFilterInput!) {
        countReports(filter: $filter)
      }
      `,
      {
        "filter": {
          textSearch: filters.search == '' ? null : filters.search // here this is required parameter
        } 
      },
      response => response.data.countReports
    )  
  },

  getReports(filters: { search: string, currentPage: number, limit: number }) {
    return async () => request(
      `
      query($filter: ReportFilterInput, $pagination: ReportPaginationInput) {
        getReports(filter: $filter, pagination: $pagination) {
          id
          name
        }
      }
      `,
      {
        "filter": filters.search == '' ? null : { // here this is optional parameter
          "textSearch": filters.search
        },
        "pagination": {
          "offset": filters.currentPage * filters.limit,
          "limit": filters.limit
        }
      },
      response => response.data.getReports
    )  
  },

  getReport(id: string) {
    return async () => request(
      `
      query ($getReportId: String!) {
        getReport(id: $getReportId) {
          id
          name
          link
        }
      }
      `,
      { getReportId: id },
      response => response.data.getReport
    )
  },

  saveReport() {
    return async (item: ReportType) => request(
      `
      mutation ($input: PatchReportInput!, $reportPatchId: String!) {
        reportPatch(input: $input, id: $reportPatchId) {
          id
        }
      }
      `,
      { reportPatchId: item.id, input: { name: item.name, link: item.link }},
      response => response.data.reportPatch
    )
  },  

  addReport() {
    return async (item: ReportType) => request(
      `
      mutation ($input: CreateReportInput!) {
        reportCreate(input: $input) {
          id
        }
      }
      `,
      { input: { name: item.name, link: item.link }},
      response => response.data.reportCreate
    )
  },  

  delReport() {
    return async (id: string) => request(
      `
      mutation ($reportRemoveId: String!) {
        reportRemove(id: $reportRemoveId) {
          success
        }
      }      `,
      { reportRemoveId: id },
      response => response.data.reportRemove
    )
  },

  countRoles(filters: { search: string }) {
    return async () => request(
      `
      query ($filter: RoleFilterInput!) {
        countRoles(filter: $filter)
      }
      `,
      {
        "filter": {
          textSearch: filters.search == '' ? null : filters.search // here this is required parameter
        } 
      },
      response => response.data.countRoles
    )  
  },

  getRoles(filters: { search: string, currentPage: number, limit: number }) {
    return async () => request(
      `
      query($filter: RoleFilterInput, $pagination: RolePaginationInput) {
        getRoles(filter: $filter, pagination: $pagination) {
          id
          name
        }
      }
      `,
      {
        "filter": filters.search == '' ? null : { // here this is optional parameter
          "textSearch": filters.search
        },
        "pagination": {
          "offset": filters.currentPage * filters.limit,
          "limit": filters.limit
        }
      },
      response => response.data.getRoles
    )  
  },

  getRole(id: string) {
    return async () => request(
      `
      query ($getRoleId: String!) {
        getRole(id: $getRoleId) {
          id
          name
        }
      }
      `,
      { getRoleId: id },
      response => response.data.getRole
    )
  },

  saveRole() {
    return async (item: RoleType) => request(
      `
      mutation ($input: PatchRoleInput!, $rolePatchId: String!) {
        rolePatch(input: $input, id: $rolePatchId) {
          id
        }
      }
      `,
      { rolePatchId: item.id, input: { name: item.name }},
      response => response.data.rolePatch
    )
  },  

  addRole() {
    return async (item: RoleType) => request(
      `
      mutation ($input: CreateRoleInput!) {
        roleCreate(input: $input) {
          id
        }
      }
      `,
      { input: { name: item.name }},
      response => response.data.roleCreate
    )
  },  

  delRole() {
    return async (id: string) => request(
      `
      mutation ($roleRemoveId: String!) {
        roleRemove(id: $roleRemoveId) {
          success
        }
      }      `,
      { roleRemoveId: id },
      response => response.data.roleRemove
    )
  },


}
