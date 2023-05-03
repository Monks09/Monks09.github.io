import React from "react";
import { GithubContributions } from "react-github-graph";
import './GithubCalender.css';

function GithubCalender() {
    return <div className="GithubCalender" id="stats">
        <h1 className='section-heading'>DAYS I WORKED</h1>
        <GithubContributions username="Monks09"/>
    </div>
}

export default GithubCalender;