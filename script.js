// Sample JavaScript code
const items = ["apple", "banana", "cherry"];

function formatList(list) {
  return list.map((item, index) => `${index + 1}. ${item}`).join("\n");
}

function showItems() {
  console.log("Items:");
  console.log(formatList(items));
}

showItems();
