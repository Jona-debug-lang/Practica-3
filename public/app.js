const NUM_RESULTS = 3;

let loadMoreRequests = 0;

async function loadMore(){

    const from = (loadMoreRequests+1) * NUM_RESULTS;
    const to = from + NUM_RESULTS;

    const response = await fetch(`/corrientes?from=${from}&to=${to}`);

    const newCorrientes = await response.text();
  
    const corrientesDiv = document.getElementById("corrientes");

    corrientesDiv.innerHTML += newCorrientes;

    loadMoreRequests++;
}