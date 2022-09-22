import { Octokit, App } from "https://cdn.skypack.dev/octokit";
  const octokit = new Octokit({
auth: "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",
});

console.log(octokit)

async function ghu()
{
 const { data } = await octokit.request("/user");
console.log(data)

document.getElementById("avatar").src=data.avatar_url
document.getElementById("ghu-public-rep").textContent=data.public_repos
document.getElementById("ghu-private-rep").textContent=data.total_private_repos
document.getElementById("ghu-private-gists").textContent=data.private_gists
document.getElementById("ghu-public-gists").textContent=data.public_gists
document.getElementById("ghu-collaborators").textContent=data.collaborators
document.getElementById("ghu-signin").textContent=data.created_at.substring(0,data.created_at.indexOf("T")) 
}

async function ghu_repos()
{
  const { data } = await octokit.request("GET /user/repos",{
    affiliation:"owner"
  });
  console.log(data);
  var repos=document.querySelector(".repos-ctn")
  for (let repo_id in data)
  {
    var repo_div=document.createElement("div")
    repo_div.innerHTML=`
    <h1>${data[repo_id].name}</h1>
    `
    repo_div.classList.add("item")
    repos.appendChild(repo_div)
  }
}

ghu()
ghu_repos()