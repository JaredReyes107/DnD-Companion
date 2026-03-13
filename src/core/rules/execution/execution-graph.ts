import { ExecutionNode } from "./execution-node";
import { RuleHandler, RuleContext } from "./rule-handler";

export class RuleExecutionGraph {
  private readonly graph = new Map<ExecutionNode, RuleHandler[]>();

  register(handler: RuleHandler) {
    const handlers = this.graph.get(handler.node) ?? [];
    handlers.push(handler);
    handlers.sort((a, b) => a.priority - b.priority);
    this.graph.set(handler.node, handlers);
  }

  run(node: ExecutionNode, context: RuleContext) {
    const handlers = this.graph.get(node) ?? [];
    for (const handler of handlers) {
      handler.execute(context);
    }
  }
}
