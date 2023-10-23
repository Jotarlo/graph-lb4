import { /* inject, */ BindingScope, injectable} from '@loopback/core';
import {repository} from '@loopback/repository';
import {Edge} from '../graph/edge';
import {Graph} from '../graph/graph';
import {Node} from '../graph/node';
import {DistanceRepository, LocationRepository} from '../repositories';

@injectable({scope: BindingScope.TRANSIENT})
export class GraphService {
  constructor(
    @repository(LocationRepository)
    private locationRepository: LocationRepository,
    @repository(DistanceRepository)
    private distanceRepository: DistanceRepository
  ) { }

  /*
   * Add service methods here
   */

  async buildGraph(): Promise<Graph> {
    const locations = await this.locationRepository.find();
    const nodes: Node[] = [];

    for await (const location of locations) {

      const distances = await this.distanceRepository.find({
        where: {
          OriginId: location._id!
        }
      });

      const edges: Edge[] = [];
      // convert distances to edges
      for await (const distance of distances) {
        const destination = await this.locationRepository.findById(distance.DestinationId);
        // convert destination in Node
        const node = new Node(destination._id!, destination.Name, destination.Key);
        edges.push(new Edge(node, distance.Meters));
      }

      nodes.push(new Node(location._id!, location.Name, location.Key, edges));
    }

    return new Graph(nodes);
  }

  // print the graph node by node with edges in console
  printGraph(graph: Graph) {
    const nodes = graph.getNodes();
    for (const node of nodes) {
      console.log(node);
    }
  }

  GetShortestRoute(graph: Graph, originId: string, destinationId: string) {

  }

}
