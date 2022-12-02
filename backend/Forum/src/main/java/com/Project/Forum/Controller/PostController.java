package com.Project.Forum.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.Project.Forum.Model.Post;
import com.Project.Forum.Service.PostService;

@RestController
@CrossOrigin
@RequestMapping("/")
public class PostController {
	@Autowired
	PostService service;

	@GetMapping("/posts")
	public ResponseEntity<List<Post>> getAllTask() {
		List<Post> lista = service.getAllPosts();
		return new ResponseEntity<>(lista, HttpStatus.OK);
	}

	@GetMapping(value = "/posts/{thread}")
	public ResponseEntity<List<Post>> getPostsByThread(@PathVariable String thread) {
		if (this.service.getPostByThread(thread) == null) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		} else {
			List<Post> lista = service.getPostByThread(thread);
			return new ResponseEntity<>(lista, HttpStatus.OK);
		}
	}
	
	@GetMapping(value = "/posts/{thread}/{title}")
	public ResponseEntity<Post> getPostsByTitle(@PathVariable String thread, @PathVariable String title) {
		if (this.service.getPostByTitle(thread, title) == null) {
			return new ResponseEntity<>(null, HttpStatus.NOT_FOUND);
		} else {
			return new ResponseEntity<>(this.service.getPostByTitle(thread, title), HttpStatus.OK);
		}
	}

	@PostMapping(value = "/posts")
	public Post createTask(@RequestParam(name = "thread") String thread, @RequestParam(name = "title") String title,
			@RequestParam(name = "category") String category, @RequestParam(name = "body") String body,
			@RequestParam(name = "registred") boolean registred) {

		Post post = new Post(thread, title, category, body, registred);

		this.service.insertPost(post);
		return post;
	}

	@DeleteMapping(value = "/posts/{thread}/{title}")
	public void deleteUserByIdenfitication(@PathVariable String thread, @PathVariable String title) {
		this.service.deletePostByThread(thread, title);
	}

	@PutMapping(value = "/posts/{thread}/{title}")
	public Post updateUser(@PathVariable String thread,
			@PathVariable String title,
			@RequestParam(name = "newThread") String newThread,
			@RequestParam(name = "newTitle") String newTitle,
			@RequestParam(name = "category") String category,
			@RequestParam(name = "body") String body,
			@RequestParam(name = "registred") boolean registred) {

		Post post = new Post(newThread, newTitle, category, body, registred);
		this.service.deletePostByThread(thread, title);
		this.service.insertPost(post);
		return post;
	}
}
