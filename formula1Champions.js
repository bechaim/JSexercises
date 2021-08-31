// list of Formula 1 champions since the year 2000
const formula1Champions = [
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Schumacher",
    "Alonso",
    "Alonso",
    "Räikkönen",
    "Hamilton",
    "Button",
    "Vettel",
    "Vettel",
    "Vettel",
    "Vettel",
    "Hamilton",
    "Hamilton",
    "Rosberg",
    "Hamilton",
    "Hamilton",
    "Hamilton",
    "Hamilton"
]
let winners = {}

function countWin(driver) {
    switch (driver) {
        case "Schumacher":
            let Schumacher;
            Schumacher++;
            break;
        case "Alonso":
            let Alonso;
            Alonso++;
            break;
        case "Räikkönen":
            let Räikkönen;
            Räikkönen++;
            break;
        case "Hamilton":
            let Hamilton;
            Hamilton++;
            break;
        case "Button":
            let Button;
            Button++;
            break;
        case "Vettel":
            let Vettel;
            Vettel++;
            break;
        case "Rosberg":
            let Rosberg;
            Rosberg++;
            break;
        default:
            break;
    }
}

const driver = {};

formula1Champions.forEach(function(driver) {
    countWin[driver] = (countWin[driver] || 0) + 1; }
    );

console.log(countWin)