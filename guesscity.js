function guessCity(capital, coastal, famous, ancient) 
{ 
    if (capital && !coastal && famous && ancient) {
        return "Jerusalem";
    }
    else if (capital && coastal && famous && !ancient) {
        return "Tel Aviv";
    }
    else if (!capital && coastal && !famous && ancient) {
        return "Acre";
    }
    else if (!capital && !coastal && !famous && ancient) {
        return "Katzrin";
    }
    else if (!capital && coastal && !famous && !ancient) {
        return "Zikim";
    }
    else if (!capital && !coastal && !famous && !ancient) {
    return "Musmus";
    }
    else
    return "I don't know this city";
}

console.log(guessCity(true, false, true, true));