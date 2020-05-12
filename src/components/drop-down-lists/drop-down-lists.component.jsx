import React from "react";

import "./drop-down-lists.styles.scss";

const DropDowns = () => (
    <div>
        <select className="drop-down">
            <option value="N/A" placeholder="Select A Position" />
            <option value="1">Point Guard</option>
            <option value="2">Shooting Point Guard</option>
            <option value="3">Small Forward</option>
            <option value="4">Forward</option>
            <option value="5">Post</option>
        </select>
        <select className="drop-down">
            <option value="N/A" placeholder="Select A Level" />
            <option value="1">Junior Varsity</option>
            <option value="2">Tweener</option>
            <option value="3">Varsity</option>
        </select>
        <select className="drop-down">
            <option value="N/A" placeholder="Select Current Status" />
            <option value="1">Not Contacted</option>
            <option value="2">Shown Interest</option>
            <option value="3">Visited Campus</option>
            <option value="4">Applied</option>
            <option value="5">Deposited</option>
            <option value="6">Commited</option>
        </select>
    </div>
);

export default DropDowns;