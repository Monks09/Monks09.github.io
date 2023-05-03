import React from 'react';
import './GithubStats.css';
import GitHubCalendar from 'react-github-calendar';

function GithubStats(props) {
    return (
        <div className='github-stats' id='github-stats'>
            <h1 className='section-heading'>Github Stats</h1>
            <div className='calender-div'>
                <GitHubCalendar username="Monks09" blockMargin={8} blockSize={24} fontSize={18} colorScheme='light' />
            </div>
            <div className="stats-div">
                <div>
                    <img id='github-streak-stats' src="https://github-readme-streak-stats.herokuapp.com/?user=Monks09" alt="stat-1" />
                </div>
                <div>
                    <img id='github-top-langs' src="https://github-readme-stats.vercel.app/api/top-langs?username=Monks09" alt="stat-2" />
                </div>
                <div>
                    <img id='github-stats-card' src="https://github-readme-stats.vercel.app/api?username=Monks09" alt="stat-3" />
                </div>
            </div>
        </div>
    );
}

export default GithubStats;