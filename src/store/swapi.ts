const swapi = {
    namespaced: true,
    state: { people: [], currentPerson: null },
    getters: {},
    mutations: {
        SET_PEOPLE(state, people) {
            state.people = people;
        },
        SET_CURRENT_PERSON(state, person) {
            state.currentPerson = person;
        },
    },
    actions: {},
};

export default swapi;
