// Kontaktlista 
const contacts = [
  { name: "Anna", phone: "0701234567", group: "Vänner" },
  { name: "Erik", phone: "0707654321", group: "Familj" },
  { name: "Sara", phone: "0701112233", group: "Jobb" },
  { name: "Johan", phone: "0709876543", group: "Vänner" },
  { name: "Mia", phone: "0705556666", group: "Familj" }
];

// Val av vilken grupp att visa kontakter för
const groupToShow = "Vänner";

// Genomgång av kontakterna och visning av de som hör till groupToShow
for (let contact of contacts) {
  if (contact.group === groupToShow) {
    console.log(`Namn: ${contact.name}, Telefon: ${contact.phone}, Grupp: ${contact.group}`);
  }
}
