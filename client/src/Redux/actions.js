import axios from "axios";

// Aca deben declarar las variables donde tengan el action types.
export const GET_RECIPES = "GET_RECIPES";
export const GET_DIETS = "GET_DIETS";
export const GET_RECIPES_BY_NAME = "GET_RECIPES_BY_NAME";
export const GET_RECIPES_BY_ID = "GET_RECIPES_BY_ID";
export const POST_RECIPES = "POST_RECIPES";

export const getRecipes = async () => dispatch =>{
    return async () => {
        const {data} = axios.get(`http://localhost:3001/recipes`)
        
        return dispatch({type:GET_RECIPES, payload:data})
    }
};



export const getDiets = async () => dispatch =>{
    return async () => {
        const {data} = await axios.get(`http://localhost:3001/diet`)
    
        return dispatch({type: GET_DIETS, payload: data})
    }
};



export const getrecipesByName = async (url) => dispatch =>{
    return async () => {
        const {data} = await axios.get(`http://localhost:3001/recipes?name=${url}`)
        return dispatch({type: GET_RECIPES_BY_NAME, payload: data})
    }}


export const creategetrecipesById = (id) => {
    return async () => {
        const data = await axios.get(`http://localhost:3001/recipes/${id}`);
        return dispatch({type: GET_RECIPES_BY_ID, payload: data})
    }
};

// Desde el componente ejecutamos la action creator, pasandole como argumento el id de la movie que queremos eliminar.
