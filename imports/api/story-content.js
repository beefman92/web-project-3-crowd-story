import { Meteor } from "meteor/meteor";
import { Mongo } from "meteor/mongo";
import { check } from "meteor/check";

import { StoryMeta } from "./story-meta";

// build the connected database of story-content
export const StoryContent = new Mongo.Collection("story_content");

if (Meteor.isServer) {
	Meteor.publish("storyContent", function getStoryContent(storyId) {
		return StoryContent.find(
			{storyId: storyId},
			{sort: {time: 1}});
	});
}

//method to insert data into story-content table
Meteor.methods({
	"storyContent.insert"(content, storyId, endSentence) {
		check(content, String);
		check(storyId, String);
		check(endSentence, String);

		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		if (Meteor.isServer) {
			if (content === endSentence) {
				StoryMeta.update({_id: storyId}, {$set: {finished: true}});
			}
			StoryContent.insert({
				content: content,
				storyId: storyId,
				author: Meteor.user().username,
				time: new Date(),
			});
		} else {
			StoryContent.insert({
				content: content,
				storyId: storyId,
				author: Meteor.user().username,
				time: new Date(),
			});
		}
	},
	"storyContent.delete"(id) {
		StoryContent.remove({_id: id});
	},
	"storyContent.get"(id) {
		check(id, String);
		if (! Meteor.userId()) {
			throw new Meteor.Error("not-authorized");
		}
		return StoryContent.find({storyId: id}, {sort: {time: 1}}).fetch();
	}
});