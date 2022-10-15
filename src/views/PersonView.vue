<template>
    <div v-show="!person && !error">Loading...</div>
    <div v-if="error">
        <p>{{ error }}</p>
        <router-link to="/">Return Home</router-link>
    </div>
    <div v-if="person" class="person">
        <h1>
            <strong>{{ person.name }}</strong>
        </h1>
        <ul>
            <li>
                <div>
                    <b>from:</b>
                    {{ person.homeworld }}
                </div>
            </li>
            <li>
                <div>
                    <b>gender:</b>
                    {{ person.gender }}
                </div>
            </li>
            <li>
                <div>
                    <b>birth year:</b>
                    {{ person.birth_year }}
                </div>
            </li>
            <li>
                <div>
                    <b>height:</b>
                    {{ person.height }}cm
                </div>
            </li>
            <li>
                <div>
                    <b>mass:</b>
                    {{ person.mass }}kg
                </div>
            </li>
            <li>
                <div>
                    <b>eye color:</b>
                    {{ person.eye_color }}
                </div>
            </li>
            <items-list-item
                :show="Boolean(films.length)"
                :itemClass="'films'"
                :items="films"
            />
            <items-list-item
                :show="Boolean(species.length)"
                :itemClass="'species'"
                :items="species"
            />
            <items-list-item
                :show="Boolean(starships.length)"
                :itemClass="'starships'"
                :items="starships"
            />
            <items-list-item
                :show="Boolean(vehicles.length)"
                :itemClass="'vehicles'"
                :items="vehicles"
            />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData, fetchingOptions } from "@/services/api";
import axios, { AxiosError } from "axios";
import { Person } from "@/models/person";
import ItemsListItem from "@/components/ItemsListItem.vue";

export default defineComponent({
    name: "PersonView",
    components: { ItemsListItem },
    data: () => {
        return {
            person: null as Person | null,
            vehicles: [] as any[],
            films: [] as any[],
            species: [] as any[],
            starships: [] as any[],
            error: "",
        };
    },
    methods: {
        async getPerson() {
            try {
                let homeworld = "";
                let vehicles = [] as any[],
                    films = [] as any[],
                    species = [] as any[],
                    starships = [] as any[];

                const results = await fetchData(fetchingOptions.people, {
                    id: this.id as string,
                });
                await Promise.all([
                    // ["films", "species", "starships", "vehicles"].map(
                    //     (prop) => {
                    //         results[prop].map((url) => {
                    //             console.log(url);
                    //             return axios.get(url).then((elem) => {
                    //                 this[prop].push(
                    //                     elem?.data?.name || elem?.data?.title
                    //                 );
                    //             });
                    //         });
                    //     }
                    // ),
                    results["films"].map(async (url) => {
                        return await axios.get(url).then((film) => {
                            films.push(film?.data?.title);
                        });
                    }),
                    results["species"].map(async (url) => {
                        return await axios.get(url).then((specie) => {
                            species.push(specie?.data?.name);
                        });
                    }),
                    results["starships"].map((url) => {
                        return axios.get(url).then((starship) => {
                            starships.push(starship?.data?.name);
                        });
                    }),
                    results["vehicles"].map((url) => {
                        return axios.get(url).then((vehicle) => {
                            vehicles.push(vehicle?.data?.name);
                        });
                    }),
                    axios.get(results["homeworld"]).then((home) => {
                        homeworld = home.data.name;
                    }),
                ]).catch((err) => {
                    this.error = err.message;
                    return Promise.reject(err);
                });

                this.person = results;

                this.films = films;
                this.vehicles = vehicles;
                this.species = species;
                this.starships = starships;
                this.person!.homeworld = homeworld;

                console.log(this.$data);
            } catch (error) {
                if ((error as AxiosError).response?.status === 404) {
                    this.error = "Page was not founded";
                } else {
                    this.error = (error as AxiosError).message;
                }
                console.log(error);
            }
        },
    },
    created() {
        this.getPerson();
    },
    computed: {
        id() {
            return this.$route.params.id;
        },
    },
    watch: {
        films() {
            return this.films;
        },
        vehicles() {
            return this.vehicles;
        },
        species() {
            return this.species;
        },
        starships() {
            return this.starships;
        },
    },
});
</script>

<style lang="scss" scoped>
.person {
    display: flex;
    align-items: flex-start;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem auto;
    min-height: 10rem;
    max-width: 30rem;
    box-shadow: 1px 2px 4px gray;
    padding: 1rem;

    & ul {
        align-items: flex-start;
        flex-wrap: wrap;
        flex-direction: column;
        align-items: baseline;
    }
    @media screen and (max-width: 500px) {
        margin: 1rem;
    }
}
</style>
