import React from 'react'
import '../components/SocialCard.css'

function SocialCard() {
    return (
        <div className="social-card">
                <UserPhoto />
                <Post />
            </div>
    )
}

function UserPhoto() {
    return (
        <img className="user-photo" src="" alt="photo of user"></img>
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
        <div>Here goes post text and images and all post        content and more and more</div>
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
        <h3>Mr. Whiskerson</h3>
    )
}

function PostDate() {
    return (
        <p>Apr 1</p>
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