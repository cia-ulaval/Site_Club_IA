.PHONY: format ci-check

format:
	npm run format

ci-check:
	npm run format:check
