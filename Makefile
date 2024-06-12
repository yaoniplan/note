# Variables
DOCKER_COMPOSE = docker-compose

# Targets
.PHONY: build up

build:
	$(DOCKER_COMPOSE) build

up:
	$(DOCKER_COMPOSE) up --detach
