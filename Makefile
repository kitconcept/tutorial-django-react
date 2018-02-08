SHELL := /bin/bash
CURRENT_DIR:=$(shell dirname $(realpath $(lastword $(MAKEFILE_LIST))))

all: clean build test

clean:
	@echo "Clean"
	rm -rf tests/bin tests/lib tests/include tests/.Python

build:
	make build-tests
	make build-frontend

build-tests:
	@echo "Build"
	(cd tests && virtualenv .)
	(cd tests && bin/pip install -r requirements.txt --upgrade)

build-frontend:
	(cd tests/create-react-app && yarn install)
	(cd tests/create-react-app-with-redux && yarn install)

test:
	@echo "Run Tests"
	(cd tests/ && bin/pybot test.robot)
