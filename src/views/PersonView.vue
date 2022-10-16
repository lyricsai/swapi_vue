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
                <b>from:</b>
                <items-list-item
                    :itemClass="'homeworld'"
                    :links="person.homeworld"
                />
            </li>
            <li>
                <b>gender:</b>
                {{ person.gender }}
            </li>
            <li>
                <b>birth year:</b>
                {{ person.birth_year }}
            </li>
            <li>
                <b>height:</b>
                {{ person.height }}cm
            </li>
            <li>
                <b>mass:</b>
                {{ person.mass }}kg
            </li>
            <li>
                <b>eye color:</b>
                {{ person.eye_color }}
            </li>
            <items-list-item :itemClass="'films'" :links="person.films" />
            <items-list-item :itemClass="'species'" :links="person.species" />
            <items-list-item
                :itemClass="'starships'"
                :links="person.starships"
            />
            <items-list-item :itemClass="'vehicles'" :links="person.vehicles" />
        </ul>
    </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { fetchData, fetchingOptions } from "@/services/api";
import { AxiosError } from "axios";
import { Person } from "@/models/person";
import ItemsListItem from "@/components/ItemsListItem.vue";

export default defineComponent({
    name: "PersonView",
    components: { ItemsListItem },

    data: () => {
        return {
            person: null as null | (Person & { additional?: unknown }),
            error: "",
        };
    },

    methods: {
        async getPerson() {
            try {
                const res = await fetchData(fetchingOptions.people, {
                    id: this.id as string,
                });
                this.person = res;
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
});
</script>

<style lang="scss" scoped>
.person {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 1rem auto;
    min-height: 10rem;
    max-width: 30rem;
    min-width: 20rem;
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
