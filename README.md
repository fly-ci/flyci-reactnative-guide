# React Native CI with GitHub Actions & FlyCI's macOS Runners

## Project Overview

This project is tightly coupled to the corresponding [guide for building a React Native app with GitHub Actions and FlyCI macOS runners](https://flyci.net/docs/guides/react-native-guide). Please, refer to it for more details.

## Run locally

### Prerequsites

- Follow [this guide](https://reactnative.dev/docs/environment-setup) to configure your environment
- [rbenv](https://github.com/rbenv/rbenv) or [rvm](https://rvm.io/)
- [yarn](https://yarnpkg.com/)

### Build the app

Go to the project folder and run the following steps:

- install ruby
- `yarn install --frozen-lockfile`
- `bundle install`
- `cd ios && bundle exec pod install && cd ../`
- `yarn build-ios` or `yarn build-android` to build the project
- `yarn ios` or `yarn android` to run it

NOTE: For any issues build failing due to Flipper dependency, you might check [this discussion](https://github.com/facebook/react-native/issues/43335).

## License

This project is licensed under the MIT License.
