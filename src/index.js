const fullname = document.getElementById("fullname");
console.log("CONTENT NOT YET LOADED!", fullname); //what will fullname evaluate to?

document.addEventListener("DOMContentLoaded", () => {
  console.log("CONTENT LOADED!");
  document.getElementById("but").addEventListener("click", function() {
    let data = fetch("https://randomuser.me/api/").then(function(response){return response.json()}).then(function(json){
  let info = json.results[0];
  console.log(info);
  document.getElementById("profile_picture").src = json.results[0].picture.thumbnail;
  document.getElementById("fullname").textContent = info.name.first + " " + info.name.last;
  document.getElementById("email").textContent = info.email;
  document.getElementById("street").textContent = info.location.street;
  document.getElementById("city").textContent = info.location.city;
  document.getElementById("state").textContent = info.location.state;
  document.getElementById("postcode").textContent = info.location.postcode;
  document.getElementById("phone").textContent = info.phone;
  document.getElementById("cell").textContent = info.cell;
  document.getElementById("date_of_birth").textContent = info.dob.date.split("T")[0];
});
  });
});
function summonPerson() {
}
