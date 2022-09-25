
.PHONY: help
## help: prints this help message
help:
	@echo "Usage: \n"
	@sed -n 's/^##//p' ${MAKEFILE_LIST} | column -t -s ':'

.PHONY: install-tools
## install-tools: installs dependencies for tools
install-tools:
	@echo Installing tools from tools.go
	@cat tools.go | grep _ | awk -F'"' '{print $$2}' | xargs -tI % go install %

.PHONY: lint
## lint: runs buf lint
lint: install-tools
	buf lint

.PHONY: format
## format: runs buf format
format: install-tools
	buf format -w

.PHONY: generate
## generate: generate proto related files
generate: install-tools
	buf generate

.PHONY: regenerate
## regenerate: regenerate proto related files
regenerate: clean generate 

.PHONY: clean
## clean: remove generated proto files
clean:
	rm -rf gen

.PHONY: diff
## diff: prints git diff
diff:
	git diff --exit-code
	if [ -n "$(git status --porcelain)" ]; then git status; exit 1; else exit 0; fi
