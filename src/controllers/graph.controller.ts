import {service} from '@loopback/core';
import {
  get,
  getModelSchemaRef,
  response
} from '@loopback/rest';
import {Graph} from '../graph/graph';
import {GraphService} from '../services';

export class GraphController {
  constructor(
    @service(GraphService)
    private graphService: GraphService
  ) { }



  @get('/build-graph')
  @response(200, {
    description: 'Build the graph based on db records',
    content: {
      'application/json': {
        schema: {
          type: 'array',
          items: getModelSchemaRef(Graph),
        },
      },
    },
  })
  async graph(

  ): Promise<Graph> {
    let graph = await this.graphService.buildGraph();
    this.graphService.printGraph(graph);
    return graph;
  }
}
