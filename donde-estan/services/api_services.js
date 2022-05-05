const baseUrl = 'http://192.168.0.11:4000/api/desaparecidos';

export const getAll = async () =>{
    const response = await fetch(baseUrl);
    const data = await response.json();
    return data;
}

export const getOne = async (name) =>{
    const response = await fetch(`${baseUrl}/${name}`);
    const data = await response.json();
    return data;
    
}

export const postOne = async (data) =>{
    const response = await fetch(baseUrl, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    });
    const nuevo = await response.json();
    return nuevo;
}