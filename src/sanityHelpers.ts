import { createClient } from "@sanity/client";

const projectsQuery = `*[_type == "project"] | order(_createdAt desc) {
    name,
    description,
    image {
        asset->{
            _id,
            url
        },
        alt
    },
    link,
    skills,
    year
}`

export const client = createClient({
    projectId: 'fyzzy8lv',
    dataset: 'production',
    useCdn: true,
    apiVersion: '2025-02-03'
})

export async function getProjects() {
    const projects = await client.fetch(projectsQuery)
    return projects
}

export async function getInfopanel() {
    const infopanel = await client.fetch('*[_type == "infoPanel"]')
    return infopanel
  }