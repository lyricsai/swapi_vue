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
    fetchingData = fetchingOptions.people,
    {
        id = "",
        searchFor = "",
        page = 1,
    }: {
        id?: string;
        searchFor?: string;
        page?: number | null;
    } = {
        id: "",
        searchFor: "",
        page: 1,
    }
) => {
    let query = "";

    id
        ? (query = "/" + id)
        : searchFor && (query = "/" + fetchingOptions.search + searchFor);

    if (page === 1) {
        page = null;
    }

    const url = fetchingData + query;

    console.log(url);
    const { data } = await axios
        .get(url, {
            params: {
                page: page,
            },
        })
        .catch((error) => {
            return Promise.reject(error);
        });
    return data;
};
