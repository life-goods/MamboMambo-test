import React from "react";
import Postips from './Postips';
import { postipsData } from '../utils/postips-data';
import '../sass/main.scss';

const GridArea = () => {

    return (
        <div class="grid">
            {postipsData.map(({number, title, content, subContent, link}) => (
                <Postips number={number} title={title} content={content} subContent={subContent} link={link}>
                </Postips>
            ))}
        </div>
    );
}
export default GridArea