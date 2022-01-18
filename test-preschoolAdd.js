// import... from... helyett
const preschoolAdd = require("./preschoolAdd");
const check = require("./myTestLib")

check(preschoolAdd(5, 2), 7, "10-nél kisebb egész szám eredményénél megkapjuk a számot");
check(preschoolAdd(5.3, 2), 7, "10-nél kisebb tört számnál lefele kerekít");
check(preschoolAdd(5, 7), "Sok", "10-nél nagyobb számnál kiírja, hogy sok");
check(preschoolAdd(5, -7), 0, "Negatív számra kiírja, hogy 0");
check(preschoolAdd(5, 5), 10, "10-re visszaadja a 10-et");