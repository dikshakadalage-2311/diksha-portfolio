"use client";
import { useEffect, useState } from "react";

const L={
  li:"https://www.linkedin.com/in/diksha-kadalage-857056396?utm_source=share_via&utm_content=profile&utm_medium=member_android",
  gh:"https://github.com/dikshakadalage-2311",
  mail:"mailto:dikshakadalage@gmail.com",
  tel:"tel:+919016993156",
  cv:"/Diksha_Kadalage_CV.pdf",
};
const skills={
  "Programming Languages":["C","C++","Python","JavaScript"],
  "Frontend Development":["HTML","CSS","JavaScript","Bootstrap"],
  "Mobile App Development":["Flutter"],
  "Design & Dev Tools":["Figma","Lovable"],
};
const jobs=[
  {file:"dhoondh.js",role:"Frontend Developer Intern",org:"DHOONDH",time:"15 Days",pts:[
    "Website 1 (Live): Recruitment company website introducing its services to job seekers and employers. Developed the frontend and UI.",
    "Website 2 (Live): Marketing company website presenting its services to prospective clients. Built the frontend and implemented the UI.",
    "Website 3 (Live): Mechanical company website showcasing the company to customers. Created the frontend and user interface.",
    "Website 4: Advisory firm website presenting its services to prospective clients. Developed the frontend and UI.",
    "Application (Live): Contributed to the frontend of an app for renting items.",
    "Tools Used: Figma, Lovable, Bootstrap, HTML, CSS, JavaScript (websites); Flutter (application)."]},
  {file:"atl.js",role:"ATL Intern",org:"Atal Tinkering Labs",time:"2 Months",pts:[
    "Visited schools and reviewed real-life projects developed by school students.",
    "Evaluated student projects by identifying their advantages, disadvantages and practical applications.",
    "Guided students on improvements to project functionality, design and effectiveness.",
    "Gave constructive feedback to help students refine ideas and develop better real-world solutions."]},
];
const projects=[
  {name:"RAG Document Q&A Bot",url:"https://github.com/dikshakadalage-2311/rag-document-bot",
   stack:["Python","Streamlit","LangChain","Sentence Transformers","PyPDF","Google Gemini API"],
   pts:["Built a Retrieval-Augmented Generation (RAG) bot that answers questions from users' documents.","Retrieved relevant document sections for each question and used them as context for grounded answers.","Implemented the Q&A flow so users get context-based answers without manual searching."]},
  {name:"Spam Email Classifier",url:"https://github.com/dikshakadalage-2311/spam-email-classifier",
   stack:["Python","Pandas","NumPy","Scikit-learn","NLTK","Jupyter / Streamlit"],
   pts:["Developed a machine learning classifier that labels email messages as spam or legitimate.","Trained the model to learn patterns in email text that separate spam from legitimate messages.","Used the trained model to classify new emails, helping filter unwanted messages automatically."]},
];
const A=({href,children})=><a href={href} target="_blank" rel="noopener noreferrer">{children}</a>;

function useType(text,speed=55){
  const[s,set]=useState("");
  useEffect(()=>{let i=0;const t=setInterval(()=>{set(text.slice(0,++i));if(i>=text.length)clearInterval(t)},speed);return()=>clearInterval(t)},[text,speed]);
  return s;
}

function Terminal(){
  const[h,setH]=useState([{c:"welcome",o:"Type 'help' to explore, or click a command below."}]);
  const[v,setV]=useState("");
  const out={
    help:"Commands: about, skills, projects, contact, cv, clear",
    about:"Computer Engineering student building practical, user-focused frontend and ML projects.",
    skills:Object.values(skills).flat().filter((x,i,a)=>a.indexOf(x)===i).join(" | "),
    projects:<>{projects.map(p=><div key={p.name}>→ <A href={p.url}>{p.name}</A></div>)}</>,
    contact:<><div>Email: <A href={L.mail}>dikshakadalage@gmail.com</A></div><div>Phone: <A href={L.tel}>+91 9016993156</A></div><div>LinkedIn: <A href={L.li}>diksha-kadalage</A></div><div>GitHub: <A href={L.gh}>dikshakadalage-2311</A></div></>,
    cv:<>Download: <a href={L.cv} download>Diksha_Kadalage_CV.pdf</a></>,
  };
  const run=c=>{const k=c.trim().toLowerCase();if(!k)return;if(k==="clear")return setH([]);setH(x=>[...x,{c:k,o:out[k]||`command not found: ${k}`}])};
  return(
    <div className="term">
      <div className="bar"><i/><i/><i/><span>diksha@portfolio:~</span></div>
      <div className="body">
        {h.map((x,i)=><div key={i}><div><b>❯</b> {x.c}</div><div className="o">{x.o}</div></div>)}
        <form onSubmit={e=>{e.preventDefault();run(v);setV("")}}><b>❯</b> <input value={v} onChange={e=>setV(e.target.value)} placeholder="type a command..." aria-label="terminal input"/></form>
        <div className="chips">{Object.keys(out).concat("clear").map(k=><button key={k} onClick={()=>run(k)}>{k}</button>)}</div>
      </div>
    </div>
  );
}

function Tilt({children,className=""}){
  const mv=e=>{const r=e.currentTarget.getBoundingClientRect();const x=(e.clientX-r.left)/r.width-.5,y=(e.clientY-r.top)/r.height-.5;e.currentTarget.style.transform=`perspective(800px) rotateX(${-y*8}deg) rotateY(${x*8}deg)`};
  return <div className={"card "+className} onMouseMove={mv} onMouseLeave={e=>e.currentTarget.style.transform=""}>{children}</div>;
}

function Mind(){
  const[f,setF]=useState({name:"",email:"",msg:""});const[sent,setSent]=useState(false);
  const up=k=>e=>setF({...f,[k]:e.target.value});
  const submit=e=>{e.preventDefault();
    const body=`${f.msg}\n\n— ${f.name} (${f.email})`;
    window.location.href=`mailto:dikshakadalage@gmail.com?subject=${encodeURIComponent("Portfolio message from "+f.name)}&body=${encodeURIComponent(body)}`;
    setSent(true)};
  return(
    <form className="mind" onSubmit={submit}>
      <input required placeholder="Your name" value={f.name} onChange={up("name")}/>
      <input required type="email" placeholder="Your email" value={f.email} onChange={up("email")}/>
      <textarea required rows={5} placeholder="Share an idea, a project, or just say hi..." value={f.msg} onChange={up("msg")}/>
      <button className="btn" type="submit">Send Message →</button>
      {sent&&<p className="dim">Your email app should open with the message ready to send. Thank you!</p>}
    </form>
  );
}

export default function Home(){
  const role=useType("Frontend Developer · AI Engineer · ML Enthusiast");
  useEffect(()=>{const m=e=>{document.documentElement.style.setProperty("--x",e.clientX+"px");document.documentElement.style.setProperty("--y",e.clientY+"px")};window.addEventListener("mousemove",m);return()=>window.removeEventListener("mousemove",m)},[]);
  return(<>
    <div className="glow"/>
    <nav><span className="logo">&lt;DK /&gt;</span>
      <div>{["about","skills","experience","projects","contact"].map(s=><a key={s} href={"#"+s}>{s}</a>)}<a className="btn sm" href={L.cv} download>CV ↓</a></div></nav>

    <header className="hero">
      <div>
        <p className="mono dim">// hello world</p>
        <h1>I'm <span className="grad">Diksha Kadalage</span></h1>
        <h2 className="mono">{role}<span className="caret">▍</span></h2>
        <p className="lead">Computer Engineering student with hands-on frontend experience from an internship at DHOONDH, where I contributed to four websites (three live) and one live application.</p>
        <div className="row"><a className="btn" href={L.cv} download>Download CV</a><a className="btn ghost" href="#projects">View Projects</a><A href={L.gh}><span className="btn ghost">GitHub</span></A></div>
      </div>
      <Terminal/>
    </header>

    <section id="about"><h3 className="sec"><span>01</span>About Me</h3>
      <p className="lead2">Computer Engineering student with hands-on frontend development experience from an internship at DHOONDH, where I contributed to four websites (three live) and one live application. Skilled in C, C++, Python, HTML, CSS and JavaScript, with practical projects in document-based question answering and spam email classification. Seeking an entry-level role in frontend, web or software development to build practical, user-focused solutions.</p>
      <div className="grid">
        <Tilt><p className="dim">Computer Engineering (Pursuing)</p><h4>Vadodara Institute of Engineering</h4><div className="stat">CGPA 7.93</div></Tilt>
        <Tilt><p className="dim">Class XII · 2023</p><h4>Kendriya Vidyalaya AFS No. 3</h4><div className="stat">62.8%</div></Tilt>
        <Tilt><p className="dim">Class X · 2021</p><h4>Kendriya Vidyalaya AFS No. 3</h4><div className="stat">79%</div></Tilt>
      </div>
    </section>

    <section id="skills"><h3 className="sec"><span>02</span>Skills</h3>
      <div className="grid">{Object.entries(skills).map(([k,v])=><Tilt key={k}><h4>{k}</h4><div className="tags">{v.map(s=><span key={s}>{s}</span>)}</div></Tilt>)}</div>
    </section>

    <section id="experience"><h3 className="sec"><span>03</span>Experience</h3>
      <div className="stack">{jobs.map(x=>
        <Tilt key={x.file}><h4>{x.role} <span className="dim">@ {x.org}</span><em className="when">{x.time}</em></h4>
          <ul>{x.pts.map(q=><li key={q}>{q}</li>)}</ul></Tilt>)}</div>
    </section>

    <section id="projects"><h3 className="sec"><span>04</span>Projects</h3>
      <div className="grid two">{projects.map(p=>
        <Tilt key={p.name}><h4>{p.name}</h4>
          <div className="tags">{p.stack.map(s=><span key={s}>{s}</span>)}</div>
          <ul>{p.pts.map(x=><li key={x}>{x}</li>)}</ul>
          <a className="btn ghost sm2" href={p.url} target="_blank" rel="noopener noreferrer">View on GitHub ↗</a></Tilt>)}</div>
    </section>

    <section id="contact"><h3 className="sec"><span>05</span>Contact</h3>
      <div className="grid">
        <Tilt><h4>Email</h4><A href={L.mail}>dikshakadalage@gmail.com</A></Tilt>
        <Tilt><h4>Phone</h4><a href={L.tel}>+91 9016993156</a></Tilt>
        <Tilt><h4>LinkedIn</h4><A href={L.li}>diksha-kadalage</A></Tilt>
        <Tilt><h4>GitHub</h4><A href={L.gh}>dikshakadalage-2311</A></Tilt>
      </div>
      <p style={{textAlign:"center",marginTop:32}}><a className="btn" href={L.cv} download>Download CV</a></p>
    </section>
    <section id="mind"><h3 className="sec"><span>06</span>What's on your mind?</h3>
      <p className="lead2" style={{fontSize:"1rem"}}>Have an idea, an opportunity or a question? Write it here and it lands straight in my inbox.</p>
      <Mind/>
    </section>
    <footer className="mono dim">© 2026 Diksha Kadalage · built with Next.js &amp; React</footer>
  </>);
}
