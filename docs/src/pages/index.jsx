import React from 'react';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import snapshot from '../data/roadmap.json';

const repo = 'https://github.com/fusumivietnam/muzik-os';
const modules = ['Home','Search','Artist','Release','Recording','Credits','Provenance','Corrections','Official listening links','Legal & accessibility'];
export default function Hub() {
  return <Layout title="Overview" description="Muzik OS product and delivery overview">
    <main className="hub">
      <header><p className="eyebrow">PRODUCT OVERVIEW</p><h1>Muzik OS</h1><p>Music Discovery &amp; Knowledge Platform</p><Link className="button button--primary" to="/docs/intro">Explore documentation</Link></header>
      <section aria-labelledby="roadmap"><h2 id="roadmap">Delivery roadmap</h2><p>GitHub issue snapshot: {snapshot.generatedAt || 'Not generated yet'}. Open issues do not imply active work; closed issues do not imply deployment.</p>
        <div className="hub-grid">{[['Open', 'open'], ['Closed', 'closed']].map(([label,state]) => <article className="hub-card" key={state}><h3>{label}</h3>{snapshot.issues.filter(i=>i.state===state).map(i=><p key={i.number}><a href={i.url}>#{i.number} · {i.title}</a></p>)}{!snapshot.issues.some(i=>i.state===state)&&<p>No items in snapshot.</p>}</article>)}</div>
        <p><a href={repo+'/issues'}>Live issues</a> · <a href={repo+'/milestones'}>Milestones</a> · <a href={repo+'/projects'}>Projects</a> · <a href={repo+'/actions'}>CI evidence</a></p>
      </section>
      <section aria-labelledby="product"><h2 id="product">Product map</h2><p>Approved MVP scope, not implementation status.</p><div className="hub-grid">{modules.map(name=><article className="hub-card" key={name}><h3>{name}</h3><span>In scope</span></article>)}</div></section>
      <section><h2>Engineering &amp; design</h2><div className="hub-grid"><Link className="hub-card" to="/docs/architecture">Architecture</Link><Link className="hub-card" to="/docs/design">Design as Code</Link></div><p>Public API reference: deferred.</p></section>
    </main>
  </Layout>;
}
