# Week 2 — Distributed Tracing

## Required Tasks

1. Honeycomb integration with backend

   - Create and configure Honeycomb account
   - Export OTEL and Honeycomb env vars
   - Add env vars and service name to backend service in [docker-compose.yml](../docker-compose.yml)
   - Updated backend package [requirements](../backend-flask/requirements.txt) with open telemetry packages
   - Configure open telemetry in backend, add tracer and span to home and notification endpoints

   ![backend_traces](./assets/week2/backend_traces.png)

   ![backend_spans](./assets/week2/backend_traces_spans.png)

   - Add app.now and app.result_length span attributes

     ![backend_spans](./assets/week2/backend_traces_span_attributes.png)
