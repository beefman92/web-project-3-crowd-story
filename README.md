# Crowd-Story Website
## Description
This is project 3 for Web Development course (CS5610) in Northeastern University, Silicon Valley (Spring 2019 semester). Meteor is used for creating this website. In this website, users are able to create a new story or add more materials to an existing story together with other users. All users need to register an account and then login in order to view stories and upvote/downvote archived stories. In addition, users are able to send comments while writing the story and other users who are also writing the stories are able to communite via comments. As administrator, you can add materials in database for new stories.

This project is made by [Yibo Zhao](http://18.144.2.153:8080/) and [Fang Hong](https://sososummer88.github.io/).

## Demo
You can visit our website [here](https://happy-crowd-story.herokuapp.com).

## Feature
For users:
   * Register and login
   * Create new stories
   * Add materials to an existing stories before it finished
   * Upvote and downvote archived stories
   * Chat with other users while writing the stories.
   * Comments barrage
   * Rank archived story according to upvote
   * Visite all archived story & Upvote/Downvote archived story
   
For administrator:
   * Add materials for creating new stories
   
## Design of MongoDB
Collection Name: Story

| column | data type | meaning |
|-------|-----|------|
| _id | string | identification of a story |
| title | string | title of a story |
| start_time | date | start time of a story |
| end_time | date | end time of a story |
| start_sentence | string | First sentence of a story |
| end_sentence | string | Last sentence of a story |
| finished | boolean | mark if the story has finished or not |
| upvote | number | number of upvote of this story |
| downvote | number | number of downvote of this story |

Collection Name: story_content

| column | data type | meaning |
|-------|-----|------|
| _id | ObjectId | id created by MongoID |
| storyId | string | storyID of a story |
| author | string | author of the current comment |
| time | date | create time of this comment |
| content | string | content of a story |
   
Collection Name: users

| column | data type | meaning |
|-------|-----|------|
| _id | ObjectId | id created by Mongodb |
| username | string | registered username |

Collection Name: chat_info

| column | data type | meaning |
|-------|-----|------|
| _id | ObjectId | Id created by MongoDB |
| storyId | string | storyId of a story |
| username | string | username for the comments |
| message | string | message from users |
| time | date | created time of a message |

Collection Name: corpus

| column | data type | meaning |
|-------|-----|------|
| _id | ObjectId | Id created by MongoDB |
| content | string | content of a story |
| time | date | created time of a message |

## Technology
During the development, we utilized following technologies
  * Meteor
  * React
  * MongoDB
  * JQuery
  
## Screenshots
### Homepage
![](screenshots/homepage.png)
### Story Room
![](screenshots/story-room.png)
### Archives Room
![](screenshots/archives-room.png)

## Link to the [Video Demonstration](https://www.youtube.com/watch?v=q5r4chooqbI&t=20s)
https://www.youtube.com/watch?v=q5r4chooqbI&t=20s

## Reference to the class with link:
For more information about the class, please go to this page:
http://johnguerra.co/classes/webDevelopment_spring_2019/

## Slide
[slides](https://docs.google.com/presentation/d/1I2Okq8IEqSEEAi9IlV72KHDsL5982XjAT7hbIb7J0-4/edit#slide=id.p)

## License
This repository is under MIT license.
