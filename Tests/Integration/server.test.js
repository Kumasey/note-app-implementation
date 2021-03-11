const express = require('express');
const createServer = require('../../server')
const Post = require('../../app/models/note.model');
const mongoose = require('mongoose');
const supertest = require('supertest');
const dbConfig = require('../../config/database.config');

const app = createServer();

beforeEach((done) => {
    mongoose.connect(dbConfig.url,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => done()
    );
  });

afterEach((done) => {
    mongoose.connection.db.dropDatabase(() => {
      mongoose.connection.close(() => done())
    });
  });

app.use(express.urlencoded({ extended: true }));
mongoose.Promise = global.Promise;

require('../../app/routes/note.routes')(app);

test("GET /notes", async () => {
  const post = await Post.create({
    title: "Demo Note Title",
    content: "Lorem ipsum",
  });

  await supertest(app)
    .get("/notes")
    .expect(200)
    .then((response) => {
      // Check the response type and length
      expect(Array.isArray(response.body)).toBeTruthy();
      expect(response.body.length).toEqual(1);

      // Check the response data
      expect(response.body[0]._id).toBe(post.id);
      expect(response.body[0].title).toBe(post.title);
      expect(response.body[0].content).toBe(post.content);
    });
});

test("GET /notes/:noteId", async () => {
	const post = await Post.create({
		title: "Demo Note Title",
    content: "Get by id",
	})

	await supertest(app)
		.get("/notes/" + post.id)
		.expect(200)
		.then((response) => {
			expect(response.body._id).toBe(post.id)
			expect(response.body.title).toBe(post.title)
			expect(response.body.content).toBe(post.content)
		})
});

test("POST /notes", async () => {
	const data = {
		title: "Demo note title",
		content: "Post a note",
	}

	await supertest(app)
		.post("/notes")
		.send(data)
		.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body._id).toBeTruthy()
			expect(response.body.title).toBe(data.title)
			expect(response.body.content).toBe(data.content)

			// Check the data in the database
			const post = await Post.findOne({ _id: response.body._id })
			expect(post).toBeTruthy()
			expect(post.title).toBe(data.title)
			expect(post.content).toBe(data.content)
		})
})

test("PUT /notes/:noteId", async () => {
	const post = await Post.create({
		title: "Post 1",
		content: "Lorem ipsum",
	})

	const data = {
		title: "New title",
		content: "dolor sit amet",
	}

	await supertest(app)
		.put("/notes/" + post.id)
		.send(data)
		.expect(200)
		.then(async (response) => {
			// Check the response
			expect(response.body._id).toBe(post.id)
			expect(response.body.title).toBe(data.title)
			expect(response.body.content).toBe(data.content)

			// Check the data in the database
			const newPost = await Post.findOne({ _id: response.body._id })
			expect(newPost).toBeTruthy()
			expect(newPost.title).toBe(data.title)
			expect(newPost.content).toBe(data.content)
		})
})

test("DELETE /notes/:noteId", async () => {
	const post = await Post.create({
		title: "Post 1",
		content: "Lorem ipsum",
	})

	await supertest(app)
		.delete("/notes/" + post.id)
		.expect(200)
		.then(async () => {
			expect(await Post.findOne({ _id: post.id })).toBeFalsy()
		})
})