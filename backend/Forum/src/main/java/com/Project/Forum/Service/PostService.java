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

	public Post getPostByTitle(String thread, String title) {
		return postRepo.findPostByTitle(thread, title);
	}

	// POST
	public void insertPost(Post post) {
		postRepo.insert(post);
	}

	// DELETE
	public void deletePostByThread(String thread, String title) {
		postRepo.deletePostByThread(thread, title);
		;
	}

	// PUT
	public void updatePost(Post post) {
		postRepo.save(post);
	}
}
