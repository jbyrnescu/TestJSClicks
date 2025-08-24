// Define the XPath query: this example finds all <a> tags
const xpath = "//a[contains(@class,\"download-button\")]";

// Evaluate XPath and collect results
const iterator = document.evaluate(
  xpath,
  document,
  null,
  XPathResult.ORDERED_NODE_ITERATOR_TYPE,
  null
);

let nodes = [];
let thisNode = iterator.iterateNext();
while (thisNode) {
  nodes.push(thisNode);
  thisNode = iterator.iterateNext();
}


for (let i = 0; i < nodes.length; i++) {
    window.open(nodes[i].href, "_blank");
}

// for (let i = 0; i < nodes.snapshotLength; i++) {
// 	let link = nodes.snapshotItem(i);
// 	window.open(link.href, "_blank");
// }

// for (let node of nodes) {
//	fetch(node).then(r => console.log(node, "status:", r.status));
// }

// nodes.forEach(node => window.open(node, "_blank"));

