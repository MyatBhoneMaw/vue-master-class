import { supabase } from "@/lib/supabaseClient";
import type { QueryData } from "@supabase/supabase-js";


export const tasksWithProjectsQuery = supabase.from('tasks').select(`
    *,
    projects(
    id,
    slug,
    name
    )
    `)
export type TasksWithProjects = QueryData<typeof tasksWithProjectsQuery>

export const projectQuery = supabase.from('projects').select()
export type Projects = QueryData<typeof projectQuery>