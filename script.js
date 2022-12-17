let url = "https://kontests.net/api/v1/all"
let response = fetch(url)
response.then((val)=>{
    return val.json()
}).then((valu)=>{
    console.log(valu);
    ihtml = ""
    for (item in valu){
        console.log(valu[item]);
        ihtml += `
        <div class="card" style="width: 20rem; margin: 12px;
        padding: 20px;">
        <img src="https://img.freepik.com/free-vector/programmer-working-with-php_52683-22998.jpg?w=2000" class="card-img-top" alt="...">
        <div class="card-body">
          <h5 class="card-title">${valu[item].name}</h5>
          <p class="card-text">Status is ${valu[item].status} and the site is  ${valu[item].site} </p>
          <p class="card-text">In 24 Hours ${valu[item].in_24_hours
          }</p>
          <p Starts at : ${valu[item].start_time}></p>
          <p Ends at : ${valu[item].end_time}></p>
          <a href= ${valu[item].url} class="btn btn-primary">Visit Contest</a>
        </div>
      </div>
        `
    }
    cardContainer.innerHTML= ihtml
})





