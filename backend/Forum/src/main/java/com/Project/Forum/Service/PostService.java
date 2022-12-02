package com.Project.Forum.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.Project.Forum.Model.Post;
import com.Project.Forum.Repository.IPostRepository;

@Service
public class PostService {
	@Autowired
	IPostRepository postRepo;

	// GET
	public List<Post> getAllPosts() {
		return postRepo.findAll();
	}

	public List<Post> getPostByThread(String thread) {
		return postRepo.findPostByThread(thread);
	}

	public Post getPostByTitle(String title) {
		return postRepo.findPostByTitle(title);
	}

	// POST
	public void insertPost(Post post) {
		postRepo.insert(post);
	}

	// DELETE
	public void deletePostByThread(String title) {
		postRepo.deletePostByThread(title);
		;
	}

	// PUT
	public void updatePost(Post post) {
		postRepo.save(post);
	}
}
