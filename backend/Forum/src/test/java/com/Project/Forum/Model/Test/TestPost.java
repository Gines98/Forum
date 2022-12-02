package com.Project.Forum.Model.Test;

import static org.mockito.BDDMockito.given;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.put;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.model;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.view;

import org.assertj.core.util.Lists;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.WebMvcTest;
import org.springframework.boot.test.mock.mockito.MockBean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.FilterType;
import org.springframework.test.web.servlet.MockMvc;

import com.Project.Forum.Controller.PostController;
import com.Project.Forum.Model.Post;
import com.Project.Forum.Service.PostService;

@WebMvcTest(controllers=PostController.class)
public class TestPost {
	
	private static final String TEST_THREAD = "Test thread";
	private static final String TEST_TITLE = "Test title";
	
	@MockBean
	private PostService postService;
	
	@Autowired
	private MockMvc mockMvc;
	
	@BeforeEach
	void setup() {
		Post post = new Post();
		post.setThread("Test thread");
		post.setTitle("Test title");
		post.setCategory("Test category");
		post.setBody("Test body");
		post.setRegistred(true);
		given(this.postService.getAllPosts()).willReturn(Lists.newArrayList(post));
	}
	
    @Test
	void testfindPosts() throws Exception {
		mockMvc.perform(get("/posts")).andExpect(status().isOk());
	}
    
    @Test
	void testFindPostsByThread() throws Exception {
    	Post post = new Post();
		post.setThread("Test thread");
		post.setTitle("Test title");
		post.setCategory("Test category");
		post.setBody("Test body");
		post.setRegistred(true);
		given(this.postService.getPostByThread(post.getThread())).willReturn(Lists.newArrayList(post));
		
		mockMvc.perform(get("/posts")).andExpect(status().isOk());
	}
    
    @Test
	void testFindPostsByTitle() throws Exception {
    	Post post = new Post();
		post.setThread("Test thread");
		post.setTitle("Test title");
		post.setCategory("Test category");
		post.setBody("Test body");
		post.setRegistred(true);
		given(this.postService.getPostByThread(post.getTitle())).willReturn(Lists.newArrayList(post));
		
		mockMvc.perform(get("/posts")).andExpect(status().isOk());
	}
	
	@Test
	public void testAddPost() throws Exception {
		mockMvc.perform(post("/posts")
					.param("thread", "videogames")
					.param("title", "gow")
					.param("category", "London")
					.param("body", "asdf<sdfas")
					.param("registred", "true"))
				.andExpect(status().isOk());
	}
	
	@Test
	public void testAddWrongPost() throws Exception {
		mockMvc.perform(post("/posts")
					.param("thread", "videogames")
					.param("title", "gow")
					.param("category", "London")
					.param("body", "asdf<sdfas"))
				.andExpect(status().is4xxClientError());
	}
	
}
