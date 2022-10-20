import axios from "axios";
axios.defaults.baseURL = process.env.VUE_APP_SWAPI_URL;

export const fetchingOptions = {
    films: "films",
    people: "people",
    planets: "planets",
    species: "species",
    starships: "starships",
    vehicles: "vehicles",
    search: "?search=",
};

export const fetchData = async (
    itemClass = fetchingOptions.people,
    {
        id = "",
        search = "",
        page = 1,
    }: {
        id?: string;
        search?: string;
        page?: number;
    } = {
        id: "",
        search: "",
        page: 1,
    }
) => {
    if (isNaN(page)) {
        page = 1;
    }

    let params;
    id ? (params = {}) : (params = { search, page });

    const { data } = await axios
        .get(itemClass + "/" + id, {
            params: params,
        })
        .catch((error) => {
            return Promise.reject(error);
        });
    return data;
};

export const fetchAdditionalData = async (link: string) => {
    const { data } = await axios.get(link).catch((err) => {
        return Promise.reject(err);
    });
    return data;
};
