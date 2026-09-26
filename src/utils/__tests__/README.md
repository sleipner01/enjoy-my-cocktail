# Persistency tests

## Unit tests

The tests ensure that any favorite toggled, is added and/or removed from the local storage correctly. It is also tested any id can be checked if it is a favorite.

# Test-utils tests

We are not testing the test-utils, but we are testing the components that use the test-utils. The test-utils are used to mock the environemt for rendering in test. Since the test-files using these utils is accepted by the test-runner, we can assume that the test-utils are working as expected.
