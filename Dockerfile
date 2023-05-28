FROM golang:latest AS pkg
ENV GOBIN=/tmp
RUN go install github.com/rif/spark@latest

FROM node:latest AS content
RUN yarn create next-app src --src-dir / --example with-reactstrap --no-eslint \
    && cd /src \
    && yarn run build \
    && yarn next export

FROM gcr.io/distroless/base-debian11:latest
COPY --from=pkg /tmp/spark /bin/

USER nonroot
COPY --from=content /src/out/* /home/nonroot/

ENTRYPOINT ["spark", "/home/nonroot"]
