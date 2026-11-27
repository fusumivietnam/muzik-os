import React, {useState} from 'react';
import './mplus.css';

const records = [
  {title:'Blue Hours',artist:'An Linh',year:'1964',style:'blue',tracks:['First Light','Blue Hours','Midnight Walk']},
  {title:'Still Life',artist:'Mai An',year:'1982',style:'gray',tracks:['Still Life','After Rain']},
  {title:'Soft Echoes',artist:'Minh Lam',year:'1975',style:'rust',tracks:['Soft Echoes','Quiet Moments']},
];
const catalog = records.flatMap((record,index)=>[
  {kind:'Artist',title:record.artist,index},
  {kind:'Release',title:record.title,index},
  ...record.tracks.map(title=>({kind:'Recording',title,index}))
]);
function Art({record}) {return <div aria-hidden="true" className={'mp-art mp-art-'+record.style}><span /></div>;}
export default function MPlus() {
  const [page,setPage]=useState('Home');
  const [index,setIndex]=useState(0);
  const [track,setTrack]=useState(records[0].tracks[0]);
  const [query,setQuery]=useState('');
  const [filter,setFilter]=useState('All');
  const [dark,setDark]=useState(false);
  const record=records[index];
  const results=catalog.filter(item=>(filter==='All'||item.kind===filter)&&item.title.toLocaleLowerCase().includes(query.trim().toLocaleLowerCase()));
  function navigate(next,i=index,title){setIndex(i);if(next==='Recording')setTrack(title||records[i].tracks[0]);setPage(next);}
  function open(item){navigate(item.kind,item.index,item.title);}
  return <div className={'mp'+(dark?' mp-dark':'')}>
    <a className="mp-skip" href="#mp-main">Skip to content</a>
    <header className="mp-header"><button className="mp-brand" onClick={()=>navigate('Home')}>muzik.</button><nav aria-label="Prototype navigation">{['Home','Search','Artist','Release'].map(p=><button key={p} aria-current={page===p?'page':undefined} onClick={()=>navigate(p)}>{p==='Home'?'Discover':p}</button>)}</nav><button aria-pressed={dark} onClick={()=>setDark(!dark)}>{dark?'Light':'Dark'}</button></header>
    <main id="mp-main" className="mp-main">
      <p className="mp-note">Design prototype · Fictional catalog · Not verified</p>
      {page==='Home'&&<><section className="mp-hero"><p className="mp-eyebrow">Music discovery &amp; knowledge</p><h1>Discover music.<br/><em>Know its story.</em></h1><p>Explore artists, records and the connections behind the music.</p><form className="mp-search" onSubmit={e=>{e.preventDefault();navigate('Search');}}><label htmlFor="mp-home-search">Search music</label><div><input id="mp-home-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Artists, releases, recordings"/><button type="submit">Search</button></div></form></section><section><h2>Explore the collection</h2><div className="mp-grid">{records.map((r,i)=><article key={r.title}><button className="mp-cover" onClick={()=>navigate('Release',i)} aria-label={'View '+r.title}><Art record={r}/></button><h3><button onClick={()=>navigate('Release',i)}>{r.title}</button></h3><button className="mp-link" onClick={()=>navigate('Artist',i)}>{r.artist}</button><p className="mp-meta">Album · {r.year}</p></article>)}</div></section><section><h2>The music index</h2>{['Artist','Release','Recording'].map(kind=><button key={kind} className="mp-row" onClick={()=>{setFilter(kind);navigate('Search');}}>{kind}s <span aria-hidden="true">↗</span></button>)}</section></>}
      {page==='Search'&&<section><h1>Search music</h1><label htmlFor="mp-search">Find an entity</label><input id="mp-search" value={query} onChange={e=>setQuery(e.target.value)} placeholder="Search fictional catalog"/><div className="mp-tabs" aria-label="Result filters">{['All','Artist','Release','Recording'].map(kind=><button key={kind} aria-pressed={filter===kind} onClick={()=>setFilter(kind)}>{kind}</button>)}</div><p role="status">{results.length} results</p>{results.length===0?<p>No matching entries. Try a different name.</p>:results.map(item=><button key={item.kind+item.index+item.title} className="mp-row" onClick={()=>open(item)}><span>{item.title}<small>{item.kind}</small></span><span aria-hidden="true">↗</span></button>)}</section>}
      {page==='Artist'&&<section><p className="mp-eyebrow">Artist / Profile</p><h1>{record.artist}</h1><p>Fictional artist profile. No sourced biography available in this prototype.</p><h2>Discography</h2><button className="mp-row" onClick={()=>navigate('Release')}><span>{record.title}<small>Album · {record.year}</small></span>↗</button><h2>Credits &amp; sources</h2><p>No real references imported.</p></section>}
      {page==='Release'&&<section><p className="mp-eyebrow">Releases / {record.title}</p><div className="mp-detail"><Art record={record}/><div><p className="mp-eyebrow">Album · {record.year}</p><h1>{record.title}</h1><button className="mp-link" onClick={()=>navigate('Artist')}>{record.artist}</button><p>{record.tracks.length} recordings</p><p className="mp-meta">Official listening links unavailable in fictional catalog.</p></div></div><h2>Tracklist</h2>{record.tracks.map((title,i)=><button key={title} className="mp-row" onClick={()=>navigate('Recording',index,title)}><span>{String(i+1).padStart(2,'0')} · {title}</span>↗</button>)}<h2>Liner notes &amp; credits</h2><p>Contributor roles and provenance belong here. No actual credits or sources imported.</p></section>}
      {page==='Recording'&&<section><p className="mp-eyebrow">Recording / {record.title}</p><h1>{track}</h1><button className="mp-link" onClick={()=>navigate('Artist')}>{record.artist}</button><h2>Appears on</h2><button className="mp-row" onClick={()=>navigate('Release')}>{record.title} ↗</button><h2>Credits &amp; provenance</h2><p>No real credits or sources available.</p></section>}
    </main><footer className="mp-footer"><strong>muzik.</strong><span>Concept review · M+</span></footer>
  </div>;
}
