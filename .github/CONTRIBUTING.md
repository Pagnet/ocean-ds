# How to Contribute

:+1::tada: First off, thanks for taking the time to contribute! :tada::+1:

The following is a set of guidelines for contributing to Ocean DS and its packages. Please take a moment to review this document in order to make the contribution process straightforward and effective for everyone involved.

### Table Of Contents

- [Code of Conduct](#code-of-conduct)
- [Issues](#issues)
- [Your First Contribution](#your-first-contribution)
- [Pull Requests](#pull-requests)
- [Setup](#setup)
- [Project Structure](#project-structure)
- [Styleguides](#styleguides)

## Code of Conduct

We adopted a Code of Conduct that we expect project participants to adhere to. Please read [the full text](CODE_OF_CONDUCT.md) so that you can understand what actions will and will not be tolerated.

## Issues

A great way to contribute to the project is to send a detailed report when you encounter an issue. We always appreciate a well-written, thorough bug report, and will thank you for it!

These are the locations to report or find an issue:

- [In the JIRA Board](https://useblu.atlassian.net/jira/software/projects/DSO/boards/79) (restricted :sweat_smile:)
- [Here on Github](https://github.com/ocean-ds/ocean-web/issues) (public :heart_eyes:)

Check that our issue database doesn't already include that problem or suggestion before submitting an issue. If you find a match, you can use the "subscribe" button to get notified on updates. Do not leave random "+1" or "I have this too" comments, as they only clutter the discussion, and don't help resolving it. However, if you have ways to reproduce the issue or have additional information that may help resolving the issue, please leave a comment.

### Security Issues

Blu's staff takes security and privacy issues seriously. If you discover a potential point of failure, please bring it to their attention immediately!

Please DO NOT file a public issue, but rather send your report privately to seguranca@useblu.com.br.

Read more: [SECURITY.md](SECURITY.md)

## Your First Contribution

First of all, you will need to create an [issue](#issues) for the feature or bugfix that you want to work on. When you open a new issue, there will be a template that will be automatically added to the text of the issue, which you would need to fill in. Doing this will help us to understand better what the ticket is about.

Unsure where to begin contributing? You can start by looking through these issues:

- [Good first issues](https://github.com/ocean-ds/ocean-web/issues?q=is%3Aopen+is%3Aissue+label%3A%22good+first+issue%22+sort%3Acomments-desc) - issues which should only require a few lines of code, and a test or two.
- [Help wanted issues](https://github.com/ocean-ds/ocean-web/issues?q=is%3Aopen+is%3Aissue+sort%3Acomments-desc+label%3A%22help+wanted%22) - issues which should be a bit more involved than beginner issues.

### Making Changes

- We adopted [Github Flow](https://guides.github.com/introduction/flow/).
- Assigns the issue to you. Let everyone know that you took that issue to settle.
- Fork the repo and create your branch from master. A guide on how to fork a repository: https://help.github.com/articles/fork-a-repo/
- Make commits of logical and atomic units.
- Submit a pull request.

## Pull Requests

After getting some feedback, push to your fork and submit a pull request. We may suggest some changes, improvements or implementation alternatives.

In case you've got a small change in most of the cases, your pull request would be accepted quicker :wink:.

Please follow these steps to have your contribution considered by the maintainers:

1. Follow all instructions in [the template](PULL_REQUEST_TEMPLATE.md)
2. Follow the [styleguides](#styleguides)
3. After you submit your pull request, verify that all [status checks](https://help.github.com/articles/about-status-checks/) are passing <details><summary>What if the status checks are failing?</summary>If a status check is failing, and you believe that the failure is unrelated to your change, please leave a comment on the pull request explaining why you believe the failure is unrelated. A maintainer will re-run the status check for you. If we conclude that the failure was a false positive, then we will open an issue to track that problem with our status check suite.</details>

While the prerequisites above must be satisfied prior to having your pull request reviewed, the reviewer(s) may ask you to complete additional design work, tests, or other changes before your pull request can be ultimately accepted.

### Code review guidelines

It’s important that every piece of code is reviewed by at least one core contributor familiar with that codebase. Here are some things we look for:

1.  **Required CI checks pass.** This is a prerequisite for the review, and it is the PR author's responsibility. As long as the tests don’t pass, the PR won't get reviewed.
2.  **Simplicity.** Is this the simplest way to achieve the intended goal? If there are too many files, redundant functions, or complex lines of code, suggest a simpler way to do the same thing. In particular, avoid implementing an overly general solution when a simple, small, and pragmatic fix will do.
3.  **Testing.** Do the tests ensure this code won’t break when other stuff changes around it? When it does break, will the tests added help us identify which part of the library has the problem? Did we cover an appropriate set of edge cases? Look at the test coverage report if there is one. Are all significant code paths in the new code exercised at least once?
4.  **No unnecessary or unrelated changes.** PRs shouldn’t come with random formatting changes, especially in unrelated parts of the code. If there is some refactoring that needs to be done, it should be in a separate PR from a bug fix or feature, if possible.
5.  **Code has appropriate comments.** Code should be commented, or written in a clear “self-documenting” way.

## Setup

<details><summary>Prerequisites</summary>
<p>

- Node 14.13.0+ _(if you need other versions we recommend the [node version manager](https://github.com/nvm-sh/nvm))_
- Yarn 1.22.0+ _(required, because of [yarn workspace](https://classic.yarnpkg.com/en/docs/workspaces/))_
- VSCode _(optional, but it's useful because we share common configs and extensions)_

</p>
</details>

```bash
git clone https://github.com/ocean-ds/ocean-web.git # bonus: use your own fork for this step
cd ocean-web
yarn # install dependencies
```

## Project Structure

This is a [monorepo using lerna](https://medium.com/hy-vee-engineering/creating-a-monorepo-with-lerna-yarn-workspaces-cf163908965d); all packages are listed in the `packages/` folder.

There are npm scripts for root level and package level; Both are usually the same, the difference is when you are at the root level you will execute process across all packages.

## Styleguides

### Language

The development language is English. All comments and documentation should be written in English, so we can share our knowledge with developers around the world.

### Commit Message

We adopted [conventional commits](https://www.conventionalcommits.org/en/v1.0.0/#summary). This improves the readability of the git history and generates automatic changelogs via lerna.

- `yarn cm` will guide you adhering to a commit convention.
- There's a [vscode extension](https://marketplace.visualstudio.com/items?itemName=vivaxy.vscode-conventional-commits) to help you.
- Use the present tense ("add xyz" not "added xyz").
- Use the imperative mood ("move cursor to..." not "Moves cursor to...").

### Code Formatting

We use [prettier](https://prettier.io/docs/en/why-prettier.html) to guarantee the same code format in the project.

- `yarn format` will automatically format files with prettier.
- We recommend you to use an [integration to your favorite editor](https://prettier.io/docs/en/editors.html).
- Your code will be automatically formatted when you commit.

### Typescript

We use typescript for package development. Make sure the typings are specific and correct. Use your common sense and follow the style of the surrounding code.

- Use [barrel pattern](https://basarat.gitbook.io/typescript/main-1/barrel) to rollup exports from several modules into a single convenient module.
- If you are familiar with React [click here](https://github.com/typescript-cheatsheets/react) to getting started with Typescript.
- If you want a deep dive into Typescript we suggest you [click here](https://github.com/basarat/typescript-book).

### CSS

- We use `sass` as a preprocessor.
- We adopted [BEM pattern](http://getbem.com/introduction/) pattern to create and organize CSS classes.

### Testing

The code that is written needs to be tested to ensure that it achieves the desired behavior. Tests either fall into a unit test or an integration test.

- We use Jest as our official framework test.
- Use [Testing Library](https://testing-library.com/docs/intro) to test UI components.
- All source files must be 100% coverage with tests.

### Linter

- For `*.ts` we use [eslint](https://eslint.org/) to ensure recommended rules ([tslint is deprecated](https://www.darraghoriordan.com/2020/03/06/upgrade-tslint-deprecated-to-eslint/)).
- For `*.scss` we use [stylelint](https://stylelint.io/) to ensure recommended rules.
- Think carefully if you want to override some rules. Open an issue for discussion first.
- `yarn lint` runs manually the linting rules.

### Documentation

- Use [markdown](https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet) to create project documentation.
- We use Storybook to document our components.
- You must write stories using [MDX format](https://storybook.js.org/docs/react/writing-docs/mdx).
