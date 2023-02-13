import { RickAndMortyUser, RickAndMortyUserError } from "@/models"

export const rickandMortyURL = {

    characters: "https://rickandmortyapi.com/api/character",
    location: "https://rickandmortyapi.com/api/location",
}

// export const fetchRickAndMorty = async (url: string): Promise<RickAndMortyUser | RickAndMortyUserError> => {
//     return fetch(url).then(res => res.json()).catch( err => err as RickAndMortyUserError)
export const fetchRickAndMorty = async (url: string): Promise<RickAndMortyUser> => {
    return fetch(url).then(res => res.json())
}

