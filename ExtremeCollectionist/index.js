const commonItems = ['Pencil','Pen','Marker', 'Lump of cat hair']
const uncommonItems = ['Earthworm (Alive)','Earthworm (Dead)']
const rareItems = ['Dial-up phone','Parasol']
const epicItems = ['Fart in a jar','Sharktooth', 'Boba Tea Maker']
const legendaryItems = ['Dragon Scale','Lightsaber','Red Panda Milk','1M pounds of silk']
const exoticItems = ['Golden statue','Dreams in a jar']
const mithicItems = ['Diamond','Rhodochrosite']
const goddlyItems = ['Living Raspberry','Your soul','God']

commonItemsSlot = commonItems[Math.floor(Math.random() * commonItems.length)];
uncommonItemsSlot = uncommonItems[Math.floor(Math.random() * uncommonItems.length)];
rareItemsSlot = rareItems[Math.floor(Math.random() * rareItems.length)];
epicItemsSlot = epicItems[Math.floor(Math.random() * epicItems.length)];
legendaryitemsSlot = legendaryItems[Math.floor(Math.random() * legendaryItems.length)];
exoticItemsSlot = exoticItems[Math.floor(Math.random() * exoticItems.length)];
mithicItemsSlot = mithicItems[Math.floor(Math.random() * mithicItems.length)];
goddlyItemsSlot = goddlyItems[Math.floor(Math.random() * goddlyItems.length)];

console.log("You earned a Common " + commonItemsSlot)
console.log("You earned a Uncommon " + uncommonItemsSlot)
console.log("You earned a Rare " + rareItemsSlot)
console.log("You earned a Epic " + epicItemsSlot)
console.log("You earned a Legendary " + legendaryitemsSlot)
console.log("You earned a Exotic " + exoticItemsSlot)
console.log("You earned a Mithic " + mithicItemsSlot)
console.log("You earned a Goddly " + goddlyItemsSlot)
