<template>
    <h2 class="home">Star Wars Info</h2>
    <home-section
        :itemType="'people'"
        :items="people"
        :heading="'Meet your Heroes'"
        :tab="2"
    />
    <home-section
        :itemType="'planets'"
        :items="planets"
        :heading="'Planets in the Galaxy'"
        :tab="3"
    />
    <home-section
        :itemType="'films'"
        :items="films"
        :heading="'Movies of the Saga'"
        :tab="4"
    />
    <home-section
        :itemType="'species'"
        :items="species"
        :heading="'All kinds of species'"
        :tab="5"
    />
    <home-section
        :itemType="'starships'"
        :items="starships"
        :heading="'Starships'"
        :tab="6"
    />
    <home-section
        :itemType="'vehicles'"
        :items="vehicles"
        :heading="'Vehicles'"
        :tab="7"
    />
</template>

<script lang="ts">
import HomeSection from "@/components/HomeSection.vue";
import { fetchData, fetchingOptions } from "@/services/api";
import { defineComponent } from "vue";

export default defineComponent({
    name: "HomeView",
    components: { HomeSection },
    data() {
        return {
            films: [],
            people: [],
            planets: [],
            vehicles: [],
            species: [],
            starships: [],
        };
    },
    methods: {
        async getAllFilms() {
            let { results } = await fetchData(fetchingOptions.films);
            this.films = results;
        },
        async getAllPlanets() {
            let { results } = await fetchData(fetchingOptions.planets);
            this.planets = results.slice(0, 6);
        },
        async getAllPeople() {
            let { results } = await fetchData(fetchingOptions.people);
            this.people = results.slice(0, 6);
        },
        async getAllVehicles() {
            let { results } = await fetchData(fetchingOptions.vehicles);
            this.vehicles = results.slice(0, 6);
        },
        async getAllStarships() {
            let { results } = await fetchData(fetchingOptions.starships);
            this.starships = results.slice(0, 6);
        },
        async getAllSpecies() {
            let { results } = await fetchData(fetchingOptions.species);
            this.species = results.slice(0, 6);
        },
    },
    mounted() {
        Promise.all([
            this.getAllFilms(),
            this.getAllPeople(),
            this.getAllPlanets(),
            this.getAllStarships(),
            this.getAllSpecies(),
            this.getAllVehicles(),
        ]);
    },
});
</script>

<style lang="scss" scoped></style>
