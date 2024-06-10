.PHONY: build up

prepare:
	./convertMarkdownToHtml.sh

build: prepare
	docker-compose build

up:
	docker-compose up --detach
