package com.Project.Forum.Repository;

import java.util.List;

import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.data.mongodb.repository.Query;

import com.Project.Forum.Model.Post;

public interface IPostRepository extends MongoRepository<Post, String> {
	@Query("{'thread':?0}")
	List<Post> findPostByThread(String thread);

	@Query("{'title': ?0}")
	Post findPostByTitle(String title);

	@Query(value="{'title': ?0}", delete = true)
	void deletePostByThread(String title);

}
