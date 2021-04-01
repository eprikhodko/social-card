import React from 'react'
import '../components/SocialCard.css'
import UserAvatarImage from '../components/user-avatar.jpg'

function SocialCard() {
    return (
        <div className="social-card">
                <UserAvatar />
                <Post />
            </div>
    )
}

function UserAvatar() {
    return (
        <div className="avatar-container">
            <img className="user-avatar" src={UserAvatarImage} alt="user avatar"></img>
        </div>
    )
}

function Post() {
    return (
        <div className="post">
            <PostHeader />
            <PostBody />
            <PostFooter />
        </div>
    )
}

function PostHeader() {
    return (
        <div className="post-header">
            <PostAuthor />
            <PostDate />
            <ButtonMore />
        </div>
    )
}

function PostBody() {
    return (
        <div>🎨Reckon you can turn some boring links into some totally awesome buttons? 🔥

        Give it a go here: 
        
        #WeeklyWebDevChallenge 
        
        https://bit.ly/3cCGRAM</div>
    )
}

function PostFooter() {
    return (
        <div>
            <PostReply />
            <PostRetweet />
            <PostLike />
            <PostShare />
        </div>
    )
}

function PostAuthor() {
    return (
        <p className="post-author">Mr. Whiskerson<span className="post-author-url"> @mr.whiskerson</span></p>
    )
}

function PostDate() {
    return (
        <p className="post-date">Apr 1</p>
    )
}

function ButtonMore() {
    return (
        <button type="button">...</button>
    )
}

function PostReply() {
    return (
        <div>
            <ButtonReply />
            <ReplyCount />
        </div>
    )
}

function PostRetweet() {
    return (
        <div>
            <ButtonRetweet />
            <RetweetCount />
        </div>
    )
}

function PostLike() {
    return (
        <div>
            <ButtonLike />
            <LikeCount />
        </div>
    )
}

function PostShare() {
    return (
        <div>
            <ButtonShare />
            <ShareCount />
        </div>
    ) 
}

function ButtonReply() {
    return (
        <button type="button">Reply button</button>
    )
}

function ReplyCount() {
    return (
        <p>reply count</p>
    )
}

function ButtonRetweet() {
    return (
        <button type="button">Retweet button</button>
    )
}

function RetweetCount() {
    return (
        <p>retweet count</p>
    )
}

function ButtonLike() {
    return (
        <button type="button">Like button</button>
    )
}

function LikeCount() {
    return (
        <p>Like count</p>
    )
}

function ButtonShare() {
    return (
        <button type="button">Share button</button>
    )
}

function ShareCount() {
    return (
        <p>Share count</p>
    )
}

export default SocialCard