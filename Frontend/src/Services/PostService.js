export async function createPost(data) {
  const response = await fetch(
    `http://localhost:8082/posts?thread=${data.thread}&title=${data.title}&category=${data.category}&body=${data.body}&registred=false`,
    {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ team: data }),
    }
  );
  return await response.json();
}
