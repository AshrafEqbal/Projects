function displayElement(index) {
let atomicNumber=1;
atomicNumber+=index;
drawAtom(atomicNumber);  

let elements = [
    "Hydrogen", "Helium", "Lithium", "Beryllium", "Boron", "Carbon", "Nitrogen", "Oxygen", "Fluorine", "Neon", 
    "Sodium", "Magnesium", "Aluminum", "Silicon", "Phosphorus", "Sulfur", "Chlorine", "Argon", "Potassium", "Calcium", 
    "Scandium", "Titanium", "Vanadium", "Chromium", "Manganese", "Iron", "Cobalt", "Nickel", "Copper", "Zinc", 
    "Gallium", "Germanium", "Arsenic", "Selenium", "Bromine", "Krypton", "Rubidium", "Strontium", "Yttrium", "Zirconium", 
    "Niobium", "Molybdenum", "Technetium", "Ruthenium", "Rhodium", "Palladium", "Silver", "Cadmium", "Indium", "Tin", 
    "Antimony", "Tellurium", "Iodine", "Xenon", "Cesium", "Barium", "Lanthanum", "Cerium", "Praseodymium", "Neodymium", 
    "Promethium", "Samarium", "Europium", "Gadolinium", "Terbium", "Dysprosium", "Holmium", "Erbium", "Thulium", "Ytterbium", 
    "Lutetium", "Hafnium", "Tantalum", "Tungsten", "Rhenium", "Osmium", "Iridium", "Platinum", "Gold", "Mercury", 
    "Thallium", "Lead", "Bismuth", "Polonium", "Astatine", "Radon", "Francium", "Radium", "Actinium", "Thorium", 
    "Protactinium", "Uranium", "Neptunium", "Plutonium", "Americium", "Curium", "Berkelium", "Californium", "Einsteinium", 
    "Fermium", "Mendelevium", "Nobelium", "Lawrencium", "Rutherfordium", "Dubnium", "Seaborgium", "Bohrium", "Hassium", 
    "Meitnerium", "Darmstadtium", "Roentgenium", "Copernicium", "Nihonium", "Flerovium", "Moscovium", "Livermorium", 
    "Tennessine", "Oganesson"
];


let atomic_mass= [
    1.008, 4.0026, 6.94, 9.0122, 10.81, 12.011, 14.007, 15.999, 18.998, 20.180, 22.99, 24.305, 26.982, 28.085, 
    30.974, 32.06, 35.45, 39.948, 39.098, 40.078, 44.956, 47.867, 50.942, 51.996, 54.938, 55.845, 58.933, 58.693, 
    63.546, 65.38, 69.723, 72.63, 74.922, 78.971, 79.904, 83.798, 85.468, 87.62, 88.906, 91.224, 92.906, 95.95, 
    98, 101.07, 102.91, 106.42, 107.87, 112.41, 114.82, 118.71, 121.76, 127.6, 126.9, 131.29, 132.91, 137.33, 
    138.91, 140.12, 140.91, 144.24, 144.91, 150.36, 151.96, 157.25, 158.93, 162.5, 164.93, 167.26, 168.93, 173.05, 
    174.97, 178.49, 180.95, 183.84, 186.21, 190.23, 192.22, 195.08, 196.97, 200.59, 204.38, 207.2, 208.98, 209, 
    210, 222, 223, 226, 227, 232.04, 231.04, 238.03, 237, 244, 243, 247, 247, 251, 252, 257, 258, 259, 262, 
    267, 270, 270, 277, 276, 281, 280, 285, 284, 289, 288, 293, 294
];

let atomic_number = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 
    21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 
    39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 
    57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 
    75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 
    93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118
];


let state_at_room_temp = ["Gas" ,"Gas", "Solid", "Solid", "Solid","Solid", "Gas", "Gas", "Gas", "Gas","Solid", "Solid", "Solid", "Solid", "Solid",
    "Solid", "Gas", "Gas", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid",                                       "Solid", "Solid", "Solid", "Solid","Gas", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Gas", "Gas", "Gas","Gas", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid", "Solid","Solid", "Solid", "Solid", "Solid"
];

melting_points_of_elements=[
[-259.14,-434.45,14.01],[-272.2,-458.0,20.28],[180.54,356.97,453.69],[1287.0,2348.6,1560.0],[2075.0,3767.0,2270.0],[3550.0,6422.0,3823.0],[-210.0,-346.0,63.15],[-218.79,-361.82,90.20],[-219.67,-363.41,85.03],[-248.59,-415.46,27.07],[97.72,208.0,370.87],[650.0,1202.0,922.0],[660.32,1220.58,933.47],[1414.0,2577.2,1687.0],[44.15,111.47,317.3],[115.21,239.38,388.36],[-101.5,-150.7,171.65],[-189.35,-308.83,83.8],[63.5,146.3,336.53],[842.0,1547.6,1115.0],[1541.0,2805.8,1814.0],[1668.0,3034.4,1941.0],
[1910.0,3461.0,2183.0],[1907.0,3464.6,2180.0],[1246.0,2274.8,1519.0],[1538.0,2800.4,1811.0],[1495.0,2723.0,1768.0],[1455.0,2651.0,1728.0],[1084.62,1984.316,1357.77],
[419.53,787.154,692.68],[29.76,85.57,302.9146],[938.25,1718.85,1211.40],[81.0,177.8,354.0],[217.0,422.6,490.0],[-7.2,19.04,265.8],[-157.36,-251.25,119.93],[39.3,102.74,312.46],[777.0,1427.0,1040.0],[1526.0,2778.8,1799.0],[1855.0,3371.0,2128.0],[2477.0,4490.6,2741.0],[2623.0,4753.4,2896.0],[2430.0,4406.0,2700.0],[2334.0,4233.2,2607.0],[1966.0,3570.8,2237.0],[1554.9,2830.82,1828.05],[961.78,1763.2,1234.93],[321.07,609.926,594.22],[156.60,313.88,429.75],[231.93,449.47,505.08],[630.0,1166.0,903.78],
[450.0,842.0,722.66],[113.7,236.66,386.85],[-111.75,-169.15,161.36],[28.44,83.19,301.59],[727.0,1340.6,1000.0],[920.0,1688.0,1193.0],[798.0,1468.4,1071.0],[931.0,1707.8,1204.0],[1024.0,1875.2,1297.0],[1100.0,2012.0,1373.0],[1072.0,1961.6,1345.0],[822.0,1511.6,1099.0],[1312.0,2393.6,1585.0],[1360.0,2480.0,1633.0],[1412.0,2573.6,1685.0],[1461.0,2661.8,1734.0],[1529.0,2784.2,1802.0],[1545.0,2813.0,1818.0],[819.0,1506.2,1091.0],[1652.0,3005.6,1925.0],[2233.0,4051.4,2506.0],[3017.0,5462.6,3300.0],[3180.0,5762.0,3290.0],[2468.0,4474.4,2766.0],[2334.0,4233.2,2607.0],[1925.0,3500.0,2258.0],[1768.0,3224.4,2117.0],[1064.18,1947.52,1337.33],[327.46,621.432,600.75],[304.32,579.78,577.0],[505.08,941.14,778.08],[1064.18,1337.33,1947.52],[1495.0,2723.0,1768.0],[2996.0,5424.8,3269.0],[-117.35,-182.43,155.72],[700.0,1292.0,973.0],[899.85,1651.73,1173.15],[1050.0,1922.0,1323.0],[1132.0,2072.0,1405.0],[1340.0,2444.0,1613.0],[1405.0,2561.0,1678.0],[1602.0,2915.6,1875.0],[1227.0,2240.6,1500.0],[1315.0,2399.0,1588.0],[1340.0,2444.0,1613.0],[1613.0,2933.4,1886.0],[1259.0,2298.2,1532.0],[860.0,1580.0,1133.0],[1130.0,2066.0,1403.0],[890.0,1634.0,1163.0],[1227.0,2240.6,1500.0],[1627.0,2960.6,1900.0],[1130.0,2060.0,1400.0],[2500.0,4532.0,2732.0],[2550.0,4622.0,2760.0],[2015.0,3660.0,2200.0],[2680.0,4864.0,3000.0],[2230.0,4046.0,2476.0],[1450.0,2642.0,1760.0],[1700.0,3092.0,1830.0],[1000.0,1832.0,1200.0],[1080.0,1976.0,1350.0],[1000.0,1832.0,1200.0],[1600.0,2912.0,1870.0],[600.0,1112.0,1110.0],[2400.0,4352.0,2570.0],[500.0,932.0,800.0],
]


boiling_points_of_elements=[[-252.87, -423.166, 20.28],[-268.93, -452.074, 4.22],[1342.0, 2447.6, 1615.0],[2471.0, 4483.8, 2744.0],[3930.0, 7106.0, 4200.0],[4027.0, 7280.6, 4270.0],[-195.79, -320.42, 77.35],[-182.96, -297.33, 90.2],[-188.11, -306.6, 85.03],[-246.05, -410.89, 27.07],[882.9, 1621.22, 1156.1],[1090.0, 1994.0, 1363.0],[2519.0, 4566.2, 2792.0],[3265.0, 5909.0, 3538.0],[280.5, 536.9, 473.2],[444.6, 832.28, 717.8],[-34.6, -30.32, 239.11],[-185.85, -302.53, 87.3],
[759.0, 1398.2, 1032.0],[1484.0, 2703.2, 1757.0],[2870.0, 5200.0, 3140.0],[3200.0, 5792.0, 3473.0],[2900.0, 5250.0, 3140.0],[3380.0, 6116.0, 3640.0],[2925.0, 5300.0, 3190.0],[2800.0, 5072.0, 2935.0],[3340.0, 6064.0, 3630.0],[2870.0, 5200.0, 3140.0],[1802.0, 3275.6, 2075.0],[2562.0, 4643.6, 2835.0],[908.0, 1667.0, 1180.0],[2800.0, 5072.0, 2935.0],[2640.0, 4784.0, 2895.0],[440.0, 824.0, 706.0],[244.0, 471.0, 404.0],[-185.0, -302.0, 85.0],[882.9, 1621.22, 1156.1],[1090.0, 1994.0, 1363.0],[1340.0, 2440.0, 1600.0],[2390.0, 4346.0, 2760.0],[4140.0, 7500.0, 4420.0],[3650.0, 6580.0, 3960.0],[5820.0, 10500.0, 5560.0],[4900.0, 8850.0, 5000.0],[4140.0, 7500.0, 4420.0],
[3190.0, 5780.0, 3360.0],[2870.0, 5250.0, 3140.0],[2550.0, 4620.0, 2780.0],[907.0, 1667.0, 1180.0],[2280.0, 4140.0, 2495.0],[2600.0, 4720.0, 2875.0],[588.0, 1090.0, 660.0],[116.0, 241.0, 217.0],[-157.36, -251.25, 119.93],[883.0, 1621.0, 1158.0],[1413.0, 2574.0, 1686.0],[1600.0, 2916.0, 1875.0],[3480.0, 6300.0, 3840.0],[2850.0, 5160.0, 3160.0],[3270.0, 5918.0, 3480.0],[3990.0, 7220.0, 4230.0],[2570.0, 4660.0, 2800.0],[3480.0, 6300.0, 3840.0],[3930.0, 7100.0, 4200.0],[4120.0, 7480.0, 4440.0],
[4000.0, 7230.0, 4260.0],[5410.0, 9790.0, 5160.0],[2200.0, 3990.0, 2450.0],[3390.0, 6140.0, 3670.0],[5400.0, 9790.0, 5160.0],[3000.0, 5430.0, 3250.0],[5590.0, 10100.0, 5750.0],[5828.0, 10502.4, 5563.0],[5430.0, 9790.0, 5160.0],[5580.0, 10220.0, 5730.0],[2870.0, 5250.0, 3140.0],[2660.0, 4820.0, 2900.0],[2914.0, 5280.0, 3190.0],[2570.0, 4660.0, 2800.0],[959.0, 1762.0, 1235.0],[2510.0, 4540.0, 2790.0],[2700.0, 4892.0, 2900.0],[1470.0, 2678.0, 1200.0],[3000.0, 5430.0, 3250.0],[957.0, 1754.6, 1234.0],[-62.0, -79.6, 218.5],[883.0, 1620.0, 1158.0],[1650.0, 3000.0, 1870.0],[900.0, 1650.0, 1190.0],[1050.0, 1922.0, 1360.0],[1400.0, 2552.0, 1870.0],
[3020.0, 5496.0, 3270.0],[5600.0, 10100.0, 5750.0],[4700.0, 8520.0, 5090.0],[6000.0, 10900.0, 6500.0],[4000.0, 7260.0, 4280.0],[4000.0, 7260.0, 4280.0],[4270.0, 7770.0, 4570.0],[4000.0, 7260.0, 4280.0],[2562.0, 4643.6, 2835.0],[2500.0, 4536.0, 2720.0],[2470.0, 4478.6, 2746.0],[2227.0, 4039.0, 2480.0],[4010.0, 7260.0, 4280.0],[5862.0, 10500.0, 5890.0],[5810.0, 10530.0, 5820.0],[5695.0, 10304.0, 5728.0],[5800.0, 10600.0, 5800.0],[5850.0, 10630.0, 5850.0],[7040.0, 12800.0, 7100.0],[10000.0, 18100.0, 10200.0],[9200.0, 16600.0, 12000.0],[2000.0, 3630.0, 2600.0],[1300.0, 2370.0, 1850.0],[1000.0, 1832.0, 1500.0],[1000.0, 1832.0, 1500.0],[3000.0, 5430.0, 3250.0],[2500.0, 4530.0, 2720.0]
]

densities_of_elements = [[1, 0.0000899],[2, 0.0001786],[3, 0.534],[4, 1.85],[5, 2.37],[6, 2.267],[7, 0.00125],[8, 0.001429],[9, 0.0001786],[10, 0.0008999],[11, 0.97],[12, 1.738],[13, 2.7], 
    [14, 2.3296],[15, 1.82],[16, 2.067],[17, 0.003214],[18, 0.0017837],[19, 0.862],[20, 1.55],[21, 2.985],[22, 4.507],[23, 6.11],[24, 7.19],[25, 7.3],[26, 7.874],[27, 8.86],[28, 8.912],[29, 8.96],[30, 7.134],[31, 5.907],[32, 5.323],[33, 5.776],[34, 4.809],[35, 3.12],[36, 0.003733],[37, 1.532],[38, 2.64],[39, 4.469],[40, 6.506],[41, 8.57],[42, 10.22],[43, 11.5],[44, 12.37],[45, 12.41],[46, 12.02],[47, 10.501],[48, 8.69],[49, 7.31],[50, 7.287],[51, 6.685],[52, 6.232],[53, 4.93],[54, 0.005887],     
    [55, 1.873],[56, 3.594],[57, 6.162],[58, 6.77],[59, 6.773],[60, 7.007],[61, 7.26],[62, 7.52],[63, 5.243],[64, 7.895],[65, 8.229],[66, 8.551],[67, 9.066],[68, 9.321],[69, 6.966],[70, 6.965],[71, 9.84],[72, 13.31],[73, 16.654],[74, 19.25],[75, 21.02],[76, 22.59],[77, 22.56],[78, 21.45],[79, 19.32],[80, 13.5336],[81, 11.85],        
    [82, 11.34],[83, 9.78],[84, 9.196],[85, 7.0],[86, 0.00973],[87, 0.53],[88, 5.0],[89, 10.07],[90, 11.724],[91, 15.37],[92, 18.95],[93, 20.45],[94, 19.86],[95, 13.67],[96, 13.51],[97, 14.78],[98, 15.1],[99, 13.5],[100, 9.7],[101, 10.3],[102, 9.9],[103, 15.6],[104, 23.2],[105, 35.0],[106, 35.0],[107, 37.0],[108, 40.0],[109, 37.0],[110, 34.0],[111, 29.7],[112, 29.3],[113, 13.5],[114, 14.0],[115, 13.5],[116, 12.9],[117, 7.0],[118, 4.9],];



electronegative = [
    2.20, 0.00, 0.98, 1.57, 2.04, 2.55, 3.04, 3.44, 3.98, 0.93,
    1.31, 1.61, 1.90, 2.19, 2.58, 3.16, 0.82, 1.00, 1.36, 1.54,
    1.63, 1.66, 1.55, 1.83, 1.88, 1.91, 1.90, 1.65, 1.81, 1.61,
    2.01, 2.18, 2.55, 0.82, 0.95, 1.22, 1.33, 1.60, 2.16, 1.90,
    2.20, 2.28, 2.20, 2.28, 1.93, 1.69, 1.78, 2.05, 2.10, 2.66,
    0.79, 0.89, 1.10, 1.12, 1.13, 1.14, 1.13, 1.17, 1.20, 1.22,
    1.23, 1.24, 1.25, 1.10, 1.27, 1.30, 1.10, 1.27, 1.30, 1.50,
    2.36, 2.02, 2.20, 2.28, 2.54, 2.00, 1.62, 2.33, 2.02, 2.16,
    2.32, 0.79, 0.89, 1.00, 1.10, 1.30, 1.38, 1.36, 1.28, 1.30,
    1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 1.30, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00,
    0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00, 0.00
]
let a = elements[index];
let b = atomic_mass[index];
let c = atomic_number[index];
let d = state_at_room_temp[index];
let e = melting_points_of_elements[index];
let f = boiling_points_of_elements[index];
let g = densities_of_elements[index];
let h = electronegative[index];
let i = desc[index];
document.getElementById("element").innerHTML =a;
document.getElementById("mass").innerHTML ="Atomic Mass: "+ b +" g/mol";
document.getElementById("no").innerHTML ="Atomic Number: "+ c;
document.getElementById("state").innerHTML ="Phase at Room Temperature: "+ d;
document.getElementById("mp").innerHTML ="Melting Point: "+ e[0]+"°C ,"+ e[1]+"°F ,"+ e[2]+"°K  ";
document.getElementById("bp").innerHTML ="Boiling Point:"+ f[0]+"°C ,"+ f[1]+"°F ,"+ f[2]+"°K  ";
document.getElementById("density").innerHTML ="Density:"+ g[1]+" g/L  ";
document.getElementById("desc").innerHTML = i;
document.getElementById("electronegativity").innerHTML ="Electronegativity:"+h +" (Pauling scale)";
}

let desc = [
    `Hydrogen: The lightest and most abundant element in the universe, constituting roughly 75% of all baryonic mass.`,
    `Helium: A noble gas that is the second most abundant element in the universe and is used in balloons and as a cooling medium in superconducting magnets.`,
    `Lithium: A soft, silvery-white alkali metal that is the lightest metal and used in rechargeable batteries and mood-stabilizing drugs.`,
    `Beryllium: A steel-gray, strong, lightweight metal that is used in aerospace components, nuclear reactors, and as a moderator in nuclear reactions.`,
    `Boron: A metalloid that is essential for plant growth and is used in borosilicate glass, ceramics, and as a neutron absorber in nuclear reactors.`,
    `Carbon: A nonmetal essential to all known life, present in all organic compounds, as well as diamonds and graphite, which are used in industrial applications and as lubricants.`,
    `Nitrogen: A diatomic nonmetal gas that makes up about 78% of Earth's atmosphere, used in fertilizers, explosives, and as an inert gas in industrial processes.`,
    `Oxygen: A diatomic nonmetal gas essential for respiration and combustion, making up about 21% of Earth's atmosphere and used in medical applications and water treatment.`,
    `Fluorine: A highly reactive pale yellow gas that is used in toothpaste, Teflon coatings, and in the manufacture of uranium hexafluoride for nuclear reactors.`,
    `Neon: A noble gas used in neon signs and high-voltage indicators, known for its distinct red-orange glow when electrified.`,
    `Sodium: A highly reactive metal, part of the alkali metals group, found in table salt and used in street lighting and as a coolant in some nuclear reactors.`,
    `Magnesium: A shiny, silvery-white metal used in alloys to produce lightweight materials for aerospace and automotive industries and in fireworks for bright white flashes.`,
    `Aluminum: A lightweight metal used extensively in packaging, construction, and transportation due to its resistance to corrosion and high strength-to-weight ratio.`,
    `Silicon: A metalloid used extensively in semiconductors for computer chips, solar panels, and as a component of glass, concrete, and ceramics.`,
    `Phosphorus: A nonmetal essential for life, used in fertilizers, detergents, and in the production of matches and fireworks.`,
    `Sulfur: A nonmetal used in the production of sulfuric acid, fertilizers, and in the vulcanization of rubber; also found in proteins and vitamins.`,
    `Chlorine: A greenish-yellow gas used in disinfectants, bleach, and in the production of PVC; also essential for water purification and sanitation.`,
    `Argon: A noble gas used in inert gas welding, in fluorescent lighting, and as a protective atmosphere for various industrial processes.`,
    `Potassium: A soft, silvery metal that is highly reactive and essential for biological functions such as nerve transmission and muscle contraction; found in fertilizers and fireworks.`,
    `Calcium: A reactive metal essential for bones and teeth; used in cement, lime, and as a reducing agent in various metallurgical processes.`,
    `Scandium: A silvery-white metal that is used in aerospace components and sports equipment due to its strength and lightweight properties.`,
    `Titanium: A strong, low-density metal resistant to corrosion and used in aerospace, medical implants, and jewelry due to its strength and biocompatibility.`,
    `Vanadium: A hard, silvery-gray metal used to produce strong, corrosion-resistant alloys and in the production of vanadium steel for tools and machinery.`,
    `Chromium: A steely-gray metal used to provide corrosion resistance in stainless steel and to produce vibrant pigments for dyes and paints.`,
    `Manganese: A grayish-white metal used in steel production to improve hardness, strength, and wear resistance, and in the manufacture of batteries and fertilizers.`,
    `Iron: A strong, magnetic metal that is essential for biological functions in blood and is widely used in construction, manufacturing, and transportation.`,
    `Cobalt: A hard, lustrous metal used in the production of high-strength alloys, magnets, and in the manufacture of batteries and pigments.`,
    `Nickel: A silvery-white metal used in stainless steel, batteries, and coins, known for its resistance to corrosion and ability to form alloys with other metals.`,
    `Copper: A reddish-brown metal used in electrical wiring, plumbing, and as a component in various alloys; known for its high electrical and thermal conductivity.`,
    `Zinc: A bluish-white metal used in galvanizing steel to prevent rust, in batteries, and as a component of brass and various alloys.`,
    `Gallium: A soft metal that melts just above room temperature; used in semiconductors, LED technology, and in the manufacture of solar panels.`,
    `Germanium: A metalloid used in semiconductors, fiber optics, and infrared optics, and as a catalyst in the production of polyethylene and other polymers.`,
    `Arsenic: A metalloid known for its toxicity, used in pesticides, wood preservatives, and as a doping agent in semiconductors and glass production.`,
    `Selenium: A nonmetal used in electronics, glassmaking, and as a dietary supplement; also plays a role in cellular processes and is a component of some enzymes.`,
    `Bromine: A reddish-brown liquid at room temperature; used in flame retardants, disinfectants, and in the manufacture of certain pharmaceuticals and dyes.`,
    `Krypton: A noble gas used in high-intensity lamps, in certain types of anesthesia, and in various types of research, including nuclear physics and space exploration.`,
    `Rubidium: A soft, silvery-white metal used in research, in atomic clocks, and in certain types of glasses and ceramics.`,
    `Strontium: A soft, silvery metal used in fireworks to produce red colors, in the manufacture of ferrite magnets, and in certain types of glass and ceramics.`,
    `Yttrium: A silvery-metallic element used in phosphors for color television tubes, in superconductors, and in various high-tech ceramics and alloys.`,
    `Zirconium: A hard, corrosion-resistant metal used in nuclear reactors, in the production of high-temperature ceramics, and as a component of some alloys.`,
    `Niobium: A soft, gray metal used in superconductors, stainless steel, and in various high-strength alloys for aerospace and automotive applications.`,
    `Molybdenum: A hard, silvery metal used in steel alloys to improve strength and resistance to heat and corrosion, and in the manufacture of electrical contacts and filaments.`,
    `Technetium: A radioactive metal used in medical imaging (as a tracer in nuclear medicine), in the production of certain types of batteries, and in research applications.`,
    `Ruthenium: A hard, silvery metal used in electronics, as a catalyst in chemical reactions, and in various platinum-group metal alloys and electrical contacts.`,
    `Rhodium: A rare, silvery-white metal used in catalytic converters to reduce automotive emissions, in jewelry, and in various high-tech industrial applications.`,
    `Palladium: A precious metal used in catalytic converters, in hydrogen storage and purification, and in jewelry and electronics due to its corrosion resistance and conductivity.`,
    `Silver: A lustrous, white metal used in jewelry, coins, and in various industrial applications due to its high electrical and thermal conductivity and antibacterial properties.`,
    `Cadmium: A soft, bluish-white metal used in batteries, pigments, and as a corrosion-resistant coating for steel; known for its toxicity and environmental impact.`,
    `Indium: A soft, malleable metal used in electronics, in the production of LCD screens, and as a component of certain alloys and solders.`,
    `Tin: A silvery-white metal used in coatings to prevent corrosion, in alloys such as bronze, and in the manufacture of tin cans and other containers.`,
    `Antimony: A metalloid used in flame retardants, in lead-acid batteries, and in various alloys to improve their properties; also used in semiconductor technology.`,
    `Tellurium: A brittle, silvery metalloid used in metallurgy to improve the machinability of certain metals, in semiconductor devices, and in solar panels.`,
    `Iodine: A dark purple nonmetal used as a disinfectant, in medical imaging, and as a component of thyroid hormones in the human body.`,
    `Xenon: A noble gas used in high-intensity lamps, in certain types of anesthesia, and in various types of research, including nuclear physics and space exploration.`,
    `Cesium: A soft, gold-colored metal used in atomic clocks, in the production of certain types of glass, and in various research applications due to its reactivity and properties.`,
    `Barium: A soft, silvery metal used in the manufacture of fireworks, in medical imaging (as a contrast agent), and in various industrial processes and materials.`,
    `Lanthanum: A soft, silvery metal used in the production of high-intensity carbon arc lamps, in catalysts for petroleum refining, and in various types of glass and ceramics.`,
    `Cerium: A soft, silvery metal used in catalytic converters, in glass and ceramics production, and as a component in various types of lighting and polishing materials.`,
    `Praseodymium: A soft, silvery metal used in magnets, in certain types of glasses and ceramics, and as a component in various types of lighting and lasers.`,
    `Neodymium: A soft, silvery metal used in powerful magnets, in certain types of lasers, and in the production of high-strength alloys and various high-tech applications.`,
    `Promethium: A radioactive metal used in luminous paints, in certain types of batteries, and in research applications; one of the few elements that does not have stable isotopes.`,
    `Samarium: A soft, silvery metal used in magnets, in certain types of lighting and lasers, and in various research and high-tech applications due to its magnetic properties.`,
    `Europium: A soft, silvery metal used in phosphors for color television and LED displays, in certain types of lasers, and in various research and industrial applications.`,
    `Gadolinium: A soft, silvery metal used in medical imaging (as a contrast agent), in certain types of magnets, and in various high-tech materials and research applications.`,
    `Terbium: A soft, silvery metal used in phosphors for color displays, in certain types of lasers, and in various high-tech materials and research applications.`,
    `Dysprosium: A soft, silvery metal used in high-performance magnets, in certain types of lasers, and in various high-tech materials and research applications.`,
    `Holmium: A soft, silvery metal used in high-strength magnets, in certain types of lasers, and in various research and industrial applications due to its magnetic properties.`,
    `Erbium: A soft, silvery metal used in lasers, in certain types of optical fibers, and in various research and industrial applications due to its unique optical properties.`,
    `Thulium: A soft, silvery metal used in lasers, in certain types of medical imaging and treatments, and in various research and high-tech applications.`,
    `Ytterbium: A soft, silvery metal used in lasers, in certain types of steel and alloys, and in various research and high-tech applications due to its optical properties.`,
    `Lutetium: A soft, silvery metal used in certain types of catalysts, in medical imaging, and in various high-tech materials and research applications.`,
    `Hafnium: A shiny, silvery metal used in nuclear reactors, in high-temperature ceramics, and in various high-tech materials and research applications due to its resistance to corrosion.`,
    `Tantalum: A blue-gray metal used in high-performance capacitors, in surgical implants, and in various high-tech materials and research applications due to its resistance to corrosion.`,
    `Tungsten: A dense, gray metal used in lightbulb filaments, in high-strength alloys, and in various high-tech and industrial applications due to its high melting point.`,
    `Rhenium: A silvery-white metal used in high-temperature superalloys, in catalytic converters, and in various high-tech materials and research applications.`,
    `Osmium: A dense, blue-gray metal used in electrical contacts, in certain types of alloys, and in various research and industrial applications due to its hardness and density.`,
    `Iridium: A dense, silvery-white metal used in spark plugs, in electrical contacts, and in various high-tech materials and research applications due to its corrosion resistance.`,
    `Platinum: A dense, malleable metal used in catalytic converters, in jewelry, and in various high-tech and industrial applications due to its resistance to corrosion and excellent catalytic properties.`,
    `Gold: A yellow metal used in jewelry, in electronics, and in various high-tech and industrial applications due to its malleability, ductility, and resistance to corrosion.`,
    `Mercury: A dense, silvery liquid metal used in thermometers, in various industrial processes, and in some types of batteries, known for its toxicity and unique liquid state at room temperature.`,
    `Thallium: A soft, malleable metal used in electronics, in the production of certain types of glass, and in various research applications; known for its toxicity and environmental impact.`,
    `Lead: A heavy, malleable metal used in batteries, in radiation shielding, and in various construction materials, known for its toxicity and environmental concerns.`,
    `Bismuth: A brittle, silvery-white metal used in cosmetics, in certain types of alloys, and in various research applications due to its low toxicity and unique properties.`,
    `Polonium: A highly radioactive metal used in research, in certain types of industrial applications, and as an alpha particle source in various scientific experiments.`,
    `Astatine: A highly radioactive metalloid used in research, with limited practical applications due to its scarcity and high radioactivity.`,
    `Radon: A colorless, odorless radioactive gas produced from the decay of radium; used in cancer treatment and found in some natural environments, posing health risks due to its radioactivity.`,
    `Francium: A highly radioactive alkali metal with limited practical applications due to its extreme rarity and high radioactivity; used mainly in research.`,
    `Radium: A highly radioactive metal used historically in luminous paints and medical treatments, with limited modern applications due to its health hazards.`,
    `Actinium: A highly radioactive metal used in research, in radiation therapy, and in the production of certain types of nuclear reactors due to its radioactive properties.`,
    `Thorium: A radioactive metal used in nuclear reactors and in certain types of research, known for its potential as an alternative nuclear fuel due to its natural abundance.`,
    `Protactinium: A rare, radioactive metal used in research, with limited practical applications due to its scarcity and high radioactivity.`,
    `Uranium: A heavy, radioactive metal used as fuel in nuclear reactors, in the production of nuclear weapons, and in various research applications due to its radioactive properties.`,
    `Neptunium: A radioactive metal used in research, in nuclear reactors, and in the production of certain types of nuclear materials and isotopes.`,
    `Plutonium: A radioactive metal used in nuclear weapons, in nuclear reactors, and in various research applications due to its fissile properties and high radioactivity.`,
    `Americium: A radioactive metal used in smoke detectors, in certain types of medical imaging, and in research applications due to its radioactive properties.`,
    `Curium: A radioactive metal used in research, in certain types of nuclear reactors, and in the production of various nuclear materials and isotopes.`,
    `Berkelium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and scarcity.`,
    `Californium: A radioactive metal used in research, in the production of certain types of nuclear materials, and in neutron activation analysis due to its neutron-emitting properties.`,
    `Einsteinium: A radioactive metal used in research, with limited practical applications due to its extreme rarity and high radioactivity.`,
    `Fermium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and rarity.`,
    `Mendelevium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and scarcity.`,
    `Nobelium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and rarity.`,
    `Lawrencium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and scarcity.`,
    `Rutherfordium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and extreme rarity.`,
    `Dubnium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and scarcity.`,
    `Seaborgium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and extreme rarity.`,
    `Bohrium: A radioactive metal used in research, with limited practical applications due to its high radioactivity and scarcity.`,
    `Hassium: A highly radioactive metal used in research, with limited practical applications due to its extreme rarity and high radioactivity.`,
    `Meitnerium: A synthetic element with no stable isotopes, used primarily in research; named in honor of the physicist Lise Meitner, who made significant contributions to the discovery of nuclear fission.`,
    `Darmstadtium: A synthetic element with no stable isotopes, used primarily in research; named after the city of Darmstadt, Germany, where it was first synthesized at the GSI Helmholtz Centre for Heavy Ion Research.`,
    `Roentgenium: A synthetic element with no stable isotopes, used primarily in research; named in honor of Wilhelm Conrad Roentgen, the physicist who discovered X-rays.`,
    `Copernicium: A synthetic element with no stable isotopes, used primarily in research; named in honor of the astronomer Nicolaus Copernicus.`,
    `Nihonium: A synthetic element with no stable isotopes, used primarily in research; named after Japan (Nihon in Japanese), where it was first synthesized.`,
    `Flerovium: A synthetic element with no stable isotopes, used primarily in research; named in honor of the Flerov Laboratory of Nuclear Reactions in Russia.`,
    `Moscovium: A synthetic element with no stable isotopes, used primarily in research; named after Moscow, Russia, in recognition of contributions to its discovery.`,
    `Livermorium: A synthetic element with no stable isotopes, used primarily in research; named after the Lawrence Livermore National Laboratory in California, USA.`,
    `Tennessine: A synthetic element with no stable isotopes, used primarily in research; named in honor of the state of Tennessee, USA.`,
    `Oganesson: A synthetic element with no stable isotopes, used primarily in research; named in honor of the physicist Yuri Oganessian, who contributed to its discovery.`
];






        function drawAtom(atomicNumber) {
            const canvas = document.getElementById('atomCanvas');
            const context = canvas.getContext('2d');
            const canvasWidthPercentage = 0.18;
            const canvasHeightPercentage = 0.4;
            const baseRadius = 100 * canvasWidthPercentage;
            const ringWidth = 5 * canvasWidthPercentage;
            const electronRadius = 15 * canvasWidthPercentage;
            const nucleusRadius = 60 * canvasWidthPercentage;
            const protonRadius = 5 * canvasWidthPercentage;
            const neutronRadius = 5 * canvasWidthPercentage;
            const orbitSpeeds = [0.02, 0.015, 0.01, 0.007, 0.007, 0.01, 0.015];

            let numOrbits, numElectrons, numProtons, numNeutrons, angles;
            
            const o = [1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7,7];
            const e = [[1], [2], [2, 1], [2, 2], [2, 3], [2, 4], [2, 5], [2, 6], [2, 7], [2, 8], [2, 8, 1], [2, 8, 2], [2, 8, 3], [2, 8, 4], [2, 8, 5], [2, 8, 6], [2, 8, 7], [2, 8, 8], [2, 8, 8, 1], [2, 8, 8, 2], [2, 8, 9, 2], [2, 8, 10, 2], [2, 8, 11, 2], [2, 8, 13, 1], [2, 8, 13, 2], [2, 8, 14, 2], [2, 8, 15, 2], [2, 8, 16, 2], [2, 8, 18, 1], [2, 8, 18, 2], [2, 8, 18, 3], [2, 8, 18, 4], [2, 8, 18, 5], [2, 8, 18, 6], [2, 8, 18, 7], [2, 8, 18, 8], [2, 8, 18, 8, 1], [2, 8, 18, 8, 2], [2, 8, 18, 9, 2], [2, 8, 18, 10, 2], [2, 8, 18, 12, 1], [2, 8, 18, 13, 1], [2, 8, 18, 14, 1], [2, 8, 18, 15, 1], [2, 8, 18, 16, 1], [2, 8, 18, 18], [2, 8, 18, 18, 1], [2, 8, 18, 18, 2], [2, 8, 18, 18, 3], [2, 8, 18, 18, 4], [2, 8, 18, 18, 5], [2, 8, 18, 18, 6], [2, 8, 18, 18, 7], [2, 8, 18, 18, 8], [2, 8, 18, 18, 8, 1], [2, 8, 18, 18, 8, 2], [2, 8, 18, 18, 9, 2], [2, 8, 18, 19, 9, 2], [2, 8, 18, 21, 8, 2], [2, 8, 18, 22, 8, 2], [2, 8, 18, 23, 8, 2], [2, 8, 18, 24, 8, 2], [2, 8, 18, 25, 8, 2], [2, 8, 18, 25, 9, 2], [2, 8, 18, 27, 8, 2], [2, 8, 18, 28, 8, 2], [2, 8, 18, 29, 8, 2], [2, 8, 18, 30, 8, 2], [2, 8, 18, 31, 8, 2], [2, 8, 18, 32, 8, 2], [2, 8, 18, 32, 9, 2], [2, 8, 18, 32, 10, 2], [2, 8, 18, 32, 11, 2], [2, 8, 18, 32, 12, 2], [2, 8, 18, 32, 13, 2], [2, 8, 18, 32, 14, 2], [2, 8, 18, 32, 15, 2], [2, 8, 18, 32, 17, 1], [2, 8, 18, 32, 18, 1], [2, 8, 18, 32, 18, 2], [2, 8, 18, 32, 18, 3], [2, 8, 18, 32, 18, 4], [2, 8, 18, 32, 18, 5], [2, 8, 18, 32, 18, 6], [2, 8, 18, 32, 18, 7], [2, 8, 18, 32, 18, 8], [2, 8, 18, 32, 18, 8, 1], [2, 8, 18, 32, 18, 8, 2], [2, 8, 18, 32, 18, 9, 2], [2, 8, 18, 32, 18, 10, 2], [2, 8, 18, 32, 18, 9, 2], [2, 8, 18, 32, 21, 9, 2], [2, 8, 18, 32, 22, 9, 2], [2, 8, 18, 32, 24, 8, 2], [2, 8, 18, 32, 25, 8, 2], [2, 8, 18, 32, 25, 9, 2], [2, 8, 18, 32, 27, 8, 2], [2, 8, 18, 32, 28, 8, 2], [2, 8, 18, 32, 29, 8, 2], [2, 8, 18, 32, 30, 8, 2], [2, 8, 18, 32, 31, 8, 2], [2, 8, 18, 32, 32, 8, 2], [2, 8, 18, 32, 32, 9, 2], [2, 8, 18, 32, 32, 10, 2], [2, 8, 18, 32, 32, 11, 2], [2, 8, 18, 32, 32, 12, 2], [2, 8, 18, 32, 32, 12, 2], [2, 8, 18, 32, 32, 14, 2], [2, 8, 18, 32, 32, 15, 2], [2, 8, 18, 32, 32, 16, 2], [2, 8, 18, 32, 32, 17, 2], [2, 8, 18, 32, 32, 18, 2], [2, 8, 18, 32, 32, 18, 3], [2, 8, 18, 32, 32, 18, 4], [2, 8, 18, 32, 32, 18, 5], [2, 8, 18, 32, 32, 18, 6], [2, 8, 18, 32, 32, 18, 7], [2, 8, 18, 32, 32, 18, 8]]; // Number of electrons in each shell

            const p = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50, 51, 52, 53, 54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 70, 71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 112, 113, 114, 115, 116, 117, 118];
            const n = [0, 2, 4, 5, 6, 6, 7, 8, 10, 10, 12, 12, 14, 14, 16, 16, 18, 18, 20, 20, 22, 22, 24, 24, 26, 28, 30, 31, 33, 34, 36, 37, 39, 40, 42, 43, 45, 46, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 63, 64, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85, 87, 88, 90, 91, 93, 94, 96, 97, 99, 100, 102, 103, 105, 106, 108, 109, 111, 112, 114, 115, 117, 118, 120, 121, 123, 124, 126, 127, 129, 130, 132, 133, 135, 136, 138, 139, 141, 142, 144, 145, 147, 148, 150, 151, 153, 154, 156, 157, 159, 160, 0, 0, 0, 0, 0]; // Number of neutrons for first five elements

            function updateCanvasSize() {
                canvas.width = window.innerWidth * canvasWidthPercentage;
                canvas.height = window.innerHeight * canvasHeightPercentage;
                centerX = canvas.width / 2;
                centerY = canvas.height / 2;
            }

            function generateStructuredPoints(numPoints, radius) {
                const points = [];
                const phiStep = Math.PI * (3 - Math.sqrt(5));
                const thetaStep = Math.sqrt(5) * 2 * Math.PI / numPoints;
                
                for (let i = 0; i < numPoints; i++) {
                    const theta = i * thetaStep;
                    const phi = phiStep * i;
                    
                    const x = radius * Math.sin(phi) * Math.cos(theta);
                    const y = radius * Math.sin(phi) * Math.sin(theta);
                    const z = radius * Math.cos(phi);
                    
                    points.push({ x, y, z });
                }
                return points;
            }

            function project3DTo2D(x, y, z) {
                const scale = 200 / (200 + z);
                return { x: centerX + x * scale, y: centerY - y * scale };
            }

            function drawCircle(x, y, radius, color, filled = false) {
                context.beginPath();
                context.arc(x, y, radius, 0, 2 * Math.PI);
                context.fillStyle = filled ? color : 'transparent';
                context.strokeStyle = !filled ? color : 'transparent';
                context.lineWidth = filled ? 0 : 2;
                context.shadowBlur = 10;
                context.shadowColor = color;
                context.fill();
                context.stroke();
                context.shadowBlur = 0;
            }

            function drawElectron(x, y) {
                drawCircle(x, y, electronRadius, '#333', true);
            }

            function drawNucleus() {
                const protons = generateStructuredPoints(numProtons, nucleusRadius - 5);
                const neutrons = generateStructuredPoints(numNeutrons, nucleusRadius - 3);

                protons.forEach(({ x, y, z }) => {
                    const { x: x2D, y: y2D } = project3DTo2D(x, y, z);
                    drawCircle(x2D, y2D, protonRadius, '#F00', true);
                });

                neutrons.forEach(({ x, y, z }) => {
                    const { x: x2D, y: y2D } = project3DTo2D(x, y, z);
                    drawCircle(x2D, y2D, neutronRadius, '#00F', true);
                });
            }

            function drawOrbits() {
                context.clearRect(0, 0, canvas.width, canvas.height);

                for (let i = 0; i < numOrbits; i++) {
                    const radius = baseRadius + i * 75 * canvasWidthPercentage;
                    drawCircle(centerX, centerY, radius, '#00F', false);

                    for (let j = 0; j < numElectrons[i]; j++) {
                        const angle = angles[i] + (j / numElectrons[i]) * 2 * Math.PI;
                        const x = centerX + radius * Math.cos(angle);
                        const y = centerY + radius * Math.sin(angle);
                        drawElectron(x, y);
                    }
                    angles[i] += orbitSpeeds[i];
                }

                drawNucleus();

                requestAnimationFrame(drawOrbits);
            }

            function updateCanvas() {
                updateCanvasSize();
                drawOrbits();
            }

            numOrbits = o[atomicNumber - 1];
            numElectrons = e[atomicNumber - 1];
            numProtons = p[atomicNumber - 1];
            numNeutrons = n[atomicNumber - 1];
            angles = Array(numOrbits).fill(0);

            updateCanvas();

            window.addEventListener('resize', updateCanvasSize);
        }

        window.onload = function() {
            drawAtom(1); // Example: Draw the atom for Europium (atomic number 63)
        };
