# Intro

Hi! I'm Chris. I've been in the tech industry for over a decade, based in Wisconsin, and I've been working remote for the last 9 years. I'm excited to be able to share some of my experience with you today. Giving back through Techtonica has been very fulfilling so I appreciate this opportunity.

My goal today is to give you enough information to form your own opinion on the value of testing. It's another tool for you to use, and like any tool, there are times when it's a good choice, and times when a different tool would serve you better.

# Why

First and foremost, it's a tool that benefits you as a software engineer. If you want to help your team, writing tests is one of the most impactful ways to do that. Since this directly affects your own experience as a developer, it's a good idea during interviews to ask companies what their practices are when it comes to testing. It will give you a good idea how much they value your day-to-day experience.

- Saves time
- Gives confidence

And you're always on a team of at least three: your past self, your present self, and your future self.

The usefulness of tests becomes more apparent as an application becomes older and more complex.

## Demo

For our sample app, imagine whe show a different avatar depending on the user's age. To simplify things, I've added a dropdown to select different users. Notice for the users 21 and over, we enable a new messaging feature, and we show and new messages they have.

At some point down the line, we want to enable this feature for the 18-20 age range. Let's take a look at how we might do that.

Let's start by changing the `Welcome` component to `WelcomeWithUpdates`. Seems like a good first guess.

Instead of running the app and opening a browser, let's run the tests that have been written.

Oops, one of the tests failed. Let's fix our mistake.

# How

Now let's jump into how to test. I'll cover three different types of tests that are complememtary to each other. A good test suite will have a mix of all types of tests.

## Unit tests

First is unit tests. At a minimum, you'll be using Jest for this. Jest runs javascript tests in a simulated browser environment if you're using React, and you can test individual units of functionality, like functions, methods, or simple display components.

### Pros/Cons

### Example

Here we have a function that executes another function that you pass in however many times you specify. Something you'll need to do often when writing tests is mocking. This means creating a fake function or component that you can control directly and inspect more closely. Here we create a mock function that we can check how many times was called.

## Integration tests

These type of tests verify that different functions or components work together. They test the glue code that you've written. For React, we use RTL or react testing library. While it's possible to use it for unit tests, this library intentionally pushes you to write integration tests. Before this, we had Enzyme, which made it easy to write unit tests, but it was more likely that we tested implentation details instead, which meant tests had to be rewritten whenever components were refactored internally. Integration tests written with RLT are more likely to test the end result that a user would see.

### Pros/Cons

### Example

Here's an example test for a login page. It tests the flow that a user can fill in a form and submit it by verifying that the correct message is shown and that the api layer was called with the correct form data.

Here you can clearly see the different sections of a test: setup, act, assert.

## End-to-end tests

Outside the scope of your assignments, but I wanted to mention these tests that are used verify the entire stack of your application by automating a browser. Cypress is one of the more modern tools for writing and running these tests.

### Pros/Cons

# What

Pretty self explanatory, read the bullet points. Then go through the tests written for the demo.

# When

One thing we can track when writing tests is how much coverage your code has. This means, is every piece of your code executed when running the tests. To know when you're done testing, follow the Pareto principle or the 80/20 rule. 80% of the output is generated from 20% of the input. So you can get 80% code coverage by expending 20% of your effort.

# Resources

## Development

- ESLint plugin: helps you learn how to use RTL, points out common mistakes.
- Snippets: very useful when writing tests.
- Runners: don't need to use command line!
- Continuous integration: prevent errors from ever getting merged.
- Videos by Kent C Dodds and Justin Searls. Very insightful folks who spend a lot of time thinking about tests.
