/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity {
  import Vertex = hanyeah.electricity.elecData.Vertex;
  import Edge = hanyeah.electricity.elecData.Edge;
  import List = hanyeah.dataStruct.List;
  import ListNode = hanyeah.dataStruct.ListNode;
  export class World extends HObject {

    private vertexList: List = new List();
    private edgeList: List = new List();

    constructor() {
      super();
    }

    public destroy(): void {

    }

    public addVertex(vertex: Vertex): void {
      this.vertexList.add(vertex.worldLN);
    }

    public removeVertex(vertex: Vertex): void {
      this.vertexList.remove(vertex.worldLN);
    }

    public addEdge(edge: Edge): void {
      this.edgeList.add(edge.worldLN);
    }

    public removeEdge(edge: Edge): void {
      this.edgeList.remove(edge.worldLN);
    }

    public getVertexs(): Vertex[] {
      return this.vertexList.getAllUserData() as Vertex[];
    }

    public getEdges(): Edge[] {
      return this.edgeList.getAllUserData() as Edge[];
    }

  }
}
