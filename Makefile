.PHONY: run
run:
	docker compose -f docker-compose.yaml up


.PHONY: rebuild-run
rebuild-run:
	docker compose -f docker-compose.yaml up --build


.PHONY: run-app-only
run-app-only:
	docker compose -f app-docker-compose.yaml up


.PHONY: rebuild-run-app-only
rebuild-run-app-only:
	docker compose -f app-docker-compose.yaml up --build
