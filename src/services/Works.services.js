import { BASE_URL } from "../config";    

export const getWorks = async () => {
    try {
        const response = await fetch(`${BASE_URL}/works`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al obtener datos del backend');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    export const getSummary = async (id) => {
      try {
        const response = await fetch(`${BASE_URL}/works/${id}/summary`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al obtener datos del backend');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    export const getWork = async (id) => {
      try {
        const response = await fetch(`${BASE_URL}/works/${id}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al obtener datos del backend');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }
    export const searchWork = async (search) => {
      try {
        const response = await fetch(`${BASE_URL}/search?query=${search}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al obtener datos del backend');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }

    export const newWork = async () => {
      try {
        const response = await fetch(`${BASE_URL}/summary`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });
    
        if (!response.ok) {
          throw new Error('Error al obtener datos del backend');
        }
        const data = await response.json();
        return data;
      } catch (error) {
        console.error(error);
        return null;
      }
    }