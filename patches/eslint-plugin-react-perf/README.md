# @techsky/eslint-plugin-react-perf

`@techsky/eslint-plugin-react-perf` is a customized version of the [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf) package, enhanced with an `allowList` configuration feature. This patch introduces the capability to specify exceptions for performance rules, effectively extending this functionality beyond native elements to include custom components as well.

## Background

This enhancement was inspired by the discussion and community feedback found in [GitHub issue #43](https://github.com/cvazac/eslint-plugin-react-perf/issues/43) on the original [eslint-plugin-react-perf](https://github.com/cvazac/eslint-plugin-react-perf) repository.

## Warning

As a modified release of an existing [ESLint](https://eslint.org/) plugin, `@techsky/eslint-plugin-react-perf` is designed for the `techsky` development environment. Integrators should verify the extended `allowList` functionality aligns with their project's performance goals and coding standards before adoption.
