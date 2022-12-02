package com.Project.Forum.Model;

import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

public class Post {
	@Id
	@GeneratedValue(strategy = GenerationType.SEQUENCE)
	private String id;

	private String thread;
	private String title;
	private String category;
	private String body;
	private boolean registred;

	public Post(String thread, String title, String category, String body, boolean registred) {
		this.thread = thread;
		this.title = title;
		this.category = category;
		this.body = body;
		this.registred = registred;
	}

	public Post() {
		
	}

	/**
	 * @return the thread
	 */
	public String getThread() {
		return thread;
	}

	/**
	 * @param thread the thread to set
	 */
	public void setThread(String thread) {
		this.thread = thread;
	}

	/**
	 * @return the title
	 */
	public String getTitle() {
		return title;
	}

	/**
	 * @param title the title to set
	 */
	public void setTitle(String title) {
		this.title = title;
	}

	/**
	 * @return the category
	 */
	public String getCategory() {
		return category;
	}

	/**
	 * @param category the category to set
	 */
	public void setCategory(String category) {
		this.category = category;
	}

	/**
	 * @return the body
	 */
	public String getBody() {
		return body;
	}

	/**
	 * @param body the body to set
	 */
	public void setBody(String body) {
		this.body = body;
	}

	/**
	 * @return the registred
	 */
	public boolean isRegistred() {
		return registred;
	}

	/**
	 * @param registred the registred to set
	 */
	public void setRegistred(boolean registred) {
		this.registred = registred;
	}

	/**
	 * @return the id
	 */
	public String getId() {
		return id;
	}

	@Override
	public String toString() {
		return "Forum [id=" + id + ", thread=" + thread + ", title=" + title + ", category=" + category + ", body="
				+ body + ", registred=" + registred + "]";
	}

}
