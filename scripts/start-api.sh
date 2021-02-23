#!/bin/bash

DIR="$( cd "$( dirname "${BASH_SOURCE[0]}" )" >/dev/null 2>&1 && pwd )"
IMAGE_NAME=upgrowth_api

#docker system prune -a
docker build -f "$DIR"/../packages/api/Dockerfile -t $IMAGE_NAME:latest "$DIR"/..
# shellcheck disable=SC2046
docker stop $(docker ps -aq)
docker run -d -p80:3000 $IMAGE_NAME