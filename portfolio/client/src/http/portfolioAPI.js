import {$authHost, $host} from "./index";

export const createWork = async (work) => {
    const {data} = await $authHost.post('api/work', work)
    return data
}
export const fetchWorks = async () => {
    const {data} = await $host.get('api/work')
    return data
}
export const fetchOneWork = async (id) => {
    const {data} = await $host.get('api/work/' + id)
    return data

}