const URL_SERVER = 'http://localhost:8000/';

export const getAllRuns = async () => {
    try {
        const res = await fetch(URL_SERVER);
        return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const createRun = async (run) => {
    try {
        const res = await fetch(URL_SERVER, {
            method: 'POST',
            headers: {'Content Type': 'application/json'},
            body: JSON.stringify(run),
        }); return await res.json();
    } catch (error) {
        console.log(error);
    }
};

export const deleteRun = async(id) => {
    console.log(id)
    try {
        const res = await fetch(URL_SERVER +id, {
            method: 'DELETE',
            headers: {'Content Type': 'application/json'},
        }); return await res.json();
    } catch (error) {
        console.log(error)
    }
};