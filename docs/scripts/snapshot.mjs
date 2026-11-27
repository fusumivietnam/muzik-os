import {writeFile} from 'node:fs/promises';
const base = 'https://api.github.com/repos/fusumivietnam/muzik-os/issues';
const issues = [];
for(let page=1;;page++){
 const response=await fetch(base+'?state=all&per_page=100&page='+page,{headers:{Accept:'application/vnd.github+json',...(process.env.GITHUB_TOKEN?{Authorization:'Bearer '+process.env.GITHUB_TOKEN}:{})}});
 if(!response.ok) throw new Error('GitHub issue snapshot HTTP '+response.status);
 const batch=await response.json();
 if(!Array.isArray(batch)) throw new Error('Invalid issue response');
 for(const i of batch) if(!i.pull_request) issues.push({number:i.number,title:i.title,state:i.state,url:i.html_url});
 if(batch.length<100) break;
}
await writeFile(new URL('../src/data/roadmap.json',import.meta.url),JSON.stringify({generatedAt:new Date().toISOString(),issues},null,2)+'\n');
