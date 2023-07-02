function woodCalculator(table, bed, chair) {
    let tableWood = 10;
    let bedeWood = 20;
    let chaireWood = 8;
    const totalTableWood = tableWood * table;
    const totalBedWood = bedeWood * bed;
    const totalchairWood = chaireWood * chair;
    const garndTotal = totalTableWood + totalBedWood + totalchairWood;
    return garndTotal;

}
const table = 5;
const bed = 3;
const chair = 6;

const result = woodCalculator(table, bed, chair);
console.log(result);