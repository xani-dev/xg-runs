const SERVER_URL = "http://localhost:8001/runs";

export const getRuns = async () => {
  try {
    const res = await fetch(SERVER_URL);
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const newRun = async (run) => {
  try {
    const res = await fetch(SERVER_URL, {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(run),
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};

export const deleteRun = async (index) => {
  try {
    const res = await fetch(SERVER_URL + index, {
      method: "DELETE",
      headers: { "Content-type": "application/json" },
    });
    return await res.json();
  } catch (error) {
    console.log(error);
  }
};
