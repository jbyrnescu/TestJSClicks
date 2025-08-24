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

let wanted = new Set([ 
	"file-sample_100kB.rtf",
	"file-sample_300kB.rtf",
	"file-sample_500kB.rtf"
]);


for (let i = 0; i < nodes.length; i++) {
	let link = nodes[i].href;
	let filename = link.split("/").pop();
	if (wanted.has(filename)) {
		window.open(nodes[i].href, "_blank");
	}
}
