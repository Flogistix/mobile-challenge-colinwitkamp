# Flogistix Mobile Challenge

## How to run

### Install Dependencies

```
$ yarn
```

### iOS

```
$ cd ios && pod install
$ cd ..
$ npm run ios
```

### Android

```
$ npm run android
```

## Usage

![screenshot](https://i.ibb.co/CbrcfXx/Simulator-Screen-Shot-i-Phone-11-2021-09-21-at-09-44-07.png)

- Search by id or name
- Click the heart icon for every meteoride to like or unlike.
- The meteorides list(including the liked ones) is saved and loaded automatically. 

## Background
* We have been asked to build a native mobile application that easily allows user to visualize, filter, and understand trends from the Earth Meteorite Landing dataset from NASA:
  * Overview of dataset: https://data.nasa.gov/Space-Science/Meteorite-Landings/gh4g-9sfh
  * Direct link to JSON file: https://data.nasa.gov/resource/y77d-th95.json

## Requirements
* The ability to view the dataset in an organized, sensible way.
* The ability to search for individual meteorites by Name and/or ID.
* The ability to save a list of their favorite meteorites that persists after application termination.
* The application should be written with React Native

## Objectives & Deliverables
* Initial application should run on iOS with code being capable of building for Android with minimal additional code
* Code committed to Github and ready for building
* Build instructions for iOS
* Overview of step for making it Android-ready
* General end-user instructions for using the app 