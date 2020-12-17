import React from 'react';

import { useVFChain } from '../contexts/vfchain';

function Settings() {
    const vfchain = useVFChain();

    return (
        <div className="container">
            <h1>Settings</h1>
            <br/>

            <div className="form-group">
                <label htmlFor="">Difficulty</label>
                <input
                    type="number"
                    className="form-control"
                    defaultValue={vfchain.difficulty}
                    onChange={(event) => vfchain.difficulty = event.target.value}
                />
            </div>

            <div className="form-group">
                <label htmlFor="">Mining reward</label>
                <input
                    type="number"
                    className="form-control"
                    defaultValue={vfchain.miningReward}
                    onChange={(event) => vfchain.miningReward = event.target.value}
                />
            </div>
        </div>
    );
}

export default Settings;
