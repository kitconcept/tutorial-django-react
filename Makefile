SHELL := /bin/bash
CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

all: build test

clean:
	@echo "Clean"
	rm -rf tests/bin tests/lib tests/include tests/.Python

build:
	make build-tests
	make build-frontend

build-tests:
	@echo "Build Tests"
	(cd api && virtualenv . -p python3)
	(cd api && bin/pip install -r requirements.txt --upgrade)

build-frontend:
	@echo "Build Frontend"
	(cd frontend && yarn install)

test:
	@echo "Run Tests"
	(cd api && bin/pybot test.robot)
