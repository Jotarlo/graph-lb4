// class Graph with a Node List

import {Node} from './node';

export class Graph {

  nodes: Node[];

  constructor(nodos: Node[]) {
    this.nodes = nodos;
  }

  // add node to graph
  addNode(node: Node) {
    this.nodes.push(node);
  }

  // get node list of graph
  getNodes() {
    return this.nodes;
  }

  // set node list of graph
  setNodes(nodes: Node[]) {
    this.nodes = nodes;
  }

  // get node of graph by id
  getNodeById(id: string) {
    return this.nodes.find(node => node.getId() === id);
  }

  // get node of graph by label
  getNodeByLabel(label: string) {
    return this.nodes.find(node => node.getLabel() === label);
  }

  // show graph by console
  showGraph() {
    console.log(this.nodes);
  }

  // show graph by console node by node with their edges
  showGraphNodes() {
    this.nodes.forEach(node => {
      console.log(node);
    });
  }

}
