/**
 * Created by hanyeah on 2019/8/30.
 */
namespace hanyeah.electricity.examples{
  import Edge = hanyeah.electricity.elecData.Edge;
  export class Example01{
    constructor() {
      const world: World = new World();
      for (let i: number = 0; i < 4; i++) {
        const edge: Edge = new Edge(world, null, null);
        edge.R = 2;
      }
    }
  }
}
