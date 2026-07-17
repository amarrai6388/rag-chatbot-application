const flowConfig = {
  "id": "fbf0e34b-ac36-4d29-9434-c301f6db7cb5",
  "name": "My First Flow",
  "edges": [
    {
      "id": "triggerNode_1-RAGNode_793",
      "type": "defaultEdge",
      "source": "triggerNode_1",
      "target": "RAGNode_793",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "RAGNode_793-searchResponseNode_898",
      "type": "defaultEdge",
      "source": "RAGNode_793",
      "target": "searchResponseNode_898",
      "sourceHandle": "bottom",
      "targetHandle": "top"
    },
    {
      "id": "response-searchResponseNode_898",
      "type": "responseEdge",
      "source": "triggerNode_1",
      "target": "searchResponseNode_898",
      "sourceHandle": "to-response",
      "targetHandle": "from-trigger"
    }
  ],
  "status": "active",
  "created_at": "2026-07-17T04:05:01.627447+00:00",
  "trigger_id": null,
  "nodes": [
    {
      "id": "triggerNode_1",
      "data": {
        "nodeId": "searchTriggerNode",
        "values": {
          "search": "",
          "domains": [],
          "nodeName": "Search Widget"
        },
        "trigger": true
      },
      "type": "triggerNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "RAGNode_793",
      "data": {
        "nodeId": "RAGNode",
        "values": {
          "limit": 5,
          "filters": "",
          "prompts": [
            {
              "id": "187c2f4b-c23d-4545-abef-73dc897d6b7b",
              "role": "system",
              "content": "You are suppose to answer the relevant search query given the context. Make sure you answer the query given the context only.\n\nQUERY : {{triggerNode_1.output.searchQuery}}"
            }
          ],
          "memories": "[]",
          "messages": "[]",
          "nodeName": "RAG",
          "vectorDB": "",
          "certainty": "0.5",
          "queryField": "{{triggerNode_1.output.searchQuery}}",
          "embeddingModelName": {},
          "generativeModelName": {}
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    },
    {
      "id": "searchResponseNode_898",
      "data": {
        "nodeId": "searchResponseNode",
        "values": {
          "link": "",
          "title": "{{RAGNode_793.output.references[:].filename}}",
          "content": "{{RAGNode_793.output.references[:].content}}",
          "nodeName": "Search Response",
          "breadcrumpsField": ""
        }
      },
      "type": "dynamicNode",
      "position": {
        "x": 0,
        "y": 0
      }
    }
  ]
};

export async function getNodesAndEdges(): Promise<{
    nodes: Record<string, any>[],
    edges: Record<string, any>[],
}> {
    return {
        nodes: flowConfig.nodes,
        edges: flowConfig.edges,
    }
}

export async function getFlowConfig(): Promise<Record<string, any>> {
    return flowConfig;
}