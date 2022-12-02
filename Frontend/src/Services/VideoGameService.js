export async function getAllVideoGamePosts() {
  const API_URL = "http://localhost:8082/posts/videogames";
  try {
    const response = await fetch(API_URL);
    const data = await response.json();
    return data;
  } catch (error) {
    return error;
  }
}

// export async function removeTask(task, team) {
//   //http://localhost:8081/API/3sumAPI/teams/5?newTeamNumber=13&name=Cambiado&points=45&bootcampId=1&tasks=2,5,4,7
//   //console.log(team.tasks);
//   const response = await fetch(
//     `/API/3sumAPI/teams/${team.teamNumber}?newTeamNumber=${
//       team.teamNumber
//     }&name=${team.name}&points=${team.points}&bootcampId=${
//       team.bootcampId
//     }&tasks=${team.tasks.filter((task2) => task2 !== task)}`,
//     {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ team: team }),
//     }
//   );
//   return await response.json();
// }

// export async function getTeamById(team) {
//   try {
//     const response = await fetch(`/API/3sumAPI/teams/${team}`);
//     return await response.json();
//   } catch (error) {
//     return [];
//   }
// }

// export async function createTeam(data) {
//   const response = await fetch(
//     `/API/3sumAPI/teams?teamNumber=${data.teamNumber}&name=${data.name}&points=${data.points}&bootcampId=${data.bootcampId}&tasks=`,
//     {
//       method: "POST",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ team: data }),
//     }
//   );
//   return await response.json();
// }

// function tasks(tasks) {
//   var cadena = "";
//   console.log(tasks);
//   for (let i = 0; i < tasks.length; i++) {
//     console.log(tasks[i]);
//     cadena += tasks[i].toString() + ",";
//   }
//   console.log(cadena);
//   return cadena.slice(0, -1);
// }

// export async function updateTeam(data, oldTeamNumber) {
//   const response = await fetch(
//     `/API/3sumAPI/teams/${oldTeamNumber}?newTeamNumber=${
//       data.teamNumber
//     }&name=${data.name}&points=${data.points}&bootcampId=${
//       data.bootcampId
//     }&tasks=${tasks(data.tasks)}`,
//     {
//       method: "PUT",
//       headers: { "Content-Type": "application/json" },
//       body: JSON.stringify({ team: data }),
//     }
//   );
//   return await response.json();
// }

// export async function deleteTeam(teamNumber) {
//   const response = await fetch(`/API/3sumAPI/teams/${teamNumber}`, {
//     method: "DELETE",
//     headers: { "Content-Type": "application/json" },
//   });
//   return await response.json();
// }
