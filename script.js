const container = document.querySelector(".container");
const seats = document.querySelectorAll(".row .seats:not(.occupied)");
const count = document.getElementById("count");
const total = document.getElementById("total");
const movieselect = document.getElementById("movie");

let ticketPrice = +movieselect.value;

function updateSelectedCount() {
  const selectedSeats = document.querySelectorAll(".row .seat.selected");
  const selectedSeatsCount = selectedSeats.length;
  count.innerText = selectedSeatsCount;
  total.innerText = selectedSeatsCount * ticketPrice;
}
//movie select event
movieselect,
  addEventListener("change", (e) => {
    ticketPrice = +e.target.value;
    updateSelectedCount();
  });
//seat click event
container.addEventListener("click", (e) => {
  if (
    e.target.classList.contains("seat") &&
    !e.target.classList.contains("occupied")
  ) {
    e.target.classList.toggle("selected");

    updateSelectedCount();
  }
});
