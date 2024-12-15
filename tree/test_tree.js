"use strict";

window.addEventListener("load", start);

import { Node, Tree } from "./tree.js";

function start() {
  console.log("Start");
  const nodeA = new Node(null, [], "A");
  const nodeB = new Node(nodeA, [], "B");
  nodeA.appendChild(nodeB);
  const nodeC = new Node(nodeA, [], "C");
  nodeA.appendChild(nodeC);
  const nodeD = new Node(nodeA, [], "D");
  nodeA.appendChild(nodeD);
  const nodeE = new Node(nodeB, [], "E");
  nodeB.appendChild(nodeE);
  const nodeF = new Node(nodeD, [], "F");
  nodeD.appendChild(nodeF);
  const nodeG = new Node(nodeE, [], "G");
  nodeE.appendChild(nodeG);

  console.log(nodeB);
  console.log(nodeC);
  console.log(nodeA);

  const tree = new Tree(nodeA);
  console.log(tree);

  console.log("Dump the tree");
  tree.dump();

  console.log("Find value");
  console.log(tree.findValue("E"));
}
