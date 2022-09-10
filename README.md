# why-test

## Why test?

- Saves your team time.
- Gives your team confidence.

## Types of tests

- Unit test – Jest/RTL
  - Test one function/method/component
  - Least confidence
  - Easiest to write
- Integration test – RTL
  - Test the interactions between layers of your code in a single stack
  - Medium confidence
  - Medium difficulty
- End-to-end test – Cypress
  - Test the entire stack – client, server, database
  - Most confidence
  - Hardest to write

## What to test?

- Unit tests
  - Utility methods
    - Easy input -> output
  - Shared components
    - Different component states
    - Tricky logic
- Integration tests
  - Time-intensive manual tests
  - Data-driven UIs
- E2E tests
  - Critical user flows

## How do I know when I’m done?

- 80/20 rule. After 80% code coverage, your return on investment decreases.

## Resources:

- VSCode plugin
- https://kentcdodds.com/blog/static-vs-unit-vs-integration-vs-e2e-tests
- https://blog.testdouble.com/talks/2015-11-16-how-to-stop-hating-your-tests/

