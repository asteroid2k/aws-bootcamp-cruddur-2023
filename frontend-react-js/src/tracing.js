// tracing.js
import { OTLPTraceExporter } from "@opentelemetry/exporter-trace-otlp-http";
import {
  WebTracerProvider,
  BatchSpanProcessor,
} from "@opentelemetry/sdk-trace-web";
import { ZoneContextManager } from "@opentelemetry/context-zone";
import { Resource } from "@opentelemetry/resources";
import { SemanticResourceAttributes } from "@opentelemetry/semantic-conventions";
// import { XMLHttpRequestInstrumentation } from "@opentelemetry/instrumentation-xml-http-request";
// import { FetchInstrumentation } from "@opentelemetry/instrumentation-fetch";
// import { registerInstrumentations } from "@opentelemetry/instrumentation";

const exporter = new OTLPTraceExporter({
  url: `${process.env.REACT_APP_OTEL_EXPORTER_OTLP_ENDPOINT}:443/v1/traces`,
  headers: {
    "x-honeycomb-team": process.env.REACT_APP_HONEYCOMB_CLIENT_KEY,
  },
});
const provider = new WebTracerProvider({
  resource: new Resource({
    [SemanticResourceAttributes.SERVICE_NAME]: "cruddur-frontend",
  }),
});
provider.addSpanProcessor(new BatchSpanProcessor(exporter));
provider.register({
  contextManager: new ZoneContextManager(),
});

// registerInstrumentations({
//   instrumentations: [
//     new XMLHttpRequestInstrumentation({
//       propagateTraceHeaderCorsUrls: [process.env.REACT_APP_BACKEND_URL],
//     }),
//     new FetchInstrumentation({
//       propagateTraceHeaderCorsUrls: [process.env.REACT_APP_BACKEND_URL],
//     }),
//   ],
// });
