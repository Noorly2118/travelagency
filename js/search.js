function searchDestination() {

    let input =
        document.getElementById("searchInput")
        .value
        .toLowerCase();

    let cards =
        document.querySelectorAll(".destination-card");

    cards.forEach(card => {

        let title =
            card.querySelector("h5")
            .textContent
            .toLowerCase();

        if(title.includes(input)){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}

function filterDestinations(category){

    let cards =
        document.querySelectorAll(".destination-card");

    cards.forEach(card => {

        if(
            category === "all" ||
            card.dataset.category === category
        ){
            card.style.display = "block";
        }
        else{
            card.style.display = "none";
        }

    });

}