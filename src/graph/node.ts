import {Edge} from './edge';


// class for Node of a graph with id, label, address, and edges
export class Node {
  id: string;
  label: string;
  name: string;
  edges: Edge[];

  constructor(id: string, name: string, label: string, edges: Edge[] = []) {
    this.id = id;
    this.name = name;
    this.label = label;
    this.edges = edges;
  }

  // add edge to node
  addEdge(edge: Edge) {
    this.edges.push(edge);
  }

  // add setter for edges
  setEdges(edges: Edge[]) {
    this.edges = edges;
  }

  // get edges of node
  getEdges() {
    return this.edges;
  }

  // get id of node
  getId() {
    return this.id;
  }

  // get label of node
  getLabel() {
    return this.label;
  }


  // set id of node
  setId(id: string) {
    this.id = id;
  }

  // set label of node
  setLabel(label: string) {
    this.label = label;
  }

  // get name of node
  getName() {
    return this.name;
  }

  // set name of node
  setName(name: string) {
    this.name = name;
  }

}
