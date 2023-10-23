// class Edge for the graph with Node and Weight

import {Node} from './node';

export class Edge {
  node: Node;
  weight: number;

  constructor(node: Node, weight: number) {
    this.node = node;
    this.weight = weight;
  }

  // get node of edge
  getNode() {
    return this.node;
  }

  // get weight of edge
  getWeight() {
    return this.weight;
  }

  // set node of edge
  setNode(node: Node) {
    this.node = node;
  }

  // set weight of edge
  setWeight(weight: number) {
    this.weight = weight;
  }
}
