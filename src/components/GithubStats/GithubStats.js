import React from 'react';
import './GithubStats.css';

function GithubStats(props) {
    return (
        <div className='github-stats' id='github-stats'>
            <h1 className='section-heading'>Github Stats</h1>
            <div className="stats-div">
                <div>
                    <img id='github-streak-stats' src="https://camo.githubusercontent.com/61e2257e790c572400238c34bb5853757edb7428a40dc5964d2331b3f4bfc4e7/68747470733a2f2f6769746875622d726561646d652d73747265616b2d73746174732e6865726f6b756170702e636f6d2f3f757365723d6d6f6e6b73303926" alt="stat-1" />
                </div>
                <div>
                    <img id='github-top-langs' src="https://camo.githubusercontent.com/3a9d42ca661c80050d53051532e8f88df8c1a7100012ea3904aba6a939a6a5db/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170692f746f702d6c616e67733f757365726e616d653d6d6f6e6b7330392673686f775f69636f6e733d74727565266c6f63616c653d656e266c61796f75743d636f6d70616374" alt="stat-2" />
                </div>
                <div>
                    <img id='github-stats-card' src="https://camo.githubusercontent.com/724474d6d40f9254eb4af1dcab64e12aec9ce7e1468dbd8d509e8a54eb970e7b/68747470733a2f2f6769746875622d726561646d652d73746174732e76657263656c2e6170702f6170693f757365726e616d653d6d6f6e6b7330392673686f775f69636f6e733d74727565266c6f63616c653d656e" alt="stat-3" />
                </div>
            </div>
        </div>
    );
}

export default GithubStats;