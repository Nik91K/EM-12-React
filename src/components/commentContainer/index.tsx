import { useState } from 'react';
import './index.css'
import { ChildrenType } from'../../types/commentPage'
import ButtonText from './textButton/textButton'
import CommentForm from './commentForm/index'

const Comment = (props: ChildrenType) => {
    const [replies, setReplies] = useState<ChildrenType[]>([]);

    const addReply = (id: number, author: string, text: string, date: string) => {
        const newReply: ChildrenType = { id, author, text, date, children: [] };
        setReplies([...replies, newReply]);
    };

    return (
        <div className='comment'>
            <p>{props.id}</p>
            <h2>{props.author}</h2>
            <div className='comment-text'>
                <p>{props.text}</p>
                <p className='comment-date'>{props.date}</p>
            </div>
            {props.children}
            {replies.map((reply, index) => (
                <Comment key={index} {...reply} />
            ))}
            <div className='comment-aswer'>
                <CommentForm onSubmit={addReply} />
                <div>
                    <ButtonText />
                </div>
            </div>
        </div>
    );
};

export default Comment