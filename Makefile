deploy_dev:
	docker run --name axur -v $(PWD):/app -it -d -w /app -p 3006:3000 node:16.14.0 --trace-deprecation
	docker exec axur yarn install
start:
	docker exec axur yarn start
dev:
	docker exec axur yarn dev
install:
	docker exec axur yarn install
build:
	docker exec axur yarn build
test:
	docker exec axur yarn test